import Taro from '@tarojs/taro'

export default class ClientStorage {
    static setItem(key,value){
        Taro.setStorageSync(key, value);
    }
    static getItem(key){
        return Taro.getStorageSync(key);
    }
    static removeItem(key){
        Taro.removeStorageSync(key);
    }
    static saveToken(token) {
        //localStorage.setItem('web_token', token);
        Taro.setStorageSync('token', token);
    }
    static clearToken() {
        Taro.removeStorageSync('token');
        //localStorage.removeItem('web_token');
    }
    static getToken() {
        const token = Taro.getStorageSync('token');
        return token;//localStorage.getItem('web_token');
    }
}