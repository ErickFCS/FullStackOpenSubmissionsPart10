import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import type { FetchResult, MutationResult } from "@apollo/client";
import { useState } from "react";

const useSignIn = (): [
    signIn: ({ username, password }: { username: string; password: string; }) => Promise<FetchResult<string>>,
    result: MutationResult<string>
] => {
    const [mutate, result] = useMutation<string>(AUTHENTICATE);
    useState
    const signIn = async ({ username, password }: { username: string, password: string }): Promise<FetchResult<string>> => {
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
        result
    ]
}

export default useSignIn;