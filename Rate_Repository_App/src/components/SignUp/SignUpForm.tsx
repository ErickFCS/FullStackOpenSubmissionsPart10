import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Text } from '../Text';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import theme from '../../theme';

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

const SignInForm = ({ onSubmit }) => {
    const formkit = useFormik({
        initialValues: {
            username: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().min(5, 'UserName must be between 5 and 30 characters long').max(30, 'UserName must be between 5 and 30 characters long').required('UserName is Required'),
            password: Yup.string().min(5, 'PassWord must be between 5 and 30 characters long').max(30, 'PassWord must be between 5 and 30 characters long').required('PassWord is Required'),
            passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'PassWord dont match').required('password Confirmation is Required')
        }),
        onSubmit: async () => {
            onSubmit({
                username: formkit.values.username,
                password: formkit.values.password
            });
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
            <TextInput
                placeholder='password Confirmation'
                placeholderTextColor={formkit.errors.passwordConfirmation && formkit.touched.passwordConfirmation ? theme.colors.bsDangerTextEmphasis : theme.colors.bsInfoTextEmphasis}
                secureTextEntry
                style={formkit.errors.passwordConfirmation && formkit.touched.passwordConfirmation ? styles.inputError : styles.input}
                value={formkit.values.passwordConfirmation}
                onChangeText={formkit.handleChange('passwordConfirmation')}
            />
            {formkit.errors.passwordConfirmation && formkit.touched.passwordConfirmation ?
                <Text style={styles.inputErrorText}>{formkit.errors.passwordConfirmation}</Text>
                : null}
            <Pressable style={styles.button} onPress={(e) => { formkit.handleSubmit() }}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
        </View>
    )
}

export default SignInForm;