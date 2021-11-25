
import { Component } from 'react'
import { View, Text, RichText, Swiper, SwiperItem, ScrollView, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import 'taro-parse/dist/style/main.scss'
//import RichTextParser from 'taro-parse';
import NewsModel from '../../models/NewsModel';
import * as RichTextHelper from '../../common/utils/richtext';


import './detail.less';

export default class Index extends Component {

    config = {
        navigationBarTitleText: '详情页'
    }



    componentDidMount() {
        let that = this;
        let params = Taro.getCurrentInstance().router.params;
        console.log('news id......', params);
        NewsModel.findById({ id: params.newsId }).then((response) => {
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
                <View className='head-image-wrapper' >
                    <Image src={`${news.image}`} className="head-image"></Image>
                </View>
                <View className="author-date">
                    {/* <Image src="/images/avatar/3.png" className="avatar"></Image> */}
                    <Text className="author">{news.author}</Text>
                    {/* <Text className="const-date">发表于</Text> */}
                    {/* <Text className="date">3天前</Text> */}
                </View>
                <Text className="title">{news.title}</Text>

                <View className="tool">
                    <View className="circle-img">
                        {/* <Image src="/images/icon/collection.png"></Image>
                        <Image src="/images/icon/share.png" className="share-img"></Image> */}
                    </View>
                    <View className="horizon"></View>
                </View>
                <View>
                    <RichText nodes={RichTextHelper.convertRichTextImage(contentText)} />
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
                {/* <Text className="detail"> */}

                {/* {news.content} */}
                {/* 菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，壳凸红脂块块香”；在《世说新语》里，晋毕卓更是感叹“右手持酒杯，左手持蟹螯，拍浮酒船中，便足了一生矣。”漫漫人生长路，美食与爱岂可辜负？于是作为一个吃货，突然也很想回味一下属于我的味蕾记忆。记忆中的秋蟹，是家人的味道，弥漫着浓浓的亲情。\n\n是谁来自山川湖海，却囿于昼夜，厨房与爱？ 是母亲，深思熟虑，聪明耐心。吃蟹前，总会拿出几件工具，煞有介事而乐此不疲。告诉我们螃蟹至寒，需要佐以姜茶以祛寒，在配备的米醋小碟里，亦添入姜丝与紫苏，前者驱寒后者增香。泡好菊花茶，岁月静好，我们静等。 */}
                {/* </Text> */}

            </View>


        )
    }
}
