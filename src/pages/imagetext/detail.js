
import { Component } from 'react'
import { View, Text, RichText, Swiper, SwiperItem, ScrollView, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import 'taro-parse/dist/style/main.scss'
//import RichTextParser from 'taro-parse';
import ImageTextModel from '../../models/ImageTextModel';


import './detail.less';


export default class Index extends Component {

    config = {
        navigationBarTitleText: '详情页'
    }



    componentDidMount() {
        let that = this;
        let params = Taro.getCurrentInstance().router.params;
        console.log('imagetext id......', params);
        ImageTextModel.findById({ id: params.imagetextId }).then((response) => {
            that.setState({ news: response.data });
        })
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    state = {
        news: {
            title: 'news',
            subTitle: 'subTitle....',
            image: '',//"../../assets/images/temp/banner1.jpg",
            content: '暂无内容',
            author: 'cxy',

        },
        curIndex: 0,

    }
    onSwitchTab = (tabIndex) => {
        this.setState({ curIndex: tabIndex });
    }
    render() {
        let that = this;
        let news = this.state.news;
        const contentText = news.content;
        let curIndex = this.state.curIndex;
        return (
            <View className="container">
                <View>
                    <Image src={`${news.image}`} className="head-image"></Image>
                </View>
                <View className="horizon"></View>
                <View>
                    <RichText nodes={contentText} />
                    {/* <RichTextParser
                        type='markdown'
                        theme='light'
                        // onImgClick={this.imgClick}
                        // onLinkClick={this.linkClick}
                        onLoaded={() => {
                            Taro.hideLoading()
                        }}
                        yumlApi='https://md.werfei.com/?yuml'
                        latexApi='https://md.werfei.com/?tex'
                        content={contentText}
                    /> */}
                </View>

            </View>


        )
    }
}
