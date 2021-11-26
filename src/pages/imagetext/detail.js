

import { View, RichText, Image } from '@tarojs/components'

import { BasePage } from 'simple-framework-mini/lib/base'
import ImageTextModel from '../../models/ImageTextModel';


import './detail.less';


export default class Index extends BasePage {

    config = {
        navigationBarTitleText: '详情页'
    }



    componentDidMount() {
        let that = this;
        // let params = Taro.getCurrentInstance().router.params;
        let params = this.params();
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

        return (
            <View className="container">
                <View>
                    <Image src={`${news.image}`} className="head-image"></Image>
                </View>
                <View className="horizon"></View>
                <View>
                    <RichText nodes={contentText} />

                </View>

            </View>

        )
    }
}
