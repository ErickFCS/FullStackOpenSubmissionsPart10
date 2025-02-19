import { FlatList, View } from 'react-native';
import { GET_REPOSITORY } from '../graphql/querys';
import { Review, RepoWithURL } from '../types';
import { Text } from './Text';
import { useQuery } from '@apollo/client';
import RepositoryItem from './RepositoryList/RepositoryItem';
import ReviewItem from './ReviewList/ReviewItem';
import styles from '../styles';
import { useState } from 'react';


interface RawRepository {
    repository: RepoWithURL & {
        reviews: {
            edges: {
                node: Review;
            }[];
            pageInfo: {
                endCursor: string;
                hasNextPage: boolean;
            }
        }
    };
}

const SingleRepository = ({ repoId }: { repoId: string }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const rawRepository = useQuery<RawRepository>(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: {
            repositoryId: repoId,
            first: 3,
        },
        onCompleted: (data) => {
            setReviews(data.repository.reviews.edges.map((e) => (e.node)));
        },
    });

    const handleEndReached = async () => {
        console.log('endReached1');
        console.log('loading', rawRepository.loading);
        console.log('hasNext', rawRepository.data?.repository.reviews.pageInfo.hasNextPage);
        const canContinue = !rawRepository.loading && rawRepository.data?.repository.reviews.pageInfo.hasNextPage;
        console.log('canContinue', canContinue);
        if (!canContinue)
            return false;
        console.log('endReached2');
        const rawNewReviews = await rawRepository.fetchMore({
            variables: {
                after: rawRepository.data?.repository.reviews.pageInfo.endCursor,
            }
        });
        const newReviews = rawNewReviews.data?.repository.reviews.edges.map((e) => (e.node));
        setReviews(reviews.concat(newReviews));
        return true;
    }

    // const reviews = rawRepository.data?.repository.reviews.edges.map((e) => (e.node));
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
            onEndReached={handleEndReached}
            ItemSeparatorComponent={() => <View style={styles.globalSeparator} />}
            keyExtractor={({ id }) => id}
            data={reviews}
            renderItem={({ item }) => <ReviewItem {...item} />}
        />
    );
};

export default SingleRepository;