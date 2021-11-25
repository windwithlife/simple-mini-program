import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/icon.scss";
import './ListItem.less'


export default class Index extends Component {



  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  onItemClick = () => {
    console.log(this.props.item);
    if (this.props.onClick) {
      this.props.onClick(this.props.item);
    }
  }
  render() {
    let item = this.props.item;
    if(!item.image){
      item.image = require("../../../assets/images/user-bg.jpg");
    }
    return (


      <View onClick={this.onItemClick} className="module-list">
        <View
          className="module-list__item"
          key={item.id}
        >
          {/* <AtIcon
              prefixClass="iconfont"
              // value={item.icon}
              value="device"
              className="module-list__icon"
            /> */}
          <View className="module-list__icon">
            <Image
              className="img"
              src={item.image}
            />
          </View>
          <View className="module-list__right">
            <View className="module-list__right__info">
              <View className="__title">{item.name}</View>
              <View className="__content">{item.description}</View>

            </View>
            <View className="module-list__right__arrow">
              <Text className="arrow_text" >查看详情</Text>
              <AtIcon value="chevron-right" />
            </View>
          </View>
        </View>
      </View>



    )
  }
}
