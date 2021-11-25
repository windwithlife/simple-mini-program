import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Text, Swiper, SwiperItem, ScrollView, Image } from '@tarojs/components'
import './index.less'
// import ListItem from './compoments/TaskListItem';
import ListItem from './compoments/ListItem-ImageText-Goods';
import LeftItem from './compoments/LeftSideItem';
import Model from '../../models/BrandModel';
import GoodsModel from '../../models/GoodsModel';
import Router from '../../common/page/router';
import BasePage from '../../common/page/BasePage';

export default class Index extends BasePage {

    config = {
        navigationBarTitleText: '轮播列表'
    }

    state = {
        scrollHeight: '400',
        goodsList: [],
    }
    constructor(props){
        super(props);
        this.pageName="品牌所属商品列表页面";
    }
    componentDidMount() {
        super.componentDidMount();
        let that = this;
        console.log('获取列表数据')
        let params = Taro.getCurrentInstance().router.params;
        console.log('list params', params);
        GoodsModel.queryByBrand({ id: params.brandId }).then((response) => {
            console.log('list data from goodss...', response);
            that.setState({ goodsList: response });
        });

    }

    componentWillUnmount() { }

    componentDidShow() {
        super.componentDidShow();
     }

    componentDidHide() { }



    /* 初始化滚动区域 */
    initScrollView = () => {
        var that = this
        let view = Taro.createSelectorQuery().select('#scroll-panel');
        view.boundingClientRect(res => {
            //console.log(res)
            that.setState({
                scrollTopSize: res.top,
                scrollHeight: res.height
            });
        }).exec();
    }

    rightItemTap = (item) => {
        console.log(" click right item", item);
        Router.gotoPage({ url: '/pages/goods/detail?goodsId=' + item.id });

    }

    

    render() {
        let that = this;
        const { scrollHeight, leftArray, mainArray, leftIndex, leftIntoView } = this.state
        //console.log("scroll-height---->" + scrollHeight);
        return (
            <View className='container'>

                <View className='scroll-panel' id="scroll-panel">
                    <ScrollView
                        scrollY={true}
                    >
                        <View className='item'>

                            {
                                that.state.goodsList.map((item2, index2) => {
                                    return (

                                        <ListItem onClick={that.rightItemTap} key={item2.id} item={item2}></ListItem>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>

                </View >


            </View >

        )
    }
}
