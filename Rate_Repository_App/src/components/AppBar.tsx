import { View, StyleSheet, Pressable } from 'react-native';
import { Text } from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';

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
    return (
        <View style={styles.container}>
            <Pressable style={styles.navLink}>
                <Link to='/'>
                    <Text style={styles.text}>Repositories</Text>
                </Link>
            </Pressable>
            <Pressable style={styles.navLink}>
                <Link to='/signin'>
                    <Text style={styles.text}>Sign In</Text>
                </Link>
            </Pressable>
        </View>
    )
};

export default AppBar;