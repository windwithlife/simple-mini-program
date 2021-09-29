

import React from "react";
import { View, Text,Image,Swiper, SwiperItem } from '@tarojs/components'
import { AtButton ,AtIcon,AtSearchBar} from 'taro-ui'
import "taro-ui/dist/style/components/icon.scss";
//import PageRouter from "../../../common/page/router";
import {router} from '../../../common/base';
import "./entrypoint.less";

const Page = (props) => {
    let list = props.data;
    const gotoPage = function(target){
      router.gotoPage({url: target});
    }
    return (
      <View className="handle_list">
      {list.map(item => (
           <View
           key={item.id}
           className="handle_list__item"
           onClick={gotoPage.bind(this, item.title)}
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


    );
};

export default Page;