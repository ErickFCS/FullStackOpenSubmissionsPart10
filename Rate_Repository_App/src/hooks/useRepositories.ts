import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/querys';

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

const USE_FETCH = false;

const useRepositories = () => {
    const [repositories, setRepositories] = useState<Repo[]>([]);

    if (USE_FETCH) {
        const [loading, setLoading] = useState(false);
        const fetchRepositories = async () => {
            setLoading(true);
            const res = await fetch('http://192.168.1.42:5000/api/repositories');
            const rawData: Res = await res.json();
            const data = rawData.edges.map((e) => (e.node));
            setRepositories(data);
            setLoading(false);
            setRepositories(data);
        };
        useEffect(() => {
            fetchRepositories();
        }, []);
        return { repositories, loading, refetch: fetchRepositories };
    } else {
        const repos = useQuery(GET_REPOSITORIES, {
            fetchPolicy: 'cache-and-network',
            onCompleted(data) {
                setRepositories(data.repositories?.edges?.map((e) => (e.node)));
            },
        });
        return { ...repos, repositories };
    }
};

export default useRepositories;