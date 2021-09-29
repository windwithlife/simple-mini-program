// @ts-ignore
/* eslint-disable */
import Model from '../common/store/model';


let bizPath = '/account-service/account';
export default class DefaultModel {
  //*********************************API for Account Section ************************************/
  static  wechatLogin(params, options) {
    return  new Model({bizPath}).fetch_post('/wechatLogin', params, options);
  }
  static  login(params, options) {
    return  new Model({bizPath}).fetch_post('/login', params, options);
  }
  static  removeBatch(params, options) {
    return  new Model().fetch_post('/common-service/todo/removeBatch', params, options);
  }
  static removeById(params, options) {
    return  new Model().fetch_post('/common-service/todo/removeById', params, options);
  }
  static  update(params, options) {
    return  new Model().fetch_post('/common-service/todo/update', params, options);
  }
  static addNew(params, options) {
    return new Model().fetch_post('/common-service/todo/addNew', params, options);
  }
  static  queryAll(options) {
    return new Model().fetch_get('/common-service/todo/queryAll', {})
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
