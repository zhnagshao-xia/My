import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    AsyncStorage,
    Alert,
    Modal,//加这个
    Animated,//加这个
    Easing,//加这个
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';//加这个

// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL1 = http + "/volunteer/details/submit";
var copyusername;

export default class App extends Component {
    constructor(props) {
        super(props);
        const { navigation, route } = this.props;
        let title = route.params.title;
        this.state = {
            title,
            username: "",
            name: "",
            work: "",
            telephone: "",
            email: "",
            other: "",
            progress: new Animated.Value(0),
          modalVisible: false,
        }
    }

    checkUserAction = async () => {
        const res = await AsyncStorage.getItem('userInfo') || '{}'//AsyncStorage.getItem通过key字段来进行查询存储的数据，把该结果值作为参数传入第二个callback方法
        const { username = '' } = JSON.parse(res)
        username && this.setState({
            username
        })
    }

    _onClickUp = () => {
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
                username: copyusername,
                title: this.state.title,
                name: this.state.name,
                work: this.state.work,
                telephone: this.state.telephone,
                email: this.state.email,
                other: this.state.other,
            })
        })
            .then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 200) {
                    // Alert.alert("提交成功")
                    navigation.navigate("记");
                }
            })
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
        const username = this.state.username;
        copyusername = username;
        console.log(copyusername);
        navigation.isFocused = () => {
            console.log("监测用户状态")
            this.checkUserAction();
        }
        return (
            <View>
                <View style={{
                    backgroundColor: "#fff",
                    height: 45,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'row',
                    borderBottomWidth: 0.5,
                    borderBottomColor: "#000",
                }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}
                        style={{
                            width: 50,
                            position: "absolute",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            left: 0
                        }}>
                        <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
                    <View style={{ width: 200 }}>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                        }}>报名表</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <ImageBackground
                            style={{
                                width: '100%',
                                marginTop: 30,
                                height: '100%',
                                flexDirection: 'row',
                                borderColor: '#c40018',
                                borderRightWidth: 3,
                                borderLeftWidth: 3
                            }}
                            source={require('../../../Image/SignUp/under.png')}>
                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    height: 80,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 350,
                                    marginLeft: 55
                                }}
                                onPress={() => {
                                    this._onClickUp()
                                }}>
                                <ImageBackground style={{
                                    width: '100%',
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    resizeMode: 'stretch'
                                }}
                                    source={require('../../../Image/SignUp/submit.png')}>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>提</Text>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>交</Text>
                                </ImageBackground>
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
 <LottieView source={require('../../../success.json')} //这个就是动画的路径
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
                            <View style={{ width: 30, height: 250, marginLeft: 12, marginTop: 30 }}>
                                <View style={{ width: 30, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black' }}>其</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }}>它</Text>
                                    <Text style={{ fontSize: 15, color: 'red' }}>*</Text>
                                </View>
                                <TextInput
                                    multiline={true}
                                    style={{ width: 30, height: 180, backgroundColor: '#bfbfbf', textAlignVertical: 'top'}}
                                    onChangeText={(text) => { this.setState({ other: text }) }}></TextInput>
                            </View>
                            <View style={{ width: 30, height: 250, marginLeft: 12, marginTop: 30 }}>
                                <View style={{ width: 30, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black' }}>邮</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }}>箱</Text>
                                    <Text style={{ fontSize: 15, color: 'red' }}>*</Text>
                                </View>
                                <TextInput
                                    multiline={true}
                                    style={{ width: 30, height: 180, backgroundColor: '#bfbfbf', textAlignVertical: 'top'}}
                                    onChangeText={(text) => { this.setState({ email: text }) }}></TextInput>
                            </View>
                            <View style={{ width: 30, height: 250, marginLeft: 12, marginTop: 30 }}>
                                <View style={{ width: 30, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black' }}>电</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }}>话</Text>
                                    <Text style={{ fontSize: 15, color: 'red' }}>*</Text>
                                </View>
                                <TextInput
                                    multiline={true}
                                    style={{ width: 30, height: 180, backgroundColor: '#bfbfbf', textAlignVertical: 'top'}}
                                    onChangeText={(text) => { this.setState({ telephone: text }) }}></TextInput>
                            </View>
                            <View style={{ width: 30, height: 250, marginLeft: 12, marginTop: 30 }}>
                                <View style={{ width: 30, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black' }}>职</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }}>业</Text>
                                    <Text style={{ fontSize: 15, color: 'red' }}>*</Text>
                                </View>
                                <TextInput
                                    multiline={true}
                                    style={{ width: 30, height: 180, backgroundColor: '#bfbfbf', textAlignVertical: 'top'}}
                                    onChangeText={(text) => { this.setState({ work: text }) }}></TextInput>
                            </View>
                            <View style={{ width: 30, height: 250, marginLeft: 12, marginTop: 30 }}>
                                <View style={{ width: 30, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black' }}>姓</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }}>名</Text>
                                    <Text style={{ fontSize: 15, color: 'red' }}>*</Text>
                                </View>
                                <TextInput
                                    multiline={true}
                                    style={{ width: 30, height: 180, backgroundColor: '#bfbfbf', textAlignVertical: 'top'}}
                                    onChangeText={(text) => { this.setState({ name: text }) }}></TextInput>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.bottom}>
                        <Image style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} source={require('../../../Image/SignUp/spindrift.png')}></Image>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 660,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        flexDirection: 'column-reverse',
    },
    header: {
        width: '90%',
        height: '100%',
        alignItems: 'center',
    },
    bottom: {
        width: "100%",
        height: 150,
        position: 'absolute',
        bottom: 25
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

})