import { FlatList, View, StyleSheet } from "react-native";
import { Text } from "./Text";
import RepositoryItem from "./RepositoryList/RepositoryItem";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/querys";
import theme from "../theme";

interface Review {
    __typename?: string;
    id: string;
    text: string;
    rating: number;
    createdAt: string;
    user: {
        __typename?: string;
        id: string;
        username: string;
    };
};

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    list: {
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    reviewContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.colors.bsSecondaryBg,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    reviewRightSide: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    reviewRateContainer: {
        margin: 10,
        padding: 20,
        backgroundColor: theme.colors.bsInfoBgSubtle,
        borderColor: theme.colors.bsInfoTextEmphasis,
        borderWidth: 1,
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    reviewRate: {
        textAlign: 'center',
        color: theme.colors.bsInfoTextEmphasis
    },
    reviewUsername: {
        marginTop: 10,
        fontWeight: theme.fontWeights.bold,
        marginEnd: 10,
    },
    reviewText: {
        marginTop: 10,
        marginBottom: 10,
        width: 250
    },
});

const ReviewItem = (prop: Review) => {
    return (
        <View style={styles.reviewContainer}>
            <View style={styles.reviewRateContainer}>
                <Text style={styles.reviewRate}>{prop.rating}</Text>
            </View>
            <View style={styles.reviewRightSide}>
                <Text style={styles.reviewUsername}>{prop.user.username}</Text>
                <Text>{prop.createdAt.replace(/(^\d{4}).(\d{2}).(\d{2}).(\d{2}).(\d{2}).(\d{2}).*/, '$3.$2.$1')}</Text>
                <Text style={styles.reviewText}>{prop.text}</Text>
            </View>
        </View>
    );
};

const ItemSeparator = () => <View style={styles.separator} />;

interface PropType {
    id: string;
    fullName: string;
    description: string;
    language: string;
    forksCount: number;
    stargazersCount: number;
    ratingAverage: number;
    reviewCount: number;
    ownerAvatarUrl: string;
    url: string;
};

const SingleRepository = (prop: PropType) => {
    const rawReviews = useQuery(GET_REPOSITORY, {
        fetchPolicy: "cache-and-network",
        variables: {
            repositoryId: prop.id
        }
    });
    const reviews: Review[] = rawReviews.loading ? [] : rawReviews.data.repository.reviews.edges.map((e) => (e.node))
    return (
        <FlatList
            style={styles.list}
            ListHeaderComponent={() => <RepositoryItem {...prop} />}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={({ id }) => id}
            data={reviews}
            renderItem={({ item }) => <ReviewItem {...item} />}
        />
    );
};

export default SingleRepository;