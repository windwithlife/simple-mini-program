import { Component } from 'react'
import { View, Text, } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/icon.scss";
import './LeftSideItem.less'
import { saveImageToPhotosAlbum } from '@tarojs/taro';

export default class Index extends Component {

 

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let item = this.props.item;
    let that = this;
    let selected = this.props.active;
    return (

      <View onClick={() => that.props.onClick(item)}  className="list-item-left">
        <View className="module-list">
          <View
            // className="module-list__item"
            className={`module-list__item ${selected ? 'active' : ''}`}
            key={item.id}
            data-id={item.id}
            data-name={item.title}
            // onClick={() => handleLocation(item.id)}
          >
            
            <View className="module-list__info">
              <View  className={`title ${selected ? 'active' : ''}`} >{item}</View>
              {/* <View className="content">{item}</View> */}
            </View>
           

          </View>
        </View>
      </View>


    )
  }
}
