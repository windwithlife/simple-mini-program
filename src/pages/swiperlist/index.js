import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Text, Swiper, SwiperItem, ScrollView,Image } from '@tarojs/components'
import './index.scss'
import ListItem from './compoments/TaskListItem';
import LeftItem from './compoments/LeftSideItem';
import Model from '../../models/TodoModel';

export default class Index extends Component {

    config = {
        navigationBarTitleText: '轮播列表'
    }



    componentDidMount() {
        console.log('获取列表数据')
        this.getListData();
       
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    state = {
        scrollHeight: '400',
        leftArray: [],
        mainArray: [],
        leftIndex: 0,
        leftIntoView: `left-0`
    }

    /* 初始化滚动区域 */
    initScrollView = () => {
        var that = this
        let view = Taro.createSelectorQuery().select('#scroll-panel');
        view.boundingClientRect(res => {
            console.log(res)
            that.setState({
                scrollTopSize: res.top,
                scrollHeight: res.height
            });
        }).exec();
    }

    /* 获取列表数据 */
    getListData = () => {
        // Promise 为 ES6 新增的API ，有疑问的请自行学习该方法的使用。
        /* 因无真实数据，当前方法模拟数据。正式项目中将此处替换为 数据请求即可 */
        //Taro.showLoading();
        let that = this;
        Model.queryAll().then((result)=>{
            let [left, main] = [[], []];
             

            for (let i = 0; i < 5; i++) {
                left.push(`${i + 1}类商品`);

                let list = [];
                let max = Math.floor(Math.random() * 15) || 8;
                for (let j = 0; j < max; j++) {
                    list.push(j);
                }
                main.push({
                    title: `第${i + 1}类商品标题`,
                    list: result,
                })
            }
            console.log({ left, main })
            console.log('-----------请求接口返回数据示例-------------');
            console.log(result);

            this.setState({
                leftArray: left,
                mainArray: main
            },()=>{that.initScrollView()});
            //Taro.hideLoading();
            console.log(left,main);

                /* 等待滚动区域初始化完成 */
            
            /* 获取列表数据，你的代码从此处开始 */
            

           

  
           
        });
    }

    /* 左侧导航点击 */
    leftTap = (index) => {
        console.log(" click left item"  +index);
        this.setState({
            leftIndex: index,
            leftIntoView: `left-${index > 5 ? (index - 5) : 0}`
        })
    }

    /* 轮播图切换 */
    swiperChange = (e) => {
        console.log(Taro.getEnv())
        let index
        if(Taro.getEnv() === 'WEB'){
            index = e.detail.current;
        }else{
            index = e.currentTarget.current;
        }
        this.setState({
            leftIndex: index,
            leftIntoView: `left-${index > 5 ? index - 5 : 0}`
        })
    }

    render() {
        let that = this;
        const { scrollHeight, leftArray, mainArray, leftIndex, leftIntoView } = this.state
        console.log("scroll-height---->" +  scrollHeight);
        return (
            <View className='container'>

                <View className='scroll-panel' id="scroll-panel">

                    <View className='list-box'>

                        <View className="left">
                            {leftArray.length>0&&<ScrollView
                                scrollY={true}
                                style={`height:${scrollHeight}px;`}
                                // style={'height: 400px'}
                                scrollIntoView={leftIntoView}
                                scrollWithAnimation={true}
                            >
                                {
                                    leftArray.map((item, index) => {
                                        
                                        return (
                                            // <View
                                            //     className={`item ${index == leftIndex ? 'active' : ''}`}
                                            //     key={index}
                                            //     id={`left-${index}`}
                                            //     onClick={this.leftTap.bind(this, index)}
                                            // >
                                            //     {item}
                                            // </View>
                                            
                                            <LeftItem id={`left-${index}`}  active ={index == leftIndex ? 'active' : ''}
                                            key={item} onClick={this.leftTap.bind(that, index)} item={item}/>
                                          
                                        )
                                    })
                                }
                            </ScrollView>}
                        </View>

                        <View className='main'>
                        {mainArray.length>0 && <Swiper
                                className='swiper'
                                style={`height:${scrollHeight}px;`}
                                // style={'height: 400px'}
                                current={leftIndex}
                                onChange={this.swiperChange.bind(this)}
                                vertical={true}
                                duration={300}
                            >
                                {
                                    mainArray.map((item, index) => {
                                        return (
                                            <SwiperItem
                                                key={index}
                                            >
                                                <ScrollView
                                                    scrollY={true}
                                                    style={`height:${scrollHeight}px;`}
                                                    // style={'height: 400px'}
                                                >
                                                    <View className='item'>
                                                        <View className='title'>
                                                            <View>{item.title}</View>
                                                        </View>
                                                        {
                                                            item.list.map((item2, index2) => {
                                                                return (
                                                                    // <View className='goods' key={index2}>
                                                                    //     <Image  className='logo' src={require('../../assets/images/Taro.png')}></Image>
                                                                    //     <View>
                                                                    //         <View>第{index2 + 1}个商品标题</View>
                                                                    //         <View className="describe">第{index2 + 1}个商品的描述内容</View>
                                                                    //         <View className="money">第{index2 + 1}个商品的价格</View>
                                                                    //     </View>
                                                                        
                                                                    // </View>
                                                                    <ListItem key={item2.id} item={item2}></ListItem>
                                                                )
                                                            })
                                                        }
                                                    </View>
                                                </ScrollView>
                                            </SwiperItem>
                                        )
                                    })
                                }

                            </Swiper>}
                        </View>

                    </View>


                </View >

                <View className="bottom-panel">
                    {/* 底部面板，可添加所需要放在页面底部的内容代码。比如购物车栏目 */}
                    <View className="bottom-panel-text">
                        <View>这里底部内容占位区域，不需要则删除</View>
                        <View>可添加需放在页面底部的内容，比如购物车栏目</View>
                    </View>
                </View>

            </View >

        )
    }
}
