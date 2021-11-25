import Taro from "@tarojs/taro";
class PageRouter{
    $instance = Taro.getCurrentInstance();
    constructor(){
        Taro.getCurrentInstance().router.params
    }
    gotoPage(params){
        if (params?.url){
            Taro.navigateTo({...params});
        }
    }
    getParams(){
        return this.$instance.router.params;
    }    
}
export default new PageRouter();