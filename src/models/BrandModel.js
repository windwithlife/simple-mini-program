// @ts-ignore
/* eslint-disable */
//import Model from '../common/store/model';
import BaseModel from './BaseModel';
let bizPath = '/common-service/brand';

const Model = new BaseModel({bizPath});

export default class DefaultModel {

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
