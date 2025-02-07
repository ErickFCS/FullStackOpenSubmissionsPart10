import { StatusBar } from 'expo-status-bar';
import Main from './src/main';
import { NativeRouter } from 'react-router-native';

const App = () => {
    return (
        <>
            <NativeRouter>
                <Main />
            </NativeRouter>
            <StatusBar style='auto' />
        </>
    );
};

export default App;