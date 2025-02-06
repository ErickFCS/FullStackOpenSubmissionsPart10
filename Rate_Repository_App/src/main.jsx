import Constants from 'expo-constants';
import { StyleSheet, View, } from 'react-native';
import { Text } from './components/Text'
import RepositoryList from './components/RepositoryList';
import AppBar from './components/AppBar';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.bsBodyBg,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text>{'\n'}Rate Repository Application{'\n'}</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;