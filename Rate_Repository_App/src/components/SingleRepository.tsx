import { FlatList, View } from 'react-native';
import { GET_REPOSITORY } from '../graphql/querys';
import { Review, RepoWithURL } from '../types';
import { Text } from './Text';
import { useQuery } from '@apollo/client';
import RepositoryItem from './RepositoryList/RepositoryItem';
import ReviewItem from './ReviewList/ReviewItem';
import styles from '../styles';


interface RawRepository {
    repository: RepoWithURL & {
        reviews: {
            edges: {
                node: Review;
            }[];
        }
    };
}

const SingleRepository = ({ repoId }: { repoId: string }) => {
    const rawRepository = useQuery<RawRepository>(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: {
            repositoryId: repoId
        }
    });

    const reviews = rawRepository.data?.repository.reviews.edges.map((e) => (e.node));
    const repository = rawRepository.data?.repository;

    return (
        <FlatList
            style={styles.globalList}
            ListHeaderComponentStyle={{ marginBottom: 10 }}
            ListFooterComponentStyle={{ marginBottom: 20 }}
            ListHeaderComponent={<RepositoryItem {...repository} />}
            ListFooterComponent={<View />}
            ListEmptyComponent={
                rawRepository.loading
                    ?
                    <Text style={styles.globalInfoText}>Loading...</Text>
                    :
                    <Text style={styles.globalInfoText}>No reviews yet</Text>
            }
            refreshing={rawRepository.loading}
            onRefresh={() => { rawRepository.refetch() }}
            ItemSeparatorComponent={() => <View style={styles.globalSeparator} />}
            keyExtractor={({ id }) => id}
            data={reviews}
            renderItem={({ item }) => <ReviewItem {...item} />}
        />
    );
};

export default SingleRepository;