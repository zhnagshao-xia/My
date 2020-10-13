import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  Modal,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  Animated,//加这个
  Easing,//加这个
} from 'react-native';
import { TextInput } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';//加这个

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL = http + "/users/usericon";
var URL1 = http+"/luntan/fatie";
var copyusername;
var copyusericon;

export default class ModalComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addPicState: "flex",
      avatarSource: [],
      source: new Array(9),
      title: '',
      words: '',
      modalVisible: false,
      username: "立即登录",
      usericon: "/picture/touxiang/fans/b0.jpg",
      content:"",
      progress: new Animated.Value(0),//加这个在是state里面
    };
  }

  checkUserAction = async () => {
    const res = await AsyncStorage.getItem('userInfo') || '{}'//AsyncStorage.getItem通过key字段来进行查询存储的数据，把该结果值作为参数传入第二个callback方法
    const { username = '' } = JSON.parse(res)
    username && this.setState({
      username
    })
    fetch(URL, {//头像
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
      })
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          usericon: json.docs[0].usericon,//usericon: json.docs[0].usericon,
        })
        console.log(json.docs)
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      });
    console.log("888" + username),
      this.fetchData();
  }

_onClickFatie = () => {

  this.setState({modalVisible: true});//加这个
  var date = new Date();
  var seperatorl = "-";
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var strDate = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  if(month>=1&&month<=9){
    month="0"+month;
  }
  if(strDate>=0&&strDate<=9){
    strDate="0"+strDate;
  }
  if(hour>=0&&hour<=9){
    hour="0"+hour;
  }
  if(minute>=1&&minute<=9){
    minute="0"+minute
  }
  var currentdate = year+seperatorl+month+seperatorl+strDate+" "+hour+":"+minute;
  fetch(URL1, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username:copyusername,
      usericon:copyusericon,
      time:currentdate,
      content:this.state.content,
      picture:"/picture/luntan/fatietu.jpg"
    })
  })
    .then(function (res) {
      return res.json();
    }).then(function (json) {
      if (json.code == 200) {
        // Alert.alert("发帖成功")
      }
    })
}

  // _openModalWin = () => {
  //   this.setState({ modalVisible: true });
  // }

  _closeModalWin = () => {
    this.setState({ modalVisible: false });
  }

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
  
componentDidMount() {
  Animated.timing(this.state.progress, {
    toValue: 1,
    duration: 4000,
    easing: Easing.linear,
    
  }).start();
  }//加这个整个
  
  render() {
    const { navigation, route } = this.props;
    const username = this.state.username;
    const usericon = this.state.usericon;
    navigation.isFocused = () => {
      console.log("监测用户状态")
      this.checkUserAction();
    }
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
    return (
      <View>
        <View style={{
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 0.5,
          borderBottomColor: "#000",
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
          <Text style={{
            fontSize: 18,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>消息</Text>
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={()=>{
            copyusername=username,
            copyusericon=usericon,
            // this._openModalWin,
            this._onClickFatie()
            // navigation.goBack('Tribunerecommend')
          }}
            style={styles.out}>
            <Text style={{ color: '#fff', fontSize: 13 }}>发送</Text>
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
                              <Text style={{fontSize:15}}>发送成功</Text>
                          </View>
                            <TouchableOpacity style={styles.modalButtonStyle}
                                   onPress={()=>{     
                                    this._closeModalWin
                                    navigation.goBack('Tribunerecommend')
                                  }}>
                                        <Text style={{fontSize:15}}>确定</Text>
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                </Modal>
        </View>
        <View style={{ width: '100%', height: 620, backgroundColor: '#f2f2f2' }}>
          <TextInput
            underlineColorAndroid='transparent'
            selectionColor={'#000'}
            placeholder="分享你的想法..."
            maxLength={100}
            multiline={true}
            onChangeText={(text)=>{
              this.setState({content:text});
            }}
            style={{ backgroundColor: '#f2f2f2', fontSize: 15 }}
          ></TextInput>
          <View style={{ width: '100%', height: 150 }}>
            <View style={{ width: '100%', height: 100, flexWrap: "wrap", flexDirection: "row", alignItems: 'center' }}>
              {
                this.state.avatarSource.map((item) => {
                  if (item.key == 9) {
                    console.log(this.state.title)
                  }
                  return (
                    <View style={{ marginLeft: 10, flexDirection: "row", width: 80, height: 80, alignItems: 'center' }}>
                      {/* <Text>{item}</Text> */}
                      <Image style={{ height: '100%', width: '100%', }} source={{ uri: item }} />
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

          {/* <TextInput
maxLength={100} 

   selectionColor={'#000'}
    multiline={true}
    style={{width:'100%',height:100}}
    ></TextInput> */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  out: {
    width: 40,
    height: 25,
    backgroundColor: '#f76220',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:10
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
  contentStyle: {
    padding: 30
  },
  contentTextStyle: {
    textAlign: 'center',
    fontSize: 15
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
