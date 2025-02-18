import { Link } from 'react-router-native';
import { ME } from '../graphql/querys';
import { Text } from './Text';
import { useQuery } from '@apollo/client';
import { View, ScrollView } from 'react-native';
import styles from '../styles';
import useAuthStorage from '../hooks/useAuthStorage';

const Appbar = () => {
    const authStorage = useAuthStorage();
    const me = useQuery(ME);

    const handleSignOut = async () => {
        await authStorage.removeAccessToken();
        me.client.resetStore();
    };

    return (
        <View style={styles.barContainer}>
            <ScrollView horizontal contentContainerStyle={styles.barScroll}>
                <Link key='repoLink' style={styles.barNavLink} to='/'>
                    <Text style={styles.barText}>Repositories</Text>
                </Link>
                {!me.loading && me.data.me ?
                    [
                        <Link key='signOutLink' style={styles.barNavLink} to='/' onPress={handleSignOut}>
                            <Text style={styles.barText}>Sign out</Text>
                        </Link>,
                        <Link key='newReviewLink' style={styles.barNavLink} to='/newReview'>
                            <Text style={styles.barText}>Create a review</Text>
                        </Link>,
                        <Link key='myReviewsLink' style={styles.barNavLink} to='/myReviews'>
                            <Text style={styles.barText}>My Reviews</Text>
                        </Link>
                    ]
                    :
                    [
                        <Link key='signInLink' style={styles.barNavLink} to='/signin'>
                            <Text style={styles.barText}>Sign In</Text>
                        </Link>,
                        <Link key='signUpLink' style={styles.barNavLink} to='/signup'>
                            <Text style={styles.barText}>Sign Up</Text>
                        </Link>
                    ]
                }
            </ScrollView>
        </View>
    );
};

export default Appbar;