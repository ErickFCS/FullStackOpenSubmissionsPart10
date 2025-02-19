import { FullRepo } from '../types';
import { GET_REPOSITORIES } from '../graphql/querys';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

interface RawRepositories {
    repositories: {
        edges: {
            node: FullRepo;
        }[];
        pageInfo: {
            endCursor: string;
            hasNextPage: boolean;
        }
    }
}

const useRepositories = () => {
    const [repositories, setRepositories] = useState<FullRepo[]>([]);

    const repos = useQuery<RawRepositories>(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: {
            first: 3
        },
        onCompleted(data) {
            setRepositories(data.repositories?.edges.map((e) => (e.node)));
        },
    });

    const fetchMore = async () => {
        const canContinue = !repos.loading && repos.data?.repositories.pageInfo.hasNextPage;
        if (!canContinue)
            return false;
        const rawNewRepos = await repos.fetchMore({
            variables: {
                after: repos.data.repositories.pageInfo.endCursor
            }
        });
        const newRepos = rawNewRepos.data?.repositories?.edges.map((e) => (e.node));
        setRepositories(repositories.concat(newRepos));
        return true;
    }

    return { ...repos, repositories, fetchMore };
};

export default useRepositories;