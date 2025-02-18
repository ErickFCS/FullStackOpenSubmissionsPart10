import { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import { FullRepo } from '../types';

interface Res {
    totalCount: number;
    edges: {
        node: FullRepo;
        cursor: string;
    }[]
    pageInfo: {
        hasNextPage: number;
        hasPreviousPage: number;
        startCursor: string;
        endCursor: string;
    }
}

const useRepositoriesWithFetch = () => {
    const [repositories, setRepositories] = useState<FullRepo[]>([]);
    const [loading, setLoading] = useState(false);
    const fetchRepositories = async () => {
        setLoading(true);
        const res = await fetch(Constants.expoConfig.extra.REST_URI);
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
};

export default useRepositoriesWithFetch;