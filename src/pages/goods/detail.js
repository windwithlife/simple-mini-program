
import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, RichText,Swiper, SwiperItem, ScrollView, Image } from '@tarojs/components'
import './detail.less';
import GoodsModel from '../../models/GoodsModel';
import BasePage from '../../common/page/BasePage';
import * as RichTextHelper from '../../common/utils/richtext';

export default class Index extends BasePage {

    config = {
        navigationBarTitleText: '详情页'
    }

    constructor(props){
        super(props)
        this.pageName = "商品详情页";
    }

    componentDidMount() {
        super.componentDidMount();
        let that = this;
        let params = Taro.getCurrentInstance().router.params;
        //console.log('goods id...', params);
        GoodsModel.findById({id:params.goodsId}).then((response)=>{
            console.log('goods data',response.data);
            that.setState({goods:response.data});
        });

    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    state = {
        goods: {
            name: 'TX面板',
            image: '',
            price: 300,
            stock: '有货',
            content: '详情信息，产品说明',
            parameter: 'test',
            service: 'teat',

        },
        curIndex: 0,

    }
    onSwitchTab = (tabIndex) => {
        this.setState({curIndex: tabIndex});
    }
    render() {
        let that = this;
        let goods = this.state.goods;
        let curIndex = this.state.curIndex;
        return (
            <View className="main">
                <View className="goods-box">
                    <Image src={goods.image} className="goods-thumb"></Image>

                    <View className="goods-operation">
                        <Text className="goods-operation-num">{goods.name}</Text>
                    </View>
                    <Text className="goods-stock">{goods.description}</Text>
                   
                    {/* <View className="goods-price">￥{goods.price}</View> */}
                </View>
                <View className="goods-tab-box">
                    <View className={`goods-tab-nav  ${curIndex === 0 ?'on':''}`} onClick= {that.onSwitchTab.bind(that,0)} data-index="0">商品详情</View>
                    <View className={`goods-tab-nav  ${curIndex === 1 ?'on':''}`} onClick= {that.onSwitchTab.bind(that,1)} >产品参数</View>
                    <View className={`goods-tab-nav  ${curIndex === 2 ?'on':''}`} onClick= {that.onSwitchTab.bind(that,2)} >售后保障</View>
                    <View className="goods-content">
                        {(curIndex===0) && <View><RichText  nodes={ RichTextHelper.convertRichTextImage(goods.content) } /></View>}
                        {(curIndex===1) && <View><RichText  nodes={ RichTextHelper.convertRichTextImage(goods.parameter) } /></View>}
                        {(curIndex===2) && <View><RichText  nodes={ RichTextHelper.convertRichTextImage(goods.service) } /></View>}
                    </View>
                </View>
            </View>

        )
    }
}
