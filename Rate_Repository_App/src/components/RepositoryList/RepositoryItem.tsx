import { RepoWithURL } from '../../types';
import { Text } from '../Text';
import { View, Image, Pressable } from 'react-native';
import * as Linking from 'expo-linking';
import styles from '../../styles';

const unitToKilo = (num: number) => {
    return num >= 1000 ? `${Math.floor(num / 1000)}.${Math.floor(num % 1000 / 100)}k` : String(num);
}

const RepositoryItem = ({ fullName, description, language, ownerAvatarUrl, forksCount, stargazersCount, ratingAverage, reviewCount, url }: RepoWithURL) => {
    return (
        <View testID="repositoryItem" style={styles.repositoryContainer}>
            <View style={styles.repositoryPhotoDescriptionContainer}>
                <View style={styles.repositoryPhotoContainer}>
                    <Image
                        source={{ uri: ownerAvatarUrl, }}
                        style={styles.repositoryOwnerAvatar}
                    />
                </View>
                <View style={styles.repositoryDescriptionContainer}>
                    <Text style={styles.repositoryNameText}>{fullName}</Text>
                    <Text style={styles.repositoryDescriptionText}>{description}</Text>
                    <Text style={styles.repositoryLanguageText}>{language}</Text>
                </View>
            </View>
            <View style={styles.repositoryStatsContainer}>
                <View style={styles.repositoryStat}>
                    <Text style={styles.repositoryStatNumber}>{unitToKilo(stargazersCount)}</Text>
                    <Text style={styles.repositoryStatName}>Stars</Text>
                </View>
                <View style={styles.repositoryStat}>
                    <Text style={styles.repositoryStatNumber}>{unitToKilo(forksCount)}</Text>
                    <Text style={styles.repositoryStatName}>Forks</Text>
                </View>
                <View style={styles.repositoryStat}>
                    <Text style={styles.repositoryStatNumber}>{unitToKilo(reviewCount)}</Text>
                    <Text style={styles.repositoryStatName}>Reviews</Text>
                </View>
                <View style={styles.repositoryStat}>
                    <Text style={styles.repositoryStatNumber}>{unitToKilo(ratingAverage)}</Text>
                    <Text style={styles.repositoryStatName}>Rating</Text>
                </View>
            </View>
            {url ?
                <Pressable style={styles.repositoryLinkBUtton} onPress={() => { Linking.openURL(url); }}>
                    <Text style={styles.repositoryLinkButtonText}>Open in GitHib</Text>
                </Pressable>
                : null}
        </View>
    );
};

export default RepositoryItem;