import { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton ,AtIcon} from 'taro-ui'
import Client from '../../common/client/client';

import "taro-ui/dist/style/components/button.scss" // 按需引入

import "taro-ui/dist/style/components/icon.scss";
import BasePage from '../../common/page/BasePage';
import ClientUser from '../../common/user/ClientUser';
import './index.less'

const USER_INFO = "__userinfo__";

let defaultAvatarUrl = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';

const userInfo = {
  profile:{
    avatarUrl: '',
    nickname: '匿名用户',
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
      avatarUrl: defaultAvatarUrl,
      nickname: '匿名用户',
      gender: '',
      userInfo: ClientUser.getUserInfo(),
      isLogin: ClientUser.isLogin(),
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

  onLogin = () =>{
    ClientUser.obtainUserInfo().then((res)=> {
      console.log(res);
      let gender = '女';
      if (res.gender === 0){
        gender = '男';
      }
      this.setState({userInfo:res,isLogin:true,avatarUrl:res.avatarUrl,nickname:res.nickName,gender:gender})
    });
  }
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
      url: `/pages/history/index`
    })
    // this.showToast({
    //   title: "正在开发中，敬请期待",
    //   icon: "none"
    // });
  }
  

  render() {
    const that = this;
    
    return (
      <View className='page'>

        <View className="header">
          <View className="header__left" >
            <Image
              src={that.state.avatarUrl}
              className="header__img"
            />
            <View className="header__info">
              <View className="header__info__name">
                {that.state.nickname}
              </View>
              {/* <View>
                <Text className="header__info__level">LV.{userInfo.level}</Text>
              </View> */}
              {(!this.state.isLogin) && <View  onClick={this.onLogin.bind(this)}>
                <Text className="header__info__level">微信授权登录</Text>
              </View> }
            </View>
          </View>
          {/* {this.state.isLogin ? <AtIcon
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
        ></AtIcon>} */}
          
        </View>

        <View className="user_count">
          {/* <View
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
          </View> */}
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
          {/* <View className="user_brief__item">
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
         */}
          
          <View className="user_brief__item">
            <Image
              className="user_brief__item__img"
              src={require("../../assets/images/my/my_collection_icon.png")}
            />
            <View
              className="user_brief__item__text"
            >
              <Text>性别:</Text>
              <Text>{that.state.gender}</Text>
              {/* <Text className="at-icon at-icon-chevron-right"></Text> */}
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
