import { Pressable, TextInput, View } from 'react-native';
import { Text } from '../Text';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../styles';
import theme from '../../theme';

const CreateReviewForm = ({ onSubmit }) => {
    const formkit = useFormik({
        initialValues: {
            ownerName: '',
            repositoryName: '',
            rating: '',
            review: '',
        },
        validationSchema: Yup.object().shape({
            ownerName: Yup
                .string()
                .required('Owner name is Required'),
            repositoryName: Yup
                .string()
                .required('Repository name is Required'),
            rating: Yup
                .number()
                .typeError('Rating must be a number')
                .integer('Rating must be a integer')
                .min(0, 'Rating must be between 0 and 100')
                .max(100, 'Rating must be between 0 and 100')
                .required('Rating is Required'),
            review: Yup
                .string(),
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
    });

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={formkit.errors.ownerName && formkit.touched.ownerName ? styles.formInputError : styles.formInput}
                placeholderTextColor={formkit.errors.ownerName && formkit.touched.ownerName ? theme.colors.DangerTextEmphasis : theme.colors.InfoTextEmphasis}
                placeholder='Owner name'
                onChangeText={formkit.handleChange('ownerName')}
                value={formkit.values.ownerName}
            />
            {
                formkit.errors.ownerName && formkit.touched.ownerName &&
                <Text style={styles.formInputErrorText}>{formkit.errors.ownerName}</Text>
            }
            <TextInput
                style={formkit.errors.repositoryName && formkit.touched.repositoryName ? styles.formInputError : styles.formInput}
                placeholderTextColor={formkit.errors.repositoryName && formkit.touched.repositoryName ? theme.colors.DangerTextEmphasis : theme.colors.InfoTextEmphasis}
                placeholder='Repository name'
                onChangeText={formkit.handleChange('repositoryName')}
                value={formkit.values.repositoryName}
            />
            {
                formkit.errors.repositoryName && formkit.touched.repositoryName &&
                <Text style={styles.formInputErrorText}>{formkit.errors.repositoryName}</Text>
            }
            <TextInput
                style={formkit.errors.rating && formkit.touched.rating ? styles.formInputError : styles.formInput}
                placeholderTextColor={formkit.errors.rating && formkit.touched.rating ? theme.colors.DangerTextEmphasis : theme.colors.InfoTextEmphasis}
                placeholder='Rating'
                keyboardType='numeric'
                onChangeText={formkit.handleChange('rating')}
                value={formkit.values.rating}
            />
            {
                formkit.errors.rating && formkit.touched.rating &&
                <Text style={styles.formInputErrorText}>{formkit.errors.rating}</Text>
            }
            <TextInput
                style={formkit.errors.review && formkit.touched.review ? styles.formInputError : styles.formInput}
                placeholderTextColor={formkit.errors.review && formkit.touched.review ? theme.colors.DangerTextEmphasis : theme.colors.InfoTextEmphasis}
                placeholder='Review'
                multiline
                onChangeText={formkit.handleChange('review')}
                value={formkit.values.review}
            />
            {
                formkit.errors.review && formkit.touched.review &&
                <Text style={styles.formInputErrorText}>{formkit.errors.review}</Text>
            }
            <Pressable style={styles.formButton} onPress={(e) => { formkit.handleSubmit(); }}>
                <Text style={styles.formButtonText}>Create</Text>
            </Pressable>
        </View>
    );
};

export default CreateReviewForm;