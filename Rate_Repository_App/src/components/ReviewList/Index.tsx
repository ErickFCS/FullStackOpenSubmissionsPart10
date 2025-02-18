import { Alert } from 'react-native';
import { DELETE_REVIEW } from '../../graphql/mutations';
import { ME } from '../../graphql/querys';
import { Review } from '../../types';
import { useMutation, useQuery } from '@apollo/client';
import ReviewListContainer from "./ReviewListContainer";


interface RawUser {
    me?: {
        id: string;
        reviews: {
            edges: {
                node: Review;
            }[]
        }
    }
}

const ReviewList = () => {
    const rawUser = useQuery<RawUser>(ME, {
        fetchPolicy: 'cache-and-network',
        variables: {
            includeReviews: true
        }
    });
    const [deleteReview,] = useMutation(DELETE_REVIEW);

    const handleDelete = async (id: string) => {
        Alert.alert('Delete Review', 'Are you sure', [
            { text: 'Cancel', onPress: () => null, style: 'cancel' },
            {
                text: 'OK', onPress: async () => {
                    try {
                        await deleteReview({ variables: { deleteReviewId: id } });
                        await rawUser.refetch({ includeReviews: true });
                    }
                    catch (e: unknown) {
                        console.error(e);
                    }
                }
            },
        ]);
    }

    const reviews = rawUser.data?.me.reviews.edges.map((e) => (e.node));

    return (
        <ReviewListContainer
            reviews={reviews}
            handleRefresh={() => { rawUser.refetch() }}
            refreshing={rawUser.loading}
            handleDelete={handleDelete}
        />
    );
};

export default ReviewList;