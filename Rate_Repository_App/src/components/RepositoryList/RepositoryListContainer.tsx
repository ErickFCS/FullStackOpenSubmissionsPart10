import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    list: {
        paddingHorizontal: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
    const navigate = useNavigate();
    return (
        <FlatList
            style={styles.list}
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                <Pressable onPress={() => { navigate(`/repository/${item.id}`) }}>
                    <RepositoryItem {...item} url={null} />
                </Pressable>
            )}
            keyExtractor={(item) => (item.id)}
        />
    );
}

export default RepositoryListContainer;