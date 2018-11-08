import { observable, action, reaction, decorate } from 'mobx';
import { AsyncStorage } from 'react-native';
import agent from '../agent';

class CommonStore {

    appName = 'Frontflip';
    token;
    appLoaded = false;


    constructor() {
        // Init token value
        this.token = this.getTokenStorage();

        // Sync storage with token value
        reaction(() => this.token,
            token => {
                if (token) {
                    this.setTokenStorage(token);
                } else {
                    this.removeTokenStorage();
                }
            }
        );
    }

    /**
     * @description Native methods : because localStorage did not exist in Native
     */
    async getNativeToken() {
        return await AsyncStorage.getItem('jwt');
    }
    async setNativeToken(token) {
        await AsyncStorage.setItem('jwt', token);
    }
    async removeNativeToken() {
        await AsyncStorage.removeItem('jwt');
    }

    /**
     * @description Use error handling to know if we are on web or on mobile
     */
    setTokenStorage(token) {
        try {
            window.localStorage.setItem('jwt', token);
        } catch (error) {
            this.setNativeToken(token);
        }
    }

    getTokenStorage() {
        try {
            return window.localStorage.getItem('jwt');
        } catch (error) {
            return this.getNativeToken() || null;
        }
    }

    removeTokenStorage() {
        try {
            window.localStorage.removeItem('jwt');
        } catch (error) {
            this.removeNativeToken();
        }
    }

    setToken(token) {
        this.token = token;
    }

    setAppLoaded() {
        this.appLoaded = true;
    }

}

decorate(CommonStore, {
    appName: observable,
    token: observable,
    appLoaded: observable,
    setToken: action,
    setAppLoaded: action
});

export default new CommonStore();
