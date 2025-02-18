import { FlatList, View, Pressable } from 'react-native';
import { FullRepo } from '../../types';
import { Picker } from '@react-native-picker/picker';
import { Text } from '../Text';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import RepositoryItem from './RepositoryItem';
import styles from '../../styles';
import theme from '../../theme';

export interface Sort {
    orderBy: 'CREATED_AT' | 'RATING_AVERAGE';
    orderDirection: 'DESC' | 'ASC';
}

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

const ListHeaderComponent = ({ handleChange, selectedOrder }) => {
    return (
        <View>
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
    repositories: FullRepo[],
    handleRefresh(variables: Sort): void,
    refreshing: boolean
}

const RepositoryListContainer = ({ repositories, handleRefresh, refreshing, }: PropType) => {
    const navigate = useNavigate();
    const [selectedOrder, setSelectedOrder] = useState<Sort>(latestRepositories);

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