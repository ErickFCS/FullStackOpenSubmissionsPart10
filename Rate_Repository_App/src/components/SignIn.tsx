import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Text } from './Text';
import theme from '../theme';
import { useFormik } from 'formik';

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
    const formkit = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: () => {
            console.log('Form submitted');
            console.log('UserName', formkit.values.username);
            console.log('PassWord', formkit.values.password);
        }
    })
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='UserName'
                placeholderTextColor={theme.colors.bsInfoTextEmphasis}
                style={styles.input}
                value={formkit.values.username}
                onChangeText={formkit.handleChange('username')}
            />
            <TextInput
                placeholder='PassWord'
                placeholderTextColor={theme.colors.bsInfoTextEmphasis}
                secureTextEntry
                style={styles.input}
                value={formkit.values.password}
                onChangeText={formkit.handleChange('password')}
            />
            <Pressable style={styles.button} onPress={(e) => { formkit.handleSubmit() }}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
        </View>
    )
};

export default SignIn;