import { Component } from 'react'
import { View,  } from '@tarojs/components'
import { AtButton ,AtIcon} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'
import "taro-ui/dist/style/components/icon.scss";

import {List} from '../../../mock/data/list'
export default class Index extends Component {


  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        
        

        <View className="page page-index">
        
          {List.map((item, index) => (
            <View  key={item.id} className="module-list">
            <View
              className="module-list__item"
             
              data-id={item.id}
              data-name={item.title}
              onClick={() => handleLocation(item.id)}
            >
              <AtIcon
                prefixClass="iconfont"
                value={item.icon}
                className="module-list__icon"
              />
              <View className="module-list__info">
                <View className="title">{item.title}</View>
                <View className="content">{item.content}</View>
              </View>
              <View className="module-list__arrow">
              <AtIcon value="chevron-right" />
              </View>
              
            </View>
            </View>
          ))}
        
        </View>
      </View>
     
    )
  }
}
