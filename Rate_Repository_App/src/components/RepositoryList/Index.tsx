import { StyleSheet } from 'react-native';
import { Text } from '../Text';
import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
    loadingText: {
        paddingHorizontal: 10,
        width: '100%',
        textAlign: 'center',
    }
});

const RepositoryList = () => {
    const repositories = useRepositories();

    if (repositories.loading) return (
        <Text style={styles.loadingText}>...Loading</Text>
    )
    return <RepositoryListContainer repositories={repositories.repositories} />;
};

export default RepositoryList;