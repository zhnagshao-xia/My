import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  Modal,//加这个
  Animated,//加这个
  Easing,//加这个
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LottieView from 'lottie-react-native';//加这个

var http = "http://192.168.50.91:3000";
var URL = http+"/users/address/list/add";

export default class App extends Component {
  constructor(props) {
    super(props);
    const {navigation,route} = this.props;
    let username = route.params.username;
    let usericon = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=179057337,2765188365&fm=26&gp=0.jpg'
    this.state = {
      username,
      usericon,
      shopname:"",
      modalVisible: false,//加这个
      telephone:"",
      dizhi:"",
      progress: new Animated.Value(0),//加这个在是state里面
    };
  }

  _onClickAdd=()=> {

    this.setState({modalVisible: true});//加这个

    var navigation = this.props.navigation;
    fetch(URL, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        usericon: this.state.usericon,
        shopname: this.state.shopname,
        telephone: this.state.telephone,
        dizhi: this.state.dizhi
      })
    })
    .then(function (res) {
      return res.json();
  }).then(function (json) {
      if (json.code == 200) {
          // Alert.alert("添加成功")//这个消掉
          navigation.goBack("地址");
      } 
  })
  }  


  state = {
    modalVisible: false,
}; //加这个

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
          <View style={styles.container}>
            <View style={{
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 0.5,
          borderBottomColor: "#000",
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
          <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
          <Text style={{fontSize:18,
            textAlign: 'center',
            textAlignVertical: 'center',}}>编辑</Text>
          <TouchableOpacity 
        onPress={this._onClickAdd}//加这个onpress
          style={{
            width: 50,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <AntDesign name={'check'} size={25} color={'#000'} />
          </TouchableOpacity>



          {/* 整个<Modal></Modal>括起来的都加，加在Touchableopacity的下面 */}
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
                    <View style={styles.modalLayer}>
                          <TouchableOpacity
                                onPress={()=>{        
                                }}                           
                            >
                        <View style={styles.modalContainer}>
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
                              <Text style={{fontSize:15}}>提交成功</Text>
                          </View>
                            <TouchableOpacity style={styles.modalButtonStyle}
                                    onPress={this._closeModalWin}>
                                        <Text style={{fontSize:15}}>确定</Text>
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                </Modal>
      </View>
            <View style={styles.contant}>
                <View style={styles.box}>
                    <TextInput 
                    placeholder="请输入名字..." 
                    style={styles.first}
                    onChangeText={(text)=>{
                      this.setState({shopname:text});
                    }}></TextInput>
                    <TextInput 
                    placeholder="请输入联系方式..." 
                    keyboardType={'numeric'} 
                    style={styles.second}
                    onChangeText={(text)=>{
                      this.setState({telephone:text});
                    }}></TextInput>
                    <TextInput 
                    placeholder="请输入地址..." 
                    multiline={true} 
                    style={styles.third}
                    onChangeText={(text)=>{
                      this.setState({dizhi:text});
                    }}></TextInput>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
            </View>
          </View>
         );
    }
  }
  const styles = StyleSheet.create({
    container:{
      width:'100%',
      height:'100%',
      backgroundColor:'#f2f2f2',
    },
    contant:{
    },
    add:{
      width:30,
      height:30,
      backgroundColor:'red',
      marginLeft:180,
    },
    box:{
        width:'100%',
        height:250,
        backgroundColor:'#fff',
    },
    first:{
        width:'100%',
        height:'25%',
        borderBottomWidth:0.5,
        borderColor:'#000',
        padding:10,
        fontSize:15,
    },
    second:{
        width:'100%',
        height:'25%',
        borderBottomWidth:0.5,
        borderColor:'#000',
        padding:10,
        fontSize:15
    },
    third:{
        width:'100%',
        height:'50%',
        padding:10,
        textAlignVertical: 'top',
        fontSize:15,
    },



    //下面几个带modal的都加
    modalLayer: {
      backgroundColor: 'rgba(0, 0, 0, 0.45)',
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
     
  },
  modalContainer: {
      width:250,
      height: 150,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius:10
  },
  modalTitleStyle: {
      textAlign: 'center',
      fontSize: 15
  },
  modalButtonStyle: {
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'25%',
    borderTopWidth:0.5,
    borderColor:'grey'
}
  })