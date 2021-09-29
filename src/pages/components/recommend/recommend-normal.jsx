

import React from "react";
import { View, Text,Image,Swiper, SwiperItem } from '@tarojs/components'
import { AtButton ,AtIcon,AtSearchBar} from 'taro-ui'
import "taro-ui/dist/style/components/icon.scss";
import {router} from '../../../common/base';
import "./recommend.less";

const Page = (props) => {
    let list = props.data;
    const gotoPage = function(target){
      router.gotoPage({url: target});
    }
    return (
      <View className="recommend_playlist">
          <View className="recommend_playlist__title">推荐歌单</View>
          <View className="recommend_playlist__content">
            {list.map(item => (
              <View
                key={item.id}
                className="recommend_playlist__item"
                onClick={gotoPage.bind(this, item)}
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


    );
};

export default Page;