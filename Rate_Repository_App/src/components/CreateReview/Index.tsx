import { NEW_REVIEW } from '../../graphql/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import CreateReviewForm from './CreateReviewForm';

interface RawReview {
    createReview: {
        repositoryId: string;
    }
}

const CreateReview = () => {
    const navigate = useNavigate();
    const [mutation,] = useMutation<RawReview>(NEW_REVIEW);

    const onSubmit = async ({ ownerName, repositoryName, rating, review, }) => {
        try {
            const result = await mutation({ variables: { review: { ownerName, repositoryName, rating, text: review } } })
            navigate(`/repository/${result.data?.createReview.repositoryId}`);
        }
        catch (e: unknown) {
            console.error(e);
        }
    };

    return (
        <CreateReviewForm onSubmit={onSubmit} />
    );
};

export default CreateReview;