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
  Alert,
  TouchableWithoutFeedback,
  Animated,
  Easing
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import LottieView from 'lottie-react-native';

var http = "http://121.196.191.45:3000";
var URL=http+"/users/renzheng";


export default class ModalComp extends Component{
    constructor(props){
        super(props);
    
        const {navigation,route} = this.props;
        let username = route.params.username;
        // this.state = {
        //     addPicState: "flex",
        //     avatarSource: [],
        //     source: new Array(9),
        //     title: '',
        //     words: '',
        // };
        this.state = {
          username,
          realname:"",modalVisible: false,
          idcard:"",modalVisible: false,
          evidence:"",modalVisible: false,
          addPicState: "flex",
          avatarSource: [],
          source: new Array(9),
          title: '',
          words: '',
          progress: new Animated.Value(0),
          
        }
        
      
      };

      _fetchImage(image) {

        let url = "http://192.168.56.1:3000/api/travels/travel/"
        let head = { uri: image.path, type: 'multipart/form-data', name: 'image.png' };

        let formData = new FormData();
        formData.append('file', head); // 这里的 file 要与后台名字对应。

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        }).then(function (response) {
            console.log("response", response);
            return response.json();
        })
    }

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


    componentDidMount() {
        Animated.timing(this.state.progress, {
          toValue: 1,
          duration: 3500,
          easing: Easing.linear,
          
        }).start();
      }


    render() {

        var imgDate = [
            {
                key: 1,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 2,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 3,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 4,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 5,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 6,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 7,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 8,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 1,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
        ]

      const { navigation } = this.props;
        return (
        <View>
            <View style={{
          backgroundColor: "#fff",
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'row',
        }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            style={{
              width: 50,
              position: "absolute",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              left: 0
            }}>
            <FontAwesome name={'angle-left'} size={25} color={'#000'} />
          </TouchableOpacity>
          <View style={{ width: 200 }}>
            <Text style={{
              fontSize: 18,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>认证</Text>
          </View>
        </View>
            <View style={{width:'100%',height:630,backgroundColor:'#f2f2f2'}}>
                <View style={{width:'100%',height:250,backgroundColor:'#fff',marginTop:15}}>
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
                            placeholderTextColor="#e5e3e4"
                            placeholder={'请输入真实姓名'}
                            style={{width:200,height:40,backgroundColor:'#fff'}}
                            onChangeText={(text)=> this.setState({realname:text})}
                             underlineColorAndroid='transparent'
                             selectionColor='black'>
                             </TextInput>
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
                            placeholderTextColor="#e5e3e4"
                            placeholder={'请输入身份证号'}
                            style={{width:200,height:40,backgroundColor:'#fff'}}
                            onChangeText={(text)=>this.setState({idcard:text})} 
                            keyboardType='numeric' 
                             selectionColor='black'
                            ></TextInput>
                        </View>
                    <View style={{width:'100%',height:150}}>
                        <View style={{width:'100%',height:50,justifyContent:'center'}}>
                            <Text style={{fontSize:15,marginLeft:10}}>证明材料</Text>
                        </View>
                        <View style={{width:'100%',height:100,flexWrap: "wrap",flexDirection: "row",alignItems:'center' }}>
                        {
                                    this.state.avatarSource.map((item) => {
                                        if (item.key == 9) {
                                            console.log(this.state.title)
                                        }
                                        return (
                                            <View style={{marginLeft:10, flexDirection: "row",backgroundColor:'red',width:80,height:80 ,alignItems:'center'}}>
                                                {/* <Text>{item}</Text> */}
                                                <Image style={{ height: '100%', width:'100%',}} source={{ uri: item }} />
                                            </View>
                                        )
                                    })
                                }

                        <TouchableOpacity
                         onPress={() => {
                            // 从本地相册选择单幅图像
                            // 调用多个图像
                            ImagePicker.openPicker({
                                // multiple: true,
                                width: 400,
                                height: 400,
                                cropping: true,
                                // showCropGuidelines :true
                                multiple: true,
                                maxFiles: 9,
                            }).then(images => {
                                source = images.map(item => { return item.path });
                                console.log(source);
                                // console.log(images);
                                this._fetchImage(images);
                                this.setState({
                                    avatarSource: source
                                });
                                console.log("sdsad d" + this.state.avatarSource)
                            });
                        }}
                         style={[styles.addPicBox, { display: this.state.addPicState }]}>
                            <AntDesign name='plus' size={50} color="#999999" />
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{margin:10}}>
                <Text style={{fontSize:13,color:'#935258'}}>
                    *大学生认证请上传身份证正反面及学生证个人信息页
                </Text>
                <Text style={{fontSize:13,color:'#935258'}}>
                    *手艺人认证请上传身份证正反面及相关证明材料
                </Text>
                </View>
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
                           
                          <View style={{width:150,
                            height:'45%',
                            // backgroundColor:'red',
                            alignItems:'center',
                            justifyContent:'center'
                            }}>
 <LottieView source={require('../../success.json')} progress={this.state.progress} />
                          </View>
                          <View style={{width:'100%',
                          height:'25%',
                          alignItems:'center',
                        //   justifyContent:'center',
                        //   marginBottom:10
                          }}>
                              <Text style={{fontSize:15}}>提交成功</Text>
                          </View>
                            <TouchableOpacity style={styles.modalButtonStyle}
                                     onPress={()=>{     
                                        this._closeModalWin
                                        navigation.goBack()
                                      }}
                                    >
                                        <Text style={{fontSize:15}}>确定</Text>
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
                borderRadius:5,
                alignItems:'center',
                justifyContent:'center',
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
            addPicBox: {
                height: 72,
                width: 72,
                justifyContent: "center",
                alignItems: "center",
                borderStyle: "dashed",
                borderRadius: 5,
                borderWidth: 3,
                borderColor: "#999999",
                marginLeft: '2%',
                marginTop: 10,
                marginLeft: 15,
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
        