import { FlatList, View, Pressable, TextInput } from 'react-native';
import { FullRepo, Sort, SearchFilter } from '../../types';
import { Picker } from '@react-native-picker/picker';
import { Text } from '../Text';
import { useDebouncedCallback } from 'use-debounce';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import RepositoryItem from './RepositoryItem';
import styles from '../../styles';
import theme from '../../theme';

const latestRepositories: Sort = {
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC'
}
const highestRatedRepositories: Sort = {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'DESC'
}
const lowestRatedRepositories: Sort = {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'ASC'
}

const ListHeaderComponent = ({ handleChange, selectedOrder, setSearchKeywordRaw }) => {
    return (
        <View>
            <TextInput
                style={styles.repositorySearchBox}
                placeholderTextColor={theme.colors.InfoTextEmphasis}
                placeholder='Search here'
                onChangeText={(e) => { setSearchKeywordRaw(e) }}
            />
            <Text style={styles.globalInfoText}>Rate Repository Application</Text>
            <Picker
                style={styles.repositoryPicker}
                dropdownIconColor={theme.colors.BodyColor}
                mode='dialog'
                selectedValue={selectedOrder}
                onValueChange={handleChange}>
                <Picker.Item enabled={false} label="Select an option" value={null} />
                <Picker.Item label="Latest repositories" value={latestRepositories} />
                <Picker.Item label="Highest rated repositories" value={highestRatedRepositories} />
                <Picker.Item label="Lowest rated repositories" value={lowestRatedRepositories} />
            </Picker >
        </View>
    );
}

interface PropType {
    repositories: FullRepo[];
    handleRefresh(variables: SearchFilter): void;
    refreshing: boolean;
    handleEndReached(): void;
}

const RepositoryListContainer = ({ repositories, handleRefresh, refreshing, handleEndReached }: PropType) => {
    const navigate = useNavigate();
    const [selectedOrder, setSelectedOrder] = useState<Sort>(latestRepositories);
    const setSearchKeywordRaw = useDebouncedCallback((searchKeyword) => {
        console.log(searchKeyword);
        handleRefresh({
            ...selectedOrder,
            searchKeyword: searchKeyword
        });
    }, 500);

    const handleChange = (value) => {
        setSelectedOrder(value);
        handleRefresh(value);
    }

    return (
        <FlatList
            style={styles.globalList}
            ListHeaderComponentStyle={{ marginBottom: 10 }}
            ListFooterComponentStyle={{ marginBottom: 20 }}
            ListHeaderComponent={<ListHeaderComponent
                handleChange={handleChange}
                selectedOrder={selectedOrder}
                setSearchKeywordRaw={setSearchKeywordRaw}
            />}
            ListFooterComponent={<View />}
            ListEmptyComponent={
                refreshing
                    ?
                    <Text style={styles.globalInfoText}>Loading...</Text>
                    :
                    <Text style={styles.globalInfoText}>No repositories yet</Text>
            }
            refreshing={refreshing}
            onRefresh={() => { handleRefresh(selectedOrder) }}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5}
            ItemSeparatorComponent={() => <View style={styles.globalSeparator} />}
            keyExtractor={(item) => (item.id)}
            data={!refreshing && repositories}
            renderItem={({ item }) => (
                <Pressable onPress={() => { navigate(`/repository/${item.id}`); }}>
                    <RepositoryItem {...item} url={null} />
                </Pressable>
            )}
        />
    );
};

export default RepositoryListContainer;