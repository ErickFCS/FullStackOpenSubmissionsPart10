import { ApolloClient, InMemoryCache } from '@apollo/client';


export const createApolloClient = () => {
    return new ApolloClient({
        uri: 'http://192.168.1.42:4000/graphql',
        cache: new InMemoryCache(),
    });
};
