import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';
import { SearchFilter } from '../../types';

const RepositoryList = () => {
    const repositories = useRepositories();

    return (
        <RepositoryListContainer
            repositories={repositories.repositories}
            handleRefresh={(variables: SearchFilter) => { repositories.refetch(variables) }}
            refreshing={repositories.loading}
            handleEndReached={() =>{ repositories.fetchMore()}}
        />
    );
};

export default RepositoryList;