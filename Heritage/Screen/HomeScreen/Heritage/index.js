import React, { Component } from '../../../node_modules/react';
import {
    Button, Text, View, Image,
    AppRegistry, StyleSheet, BackHandler,
} from 'react-native';
import Left from "./compents/left";
import Right from "./compents/right";
import { useNavigation } from "@react-navigation/native"

var http = "http://121.196.191.45";

function Heritage() {
    const navigation = useNavigation();
    return <HeritageComponent navigation={navigation} />
}

export default Heritage;
class HeritageComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clickTime: true,
            toast: false,
            isShow: false,
            countrys: [],//城市列表
            imgs: [],//图片列表
            country: "宁波市",//传到left的城市名称
            imgIndexs: [0, 1, 2, 3, 4, 5, 6, 7, 8],//决定传给imgs的index，所有图片被处理成一个集合
            allImages: [],//处理过的所有图片集合
            index: "",//跳转详情的唯一index
        }
    }

    componentDidMount() {
        let data = [
            {
                id: 1,
                country: "宁波市",
                imgs: [
                    //顶端四个空白+尾部四个空白
                    {
                        index: 0,
                        country: "宁波市",
                        img: ""
                    },
                    {
                        index: 1,
                        country: "宁波市",
                        img: ""
                    },
                    {
                        index: 2,
                        country: "宁波市",
                        img: ""
                    },
                    {
                        index: 3,
                        country: "宁波市",
                        img: ""
                    },
                    {
                        index: 4,
                        country: "宁波市",
                        img: { uri: http + "/picture/chuancheng/宁波/B1.png" }
                    },
                    {
                        index: 5,
                        country: "宁波市",
                        img: { uri: http + "/picture/chuancheng/宁波/B2.png" }
                    },
                    {
                        index: 6,
                        country: "宁波市",
                        img: { uri: http + "/picture/chuancheng/宁波/B3.png" }
                    },
                    {
                        index: 7,
                        country: "宁波市",
                        img: { uri: http + "/picture/chuancheng/宁波/B4.png" }
                    },
                    {
                        index: 8,
                        country: "宁波市",
                        img: { uri: http + "/picture/chuancheng/宁波/B5.png" }
                    },
                    {
                        index: 9,
                        country: "宁波市",
                        img: { uri: http + "/picture/chuancheng/宁波/B6.png" }
                    },
                    {
                        index: 10,
                        country: "宁波市",
                        img: { uri: http + "/picture/chuancheng/宁波/B7.png" }
                    },
                    {
                        index: 11,
                        country: "宁波市",
                        img: { uri: http + "/picture/chuancheng/宁波/B8.png" }
                    },
                    {
                        index: 12,
                        country: "宁波市",
                        img: { uri: http + "/picture/chuancheng/宁波/B9.png" }
                    },
                    {
                        index: 13,
                        country: "宁波市",
                        img: { uri: http + "/picture/chuancheng/宁波/B10.png" }
                    }]
            },
            {
                id: 2,
                country: "丽水市",
                imgs: [
                    {
                        index: 14,
                        country: "丽水市",
                        img: { uri: "" + "/picture/chuancheng/丽水/K1.png" }
                    },
                    {
                        index: 15,
                        country: "丽水市",
                        img: { uri: "" + "/picture/chuancheng/丽水/K2.png" }
                    },
                    {
                        index: 16,
                        country: "丽水市",
                        img: { uri: "" + "/picture/chuancheng/丽水/K3.png" }
                    },
                    {
                        index: 17,
                        country: "丽水市",
                        img: { uri: "" + "/picture/chuancheng/丽水/K4.png" }
                    },
                    {
                        index: 18,
                        country: "丽水市",
                        img: { uri: "" + "/picture/chuancheng/丽水/K5.png" }
                    },
                    {
                        index: 19,
                        country: "丽水市",
                        img: { uri: "" + "/picture/chuancheng/丽水/K6.png" }
                    },
                    {
                        index: 20,
                        country: "丽水市",
                        img: { uri: "" + "/picture/chuancheng/丽水/K7.png" }
                    },
                    {
                        index: 21,
                        country: "丽水市",
                        img: { uri: "" + "/picture/chuancheng/丽水/K8.png" }
                    },
                    {
                        index: 22,
                        country: "丽水市",
                        img: { uri: "" + "/picture/chuancheng/丽水/K9.png" }
                    },
                    {
                        index: 23,
                        country: "丽水市",
                        img: { uri: "" + "/picture/chuancheng/丽水/K10.png" }
                    },
                ]
            },
            {
                id: 3,
                country: "金华市",
                imgs: [
                    {
                        index: 24,
                        country: "金华市",
                        img: { uri: http + "/picture/chuancheng/金华/G1.png" }
                    },
                    {
                        index: 25,
                        country: "金华市",
                        img: { uri: http + "/picture/chuancheng/金华/G2.png" }
                    },
                    {
                        index: 26,
                        country: "金华市",
                        img: { uri: http + "/picture/chuancheng/金华/G3.png" }
                    },
                    {
                        index: 27,
                        country: "金华市",
                        img: { uri: http + "/picture/chuancheng/金华/G4.png" }
                    },
                    {
                        index: 28,
                        country: "金华市",
                        img: { uri: http + "/picture/chuancheng/金华/G5.png" }
                    },
                    {
                        index: 29,
                        country: "金华市",
                        img: { uri: http + "/picture/chuancheng/金华/G6.png" }
                    },
                    {
                        index: 30,
                        country: "金华市",
                        img: { uri: http + "/picture/chuancheng/金华/G7.png" }
                    },
                    {
                        index: 31,
                        country: "金华市",
                        img: { uri: http + "/picture/chuancheng/金华/G8.png" }
                    },
                    {
                        index: 32,
                        country: "金华市",
                        img: { uri: http + "/picture/chuancheng/金华/G9.png" }
                    },
                    {
                        index: 33,
                        country: "金华市",
                        img: { uri: http + "/picture/chuancheng/金华/G10.png" }
                    }]
            },
            {
                id: 4,
                country: "嘉兴市",
                imgs: [
                    {
                        index: 34,
                        country: "嘉兴市",
                        img: { uri: http + "/picture/chuancheng/嘉兴/F1.png" }
                    },
                    {
                        index: 35,
                        country: "嘉兴市",
                        img: { uri: http + "/picture/chuancheng/嘉兴/F2.png" }
                    },
                    {
                        index: 36,
                        country: "嘉兴市",
                        img: { uri: http + "/picture/chuancheng/嘉兴/F3.png" }
                    },
                    {
                        index: 37,
                        country: "嘉兴市",
                        img: { uri: http + "/picture/chuancheng/嘉兴/F4.png" }
                    },
                    {
                        index: 38,
                        country: "嘉兴市",
                        img: { uri: http + "/picture/chuancheng/嘉兴/F5.png" }
                    },
                    {
                        index: 39,
                        country: "嘉兴市",
                        img: { uri: http + "/picture/chuancheng/嘉兴/F6.png" }
                    },
                    {
                        index: 40,
                        country: "嘉兴市",
                        img: { uri: http + "/picture/chuancheng/嘉兴/F7.png" }
                    },
                    {
                        index: 41,
                        country: "嘉兴市",
                        img: { uri: http + "/picture/chuancheng/嘉兴/F8.png" }
                    },
                    {
                        index: 42,
                        country: "嘉兴市",
                        img: { uri: http + "/picture/chuancheng/嘉兴/F9.png" }
                    },
                    {
                        index: 43,
                        country: "嘉兴市",
                        img: { uri: http + "/picture/chuancheng/嘉兴/F10.png" }
                    },
                ]
            },
            {
                id: 5,
                country: "湖州市",
                imgs: [
                    {
                        index: 44,
                        country: "湖州市",
                        img: { uri: http + "/picture/chuancheng/湖州/E1.png" }
                    },
                    {
                        index: 45,
                        country: "湖州市",
                        img: { uri: http + "/picture/chuancheng/湖州/E2.png" }
                    },
                    {
                        index: 46,
                        country: "湖州市",
                        img: { uri: http + "/picture/chuancheng/湖州/E3.png" }
                    },
                    {
                        index: 47,
                        country: "湖州市",
                        img: { uri: http + "/picture/chuancheng/湖州/E4.png" }
                    },
                    {
                        index: 48,
                        country: "湖州市",
                        img: { uri: http + "/picture/chuancheng/湖州/E5.png" }
                    },
                    {
                        index: 49,
                        country: "湖州市",
                        img: { uri: http + "/picture/chuancheng/湖州/E6.png" }
                    },
                    {
                        index: 50,
                        country: "湖州市",
                        img: { uri: http + "/picture/chuancheng/湖州/E7.png" }
                    },
                    {
                        index: 51,
                        country: "湖州市",
                        img: { uri: http + "/picture/chuancheng/湖州/E8.png" }
                    },
                    {
                        index: 52,
                        country: "湖州市",
                        img: { uri: http + "/picture/chuancheng/湖州/E9.png" }
                    },
                ]
            },
            {
                id: 6,
                country: "杭州市",
                imgs: [
                    {
                        index: 53,
                        country: "杭州市",
                        img: { uri: http + "/picture/chuancheng/杭州/A1.png" }
                    },
                    {
                        index: 54,
                        country: "杭州市",
                        img: { uri: http + "/picture/chuancheng/杭州/A2.png" }
                    },
                    {
                        index: 55,
                        country: "杭州市",
                        img: { uri: http + "/picture/chuancheng/杭州/A3.png" }
                    },
                    {
                        index: 56,
                        country: "杭州市",
                        img: { uri: http + "/picture/chuancheng/杭州/A4.png" }
                    },
                    {
                        index: 57,
                        country: "杭州市",
                        img: { uri: http + "/picture/chuancheng/杭州/A5.png" }
                    },
                    {
                        index: 58,
                        country: "杭州市",
                        img: { uri: http + "/picture/chuancheng/杭州/A6.png" }
                    },
                    {
                        index: 59,
                        country: "杭州市",
                        img: { uri: http + "/picture/chuancheng/杭州/A7png" }
                    },
                    {
                        index: 60,
                        country: "杭州市",
                        img: { uri: http + "/picture/chuancheng/杭州/A8.png" }
                    },
                    {
                        index: 61,
                        country: "杭州市",
                        img: { uri: http + "/picture/chuancheng/杭州/A9.png" }
                    },
                    {
                        index: 62,
                        country: "杭州市",
                        img: { uri: http + "/picture/chuancheng/杭州/A10.png" }
                    },]
            },
            {
                id: 7,
                country: "台州市",
                imgs: [
                    {
                        index: 63,
                        country: "台州市",
                        img: { uri: http + "/picture/chuancheng/台州/J1.png" }
                    },
                    {
                        index: 64,
                        country: "台州市",
                        img: { uri: http + "/picture/chuancheng/台州/J2.png" }
                    },
                    {
                        index: 65,
                        country: "台州市",
                        img: { uri: http + "/picture/chuancheng/台州/J3.png" }
                    },
                    {
                        index: 66,
                        country: "台州市",
                        img: { uri: http + "/picture/chuancheng/台州/J4.png" }
                    },
                    {
                        index: 67,
                        country: "台州市",
                        img: { uri: http + "/picture/chuancheng/台州/J5.png" }
                    },
                    {
                        index: 68,
                        country: "台州市",
                        img: { uri: http + "/picture/chuancheng/台州/J6.png" }
                    },
                    {
                        index: 69,
                        country: "台州市",
                        img: { uri: http + "/picture/chuancheng/台州/J7.png" }
                    },
                    {
                        index: 70,
                        country: "台州市",
                        img: { uri: http + "/picture/chuancheng/台州/J8.png" }
                    },
                    {
                        index: 71,
                        country: "台州市",
                        img: { uri: http + "/picture/chuancheng/台州/J9.png" }
                    },]

            },
            {
                id: 8,
                country: "绍兴市",
                imgs: [
                    {
                        index: 72,
                        country: "绍兴市",
                        img: { uri: http + "/picture/chuancheng/绍兴/D1.png" }
                    },
                    {
                        index: 73,
                        country: "绍兴市",
                        img: { uri: http + "/picture/chuancheng/绍兴/D2.png" }
                    },
                    {
                        index: 74,
                        country: "绍兴市",
                        img: { uri: http + "/picture/chuancheng/绍兴/D3.png" }
                    },
                    {
                        index: 75,
                        country: "绍兴市",
                        img: { uri: http + "/picture/chuancheng/绍兴/D4.png" }
                    },
                    {
                        index: 76,
                        country: "绍兴市",
                        img: { uri: http + "/picture/chuancheng/绍兴/D5.png" }
                    },
                    {
                        index: 77,
                        country: "绍兴市",
                        img: { uri: http + "/picture/chuancheng/绍兴/D6.png" }
                    },
                    {
                        index: 78,
                        country: "绍兴市",
                        img: { uri: http + "/picture/chuancheng/绍兴/D7.png" }
                    },
                    {
                        index: 79,
                        country: "绍兴市",
                        img: { uri: http + "/picture/chuancheng/绍兴/D8.png" }
                    },
                    {
                        index: 80,
                        country: "绍兴市",
                        img: { uri: http + "/picture/chuancheng/绍兴/D9.png" }
                    },
                    {
                        index: 81,
                        country: "绍兴市",
                        img: { uri: http + "/picture/chuancheng/绍兴/D10.png" }
                    },]
            },
            {
                id: 9,
                country: "衢州市",
                imgs: [
                    {
                        index: 82,
                        country: "衢州市",
                        img: { uri: http + "/picture/chuancheng/衢州/H1.png" }
                    },
                    {
                        index: 83,
                        country: "衢州市",
                        img: { uri: http + "/picture/chuancheng/衢州/H2.png" }
                    },
                    {
                        index: 84,
                        country: "衢州市",
                        img: { uri: http + "/picture/chuancheng/衢州/H3.png" }
                    },
                    {
                        index: 85,
                        country: "衢州市",
                        img: { uri: http + "/picture/chuancheng/衢州/H4.png" }
                    },
                    {
                        index: 86,
                        country: "衢州市",
                        img: { uri: http + "/picture/chuancheng/衢州/H5.png" }
                    },
                    {
                        index: 87,
                        country: "衢州市",
                        img: { uri: http + "/picture/chuancheng/衢州/H6.png" }
                    },
                    {
                        index: 88,
                        country: "衢州市",
                        img: { uri: http + "/picture/chuancheng/衢州/H7.png" }
                    },
                    {
                        index: 89,
                        country: "衢州市",
                        img: { uri: http + "/picture/chuancheng/衢州/H8.png" }
                    },
                    {
                        index: 90,
                        country: "衢州市",
                        img: { uri: http + "/picture/chuancheng/衢州/H9.png" }
                    },
                    {
                        index: 91,
                        country: "衢州市",
                        img: { uri: http + "/picture/chuancheng/衢州/H10.png" }
                    },]
            },
            {
                id: 10,
                country: "温州市",
                imgs: [
                    {
                        index: 92,
                        country: "温州市",
                        img: { uri: http + "/picture/chuancheng/温州/C1.png" }
                    },
                    {
                        index: 93,
                        country: "温州市",
                        img: { uri: http + "/picture/chuancheng/温州/C2.png" }
                    },
                    {
                        index: 94,
                        country: "温州市",
                        img: { uri: http + "/picture/chuancheng/温州/C3.png" }
                    },
                    {
                        index: 95,
                        country: "温州市",
                        img: { uri: http + "/picture/chuancheng/温州/C4.png" }
                    },
                    {
                        index: 94,
                        country: "温州市",
                        img: { uri: http + "/picture/chuancheng/温州/C5.png" }
                    },
                    {
                        index: 94,
                        country: "温州市",
                        img: { uri: http + "/picture/chuancheng/温州/C6.png" }
                    },
                    {
                        index: 94,
                        country: "温州市",
                        img: { uri: http + "/picture/chuancheng/温州/C7.png" }
                    },
                    {
                        index: 94,
                        country: "温州市",
                        img: { uri: http + "/picture/chuancheng/温州/C8.png" }
                    },
                    {
                        index: 94,
                        country: "温州市",
                        img: { uri: http + "/picture/chuancheng/温州/C9.png" }
                    },
                    {
                        index: 94,
                        country: "温州市",
                        img: { uri: http + "/picture/chuancheng/温州/C10.png" }
                    },
                    //下面四个为了最后空白
                    {
                        index: 95,
                        country: "温州市",
                        img: ""
                    },
                    {
                        index: 96,
                        country: "温州市",
                        img: ""
                    },
                    {
                        index: 97,
                        country: "温州市",
                        img: ""
                    },
                    {
                        index: 98,
                        country: "温州市",
                        img: ""
                    }]
            }
        ];
        let countrys = [];
        data.map((v, k) => {
            countrys.push(v.country)
        })
        this.setState({ countrys })

        //设置right的默认值10条
        let imgsTmp = [];

        //合并所有图片集合
        let allImg = [];
        data.map((v, k) => {
            allImg = [...allImg, ...v.imgs]
        })
        this.setState({ allImages: allImg }, () => {
            let indexs = this.state.imgIndexs;
            this.countImgs(indexs)
        })
    }

    onPressGo() {
        if (this.state.clickTime) {
            this.setState({ clickTime: false })


            setTimeout(() => {
                // this.props.navigation.navigate('GoPolicy')

            }, 100)
            setTimeout(() => {
                this.setState({ clickTime: true })
            }, 1000)
        } else { }
    }
    //计算滑动后的imgs的Index，缓慢滑动1，快速滑动2。
    countImgsIndex(isUpDown) {
        let indexs = this.state.imgIndexs;

        switch (isUpDown) {
            case 'up-slow':
                //所有图片的index+1
                if (indexs[8] != 97) {
                    let tmp = [];
                    indexs.map((v, k) => {
                        tmp.push(v + 1)
                    })
                    this.countImgs(tmp)
                    this.setState({ imgIndexs: tmp })
                }
                break;
            case 'up-quick':
                //所有图片的index+2

                if (indexs[8] < 96) {
                    let tmp = [];
                    indexs.map((v, k) => {
                        tmp.push(v + 2)
                    })
                    this.countImgs(tmp)
                    this.setState({ imgIndexs: tmp })
                }
                break;
            case 'down-slow':
                //所有图片的index-1
                if (indexs[0] > 0) {
                    let tmp = [];
                    indexs.map((v, k) => {
                        tmp.push(v - 1)
                    })
                    this.countImgs(tmp)
                    this.setState({ imgIndexs: tmp })
                }
                break;
            case 'down-quick':
                //所有图片的index-2
                if (indexs[0] > 1) {
                    let tmp = [];
                    indexs.map((v, k) => {
                        tmp.push(v - 2)
                    })
                    this.countImgs(tmp)
                    this.setState({ imgIndexs: tmp })
                }
                break;
            default: break;
        }
    }
    //计算出最终要展示的图片列表
    countImgs(indexs) {
        let imgsTmp = [];
        let allImg = this.state.allImages;
        indexs.map((v, k) => {
            allImg.length > 0 && imgsTmp.push(allImg[v].img)
        });
        let inTmp = allImg[indexs[4]];
        this.setState({ imgs: imgsTmp, country: inTmp.country, index: inTmp.index })
    }
    //上滑事件
    onUp(is) {
        if (is == "slow") {
            this.countImgsIndex("up-slow");
        } else {
            this.countImgsIndex("up-quick");
        }
    }
    //下滑事件
    onDown(is) {
        if (is == "slow") {
            this.countImgsIndex("down-slow");
        } else {
            this.countImgsIndex("down-quick");
        }
    }
    //跳转到详情
    onDetail = (k) => {
        if (k) {
            // alert(`onDetail跳转到index=${this.state.index}`)
            this.props.navigation.navigate('手艺人详细页面', {
            });
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.div}>
                <View style={styles.left}>
                    <Left countrys={state.countrys} conuntry={state.country} />
                </View>
                <View style={styles.right}>
                    <Right imgs={state.imgs}
                        onUp={(v) => this.onUp(v)}
                        onDown={(v) => this.onDown(v)}
                        onDetail={(v) => this.onDetail(v)}
                    />
                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({

    div: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F5F5F5'
    },
    left: {
        width: '30%',
    },
    right: {
        width: '62%',
        height: '127%',
        top: '-14%'
    },
    font: {
        fontSize: 10,
        color: '#696969',
    },

});
AppRegistry.registerComponent('Heritage', () => Heritage);