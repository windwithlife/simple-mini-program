// @ts-ignore
/* eslint-disable */
import Taro from '@tarojs/taro'

import { HTTP_STATUS } from '../constants/status'
import { logError } from '../utils/error'
import Client from '../client/client';

let GATEWAY = 'https://api.zhangyongqiao.com';
console.log('Gateway===>' + GATEWAY);


export default class Model {
  bizPath;
  constructor(props){
    if (props?.bizPath){
      this.bizPath = props.bizPath;
    }
  }
  processUnauthentication =(response)=>{
    Taro.navigateTo({ url: '/pages/user/login/index'});
  }
  saveToken(token) {
    //localStorage.setItem('web_token', token);
    Taro.setStorageSync('token', token);
  }
  checkResponse(res) {
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      return logError('api', '请求资源不存在')
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return logError('api', '服务端出现了问题')
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      return logError('api', '没有权限访问')
    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      this.processUnauthentication(res);
      return logError('api', '请先登录')
    } else if (res.statusCode === HTTP_STATUS.SERVER_ERROR) {
      return logError('api', '服务异常')
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      return res.data
    }
    return true;
  }
  clearToken() {
    Taro.removeStorageSync('token');
  }
  getToken() {
    const token = Taro.getStorageSync('token');
    return token;
  }
  composeFullUrl(url) {
    let fullPath = GATEWAY;
    if (this.bizPath){
      fullPath = fullPath + this.bizPath + url;
    }else{
      fullPath = fullPath  + url;
    }
    //console.log('current url is ---->' + fullPath);
    return fullPath;
  }


  fetch_get(url, query,) {
    let that = this;
    let params = {cid: Client.getClientId(), ...query};
    return new Promise((resolve, reject) => {
      Taro.request({
        url: this.composeFullUrl(url),
        header: {
          'Content-Type': 'application/json',
          token: this.getToken(),
          // cid: Client.getClientId(),
        },
        data: params,
        method: 'get',
        success(response) {
          //console.log(response);
          if (that.checkResponse(response)) {
            resolve(response.data.data);
          } else {
            reject(response.data);
          }
        },
        fail(error) {
          //console.log(error);
          logError('get', '网络异常')
          reject(error);
          Taro.showToast({ title: '接口异常', icon: 'error', duration: 2000 })
        }
      });
    });
  }
  async fetch_post(url, body, options) {
    let that = this;
    let params = { params: body ,head:{cid: Client.getClientId()}};
    return new Promise((resolve, reject) => {
      Taro.request({
        url: this.composeFullUrl(url),
        header: {
          'Content-Type': 'application/json',
          token: this.getToken(),
        },
        data: params,
        method: 'post',
        success(response) {
          //console.log(response);
          resolve(response.data);
          // if (that.checkResponse(response)) {
          //   resolve(response.data);
          // } else {
          //   reject(response.data);
          // }
        },
        fail(error) {
          console.log("request exception......",error);
          reject(error);
          Taro.showToast({ title: '接口异常', icon: 'error', duration: 2000 })
        }
      });//end request
    }
    );

  }

}