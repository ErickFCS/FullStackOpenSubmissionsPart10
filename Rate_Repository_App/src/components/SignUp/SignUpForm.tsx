import { Pressable, TextInput, View } from 'react-native';
import { Text } from '../Text';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import theme from '../../theme';
import styles from '../../styles';

const SignInForm = ({ onSubmit }) => {
    const formkit = useFormik({
        initialValues: {
            username: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: Yup.object().shape({
            username: Yup
                .string()
                .min(5, 'Username must be between 5 and 30 characters long')
                .max(30, 'Username must be between 5 and 30 characters long')
                .required('Username is Required'),
            password: Yup
                .string()
                .min(5, 'Password must be between 5 and 30 characters long')
                .max(30, 'Password must be between 5 and 30 characters long')
                .required('Password is Required'),
            passwordConfirmation: Yup
                .string()
                .oneOf([Yup.ref('password'), null], 'Password dont match')
                .required('password Confirmation is Required')
        }),
        onSubmit: async () => {
            onSubmit({
                username: formkit.values.username,
                password: formkit.values.password
            });
        }
    });

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={formkit.errors.username && formkit.touched.username ? styles.formInputError : styles.formInput}
                placeholderTextColor={formkit.errors.username && formkit.touched.username ? theme.colors.DangerTextEmphasis : theme.colors.InfoTextEmphasis}
                placeholder='Username'
                onChangeText={formkit.handleChange('username')}
                value={formkit.values.username}
            />
            {
                formkit.errors.username && formkit.touched.username &&
                <Text style={styles.formInputErrorText}>{formkit.errors.username}</Text>
            }
            <TextInput
                style={formkit.errors.password && formkit.touched.password ? styles.formInputError : styles.formInput}
                placeholderTextColor={formkit.errors.password && formkit.touched.password ? theme.colors.DangerTextEmphasis : theme.colors.InfoTextEmphasis}
                placeholder='Password'
                secureTextEntry
                onChangeText={formkit.handleChange('password')}
                value={formkit.values.password}
            />
            {
                formkit.errors.password && formkit.touched.password &&
                <Text style={styles.formInputErrorText}>{formkit.errors.password}</Text>
            }
            <TextInput
                style={formkit.errors.passwordConfirmation && formkit.touched.passwordConfirmation ? styles.formInputError : styles.formInput}
                placeholderTextColor={formkit.errors.passwordConfirmation && formkit.touched.passwordConfirmation ? theme.colors.DangerTextEmphasis : theme.colors.InfoTextEmphasis}
                placeholder='Password Confirmation'
                secureTextEntry
                onChangeText={formkit.handleChange('passwordConfirmation')}
                value={formkit.values.passwordConfirmation}
            />
            {
                formkit.errors.passwordConfirmation && formkit.touched.passwordConfirmation &&
                <Text style={styles.formInputErrorText}>{formkit.errors.passwordConfirmation}</Text>
            }
            <Pressable style={styles.formButton} onPress={(e) => { formkit.handleSubmit(); }}>
                <Text style={styles.formButtonText}>Sign Up</Text>
            </Pressable>
        </View>
    );
};

export default SignInForm;