import { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton ,AtIcon} from 'taro-ui'
import Client from '../../common/client/client';

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'
import "taro-ui/dist/style/components/icon.scss";
import BasePage from '../../common/page/BasePage';


const userInfo = {
  profile:{
    avatarUrl: '',
    nickname: '测试用户名',
    newFollows: 300,
    eventCount: 40,
    followeds: 400,

  },
  level: 4,
}

export default class Index extends BasePage {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: Client.getUserInfo(),
      isLogin: Client.isLogin(),
      searchValue: ""
    };
  }


  componentDidMount() { 
    console.log('Did Show in  DidMount....');
  }

  componentWillUnmount() {
    console.log('Did Show in  WillUnMount....');
   }

  componentDidShow() { 
    console.log('Did Show in ....');
     if(Client.isLogin()){
       return;
     }
     
  }

  componentDidHide() { }

  signIn=()=> {
    //PageHelper.gotoPage({url:'/pages/user/login/index'});
    this.gotoPage({url:'/pages/user/login/index'});
    console.log('gotopage.....')
    // Taro.navigateTo({
    //       url: "/pages/user/login/index"
    //     });
  }
  signOut(pageName) {
    // Taro.navigateTo({
    //   url: `/pages/${pageName}/index`
    // })
    Taro.showToast({
      title: "正在开发中，敬请期待",
      icon: "none"
    });
  }

  goPage =(pageName) =>{
    console.log('test gotopage')
    this.gotoPage({
      url: `/pages/list/index`
    })
    // this.showToast({
    //   title: "正在开发中，敬请期待",
    //   icon: "none"
    // });
  }
  

  render() {
    return (
      <View className='page'>

  
        <View className="header">
          <View className="header__left" >
            <Image
              src={`${userInfo.profile.avatarUrl}`}
              className="header__img"
            />
            <View className="header__info">
              <View className="header__info__name">
                {userInfo.profile.nickname}
              </View>
              <View>
                <Text className="header__info__level">LV.{userInfo.level}</Text>
              </View>
            </View>
          </View>
          {this.state.isLogin ? <AtIcon
            prefixClass="iconfont"
            value="wechat"
            size="30"
            color="#d43c33"
            className="exit_icon"
            onClick={this.signOut.bind(this)}
          ></AtIcon> : <AtIcon
          prefixClass="iconfont"
          value="device"
          size="30"
          color="#d43c33"
          className="exit_icon"
          onClick={this.signIn.bind(this)}
        ></AtIcon>}
          
        </View>

        <View className="user_count">
          <View
            className="user_count__sub"
          >
            <View className="user_count__sub--num">
              {userInfo.profile.eventCount || 0}
            </View>
            <View>动态</View>
          </View>
          <View
            className="user_count__sub"
          >
            <View className="user_count__sub--num">
              {userInfo.profile.newFollows || 0}
            </View>
            <View>关注</View>
          </View>
          {/* <View
            className="user_count__sub"
          >
            <View className="user_count__sub--num">
              {userInfo.profile.followeds || 0}
            </View>
            <View>粉丝</View>
          </View> */}
        </View>
       

        <View className="user_brief">
          <View className="user_brief__item">
            <Image
              className="user_brief__item__img"
              src={require("../../assets/images/my/my_collection_icon.png")}
            />
            <View
              className="user_brief__item__text"
              onClick={this.goPage.bind(this)}
            >
              <Text>我的收藏</Text>
              <Text className="at-icon at-icon-chevron-right"></Text>
            </View>
          </View>
        
          
          <View className="user_brief__item">
            <Image
              className="user_brief__item__img"
              src={require("../../assets/images/my/my_radio.png")}
            />
            <View
              className="user_brief__item__text"
              onClick={this.goPage.bind(this)}
            >
              <Text>我的任务</Text>
              <Text className="at-icon at-icon-chevron-right"></Text>
            </View>
          </View>
          <View className="user_brief__item">
            <Image
              className="user_brief__item__img"
              src={require("../../assets/images/my/recent_play.png")}
            />
            <View
              className="user_brief__item__text"
              onClick={this.goPage.bind(this, "recentPlay")}
            >
              <Text>最近浏览</Text>
              <Text className="at-icon at-icon-chevron-right"></Text>
            </View>
          </View>
       </View>
       

        <View className="page page-index">
        
        
        
        </View>
      </View>
     
    )
  }
}
