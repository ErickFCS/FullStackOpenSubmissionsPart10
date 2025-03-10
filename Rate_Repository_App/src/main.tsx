import { Route, Routes, Navigate, useMatch } from 'react-router-native';
import { View } from 'react-native';
import AppBar from './components/AppBar';
import CreateReview from './components/CreateReview/Index';
import RepositoryList from './components/RepositoryList/Index';
import SignIn from './components/SignIn/Index';
import SignUp from './components/SignUp/Index';
import SingleRepository from './components/SingleRepository';
import styles from './styles';
import ReviewList from './components/ReviewList/Index';

const Main = () => {
    const match = useMatch('/repository/:id');
    const repoId = match?.params.id;

    return (
        <View style={styles.globalContainer}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/newReview' element={<CreateReview />} />
                <Route path='/myReviews' element={<ReviewList />} />
                <Route path='/repository/:id' element={<SingleRepository repoId={repoId} />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </View>
    );
};

export default Main;