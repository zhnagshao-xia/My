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
  TextInput,
  Alert,
  Animated,//加这个
  Easing,//加这个
  
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LottieView from 'lottie-react-native';//加这个

var http = "http://121.196.191.45:3000";
var URL1 = http+"/users/address/list/change/update";
var URL2 = http+"/users/address/list/change/delete"

export default class ModalComp extends Component{
    constructor(props) {
        super(props);
        const {navigation,route} = this.props;
        let shopname = route.params.shopname; 
        let telephone = route.params.telephone;
        let dizhi = route.params.dizhi;
        this.state = { 
            shopname:shopname,modalVisible: false,
            telephone:telephone,modalVisible: false,
            dizhi:dizhi,modalVisible: false,
            progress: new Animated.Value(0),//加这个在是state里面
            modalVisible2: false,
         };
      }

      _onClickUpdate=()=> {
        this.setState({modalVisible: true});//加这个
        var navigation = this.props.navigation;
        fetch(URL1, {
          method: 'POST',
          credentials: "include",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            shopname: this.state.shopname,
            shopnamenew:this.state.shopnamenew,
            telephonenew: this.state.telephonenew,
            dizhinew: this.state.dizhinew
          })
        })
        .then(function (res) {
          return res.json();
      }).then(function (json) {
          if (json.code == 200) {
            //   Alert.alert("修改成功")
            //   navigation.navigate("地址");
          } 
      })
      } 
      
      _onClickDelete=()=> {
        // var navigation = this.props.navigation;
        fetch(URL2, {
          method: 'POST',
          credentials: "include",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            shopname: this.state.shopname
          })
        })
        .then(function (res) {
          return res.json();
      }).then(function (json) {
          if (json.code == 200) {
            //   Alert.alert("删除成功")
            //   navigation.navigate("地址");
          } 
      })
      } 
 
    state = {
            modalVisible: false,
    };
    
    _openModalWin2 = () => {
        this.setState({modalVisible2: true});
    }
 
    _closeModalWin2 = () => {
        this.setState({modalVisible2: false});
    }
    _closeModalWin = () => {//加这个整个
        this.setState({modalVisible: false});
        }
        
    
    componentDidMount() {
        Animated.timing(this.state.progress, {
          toValue: 1,
          duration: 4000,
          easing: Easing.linear,
          
        }).start();
        }//加这个整个

        
    render() {
    const { navigation } = this.props;
        
        return (
        <View>
           <View style={{
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:"#fff",
          flexDirection: 'row',
          justifyContent: "space-between",
        }}>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            style={{
              width: 50,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}>
                        <FontAwesome name={'angle-left'} size={25} color={'#000'} />
                    </TouchableOpacity>
                    <Text style={{fontSize:18,
                    textAlign: 'center',
                    textAlignVertical: 'center',}}>编辑</Text>
                    <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {this._onClickUpdate()}} 
                    style={{
                        width: 50,
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                        <AntDesign name={'check'} size={23} color={'#000'} />
                    </TouchableOpacity>
                    <Modal
                    animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                    transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                    visible={this.state.modalVisible} // 是否显示 modal 窗口
                    onRequestClose={() =>{ this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                    onShow={()=>{console.log('modal窗口显示了');}} // 回调函数会在 modal 显示时调用
                >
            <TouchableOpacity
            style={{height:'100%',width:'100%',position:"absolute",top:0,left:0}}
        >
                    <View style={styles.modalLayer2}>
                          <TouchableOpacity
                                onPress={()=>{        
                                }}                           
                            >
                        <View style={styles.modalContainer2}>
                          <View style={{width:150,
                            height:'45%',
                            // backgroundColor:'red',
                            alignItems:'center',
                            justifyContent:'center'
                            }}>
 <LottieView source={require('../../success.json')} //这个就是动画的路径
 progress={this.state.progress} />
                          </View>
                          <View style={{width:'100%',
                          height:'25%',
                          alignItems:'center',
                          }}>
                              <Text style={{fontSize:15}}>修改成功</Text>
                          </View>
                            <TouchableOpacity style={styles.modalButtonStyle2}
                                   onPress={()=>{        
                                 
                                    navigation.goBack()
                                  }}>
                                        <Text style={{fontSize:15}}>确定</Text>
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                </Modal>
              </View>
            <View style={{width:'100%',height:700,backgroundColor:'#f2f2f2'}}>
                <View style={{width:'100%',height:230,marginTop:20,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
                    <TextInput 
                    style={{width:'90%',height:'25%',borderColor:'grey',borderBottomWidth:0.5}}
                    placeholder={this.state.shopname} 
                    placeholderTextColor="#000"
                    onChangeText={(text) => this.setState({shopnamenew:text})}
                    ></TextInput>
                    <TextInput 
                    style={{width:'90%',height:'25%',borderColor:'grey',borderBottomWidth:0.5}}
                    placeholder={this.state.telephone}
                    placeholderTextColor="#000"
                    onChangeText={(text) => this.setState({telephonenew:text})}
                    ></TextInput>
                    <TextInput 
                    style={{width:'90%',height: '50%',color : "black"}}
                    placeholder={this.state.dizhi}
                    placeholderTextColor="#000"
                    onChangeText={(text) => this.setState({dizhinew:text})}
                    />
                </View>
                <TouchableOpacity style={{width:'100%',height:40,backgroundColor:'#fff',marginTop:20,alignItems:'center',justifyContent:'center'}}
                onPress={this._openModalWin2}>
                    <Text style={{fontSize:15,color:'red'}}>删除收货地址</Text>
                </TouchableOpacity>
                <Modal
                    animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                    transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                    visible={this.state.modalVisible2} // 是否显示 modal 窗口
                    onRequestClose={() =>{ this._closeModalWin2(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
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
            onPress={this._closeModalWin2}
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
                                onPress={()=>{        
                                    this._closeModalWin2,
                                    navigation.goBack()
                                  }}
                                >
                                    <Text style={{fontSize:13}}>取消</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={{width:'50%',height:'100%',alignItems:'center',justifyContent:'center'}}
                                onPress={()=>{        
                                    this._onClickDelete
                                    navigation.goBack()
                                  }}
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
            },


            modalLayer2: {
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                flex: 1,
                justifyContent: 'center',
                alignItems:'center',
               
            },
            modalContainer2: {
                width:250,
                height: 150,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems:'center',
                borderRadius:10
            },
            modalTitleStyle2: {
                textAlign: 'center',
                fontSize: 15
            },
            modalButtonStyle2: {
              alignItems:'center',
              justifyContent:'center',
              width:'100%',
              height:'25%',
              borderTopWidth:0.5,
              borderColor:'grey'
          }
        })
