import Taro from "@tarojs/taro";
export default class PageHelper{
    static showToast(params){
        Taro.showToast(params);
    }
}