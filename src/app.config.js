export default {
  pages: [
    "pages/test/index",
    "pages/index/index",
    "pages/swiperlist/index",
    "pages/my/index",
    "pages/list/index",
    "pages/user/login/index",
    
   
  ],
  window: {
    backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
  },
  tabBar: {
    list: [
      {
        text: "首页",
        pagePath:"pages/index/index",
        selectedIconPath: "./assets/images/tab-cate-current.png",
        iconPath: "./assets/images/tab-cate.png"
      },
      {
        text: "测试页",
        pagePath: "pages/test/index",
        selectedIconPath: "./assets/images/tab-home-current.png",
        iconPath: "./assets/images/tab-home.png"
      },
      {
        text: "任务",
        pagePath: "pages/swiperlist/index",
        selectedIconPath: "./assets/images/tab-home-current.png",
        iconPath: "./assets/images/tab-home.png"
      },
      {
        text: "我的",
        pagePath:"pages/my/index",
        selectedIconPath: "./assets/images/tab-cate-current.png",
        iconPath: "./assets/images/tab-cate.png"
      },
     
    ]
  }
}
