import { StatusBar } from 'expo-status-bar';
import Main from './src/main';
import { NativeRouter } from 'react-router-native';
import { createApolloClient } from './utils/apolloClient';
import { ApolloProvider } from '@apollo/client';

const apolloClient = createApolloClient();

const App = () => {
    return (
        <>
            <NativeRouter>
                <ApolloProvider client={apolloClient}>
                    <Main />
                </ApolloProvider>
            </NativeRouter>
            <StatusBar style='auto' />
        </>
    );
};

export default App;