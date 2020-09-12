import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  TextInput
  
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';


class ModalComp extends React.Component{
    constructor(props) {
        super(props);
        
        this.state1 = { text1: '霞扯淡',modalVisible: false, };
        this.state2 = { text2: '1888888888',modalVisible: false, };
        this.state3 = { text3: '浙江省杭州市拱墅区上塘街道舟山东路36号浙江暑热大学',modalVisible: false, };
      }
 
    state = {
            modalVisible: false,
    };
    
    _openModalWin = () => {
        this.setState({modalVisible: true});
    }
 
    _closeModalWin = () => {
        this.setState({modalVisible: false});
    }
 
    render() {
    const { navigation } = this.props;
        
        return (
        <View>
            <View style={{height:45,
            backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:0.5,
            borderBottomColor:"#000",}}>
                <View style={{flexDirection:'row',justifyContent:"space-between",width:"90%"}}>
                    <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}>
                        <FontAwesome name={'angle-left'} size={25} color={'#000'} />
                    </TouchableOpacity>
                    <Text style={{fontSize:18,
                    textAlign: 'center',
                    textAlignVertical: 'center',}}>编辑</Text>
                    <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => this.refs.modal6.open()} >
                        <AntDesign name={'check'} size={23} color={'#000'} />
                    </TouchableOpacity>
              </View>
            </View>
            <View style={{width:'100%',height:700,backgroundColor:'#f2f2f2'}}>
                <View style={{width:'100%',height:230,marginTop:20,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
                    <TextInput style={{width:'90%',height:'25%',borderColor:'grey',borderBottomWidth:0.5}}
                     onChangeText={(text1) => this.setState({text1})}
                     value={this.state1.text1}></TextInput>
                    <TextInput style={{width:'90%',height:'25%',borderColor:'grey',borderBottomWidth:0.5}}
                     onChangeText={(text2) => this.setState({text2})}
                     value={this.state2.text2}></TextInput>
                    <TextInput style={{width:'90%',height: '50%',color : "black"}}
                    onChangeText={(text3) => this.setState({text3})}
                    value={this.state3.text3}
                    />
                </View>
                <TouchableOpacity style={{width:'100%',height:40,backgroundColor:'#fff',marginTop:20,alignItems:'center',justifyContent:'center'}}
                onPress={this._openModalWin}>
                    <Text style={{fontSize:15,color:'red'}}>删除收货地址</Text>
                </TouchableOpacity>
                <Modal
                    animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                    transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                    visible={this.state.modalVisible} // 是否显示 modal 窗口
                    onRequestClose={() =>{ this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                    onShow={()=>{console.log('modal窗口显示了');}} // 回调函数会在 modal 显示时调用
                >
                    {/* <TouchableWithoutFeedback
                    style={{backgroundColor:"red",height:20,width:20,position:"absolute",top:0,left:0}}
                onPress={()=>{
                    this._closeModalWin
                }}
            > */}
            <TouchableOpacity
            style={{height:'100%',width:'100%',position:"absolute",top:0,left:0}}
            onPress={this._closeModalWin}
            >
                    <View style={styles.modalLayer}>

                          <TouchableOpacity
                                onPress={()=>{
                                   
                                }}                           
                            >
                        <View style={styles.modalContainer}>
                        <View style={{     
                            width:'100%',
                            height:'70%',
                            // backgroundColor:'red',
                            alignItems:'center',
                            justifyContent:'center'}}>
                            <Text style={styles.modalTitleStyle}>确认删除吗?</Text>
                        </View>
                            <View style={styles.modalButtonStyle}>
                                <TouchableOpacity 
                                style={{width:'50%',height:'100%',alignItems:'center',justifyContent:'center',borderRightWidth:0.5,borderColor:'grey'}}
                                    onPress={this._closeModalWin}
                                >
                                    <Text style={{fontSize:13}}>取消</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={{width:'50%',height:'100%',alignItems:'center',justifyContent:'center'}}
                                    onPress={this._closeModalWin}
                                >
                                    <Text style={{fontSize:13}}>确认</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View></TouchableOpacity>
                    </View>
                    {/* </TouchableWithoutFeedback> */}
                    </TouchableOpacity>
                </Modal>
            </View>
        </View>    
        )}}
        const styles = StyleSheet.create({
            modalLayer: {
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                flex: 1,
                justifyContent: 'center',
                padding: 32,
                alignItems:'center'
            },
            modalContainer: {
                height: 130,
                width:300,
                backgroundColor: 'white',
                justifyContent: 'center',
                borderRadius:15,
              
            },
            modalTitleStyle: {
                textAlign: 'center',
                fontSize: 15,
                // width:'100%',
                // height:'70%',
                // backgroundColor:'red',
                // alignItems:'center',
                // justifyContent:'center'
            },
            modalButtonStyle: {
                alignItems:'center',
                justifyContent:'space-around',
                flexDirection:'row',
                borderTopColor:'grey',
                borderTopWidth:0.5,
                width:'100%',
                height:'30%',
                // backgroundColor:'blue'
            }

        })
        export default ModalComp;
