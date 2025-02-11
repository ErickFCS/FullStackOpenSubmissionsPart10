import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import type { FetchResult } from "@apollo/client";
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = (): [
    signIn: ({ username, password }: { username: string; password: string; }) => Promise<FetchResult<any>>,
    result: string
] => {
    const [mutate, result] = useMutation(AUTHENTICATE);
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const signIn = async ({ username, password }: { username: string, password: string }): Promise<FetchResult<any>> => {
        const result = await mutate({
            variables: {
                credentials: {
                    username,
                    password
                }
            }
        });
        await authStorage.setAccessToken(result.data?.authenticate?.accessToken);
        await apolloClient.resetStore();
        return result;
    }
    return [
        signIn,
        result.data?.authenticate?.accessToken
    ]
}

export default useSignIn;