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
  Alert,
  AsyncStorage} from 'react-native';
import { TextInput } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL = http + "/users/usericon";
var URL1 = http+"/shopping/details/pinglun";
var copyusername;
var copyusericon;

export default class ModalComp extends Component{
  constructor(props) {
    super(props);
    const {navigation,route} = this.props;
    let goods = route.params.goods;
    this.state = {
        goods,
        addPicState: "flex",
        avatarSource: [],
        source: new Array(9),
        title: '',
        words: '',
        modalVisible: false,
        username: "立即登录",
        usericon: "/picture/touxiang/fans/b0.jpg",
        pingyu:""
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

_openModalWin = () => {
  this.setState({modalVisible: true});
}

_closeModalWin = () => {
  this.setState({modalVisible: false});
}

_onClickPinglun = () => {
  fetch(URL1, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goods: this.state.goods,
      username:copyusername,
      usericon:copyusericon,
      time:"刚刚",
      pingyu:this.state.pingyu,
      maijiaxiu:"/picture/shopping/pinglun/琢磨/木雕/2.jpg"
    })
  })
    .then(function (res) {
      return res.json();
    }).then(function (json) {
      if (json.code == 200) {
        Alert.alert("评价成功")
      }
    })
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
  render() {
    const { navigation, route } = this.props;
    const goods = this.state.goods;
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
          <Text style={{fontSize:18,
              textAlign: 'center',
              textAlignVertical: 'center',}}>评价</Text>
          <TouchableOpacity
           onPress={()=>{
             copyusername=username,
             copyusericon=usericon,
             this._openModalWin,
             this._onClickPinglun(),
             navigation.navigate('商品详情页面',{goods:goods})}}
           style={styles.out}>
            <Text style={{color:'#fff',fontSize:13}}>发表</Text>
          </TouchableOpacity>
          <Modal
                    animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                    transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                    visible={this.state.modalVisible} // 是否显示 modal 窗口
                    onRequestClose={() => { this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
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
        >
                    <View style={styles.modalLayer}>
                          <TouchableOpacity
                                onPress={()=>{
                                }}                           
                            >
                        <View style={styles.modalContainer}>
                          <View style={{width:'100%',height:'70%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={styles.modalTitleStyle}>发表成功！</Text>
                          </View> 
                            <TouchableOpacity
                               style={{width:'100%',
                               height:'30%',
                               borderTopWidth:0.5,
                               alignItems:'center',
                               justifyContent:'center'
                              }}
                                    onPress={this._closeModalWin}
                                >
                                  <Text style={{fontSize:13}}>确定</Text>
                                </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                    </View>
                    {/* </TouchableWithoutFeedback> */}
                    </TouchableOpacity>
                </Modal>
  </View>
  <View style={{width:'100%',height:620,backgroundColor:'#f2f2f2'}}>
  <TextInput 
   underlineColorAndroid='transparent'
   selectionColor={'#000'}
                    placeholder="分享你的评价..." 
                    maxLength={100} 
                    multiline={true} 
                    style={{backgroundColor:'#f2f2f2',fontSize:15}}
                    onChangeText={(text)=>{
                      this.setState({pingyu:text});
                    }}
                    ></TextInput>
                         <View style={{width:'100%',height:150}}>
                        <View style={{width:'100%',height:100,flexWrap: "wrap",flexDirection: "row",alignItems:'center' }}>
                        {
                                    this.state.avatarSource.map((item) => {
                                        if (item.key == 9) {
                                            console.log(this.state.title)
                                        }
                                        return (
                                            <View style={{marginLeft:10, flexDirection: "row",width:80,height:80 ,alignItems:'center'}}>
                                                {/* <Text>{item}</Text> */}
                                                <Image style={{ height: '100%', width:'100%',}} source={{ uri: item }} />
                                            </View>
                                        )
                                    })
                                }

                        <TouchableOpacity
                        activeOpacity={0.8}
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
  out:{
  width:40,
  height:25,
  backgroundColor:'#f76220',
  borderRadius:5,
  alignItems:'center',
  justifyContent:'center',
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
  padding:30
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
  width:200,
  height: 130,
  backgroundColor: 'white',
  justifyContent: 'center',
  borderRadius:5
},
modalTitleStyle: {
  textAlign: 'center',
  fontSize: 15
},
modalButtonStyle: {
  paddingLeft: 30,
  paddingRight: 30,
  marginTop: 10
}
})

