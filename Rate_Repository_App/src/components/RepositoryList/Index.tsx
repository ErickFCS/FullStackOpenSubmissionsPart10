import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';
import { SearchFilter } from '../../types';

const RepositoryList = () => {
    const repositories = useRepositories();

    // const handleRefresh = (variables: Sort) => {

    // }

    return (
        <RepositoryListContainer
            repositories={repositories.repositories}
            handleRefresh={(variables: SearchFilter) => { repositories.refetch(variables) }}
            refreshing={repositories.loading}
        />
    );
};

export default RepositoryList;