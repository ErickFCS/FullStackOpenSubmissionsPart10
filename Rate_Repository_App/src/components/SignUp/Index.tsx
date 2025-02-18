import { NEW_USER } from '../../graphql/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import SignUpForm from './SignUpForm';
import useSignIn from '../../hooks/useSignIn';

interface RawNewUser {
    createUser: {
        id: string;
    }
}

const SignUp = () => {
    const [mutation,] = useMutation<RawNewUser>(NEW_USER);
    const [signIn, authToken] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async ({ username, password }) => {
        try {
            console.log('username', username);
            console.log('password', password);
            const result = await mutation({ variables: { user: { username, password } } });
            console.log('userId', result.data.createUser.id);
            await signIn({ username, password });
            navigate('/');
        }
        catch (e: unknown) {
            console.error(e);
        }
    };

    return (
        <SignUpForm onSubmit={onSubmit} />
    );
};

export default SignUp;