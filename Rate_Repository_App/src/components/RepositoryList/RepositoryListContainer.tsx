import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

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
    return (
        <FlatList
            style={styles.list}
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (<RepositoryItem {...item} />)}
            keyExtractor={(item) => (item.id)}
        />
    );
}

export default RepositoryListContainer;