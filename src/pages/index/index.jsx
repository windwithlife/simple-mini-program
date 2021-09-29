import { Component } from 'react'
import { View, Text,Image,Swiper, SwiperItem } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton ,AtIcon,AtSearchBar} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/search-bar.scss";

import BasePage from "../../common/page/BasePage";

import {adList,PageList,RecommendList} from '../../../mock/data/ad_list'
import Model from '../../common/store/model'

export default class Index extends BasePage {

  

  componentDidMount() {
      
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  goSearch() {
    this.gotoPage({url: `/pages/my/index`});
  }

  goPage(pageName) {
  
    this.showToast({
      title: "正在开发中，敬请期待.....",
      icon: "none"
    });
  }

  goDetail(pageName) {
    // Taro.navigateTo({
    //   url: `/pages/${pageName}/index`
    // })
    Taro.showToast({
      title: "正在开发中，敬请期待",
      icon: "none"
    });
  }
  

  render() {
    return (

  
      <View >
        
        <View onClick={this.goSearch.bind(this)}>
          <AtSearchBar
            actionName="搜一下"
            disabled={true}
            value=' Search'
            onChange={this.goSearch.bind(this)}
          />
        </View>
       
        <Swiper
          className="banner_list"
          indicatorColor="#999"
          indicatorActiveColor="#d43c33"
          circular
          indicatorDots
          autoplay
        >
          {adList.map(item => (
            <SwiperItem key={item.id} className="banner_list__item">
              <Image src={item.pic} className="banner_list__item__img" />
            </SwiperItem>
          ))}
        </Swiper>
        {/**功能区 *******************/}
        <View className="handle_list">
        {PageList.map(item => (
             <View
             key={item.id}
             className="handle_list__item"
             onClick={this.goPage.bind(this, item.title)}
           >
             <View className="handle_list__item__icon-wrap">
               <AtIcon
               
                 prefixClass="iconfont"
                 value={item.icon}
                 size="25"
                 color="#ffffff"
                 className="handle_list_item__icon"
               ></AtIcon>
             </View>
             <Text className="handle_list__item__text">{item.title}</Text>
           </View>
          ))}
        </View>



        <View className="recommend_playlist">
          <View className="recommend_playlist__title">推荐歌单</View>
          <View className="recommend_playlist__content">
            {RecommendList.map(item => (
              <View
                key={item.id}
                className="recommend_playlist__item"
                onClick={this.goDetail.bind(this, item)}
              >
                <Image
                  src={`${item.picUrl}?imageView&thumbnail=250x0`}
                  className="recommend_playlist__item__cover"
                />
                <View className="recommend_playlist__item__cover__num">
                  <Text className="at-icon at-icon-sound"></Text>
                  {item.playCount < 10000
                    ? item.playCount
                    : `${Number(item.playCount / 10000).toFixed(0)}万`}
                </View>
                <View className="recommend_playlist__item__title">
                  {item.name}
                </View>
              </View>
            ))}
          </View>
        </View>
        


      </View>
     
    )
  }
}
