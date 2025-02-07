import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useEffect, useState } from 'react';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    list: {
        paddingHorizontal: 10,
    }
});

const repositoriesM = [
    {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1589,
        stargazersCount: 21553,
        ratingAverage: 88,
        reviewCount: 4,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
    },
    {
        id: 'rails.rails',
        fullName: 'rails/rails',
        description: 'Ruby on Rails',
        language: 'Ruby',
        forksCount: 18349,
        stargazersCount: 45377,
        ratingAverage: 100,
        reviewCount: 2,
        ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
    },
    {
        id: 'django.django',
        fullName: 'django/django',
        description: 'The Web framework for perfectionists with deadlines.',
        language: 'Python',
        forksCount: 21015,
        stargazersCount: 48496,
        ratingAverage: 73,
        reviewCount: 5,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
    },
    {
        id: 'reduxjs.redux',
        fullName: 'reduxjs/redux',
        description: 'Predictable state container for JavaScript apps',
        language: 'TypeScript',
        forksCount: 13902,
        stargazersCount: 52869,
        ratingAverage: 0,
        reviewCount: 0,
        ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
    },
];

interface Repo {
    id: string;
    name: string;
    ownerName: string;
    createdAt: string;
    fullName: string;
    description: string;
    language: string;
    forksCount: number;
    stargazersCount: number;
    ratingAverage: number;
    reviewCount: number;
    ownerAvatarUrl: string;
};

interface Res {
    totalCount: number;
    edges: {
        node: Repo;
        cursor: string;
    }[]
    pageInfo: {
        hasNextPage: number;
        hasPreviousPage: number;
        startCursor: string;
        endCursor: string;
    }
}

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const [repositories, setRepositories] = useState<Repo[]>(repositoriesM as Repo[])

    useEffect(() => {
        fetch('http://192.168.1.42:5000/api/repositories', {
            method: 'GET',
        })
            .then(async (res) => {
                const rawData: Res = await res.json();
                const data = rawData.edges.map((e) => (e.node));
                setRepositories(data);
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return (
        <FlatList
            style={styles.list}
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (<RepositoryItem {...item} />)}
            keyExtractor={(item) => (item.id)}
        />
    );
};

export default RepositoryList;