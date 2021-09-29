import { Component } from 'react'
import { View, Text, } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/icon.scss";
import './TaskListItem.less'


export default class Index extends Component {



  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let item = this.props.item;
    return (

      <View  onClick={() => this.props.onClick} className="list-item-task">
        <View className="module-list">
          <View
            className="module-list__item"
            key={item.id}
            data-id={item.id}
            data-name={item.title}
           
          >
            <AtIcon
              prefixClass="iconfont"
              value={item.icon}
              className="module-list__icon"
            />
            <View className="module-list__info">
              <View className="title">{item.title}</View>
              <View className="content">{item.description}</View>
            </View>
            <View className="module-list__arrow">
              <AtIcon value="chevron-right" />
            </View>

          </View>
        </View>
      </View>


    )
  }
}
