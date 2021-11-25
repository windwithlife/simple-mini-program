// @ts-ignore
/* eslint-disable */
// import Model from '../common/store/model';
import BaseModel from './BaseModel';
let bizPath = '/common-service/news';

const Model = new BaseModel({bizPath});

export default class DefaultModel {
  //*********************************API Section ************************************/
  // static  removeBatch(params, options) {
  //   return  new Model().fetch_post('/common-service/news/removeBatch', params, options);
  // }
  // static removeById(params, options) {
  //   return  new Model().fetch_post('/common-service/news/removeById', params, options);
  // }
  // static  update(params, options) {
  //   return  new Model().fetch_post('/common-service/news/update', params, options);
  // }
  // static addNew(params, options) {
  //   return new Model().fetch_post('/common-service/news/addNew', params, options);
  // }
  static findById(params, options) {
    return  Model.fetch_post('/findById', params, options);
  }
  static  queryAll(options) {
    return Model.fetch_get('/queryAll', {})
    .then((data)=>{
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
