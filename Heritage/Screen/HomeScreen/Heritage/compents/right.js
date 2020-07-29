import React, { Component } from '../../../../node_modules/react';
import {
    View,Image,
    AppRegistry,StyleSheet,TouchableHighlight,TouchableOpacity
} from 'react-native';

let startY = 0;//记录触摸事件开始的Y坐标
let startTime = 0;//记录触摸事件开始的时间
export default class Right extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    //点击开始事件
    onPressIn(e){
        startY = e.nativeEvent.pageY;//记录触摸事件开始的Y坐标
        startTime = Number.parseInt(e.nativeEvent.timestamp)//记录触摸事件开始的时间
    }
    //点击结束事件
    onPress(e,k){//慢速滑动滑一张图片，快速滑动滑三张图片

        e.persist()//保留原始合成事件

        let endY = e.nativeEvent.pageY;//记录触摸事件结束的Y坐标
        let endTime = Number.parseInt(e.nativeEvent.timestamp);//记录触摸事件结束的时间
        let Y = startY - endY;//移动距离
        let Time = endTime - startTime ;//移动时间

        if(Y!= 0){//滑动事件，Y==0，是单击事件，

            let isQuick = Number.parseInt(Time/Y);// 距离/时间：判断是否快速滑动

            if(Y < 0){//下滑事件
                if(isQuick > -3 ){//快速滑动，可调节多加几个判断滑动更平滑
                    // console.info("快速滑动",isQuick);
                    this.props.onDown('quick')
                }else{//慢速滑动
                    // console.info("慢速滑动",isQuick);
                    this.props.onDown('slow')
                }
            }else{//上滑事件
                if(isQuick < 2){//快速滑动，可调节
                    // console.info("快速滑动",isQuick);
                    this.props.onUp('quick')
                }else{//慢速滑动
                    // console.info("慢速滑动",isQuick);
                    this.props.onUp('slow')
                }
            }
        }else{
            //点击了中间最大的那张图片
            if(k == 4 ){
                this.props.onDetail(4);
            }
        }
    }
    // onDetail(e){//防止快速重复点击
    //     e.stopPropagation();//防止事件冒泡
    //     if(this.state.clickTime){
    //         this.setState({clickTime:false})
    //         setTimeout( ()=> {
    //             this.props.onDetail();
    //
    //         },100)
    //         setTimeout( ()=> {
    //             this.setState({clickTime:true})
    //         },1000)
    //     }else{}
    // }
    render() {
        const imgs = this.props.imgs.length>0 && this.props.imgs;
        return (
            <TouchableHighlight
                style={styles.touch}
                onPressIn={(e)=>this.onPressIn(e)}
                onPress={(e)=>this.onPress(e)}
                underlayColor={null}
            >
                <View style={styles.right} >
                    {
                        imgs && imgs.map((v, k) => {
                            return (
                                <TouchableHighlight
                                    style={styles[k]}
                                    onPressIn={(e)=>this.onPressIn(e)}
                                    onPress={(e)=>this.onPress(e,k)}
                                    key={k}
                                    underlayColor={null}
                                >
                                    {
                                        v
                                            ?
                                            <Image
                                                style={{width:'100%',height:'100%',backfaceVisibility:'visible'}}
                                                source={v}
                                            />
                                            :
                                            <View/>
                                    }
                                </TouchableHighlight>
                            )
                        })
                    }
                </View>
            </TouchableHighlight>
        );
    }
};
const styles = StyleSheet.create({
    img1:{
        width:30,
        height:30,
    },
    img:{
        width:'100%',
        height:'100%',
    },



    font:{
        fontSize:36,
        color:'#696969',
    },
    touch:{
        flex:1,
        width:'100%',
        backgroundColor:"#F5F5F5"
    },
    right:{
        width:'100%',
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-end',
    },
    //5 10 15 10 5

    0:{
        width:'45%',
        height:'5%',
        borderTopLeftRadius:10
    },
    1:{
        width:'55%',
        height:'5%',
        borderTopLeftRadius:10
    },
    2:{
        width:'65%',
        height:'5%',
        borderTopLeftRadius:10
    },
    3:{
        width:'75%',
        height:'5%',
        borderTopLeftRadius:10
    },
    4:{//最中间一个
        width:'85%',
        height:'40%',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    5:{
        width:'75%',
        height:'5%',
        borderBottomLeftRadius:10
    },
    6:{
        width:'65%',
        height:'5%',
        borderBottomLeftRadius:10
    },
    7:{
        width:'55%',
        height:'5%',
        borderBottomLeftRadius:10
    },
    8:{
        width:'45%',
        height:'5%',
        borderBottomLeftRadius:10
    },

});
AppRegistry.registerComponent('Right', () => Right);