import { View, Image, StyleSheet } from "react-native";
import { Text } from "./Text";
import theme from "../theme";

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
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.bsSecondaryBg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    statsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    stat: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statNumber: {
        fontWeight: theme.fontWeights.bold,
        marginTop: 24,
    },
    statName: {
        color: theme.colors.bsSecondaryTextEmphasis,
        marginTop: 2,
        marginBottom: 14,
    },
    photoDescriptionContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    ownerAvatar: {
        height: 50,
        width: 50,
    },
    photoContainer: {
        margin: 20,
    },
    descriptionContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    nameText: {
        fontWeight: theme.fontWeights.bold,
        marginTop: 20,
    },
    descriptionText: {
        color: theme.colors.bsSecondaryTextEmphasis,
        marginTop: 7,
    },
    languageText: {
        color: theme.colors.bsEmphasisColor,
        backgroundColor: theme.colors.bsPrimaryTextEmphasis,
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
});

const RepositoryItem = (prop: PropType) => {
    const {
        id,
        fullName,
        description,
        language,
        ownerAvatarUrl,
    } = prop;
    const forksCount = prop.forksCount >= 1000 ? `${Math.round(prop.forksCount / 1000)}.${Math.round(prop.forksCount % 1000 / 100)}k` : prop.forksCount;
    const stargazersCount = prop.stargazersCount >= 1000 ? `${Math.round(prop.stargazersCount / 1000)}.${Math.round(prop.stargazersCount % 1000 / 100)}k` : prop.stargazersCount;
    const ratingAverage = prop.ratingAverage >= 1000 ? `${Math.round(prop.ratingAverage / 1000)}.${Math.round(prop.ratingAverage % 1000 / 100)}k` : prop.ratingAverage;
    const reviewCount = prop.reviewCount >= 1000 ? `${Math.round(prop.reviewCount / 1000)}.${Math.round(prop.reviewCount % 1000 / 100)}k` : prop.reviewCount;
    return (
        <View style={styles.container}>
            <View style={styles.photoDescriptionContainer}>
                <View style={styles.photoContainer}>
                    <Image
                        source={{ uri: ownerAvatarUrl, }}
                        style={styles.ownerAvatar}
                    />
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.nameText}>{fullName}</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                    <Text style={styles.languageText}>{language}</Text>
                </View>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <Text style={styles.statNumber}>{stargazersCount}</Text>
                    <Text style={styles.statName}>Stars</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statNumber}>{forksCount}</Text>
                    <Text style={styles.statName}>Forks</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statNumber}>{reviewCount}</Text>
                    <Text style={styles.statName}>Reviews</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statNumber}>{ratingAverage}</Text>
                    <Text style={styles.statName}>Rating</Text>
                </View>
            </View>
        </View>
    )
};

export default RepositoryItem;