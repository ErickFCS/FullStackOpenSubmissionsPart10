import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useEffect, useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import { Text } from './Text';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    list: {
        paddingHorizontal: 10,
    },
    loadingText: {
        paddingHorizontal: 10,
        width: '100%',
        textAlign: 'center',
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const repositories = useRepositories()

    if (repositories.loading) return (
        <Text style={styles.loadingText}>...Loading</Text>
    )
    return (
        <FlatList
            style={styles.list}
            data={repositories.repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (<RepositoryItem {...item} />)}
            keyExtractor={(item) => (item.id)}
        />
    );
};

export default RepositoryList;