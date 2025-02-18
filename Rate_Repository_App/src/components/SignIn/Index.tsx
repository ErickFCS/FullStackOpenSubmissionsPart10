import { useNavigate } from 'react-router-native';
import SignInForm from './SignInForm';
import useSignIn from '../../hooks/useSignIn';

const SignIn = () => {
    const [signIn, authToken] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async ({ username, password }: { username: string, password: string }) => {
        try {
            console.log('username', username);
            console.log('password', password);
            const result =  await signIn({ username, password });
            console.log('authToken', result.data?.authenticate.accessToken);
            navigate('/');
        }
        catch (e: unknown) {
            console.error(e);
        }
    };

    return (
        <SignInForm onSubmit={onSubmit} />
    );
};

export default SignIn;