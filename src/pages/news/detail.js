
import { View, Text, RichText,  Image } from '@tarojs/components'
import { BasePage } from 'simple-framework-mini/lib/base'

import NewsModel from '../../models/NewsModel';
//import * as RichTextHelper from '../../common/utils/richtext';
import * as RichTextHelper from 'simple-framework-mini/utils';


import './detail.less';

export default class Index extends BasePage {

    config = {
        navigationBarTitleText: '详情页'
    }



    componentDidMount() {
        let that = this;
        //let params = Taro.getCurrentInstance().router.params;
        let params = this.params();
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

                </View>


            </View>


        )
    }
}
