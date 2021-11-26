
import { View, Button, Text } from '@tarojs/components'

import * as dayjs from 'dayjs';
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/icon.scss";
// import Client from '../../common/client/client';
import './index.less'
import {BasePage,ClientUser } from 'simple-framework-mini/base';



export default class Index extends BasePage {

  state = {
    visitList: [],
  }
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    super.componentDidMount();
    let list = ClientUser.getFootPrint();
    this.setState({ visitList: list });
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  cleanVisitHistory =()=>{
    ClientUser.cleanFootPrint();
    this.setState({visitList:[]});
  }
  render() {
    let that = this;
    return (
      <View className='index'>

        <View className="page page-index">
          <View >
            <Button type='primary' >页面浏览足迹</Button>
            <View >
              <Text className='title-text' >---最近30次记录</Text>

            </View>
          </View>

          {that.state.visitList.map((item, index) => (
            <View key={item.id} className="module-list">
              <View
                className="module-list__item"
              >


                <View className="module-list__info">
                  <View className="title">{item.name}:</View>
                  {/* <View className="content">{item.content}</View> */}
                  <View className="content">{item.time}</View>
                </View>


              </View>
            </View>
          ))}

        </View>
        <Button onClick={that.cleanVisitHistory} >清除全部访问记录</Button>
      </View>

    )
  }
}
