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

const CreateReviewForm = ({ onSubmit }) => {
    const formkit = useFormik({
        initialValues: {
            ownerName: '',
            repositoryName: '',
            rating: '',
            review: '',
        },
        validationSchema: Yup.object().shape({
            ownerName: Yup.string().required('Owner name is Required'),
            repositoryName: Yup.string().required('Repository name is Required'),
            rating: Yup.number().typeError('Rating must be a number').integer('Rating must be a integer').min(0, 'Rating must be between 0 and 100').max(100, 'Rating must be between 0 and 100').required('Rating is Required'),
            review: Yup.string(),
        }),
        onSubmit: async () => {
            onSubmit({
                ownerName: formkit.values.ownerName,
                repositoryName: formkit.values.repositoryName,
                rating: Number(formkit.values.rating),
                review: formkit.values.review
            });
            // formkit.resetForm();
        }
    })
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Owner name'
                placeholderTextColor={formkit.errors.ownerName && formkit.touched.ownerName ? theme.colors.bsDangerTextEmphasis : theme.colors.bsInfoTextEmphasis}
                style={formkit.errors.ownerName && formkit.touched.ownerName ? styles.inputError : styles.input}
                value={formkit.values.ownerName}
                onChangeText={formkit.handleChange('ownerName')}
            />
            {formkit.errors.ownerName && formkit.touched.ownerName ?
                <Text style={styles.inputErrorText}>{formkit.errors.ownerName}</Text>
                : null}
            <TextInput
                placeholder='Repository name'
                placeholderTextColor={formkit.errors.repositoryName && formkit.touched.repositoryName ? theme.colors.bsDangerTextEmphasis : theme.colors.bsInfoTextEmphasis}
                style={formkit.errors.repositoryName && formkit.touched.repositoryName ? styles.inputError : styles.input}
                value={formkit.values.repositoryName}
                onChangeText={formkit.handleChange('repositoryName')}
            />
            {formkit.errors.repositoryName && formkit.touched.repositoryName ?
                <Text style={styles.inputErrorText}>{formkit.errors.repositoryName}</Text>
                : null}
            <TextInput
                placeholder='Rating'
                placeholderTextColor={formkit.errors.rating && formkit.touched.rating ? theme.colors.bsDangerTextEmphasis : theme.colors.bsInfoTextEmphasis}
                style={formkit.errors.rating && formkit.touched.rating ? styles.inputError : styles.input}
                value={formkit.values.rating}
                keyboardType='numeric'
                onChangeText={formkit.handleChange('rating')}
            />
            {formkit.errors.rating && formkit.touched.rating ?
                <Text style={styles.inputErrorText}>{formkit.errors.rating}</Text>
                : null}
            <TextInput
                placeholder='Review'
                placeholderTextColor={formkit.errors.review && formkit.touched.review ? theme.colors.bsDangerTextEmphasis : theme.colors.bsInfoTextEmphasis}
                style={formkit.errors.review && formkit.touched.review ? styles.inputError : styles.input}
                value={formkit.values.review}
                multiline
                onChangeText={formkit.handleChange('review')}
            />
            {formkit.errors.review && formkit.touched.review ?
                <Text style={styles.inputErrorText}>{formkit.errors.review}</Text>
                : null}
            <Pressable style={styles.button} onPress={(e) => { formkit.handleSubmit() }}>
                <Text style={styles.buttonText}>Create</Text>
            </Pressable>
        </View>
    )
}

export default CreateReviewForm;