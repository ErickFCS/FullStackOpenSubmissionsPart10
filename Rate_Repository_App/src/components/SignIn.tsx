import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Text } from './Text';
import theme from '../theme';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    input: {
        backgroundColor: theme.colors.bsDarkBgSubtle,
        borderColor: theme.colors.bsBorderColor,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        color: theme.colors.bsInfoTextEmphasis,
    },
    inputError: {
        backgroundColor: theme.colors.bsDangerBgSubtle,
        borderColor: theme.colors.bsDangerBorderSubtle,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        color: theme.colors.bsDangerTextEmphasis,
    },
    inputErrorText: {
        color: theme.colors.bsDangerTextEmphasis,
        marginStart: 20,
        marginBottom: 10,
    },
    button: {
        backgroundColor: theme.colors.bsSuccessBgSubtle,
        borderColor: theme.colors.bsSuccessBorderSubtle,
        borderWidth: 1,
        padding: 12,
        margin: 10,
    },
    buttonText: {
        color: theme.colors.bsSuccessTextEmphasis,
        textAlign: 'center'
    },
})

const SignIn = () => {
    const [signIn, authToken] = useSignIn();
    const navigate = useNavigate()
    const formkit = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required('UserName is Required'),
            password: Yup.string().required('PassWord is Required')
        }),
        onSubmit: async () => {
            console.log(formkit.values.username);
            console.log(formkit.values.password);
            try {
                await signIn({
                    username: formkit.values.username,
                    password: formkit.values.password
                }); 
                console.log(authToken);
                navigate('/');
            }
            catch (e: unknown) {
                console.error(e);
            }
        }
    })
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='UserName'
                placeholderTextColor={formkit.errors.username && formkit.touched.username ? theme.colors.bsDangerTextEmphasis : theme.colors.bsInfoTextEmphasis}
                style={formkit.errors.username && formkit.touched.username ? styles.inputError : styles.input}
                value={formkit.values.username}
                onChangeText={formkit.handleChange('username')}
            />
            {formkit.errors.username && formkit.touched.username ?
                <Text style={styles.inputErrorText}>{formkit.errors.username}</Text>
                : null}
            <TextInput
                placeholder='PassWord'
                placeholderTextColor={formkit.errors.password && formkit.touched.password ? theme.colors.bsDangerTextEmphasis : theme.colors.bsInfoTextEmphasis}
                secureTextEntry
                style={formkit.errors.password && formkit.touched.password ? styles.inputError : styles.input}
                value={formkit.values.password}
                onChangeText={formkit.handleChange('password')}
            />
            {formkit.errors.password && formkit.touched.password ?
                <Text style={styles.inputErrorText}>{formkit.errors.password}</Text>
                : null}
            <Pressable style={styles.button} onPress={(e) => { formkit.handleSubmit() }}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
        </View>
    )
};

export default SignIn;