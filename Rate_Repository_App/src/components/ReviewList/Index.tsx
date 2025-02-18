import { ME } from '../../graphql/querys';
import { Review } from '../../types';
import { useQuery } from '@apollo/client';
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

    const reviews = rawUser.data?.me.reviews.edges.map((e) => (e.node));

    return (
        <ReviewListContainer
            reviews={reviews}
            handleRefresh={() => { rawUser.refetch() }}
            refreshing={rawUser.loading}
        />
    );
};

export default ReviewList;