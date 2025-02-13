import { StyleSheet, View } from 'react-native';
import { Text } from './components/Text'
import RepositoryList from './components/RepositoryList/Index';
import AppBar from './components/AppBar';
import theme from './theme';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './components/SignIn/Index';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.bsBodyBg,
  },
  title: {
    marginStart: 10,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={
          <View>
            <Text style={styles.title}>{'\n'}Rate Repository Application{'\n'}</Text>
            <RepositoryList />
          </View>
        } />
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>

    </View>
  );
};

export default Main;