import PageHelper from "./page-helper";
import PageRouter from "./router";
import { Component } from "react";
import UbtClient from "../ubt/ubt-client";
import {logDebug} from "../utils/error";

let ubt_instance = new UbtClient();
export default class BasePage extends Component{
    constructor(){
        super();
    }
    componentDidMount() {
        this.sendPV();
    }
    gotoPage = (params) => {
        PageRouter.gotoPage(params);
    }
    routerParams(){
        PageRouter.getParams();
    }
    showToast = (params,options) => {
        PageHelper.showToast(params,options);
    }
    sendPV=()=>{
        if(this.pageId){
            ubt_instance.ubtSendPV({pageId:this.pageId});
        }
        
    }
    ubtTrace=(key,value)=>{
        ubt_instance.ubtTrace(key,value);
    }
    ubtMetric=()=>{
        ubt_instance.ubtMetric(key,value);
    }
    debugInfo = (name,info)=>{
        logDebug(name, info);
    }
}