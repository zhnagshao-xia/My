import React, { Component } from '../../../node_modules/react';
import {
    Button,Text,View,Image,
    AppRegistry,StyleSheet, BackHandler,
} from 'react-native';
import Left from "./compents/left";
import Right from "./compents/right";

import A from "./img/a.jpg"
import B from "./img/abc.jpg"
import C from "./img/duoren.jpeg"

export default class Heritage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clickTime:true,
            toast:false,
            isShow:false,
            countrys:[],//城市列表
            imgs:[],//图片列表
            country:"宁波市",//传到left的城市名称
            imgIndexs:[0,1,2,3,4,5,6,7,8],//决定传给imgs的index，所有图片被处理成一个集合
            allImages:[],//处理过的所有图片集合
            index:"",//跳转详情的唯一index
        }
    }

    componentDidMount(){
        let data = [
            {
                id:1,
                country:"宁波市",
                imgs:[
                    //顶端四个空白+尾部四个空白
                    {
                        index:0,
                        country:"宁波市",
                        img:""
                    },
                    {
                        index:1,
                        country:"宁波市",
                        img:""
                    },
                    {
                        index:2,
                        country:"宁波市",
                        img:""
                    },
                    {
                        index:3,
                        country:"宁波市",
                        img:""
                    },
                    {
                        index:4,
                        country:"宁波市",
                        img:A
                    },
                    {
                        index:5,
                        country:"宁波市",
                        img:B
                    },
                    {
                        index:6,
                        country:"宁波市",
                        img:C
                    }]
            },
            {
                id:2,
                country:"丽水市",
                imgs:[
                    {
                        index:7,
                        country:"丽水市",
                        img:A
                    },
                    {
                        index:8,
                        country:"丽水市",
                        img:B
                    },
                    {
                        index:9,
                        country:"丽水市",
                        img:C
                    }]
            },
            {
                id:3,
                country:"金华市",
                imgs:[
                    {
                        index:10,
                        country:"金华市",
                        img:A
                    },
                    {
                        index:11,
                        country:"金华市",
                        img:B
                    },
                    {
                        index:12,
                        country:"金华市",
                        img:C
                    }]
            },
            {
                id:4,
                country:"嘉兴市",
                imgs:[
                    {
                        index:13,
                        country:"嘉兴市",
                        img:A
                    },
                    {
                        index:14,
                        country:"嘉兴市",
                        img:B
                    },
                    {
                        index:15,
                        country:"嘉兴市",
                        img:C
                    }]
            },
            {
                id:5,
                country:"湖州市",
                imgs:[
                    {
                        index:16,
                        country:"湖州市",
                        img:A
                    },
                    {
                        index:17,
                        country:"湖州市",
                        img:B
                    },
                    {
                        index:18,
                        country:"湖州市",
                        img:C
                    }]
            },
            {
                id:6,
                country:"杭州市",
                imgs:[
                    {
                        index:19,
                        country:"杭州市",
                        img:A
                    },
                    {
                        index:20,
                        country:"杭州市",
                        img:B
                    },
                    {
                        index:21,
                        country:"杭州市",
                        img:C
                    }]
            },
            {
                id:7,
                country:"台州市",
                imgs:[
                    {
                        index:22,
                        country:"台州市",
                        img:A
                    },
                    {
                        index:23,
                        country:"台州市",
                        img:B
                    },
                    {
                        index:24,
                        country:"台州市",
                        img:C
                    }]
            },
            {
                id:8,
                country:"绍兴市",
                imgs:[
                    {
                        index:25,
                        country:"绍兴市",
                        img:A
                    },
                    {
                        index:26,
                        country:"绍兴市",
                        img:B
                    },
                    {
                        index:27,
                        country:"绍兴市",
                        img:C
                    }]
            },
            {
                id:9,
                country:"衢州市",
                imgs:[
                    {
                        index:28,
                        country:"衢州市",
                        img:A
                    },
                    {
                        index:29,
                        country:"衢州市",
                        img:B
                    },
                    {
                        index:30,
                        country:"衢州市",
                        img:C
                    }]
            },
            {
                id:10,
                country:"温州市",
                imgs:[
                    {
                        index:31,
                        country:"温州市",
                        img:A
                    },
                    {
                        index:32,
                        country:"温州市",
                        img:B
                    },
                    {
                        index:33,
                        country:"温州市",
                        img:C
                    },
                    {
                        index:34,
                        country:"温州市",
                        img:C
                    },
                    //下面四个为了最后空白
                    {
                        index:35,
                        country:"温州市",
                        img:""
                    },
                    {
                        index:36,
                        country:"温州市",
                        img:""
                    },
                    {
                        index:37,
                        country:"温州市",
                        img:""
                    },
                    {
                        index:38,
                        country:"温州市",
                        img:""
                    }]
            }
        ];
        let countrys = [];
        data.map((v,k)=>{
            countrys.push(v.country)
        })
        this.setState({countrys})

        //设置right的默认值10条
        let imgsTmp = [];

        //合并所有图片集合
        let allImg = [];
        data.map((v,k)=>{
            allImg = [...allImg,...v.imgs]
        })
        this.setState({allImages:allImg},()=>{
            let indexs = this.state.imgIndexs;
            this.countImgs(indexs)
        })
    }

    onPressGo(){
        if(this.state.clickTime){
            this.setState({clickTime:false})


            setTimeout( ()=> {
                // this.props.navigation.navigate('GoPolicy')

            },100)
            setTimeout( ()=> {
                this.setState({clickTime:true})
            },1000)
        }else{}
    }
    //计算滑动后的imgs的Index，缓慢滑动1，快速滑动2。
    countImgsIndex(isUpDown){
        let indexs = this.state.imgIndexs;

        switch (isUpDown){
            case 'up-slow':
                //所有图片的index+1
                if(indexs[8] != 37){
                    let tmp = [];
                    indexs.map((v,k)=>{
                        tmp.push(v+1)
                    })
                    this.countImgs(tmp)
                    this.setState({imgIndexs:tmp})
                }
                break;
            case 'up-quick':
                //所有图片的index+2

                if(indexs[8] < 36){
                    let tmp = [];
                    indexs.map((v,k)=>{
                        tmp.push(v+2)
                    })
                    this.countImgs(tmp)
                    this.setState({imgIndexs:tmp})
                }
                break;
            case 'down-slow':
                //所有图片的index-1
                if(indexs[0] > 0){
                    let tmp = [];
                    indexs.map((v,k)=>{
                        tmp.push(v-1)
                    })
                    this.countImgs(tmp)
                    this.setState({imgIndexs:tmp})
                }
                break;
            case 'down-quick':
                //所有图片的index-2
                if(indexs[0] > 1){
                    let tmp = [];
                    indexs.map((v,k)=>{
                        tmp.push(v-2)
                    })
                    this.countImgs(tmp)
                    this.setState({imgIndexs:tmp})
                }
                break;
            default: break;
        }
    }
    //计算出最终要展示的图片列表
    countImgs(indexs){
        let imgsTmp= [];
        let allImg = this.state.allImages;
        indexs.map((v,k)=>{
            allImg.length > 0 && imgsTmp.push(allImg[v].img)
        });
        let inTmp = allImg[indexs[4]];
        this.setState({imgs:imgsTmp,country:inTmp.country,index:inTmp.index})
    }
    //上滑事件
    onUp(is){
        if(is == "slow"){
            this.countImgsIndex("up-slow");
        }else{
            this.countImgsIndex("up-quick");
        }
    }
    //下滑事件
    onDown(is){
        if(is == "slow"){
            this.countImgsIndex("down-slow");
        }else {
            this.countImgsIndex("down-quick");
        }
    }
    //跳转到详情
    onDetail(k){
        if(k){
            alert(`onDetail跳转到index=${this.state.index}`)
        }
    }
    render() {
        const state = this.state;
        return (
            <View style={styles.div}>
                <View style={styles.left}>
                    <Left countrys={state.countrys}  conuntry={state.country}/>
                </View>
                <View style={styles.right}>
                    <Right imgs = {state.imgs}
                           onUp={(v)=>this.onUp(v)}
                           onDown={(v)=>this.onDown(v)}
                           onDetail={(v)=>this.onDetail(v)}
                    />
                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({

    div:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#F5F5F5'
    },
    left:{
      width:'30%',
    },
    right:{
        width:'70%'
    },
    font:{
        fontSize:10,
        color:'#696969',
    },

});
AppRegistry.registerComponent('Heritage', () => Heritage);