// @ts-ignore
/* eslint-disable */
// import Model from '../common/store/model';

import BaseModel from './BaseModel';
let bizPath = '/common-service/imagetext';

const Model = new BaseModel({bizPath});

export default class DefaultModel {
  //*********************************API for Category Section ************************************/
  // static  removeBatch(params, options) {
  //   return  new Model().fetch_post('/common-service/imagetext/removeBatch', params, options);
  // }
  // static removeById(params, options) {
  //   return  new Model().fetch_post('/common-service/imagetext/removeById', params, options);
  // }
  // static  update(params, options) {
  //   return  new Model().fetch_post('/common-service/imagetext/update', params, options);
  // }
  // static addNew(params, options) {
  //   return new Model().fetch_post('/common-service/imagetext/addNew', params, options);
  // }
  static findById(params, options) {
    return  Model.fetch_post('/findById', params, options);
  }
  static  queryAll(options) {
    return Model.fetch_get('/queryAll', {})
    .then((data)=>{
      //console.log(data);
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
  static  queryAllWithGoods(options) {
    return Model.fetch_get('/queryAllWithGoods', {})
    .then((data)=>{
      //console.log(data);
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
