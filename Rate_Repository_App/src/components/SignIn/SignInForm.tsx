import { Pressable, TextInput, View } from 'react-native';
import { Text } from '../Text';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../styles';
import theme from '../../theme';

const SignInForm = ({ onSubmit }) => {
    const formkit = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required('Username is Required'),
            password: Yup.string().required('Password is Required')
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
                < Text style={styles.formInputErrorText}>{formkit.errors.username}</Text>
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
            <Pressable style={styles.formButton} onPress={(e) => { formkit.handleSubmit(); }}>
                <Text style={styles.formButtonText}>Sign In</Text>
            </Pressable>
        </View >
    );
};

export default SignInForm;