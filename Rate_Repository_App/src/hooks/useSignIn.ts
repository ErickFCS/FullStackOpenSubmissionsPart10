import { AUTHENTICATE } from '../graphql/mutations';
import { useMutation, useApolloClient } from '@apollo/client';
import type { FetchResult } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

interface RawAuth {
    authenticate: {
        accessToken: string
    }
}

type ReturnType = [
    signIn: ({ username, password }: { username: string; password: string; }) => Promise<FetchResult<RawAuth>>,
    result: string
]

const useSignIn = (): ReturnType => {
    const [mutate,authToken] = useMutation<RawAuth>(AUTHENTICATE);
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();

    const signIn = async ({ username, password }: { username: string, password: string }) => {
        const result = await mutate({ variables: { credentials: { username, password } } });
        await authStorage.setAccessToken(result.data?.authenticate.accessToken);
        await apolloClient.resetStore();
        return result;
    };

    return [
        signIn,
        authToken.data?.authenticate.accessToken || ''
    ];
};

export default useSignIn;