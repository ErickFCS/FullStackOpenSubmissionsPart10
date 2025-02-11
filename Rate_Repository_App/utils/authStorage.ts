import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
    namespace: string;
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getAccessToken() {
        return await AsyncStorage.getItem(`${this.namespace}:access_token`);
    }

    async setAccessToken(accessToken: string) {
        await AsyncStorage.setItem(`${this.namespace}:access_token`, accessToken);
        return null
    }

    async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:access_token`);
        return null
    }
}

export default AuthStorage;