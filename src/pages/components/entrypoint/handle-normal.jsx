

import React from "react";
import { View, Text, Image} from '@tarojs/components'
import "taro-ui/dist/style/components/icon.scss";
import {Router} from 'simple-framework-mini/base';
import "./entrypoint.less";

const Page = (props) => {
  let list = props.data;
  const gotoPage = function (brandId) {
    Router.gotoPage({ url: '/pages/goods/list?brandId=' + brandId });
  }
  return (
    <View className="handle_list">
      <View className="list_title">品牌厂商</View>

      {list.map(item => (
        <View
          key={item.id}
          className="handle_list__item"
          onClick={gotoPage.bind(this, item.id)}
        >
          <View className="handle_list__item__icon-wrap">
            <Image src={item.logo} className="handle_list_item__icon" />
          </View>

          <Text className="handle_list__item__text">{item.title}</Text>
        </View>
      ))}
    </View>


  );
};

export default Page;
