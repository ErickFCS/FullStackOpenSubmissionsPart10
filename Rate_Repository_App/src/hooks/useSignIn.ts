import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import type { FetchResult, MutationResult } from "@apollo/client";

const useSignIn = (): [
    signIn: ({ username, password }: { username: string; password: string; }) => Promise<FetchResult<any>>,
    result: string
] => {
    const [mutate, result] = useMutation(AUTHENTICATE);
    const signIn = async ({ username, password }: { username: string, password: string }): Promise<FetchResult<any>> => {
        return await mutate({
            variables: {
                credentials: {
                    username,
                    password
                }
            }
        })
    }
    return [
        signIn,
        result.data?.authenticate?.accessToken
    ]
}

export default useSignIn;