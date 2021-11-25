// @ts-ignore
/* eslint-disable */
//import Model from '../common/store/model';

import BaseModel from './BaseModel';
let bizPath = '/account-service/account';
const Model = new BaseModel({bizPath});


export default class DefaultModel {
  //*********************************API for Account Section ************************************/
  static  wechatLogin(params, options) {
    return  Model.fetch_post('/wechatLogin', params, options);
  }
  static  login(params, options) {
    return  Model.fetch_post('/login', params, options);
  }

  static  queryAll(options) {
    return Model.fetch_get('/common-service/todo/queryAll', {})
    .then((data)=>{
      console.log(data);
      //let items = data.items;
      if(data.items){
        data.items.forEach((element) => {
          element.key = element.id;
          if(!element.top){
            element.top='middle'
          }
        });
      }

      return data.items;
    });
  }

}
