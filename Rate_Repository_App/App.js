import { StatusBar } from 'expo-status-bar';
import Main from './src/main';
import { NativeRouter } from 'react-router-native';
import { createApolloClient } from './utils/apolloClient';
import { ApolloProvider } from '@apollo/client';
import AuthStorage from './utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext.ts'

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
    return (
        <>
            <NativeRouter>
                <ApolloProvider client={apolloClient}>
                    <AuthStorageContext.Provider value={authStorage}>
                        <Main />
                    </AuthStorageContext.Provider>
                </ApolloProvider>
            </NativeRouter>
            <StatusBar style='auto' />
        </>
    );
};

export default App;