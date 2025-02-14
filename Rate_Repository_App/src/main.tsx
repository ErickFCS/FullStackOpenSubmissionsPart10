import { StyleSheet, View } from 'react-native';
import { Text } from './components/Text'
import RepositoryList from './components/RepositoryList/Index';
import AppBar from './components/AppBar';
import theme from './theme';
import { Route, Routes, Navigate, useMatch } from 'react-router-native';
import SignIn from './components/SignIn/Index';
import useRepositories from './hooks/useRepositories';
import RepositoryItem from './components/RepositoryList/RepositoryItem';
import SingleRepository from './components/SingleRepository';

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
  const match = useMatch('/repository/:id');
  const repoId = match?.params.id;
  const repositories = useRepositories();
  if (match && repositories.loading) return <Text>Loading...</Text>;
  const targetRepo = repositories.repositories.find((e) => (e.id === repoId))
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
        <Route path='/repository/:id' element={<SingleRepository {...targetRepo} />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>

    </View>
  );
};

export default Main;