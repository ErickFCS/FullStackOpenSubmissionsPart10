import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import SignInForm from './SignInForm';


const SignIn = () => {
    const [signIn, authToken] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async ({ username, password }) => {
        console.log(username);
        console.log(password);
        try {
            await signIn({
                username: username,
                password: password
            });
            console.log(authToken);
            navigate('/');
        }
        catch (e: unknown) {
            console.error(e);
        }
    }
    return (
        <SignInForm onSubmit={onSubmit} />
    );
};

export default SignIn;