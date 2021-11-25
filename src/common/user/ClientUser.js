
import ClientStorage from '../store/storage';
import Taro from '@tarojs/taro'
// import ClientInfo from "./client-info";
const USER_INFO = '__USER_INFO__'

class ClientUser {
    constructor(props) {
        //ClientInfo.init();
    }

    isLogin() {
        const userInfo = this.getUserInfo();
        if (userInfo) {
            return true;
        } else {
            return false;
        }
    }
    getUserInfo() {
        let userInfo = ClientStorage.getItem(USER_INFO);
        if (userInfo){
            return JSON.parse(userInfo);
        }else{
            return userInfo;
        }
        
    }
    saveUserInfo(userInfo) {
        ClientStorage.setItem(USER_INFO, JSON.stringify(userInfo));
        return true;
    }
    obtainUserInfo() {
        return new Promise((resolve, reject) => {
            Taro.getUserProfile({
                desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    //   wx.setStorageSync(USER_INFO, JSON.stringify(res.userInfo));
                    console.log('user info....', res.userInfo);
                    this.saveUserInfo(res.userInfo);
                    //callback(res.userInfo);
                    resolve(res.userInfo);
                },
                fail(error) {
                    console.log('failed to obtain wechat userinfo...');
                    reject(error);
                },
            })
        });
    }
}
export default new ClientUser();