import React ,{Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Alert, 
    TextInput, 
    FlatList, 
    ImageBackground, 
    Image, 
    TouchableOpacity, EventSubscriptionVendor, AsyncStorage,
    Modal,//加这个
    Animated,//加这个
    Easing,//加这个
  } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';//加这个

var http = "http://121.196.191.45:3000";
var URL=http+"/login";

export default class loginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:"",
      progress: new Animated.Value(0),
          modalVisible: false,
    }
  };
  _onClickLogin = () => {
    this.setState({modalVisible: true});
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
            password: this.state.password
        })
    }).then(function (res) {
        return res.json();
    }).then(function (json) {
        if (json.code == 200) {
            AsyncStorage.setItem('userInfo',JSON.stringify(json.docs))//AsyncStorage.setItem根据key字段设置value内容，完成之后进行回调callback方法
            // Alert.alert("登录成功")
            navigation.goBack("我的");
        } else if (json.code == 400) {
            Alert.alert("用户名或密码错误")
        } else if (json.code == 401) {
            Alert.alert("用户名不能为空")
        } else if (json.code == 402) {
            Alert.alert("密码不能为空")
        }
    })
};

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
  render(){
    return (
        <View style={styles.container}>
          <ImageBackground source={require('../../Image/loginScreen/background.png')} style={styles.Image}>
            <View style={styles.container_up}>
              <View style={styles.logo}>
                <Image source={require('../../Image/loginScreen/logo.png')} style={styles.logo_image}></Image>
              </View>
            </View>
            <View style={styles.container_down}>
              <View style={styles.log}>
                <Text style={{ fontSize: 16, letterSpacing: 12, color: '#6092a0' }}>登录</Text>
              </View>
              <View style={styles.textinput}>
                <View style={{marginLeft:10,marginRight:5}}>
                <FontAwesome name={'user'} size={28} color={'#6092a0'}/></View>
                <TextInput 
                    placeholderTextColor="#6092a0" 
                    style={{ height: 50, width: 250 }} 
                    placeholder='请输入用户名'
                    onChangeText={(text)=>{
                      this.setState({username:text});
                    }}></TextInput>
              </View>
              <View style={styles.textinput}>
              <View style={{marginLeft:10,marginRight:5}}>
                <FontAwesome name={'lock'} size={29} color={'#6092a0'}/></View>
                <TextInput 
                    placeholderTextColor="#6092a0" 
                    style={{ height: 50, width: 250 }} 
                    placeholder='请输入密码'
                    keyboardType='numeric'
                    secureTextEntry={true}
                    onChangeText={(text)=>{
                      this.setState({password:text})
                    }}
                    ></TextInput>
              </View>
              <TouchableOpacity
               onPress={() => {this._onClickLogin();}}
              style={styles.logbutton}>
                <Text style={{color:'#fdfdfd'}}>立即登录</Text>
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
                              <Text style={{fontSize:15}}>登录成功</Text>
                          </View>
                            {/* <TouchableOpacity style={styles.modalButtonStyle}
                                    onPress={()=>{     
                                      this._closeModalWin
                                      navigation.goBack()
                                    }}>
                                        <Text style={{fontSize:15}}>确定</Text>
                            </TouchableOpacity> */}
                        </View>
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                </Modal>
            </View>
            <View style={styles.container_bottom}>       
              <TouchableOpacity 
              onPress={() => {this.props.navigation.navigate("注册");}}
              style={{width:'32%'}}><Text style={{color:'#fff'}}>注册账号</Text></TouchableOpacity>
              <TouchableOpacity style={{width:'32%',alignItems:'flex-end'}}><Text style={{color:'#fff'}}>忘记密码</Text></TouchableOpacity>         
            </View>
            <TouchableOpacity
            onPress={() => {this.props.navigation.goBack()}}
            activeOpacity={0.7}
             style={{position:"absolute",margin:10}}>
            <FontAwesome name={'angle-left'} size={36} color={'#6092a0'}/>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );}
    }

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    Image: {
      flex: 1,
      resizeMode: "cover",
    },
    container_up: {
      height: '35%',
      alignItems: 'center',
      flexDirection: 'column-reverse'
    },
    logo: {
      width: '50%',
      height: '90%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo_image: {
      width: '90%',
      height: '95%'
    },
    container_down: {
      height: 270,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 60,
      marginHorizontal: 35,
      backgroundColor:'#fff'
    },
    log: {
      height: 50,
      width: '100%',
      alignItems: 'center',
      flexDirection: 'column-reverse'
    },
    textinput: {
      width: '85%',
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      borderWidth:1,
      borderColor:'#6092a0'
    },
    logbutton:{
      marginTop:15,
      backgroundColor:'#6092a0',
      width:'85%',
      height:'15%',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20
    },
    container_bottom:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
      marginTop:40
    },
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
  }); 