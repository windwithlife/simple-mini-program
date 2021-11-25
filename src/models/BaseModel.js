// @ts-ignore
/* eslint-disable */
import {Model} from 'simple-framework-mini/base';
import config from '../../config/config';

const gateway = config.gateway;
console.log('gateway...', gateway);


export default class BaseModel {
  constructor(props){
    if(props.bizPath){
      this.bizPath =  props.bizPath;
    }
  }
  fetch_post(url, params, options){
    return new Model({gateway:gateway,bizPath:this.bizPath}).fetch_post(url,params,options);
  }
  fetch_get(url,query){
    return new Model({gateway:gateway,bizPath:this.bizPath}).fetch_get(url,query);
  }
}
