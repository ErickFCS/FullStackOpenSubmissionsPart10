import { View } from 'react-native';
import { Review } from '../../types';
import { Text } from '../Text';
import styles from '../../styles';

const ReviewItem = ({ rating, user, createdAt, text }: Review) => {
    return (
        <View style={styles.reviewContainer}>
            <View style={styles.reviewRateContainer}>
                <Text style={styles.reviewRate}>{rating}</Text>
            </View>
            <View style={styles.reviewRightSide}>
                <Text style={styles.reviewUsername}>{user.username}</Text>
                <Text>{createdAt.replace(/(^\d{4}).(\d{2}).(\d{2}).(\d{2}).(\d{2}).(\d{2}).*/, '$3.$2.$1')}</Text>
                <Text style={styles.reviewText}>{text}</Text>
            </View>
        </View>
    );
};

export default ReviewItem