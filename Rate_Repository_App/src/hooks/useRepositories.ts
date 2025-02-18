import { FullRepo } from '../types';
import { GET_REPOSITORIES } from '../graphql/querys';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

interface RawRepositories {
    repositories: {
        edges: {
            node: FullRepo;
        }[]
    }
}

const useRepositories = () => {
    const [repositories, setRepositories] = useState<FullRepo[]>([]);

    const repos = useQuery<RawRepositories>(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        onCompleted(data) {
            setRepositories(data.repositories?.edges.map((e) => (e.node)));
        },
    });

    return { ...repos, repositories };
};

export default useRepositories;