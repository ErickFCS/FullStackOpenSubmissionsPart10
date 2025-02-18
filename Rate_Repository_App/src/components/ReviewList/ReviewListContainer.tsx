import { FlatList, View, Pressable } from 'react-native';
import { Review } from '../../types';
import { Text } from '../Text';
import ReviewItem from './ReviewItem';
import styles from '../../styles';
import { Link } from 'react-router-native';

const ExtendedReviewItem = ({ review, handleDelete }: { review: Review, handleDelete: (id: string) => void }) => {
    const { id, repositoryId } = review;

    return (
        <View style={styles.extendedReviewContainer}>
            <ReviewItem {...review} />
            <View style={styles.extendedReviewButtonContainer}>
                <Link to={`/repository/${repositoryId}`} style={styles.extendedReviewRepoButton}>
                    <Text style={styles.extendedReviewRepoButtonText}>View repository</Text>
                </Link>
                <Pressable style={styles.extendedReviewDeleteButton} onPress={() => { handleDelete(id) }}>
                    <Text style={styles.extendedReviewDeleteButtonText}>Delete review</Text>
                </Pressable>
            </View>
        </View>
    );
};

interface PropTypes {
    reviews: Review[];
    handleRefresh: () => void;
    refreshing: boolean;
    handleDelete: (id: string) => void;
}

const ReviewListContainer = ({ reviews, handleRefresh, refreshing, handleDelete }: PropTypes) => {
    return (
        <FlatList
            style={styles.globalList}
            // ListHeaderComponentStyle={{ marginBottom: 10 }}
            ListFooterComponentStyle={{ marginBottom: 20 }}
            ListHeaderComponent={<View />}
            ListFooterComponent={<View />}
            ListEmptyComponent={
                refreshing
                    ?
                    <Text style={styles.globalInfoText}>Loading...</Text>
                    :
                    <Text style={styles.globalInfoText}>No reviews yet</Text>
            }
            refreshing={refreshing}
            onRefresh={() => { handleRefresh }}
            ItemSeparatorComponent={() => <View style={styles.globalSeparator} />}
            keyExtractor={({ id }) => id}
            data={reviews}
            renderItem={({ item }) => <ExtendedReviewItem review={item} handleDelete={handleDelete} />}
        />
    );
};

export default ReviewListContainer;