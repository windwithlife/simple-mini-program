import { Component } from 'react'
import { View, Text,Image,Swiper, SwiperItem } from '@tarojs/components'
import Taro, { stopDeviceMotionListening } from '@tarojs/taro'
import { AtButton ,AtIcon,AtSearchBar} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/search-bar.scss";
import BasePage from "../../common/page/BasePage";
import PageConfig from "../components/config";


import {adList,PageList,RecommendList} from '../../../mock/data/ad_list'


export default class Index extends BasePage {
  state={
    sectionList:[],
  }
  pageId
  constructor(props){
    super(props);
    this.pageConfig = new PageConfig();
    this.pageId = "PID-TestPage";
  }
  
  componentDidMount() {
    super.componentDidMount();
     this.pageConfig.addPageSection("search-normal",{});
     this.pageConfig.addPageSection("swiper-normal",adList);
     this.pageConfig.addPageSection("handle-normal",PageList);
     this.pageConfig.addPageSection("recommend-normal",RecommendList);
     let sections = this.pageConfig.getPageSectionList();
     this.setState({sectionList:sections});
     console.log('didmount in children class...')
           
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  goSearch() {
    this.gotoPage({url: `/pages/my/index`});
  }



  render() {
    
    return (
      <View >       
        {this.state.sectionList.map(item=>{
          let itemData = item.data;
          let SectionItem=  item.component;
          return(
            <SectionItem  data={itemData} ></SectionItem>
          );
        })}
      </View>
     
    )
  }
}
