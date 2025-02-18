import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';
import { Sort } from './RepositoryListContainer';

const RepositoryList = () => {
    const repositories = useRepositories();
    
    return (
        <RepositoryListContainer
            repositories={repositories.repositories}
            handleRefresh={(variables: Sort) => { repositories.refetch(variables) }}
            refreshing={repositories.loading}
        />
    );
};

export default RepositoryList;