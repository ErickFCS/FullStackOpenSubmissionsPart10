import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import SignUpForm from './SignUpForm';
import { useMutation } from '@apollo/client';
import { NEW_USER } from '../../graphql/mutations';


const SignUp = () => {
    const [signIn, authToken] = useSignIn();
    const [mutation, result] = useMutation(NEW_USER);
    const navigate = useNavigate();

    const onSubmit = async ({ username, password }) => {
        try {
            console.log(username);
            console.log(password);
            await mutation({
                variables: {
                    user: {
                        username,
                        password
                    }
                }
            }).then(async (res) => {
                console.log(res);
                await signIn({ username, password });
                navigate('/');
            })
        }
        catch (e: unknown) {
            console.error(e);
        }
    }
    return (
        <SignUpForm onSubmit={onSubmit} />
    );
};

export default SignUp;