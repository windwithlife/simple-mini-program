
import { View,  } from '@tarojs/components'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/search-bar.scss";
import {BasePage} from "simple-framework-mini/base";

import BrandModel from '../../models/BrandModel';
import AdvertModel from '../../models/AdvertModel';
import NewsModel from '../../models/NewsModel';

import SwiperNormal from '../components/swiper/swiper-normal';
import HandleNormal from '../components/entrypoint/handle-normal';
import RecommendNormal from '../components/recommend/recommend-normal';




export default class Index extends BasePage {
  state={
    sectionList:[],
    showPage: false,
    swipperList:[],
    handleList:[],
    newsList:[],

  }

  constructor(props){
    super(props);
    //this.pageConfig = new PageConfig();
    this.pageId = "PID-TestPage";
    this.pageName ="首页"
  }

  componentDidMount() {
    let that = this;
    super.componentDidMount();
    AdvertModel.queryByPosition({id:476}).then((advertData)=>{
      advertData.map((item)=>{
        item.titleColor = 'blue';
        item.playCount = 1000;
        item.pic = item.image;
    })
      that.setState({swipperList:advertData});
    }

    );
    BrandModel.queryAll().then((data)=>{
      data.map((item)=>{
          item.title = item.content = item.name;
          item.icon = "device";
      })
      //console.log('handle data...',data);
      that.setState({handleList:data});
    });

    NewsModel.queryAll().then((data)=>{
      data.map((item)=>{
          item.copywriter = "新";
          item.picUrl = item.image;
      })
      //console.log('news data...',data);
      that.setState({newsList:data});
    });

  }

  componentWillUnmount() { }

  componentDidShow() {
    super.componentDidShow();
   }

  componentDidHide() { }


  render() {
    let that = this;
    //console.log('render..............')
    return (
      <View >
      <SwiperNormal  data = {that.state.swipperList} />
       <HandleNormal data = {that.state.handleList} />
       <RecommendNormal data = {that.state.newsList} />
       <div style={{color:'#bbb'}}>test</div>
      </View>

    )
  }
}
