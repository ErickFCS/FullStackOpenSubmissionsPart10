import { FlatList, View } from 'react-native';
import { Review } from '../../types';
import { Text } from '../Text';
import ReviewItem from './ReviewItem';
import styles from '../../styles';

interface PropTypes {
    reviews: Review[];
    handleRefresh: () => void;
    refreshing: boolean;
}

const ReviewListContainer = ({ reviews, handleRefresh, refreshing }: PropTypes) => {
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
            renderItem={({ item }) => <ReviewItem {...item} />}
        />
    );
};

export default ReviewListContainer;