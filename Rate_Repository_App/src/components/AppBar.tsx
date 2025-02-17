import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Text } from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { ME } from '../graphql/querys';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 30,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.colors.bsSecondaryBg,
        padding: 10,
    },
    navLink: {
        padding: 15,
        backgroundColor: theme.colors.bsTertiaryBg,
        flexShrink: 10,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 1
    },
    text: {
        color: theme.colors.bsSecondaryTextEmphasis,
    }
});

const AppBar = () => {
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const me = useQuery(ME);
    const handleSignOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
    }
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link key='1' style={styles.navLink} to='/'>
                    <Text style={styles.text}>Repositories</Text>
                </Link>
                {!me.loading && me.data.me ?
                    [
                        <Pressable key='2' style={styles.navLink} onPress={handleSignOut}>
                            <Text style={styles.text}>Sign out</Text>
                        </Pressable>,
                        <Link key='3' style={styles.navLink} to='/newReview'>
                            <Text style={styles.text}>Create a review</Text>
                        </Link>
                    ]
                    :
                    [
                        <Link key='4' style={styles.navLink} to='/signin'>
                            <Text style={styles.text}>Sign In</Text>
                        </Link>,
                        <Link key='5' style={styles.navLink} to='/signup'>
                            <Text style={styles.text}>Sign Up</Text>
                        </Link>
                    ]
                }
            </ScrollView>
        </View>
    )
};

export default AppBar;