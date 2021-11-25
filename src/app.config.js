export default {
  pages: [
    "pages/home/index",
    "pages/goods/index",
    "pages/goods/list",
    "pages/goods/detail",
    "pages/news/detail",
    "pages/imagetext/detail",
    "pages/my/index",
    "pages/history/index",
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
      // {
      //   text: "首页",
      //   pagePath:"pages/index/index",
      //   selectedIconPath: "./assets/images/tab-cate-current.png",
      //   iconPath: "./assets/images/tab-cate.png"
      // },
      {
        text: "首页",
        pagePath: "pages/home/index",
        selectedIconPath: "./assets/images/tab-home-current.png",
        iconPath: "./assets/images/tab-home.png"
      },
      {
        text: "面板",
        pagePath: "pages/goods/index",
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
