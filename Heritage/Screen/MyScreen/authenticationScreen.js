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
  Alert
  
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-paper';

var URL="http://192.168.50.91:3000/users/renzheng";

export default class ModalComp extends Component{
    constructor(props){
        super(props);
        const {navigation,route} = this.props;
        let username = route.params.username;
        this.state = {
          username,
          realname:"",modalVisible: false,
          idcard:"",modalVisible: false,
          evidence:"",modalVisible: false,
        }
      };

      _onClickrenzheng=()=> {
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
            realname: this.state.realname,
            idcard: this.state.idcard,
            evidence: this.state.evidence
          })
        })
        .then(function (res) {
          return res.json();
      }).then(function (json) {
          if (json.code == 200) {
            //   Alert.alert("提交成功")
              navigation.goBack("我的");
          } 
      })
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
                    onPress={() => navigation.goBack()}>
                        <FontAwesome name={'angle-left'} size={25} color={'#000'} />
                    </TouchableOpacity>
                    <Text style={{fontSize:18,
                    textAlign: 'center',
                    textAlignVertical: 'center'}}>认证</Text>
                    <View>
                    </View>
                </View>
            </View>
            <View style={{width:'100%',height:630,backgroundColor:'#f2f2f2'}}>
                <View style={{width:'100%',height:270,backgroundColor:'#fff'}}>
                    <View style={{
                        width:'100%',
                        height:50,
                        borderBottomWidth:0.5,
                        borderBottomColor:'#000',
                        alignItems:'center',
                        justifyContent:'space-between',
                        flexDirection:'row'}}>
                            <Text style={{fontSize:15,marginLeft:10}}>真实姓名</Text>
                            <TextInput 
                            style={{width:200,height:40,backgroundColor:'#fff'}}
                            onChangeText={(text)=> this.setState({realname:text})}
                            //  underlineColorAndroid='transparent'
                             selectionColor='black'></TextInput>
                    </View>
                    <View style={{
                        width:'100%',
                        height:50,
                        borderBottomWidth:0.5,
                        borderBottomColor:'#000',
                        alignItems:'center',
                        justifyContent:'space-between',
                        flexDirection:'row'
                        }}>
                            <Text style={{fontSize:15,marginLeft:10}}>身份证号</Text>
                            <TextInput 
                            style={{width:200,height:40,backgroundColor:'#fff'}}
                            onChangeText={(text)=>this.setState({idcard:text})} 
                            keyboardType='numeric' 
                            //  underlineColorAndroid='transparent'
                             selectionColor='black'
                            ></TextInput>
                        </View>
                    <View style={{width:'100%',height:170,}}>
                        <View style={{width:'100%',height:50,justifyContent:'center'}}>
                            <Text style={{fontSize:15,marginLeft:10}}>证明材料</Text>
                        </View>
                        <TouchableOpacity 
                        style={{width:100,
                        height:100,
                        alignItems:"center",
                        justifyContent:"center"
                        }}>
                            <AntDesign name={'plussquareo'} size={100} color={'#e1dfdf'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{fontSize:13,color:'#935258',margin:10}}>认证后可以获得相应的称号</Text>
                <View style={{width:'100%',height:200,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={styles.submit}
                      onPress={this._openModalWin}>
                        <Text style={{fontSize:15,color:'#fff'}}>提交</Text>
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
            // onPress={this._closeModalWin}
        >
                    <View style={styles.modalLayer}>

                          <TouchableOpacity
                                onPress={()=>{
                                   
                                }}                           
                            >
                        <View style={styles.modalContainer}>
                            <View style={{width:'100%',height:'75%',alignItems:'center',justifyContent:'center'}}>
                                <Text style={styles.modalTitleStyle}>成功提交！</Text>
                            </View>
                            <TouchableOpacity style={styles.modalButtonStyle}
                            onPress={this._onClickrenzheng}>      
                            <Text style={{fontSize:15}}>确认</Text> 
                            </TouchableOpacity>
                            
                        </View>
                        </TouchableOpacity>
                    </View>
                    {/* </TouchableWithoutFeedback> */}
                    </TouchableOpacity>
                </Modal>
                </View>
            </View> 
        </View>
     
        )}}
        const styles = StyleSheet.create({
            submit:{
                width:100,
                height:45,
                backgroundColor:'#568491',
                borderRadius:10,
                alignItems:'center',
                justifyContent:'center',
            },
            modalLayer: {
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                flex: 1,
                justifyContent: 'center',
                padding: 32
            },
            modalContainer: {
                height: 150,
                backgroundColor: 'white',
                justifyContent: 'center',
                borderRadius:10,
                
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
        