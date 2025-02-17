import { useNavigate } from 'react-router-native';
import CreateReviewForm from './CreateReviewForm';
import { useMutation } from '@apollo/client';
import { NEW_REVIEW } from '../../graphql/mutations';

const CreateReview = () => {
    const navigate = useNavigate();
    const [mutation, result] = useMutation(NEW_REVIEW);

    const onSubmit = async ({
        ownerName,
        repositoryName,
        rating,
        review,
    }) => {
        try {
            mutation({ variables: { review: { ownerName, repositoryName, rating, text: review } } })
                .then((res)=>{
                    navigate(`/repository/${res.data.createReview.repositoryId}`);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        catch (e: unknown) {
            console.error(e);
        }
    }
    return (
        <CreateReviewForm onSubmit={onSubmit} />
    );
};

export default CreateReview;