// @ts-ignore
/* eslint-disable */
import BaseModel from './BaseModel';

const Model = new BaseModel({bizPath:''});
export default class DefaultModel {
  //*********************************API for Category Section ************************************/
  static createPage(params, options) {
    return Model.fetch_post('/createPage', params, options);
  }
}
