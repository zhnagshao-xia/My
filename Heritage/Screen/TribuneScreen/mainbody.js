import React, { Component } from "react";
import {
  Share,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image, ScrollView,
  Alert,
  AsyncStorage,
  NativeModules,
  Animated,
  LayoutAnimation,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';
import Modal from 'react-native-modalbox';
// import Animated from "react-native-reanimated";

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL = http + "/users/usericon";
var URL1 = http + "/luntan/zhengwen";
var URL2 = http + "/luntan/forward";
var URL3 = http + "/luntan/likes";
var URL4 = http + "/luntan/zhengwen/addguanzhu";
var URL5 = http + "/luntan/pinglun/likes";
var URL6 = http + "/luntan/zhengwen/pinglun";
var copy_id;
var copy_id1;
var copyusername;
var copyyonghuming;
var copytouxiang;
var copyyonghuming2;
var copyusericon;
var copyusername2;
var copyusername3;
var copyyonghuming3;

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
var ffk = true;

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;

var openOrClose = true;
export default class mainbody extends Component {
  constructor(props) {
    super(props);
    const { navigation, route } = this.props;
    let _id = route.params._id;
    this.state = {
      username: "立即登录",
      usericon: "/picture/touxiang/fans/b0.jpg",
      _id,
      docs: [],
      pinglun: [],
      picture: [],
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      stranHeight: new Animated.Value(0),
      pinglun: this.props.multiList,
      selectMultiItem: [],
      huitie:""
    }
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
      console.log("888" + username)
    copyusername = username;
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(URL1, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: this.state._id,
      })
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          docs: json.docs[0],
          pinglun: json.docs[0].pinglun,
          picture: json.docs[0].picture
        })
        console.log(json.docs)
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      });
  }

  _onClickForward = () => {
    fetch(URL2, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: copy_id,
      })
    })
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.code == 200) {
          Alert.alert("收藏成功")
        }
      })
  }

  _onClickLikes = () => {
    fetch(URL3, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: copy_id1,
      })
    })
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.code == 200) {
          Alert.alert("点赞成功")
        }
      })
  }

  _onClickPinglunlikes = () => {
    fetch(URL5, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        yonghuming: copyyonghuming2,
      })
    })
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.code == 200) {
        }
      })
  }

  _onClickAddguanzhu = () => {
    fetch(URL4, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: copyusername,
        yonghuming: copyyonghuming,
        touxiang: copytouxiang
      })
    })
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.code == 200) {
          Alert.alert("关注成功")
        }
      })
  }

  _onClickPinglun=()=> {
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
    fetch(URL6, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id:this.state._id,
        username: copyusername2,
        usericon: copyusericon,
        time:currentdate,
        huitie: this.state.huitie
      })
    })
    .then(function (res) {
      return res.json();
  }).then(function (json) {
      if (json.code == 200) {
          // Alert.alert("添加成功")//这个消掉
          // navigation.goBack("地址");
      } 
  })
  } 

  onShare = async () => {
    try {
      const result = await Share.share({
        message:'来自'+copyusername+'的分享'
        +'<'+'转发了'+copyyonghuming3+'的帖子'+'>',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
    this._onClickForward();
    this.fetchData();
  };

  beheight = (height) => {
    Animated.timing(this.state.stranHeight, {
      toValue: height,
      duration: 400
    }).start();
  };

  static defaultProps = {
    multiList: [
      {
        "id": "0",
        "name": "音乐",
        select: false
      },
      {
        "id": "1",
        "name": "美术",
        select: false
      },
      {
        "id": "2",
        "name": "舞蹈",
        select: false
      },
    ]
  };
  _selectMultiItemPress(item, i) {
    if (item.select) {
      this.state.selectMultiItem.splice(this.state.selectMultiItem.findIndex(function (x) {
        return x === item.yonghuming;
      }), 1);
    } else {
      this.state.selectMultiItem.push(item.yonghuming);
    }
    this.state.pinglun[i].select = !item.select;
    this.setState({ pinglun: this.state.pinglun });
  }
  //递交 选中 
  _submitMultiPress() {
    alert(`选中了${JSON.stringify(this.state.selectMultiItem)}`)
  }
  //渲染多选标记
  _renderMultiMark() {
    let pinglun = this.state.pinglun;
    let len = pinglun.length;
    let menuArr = [];
    for (let i = 0; i < len; i++) {
      let item = pinglun[i];
      if (item.select) {
        menuArr.push(
          //选中状态
          <View style={{
            width: '100%',
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            paddingBottom: 20
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: "space-between"
            }}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{ uri: https + item.touxiang }}
                  style={{ width: 40, height: 40, backgroundColor: 'black', borderRadius: 50, marginRight: 7 }}>
                </Image>
                <View style={{ flexDirection: "column", marginTop: 10 }}>
                  <Text style={{ fontSize: 15, color: 'black', marginRight: 5 }}>{item.yonghuming}</Text>
                  <Text style={{ fontSize: 12 }}>{item.time}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    this._selectMultiItemPress(item, i),
                      copyyonghuming2 = item.yonghuming,
                      this._onClickPinglunlikes()
                    // ,this.fetchData()

                  }}>
                  <FontAwesome name={'heart'} size={20} color={'#945357'} />
                </TouchableOpacity>
                <Text style={{ fontSize: 13, marginLeft: 5 }}>{item.likes + 1}</Text>
              </View>
            </View>
            <View style={{ width: '100%', marginBottom: 10 }}>
              <Text style={{ fontSize: 13 }}>{item.huitie}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (openOrClose) {
                  this.beheight(4 * 33)
                  openOrClose = false
                } else {
                  this.beheight(0)
                  openOrClose = true
                }
              }}
              style={{
                width: '95%',
                height: 25,
                backgroundColor: '#e7e7e7',
                borderRadius: 5, alignItems: 'center', flexDirection: 'row'
              }}>
              <Text style={{ fontSize: 13, marginRight: 5 }}> 共12条回复</Text>
              <FontAwesome name={'angle-right'} size={20} color={'#000'} />
            </TouchableOpacity>
            <Animated.View style={{ width: 200, height: this.state.stranHeight }}>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require('../../Image/HomeScreen/2.jpg')}
                    style={{ width: 40, height: 40, backgroundColor: 'black', borderRadius: 50, marginRight: 7 }}>
                  </Image>
                  <View style={{ flexDirection: "column", marginTop: 10 }}>
                    <Text style={{ fontSize: 15, color: 'black', marginRight: 5 }}>{item.yonghuming}</Text>
                    <Text style={{ fontSize: 12 }}>{item.time}</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 12 }}>haokan</Text>
              </View>
            </Animated.View>
          </View>
        )
      } else {
        menuArr.push(

          // 未选中状态
          <View style={{
            width: '100%',
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            paddingBottom: 20
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: "space-between"
            }}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{ uri: https + item.touxiang }}
                  style={{ width: 40, height: 40, backgroundColor: 'black', borderRadius: 50, marginRight: 7 }}>
                </Image>
                <View style={{ flexDirection: "column", marginTop: 10 }}>
                  <Text style={{ fontSize: 15, color: 'black', marginRight: 5 }}>{item.yonghuming}</Text>
                  <Text style={{ fontSize: 12 }}>{item.time}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    this._selectMultiItemPress(item, i),
                      copyyonghuming2 = item.yonghuming,
                      this._onClickPinglunlikes()
                    // ,this.fetchData()

                  }}>
                  <FontAwesome name={'heart-o'} size={20} color={'#000'} />
                </TouchableOpacity>
                <Text style={{ fontSize: 13, marginLeft: 5 }}>{item.likes}</Text>
              </View>
            </View>
            <View style={{ width: '100%', marginBottom: 10 }}>
              <Text style={{ fontSize: 15 }}>{item.huitie}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (openOrClose) {
                  this.beheight(360)
                  openOrClose = false
                } else {
                  this.beheight(0)
                  openOrClose = true
                }
              }}
              style={{
                width: '95%',
                height: 25,
                backgroundColor: '#e7e7e7',
                borderRadius: 5, alignItems: 'center', flexDirection: 'row'
              }}>
              <Text style={{ fontSize: 13, marginRight: 5 }}> 共5条回复</Text>
              <FontAwesome name={'angle-right'} size={20} color={'#000'} />
            </TouchableOpacity>
            <Animated.View style={{
              width: '95%',
              height: this.state.stranHeight,
              flexDirection: "column",
              paddingLeft: 40,
              overflow: "hidden",
              paddingTop:10
            }}>
              <View style={{ flexDirection: 'column',marginBottom:10 }}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={{uri:https+'/picture/touxiang/fans/a24.jpg'}}
                    style={{ width: 40, height: 40, backgroundColor: 'black', borderRadius: 50, marginRight: 7 }}>
                  </Image>
                  <View style={{ flexDirection: "column"}}>
                    <Text style={{ fontSize: 15, color: 'black', marginRight: 5 }}>弹琴说爱</Text>
                    <Text style={{ fontSize: 12 }}>2020-10-11 18：14</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 15, marginLeft: 30 }}>我也觉得好漂亮呀</Text>
              </View>
              <View style={{ flexDirection: 'column',marginBottom:10 }}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={{uri:https+'/picture/touxiang/fans/a20.jpg'}}
                    style={{ width: 40, height: 40, backgroundColor: 'black', borderRadius: 50, marginRight: 7 }}>
                  </Image>
                  <View style={{ flexDirection: "column"}}>
                    <Text style={{ fontSize: 15, color: 'black', marginRight: 5 }}>追足的梦幻</Text>
                    <Text style={{ fontSize: 12 }}>2020-10-11 15：40</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 15, marginLeft: 30 }}>非遗真的是国家的宝藏</Text>
              </View>
              <View style={{ flexDirection: 'column',marginBottom:10 }}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={{uri:https+'/picture/touxiang/fans/a7.jpg'}}
                    style={{ width: 40, height: 40, backgroundColor: 'black', borderRadius: 50, marginRight: 7 }}>
                  </Image>
                  <View style={{ flexDirection: "column"}}>
                    <Text style={{ fontSize: 15, color: 'black', marginRight: 5 }}>当初的我</Text>
                    <Text style={{ fontSize: 12 }}>2020-10-11 15：21</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 15, marginLeft: 30 }}>赞同</Text>
              </View>
              <View style={{ flexDirection: 'column',marginBottom:10 }}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={{uri:https+'/picture/touxiang/fans/a21.jpg'}}
                    style={{ width: 40, height: 40, backgroundColor: 'black', borderRadius: 50, marginRight: 7 }}>
                  </Image>
                  <View style={{ flexDirection: "column"}}>
                    <Text style={{ fontSize: 15, color: 'black', marginRight: 5 }}>超级凶鸭</Text>
                    <Text style={{ fontSize: 12 }}>2020-10-11 10：44</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 15, marginLeft: 30 }}>+1</Text>
              </View>
              <View style={{ flexDirection: 'column',marginBottom:10 }}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={{uri:https+'/picture/touxiang/fans/a23.jpg'}}
                    style={{ width: 40, height: 40, backgroundColor: 'black', borderRadius: 50, marginRight: 7 }}>
                  </Image>
                  <View style={{ flexDirection: "column"}}>
                    <Text style={{ fontSize: 15, color: 'black', marginRight: 5 }}>看瓜少年和猹</Text>
                    <Text style={{ fontSize: 12 }}>2020-10-11 10：21</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 15, marginLeft: 30 }}>想要原图</Text>
              </View>
            </Animated.View>
          </View>
        )
      }
    }
    return (
      //讲各类状态框输出到前端页面
      <View>{menuArr}</View>
    );
  }
  render() {
    const { navigation } = this.props;
    const docs = this.state.docs;
    const data = this.state.pinglun;
    const data1 = this.state.picture;
    const username = this.state.username;
    const usericon = this.state.usericon;
    navigation.isFocused = () => {
      console.log("监测用户状态")
      this.checkUserAction();
    }
    const renderCarousel = () =>
      (
        <Carousel style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
          {data1.map((item) => {
            return (
              <Image
                style={{ flex: 1 }}
                resizeMode="contain"
                source={{ uri: https + item.p }}
              />
            )
          })}
        </Carousel>
      )
    return (
      <View style={{ flex: 1 }}>
        <View style={{
          height: 45,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          borderBottomColor: 'black',
          borderWidth: 0.5
        }}>
          <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "90%" }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <FontAwesome name={'angle-left'} size={25} color={'#000'} />
            </TouchableOpacity>
            <Text style={{
              fontSize: 18,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>正文</Text>
            <View></View>
          </View>

        </View>
        <ScrollView style={styles.body}>
          <View style={styles.ques}>
            <View style={styles.names}>
              <View style={{
                flexDirection: 'row'
              }}>
                <Image
                  source={{ uri: https + docs.touxiang }}
                  style={styles.head}>
                </Image>
                <View style={{
                  flexDirection: 'column',
                  marginTop: 10
                }}>
                  <Text style={styles.word}>{docs.yonghuming}</Text>
                  <Text style={{ fontSize: 12, marginLeft: 2 }}>{docs.time}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.guanzhu}
                onPress={() => {
                  copyusername = username,
                    copyyonghuming = docs.yonghuming,
                    copytouxiang = docs.touxiang,
                    this._onClickAddguanzhu()
                }}>
                <Text style={{ fontSize: 12, color: 'black' }}>+关注</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 13 }}>{docs.content}</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <FlatList
                data={data1}
                numColumns={3}
                renderItem={({ item }) =>
                  <Lightbox springConfig={{ tension: 15, friction: 7 }}
                    swipeToDismiss={false}
                    renderContent={renderCarousel}
                  >
                    <View style={{ width: 100, height: 100 }}>
                      <Image style={{ width: 90, height: 90 }}
                        source={{ uri: https + item.p }}
                      ></Image></View>
                  </Lightbox>
                } />
            </View>
          </View>
          <View style={{
            width: '100%',
            height: 35,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20
          }}>
            <Text style={{ fontSize: 15 }}>评论</Text>
          </View>
          <View>{this._renderMultiMark()}</View>
        </ScrollView>
        <View style={{
          width: '100%',
          height: 45,
          backgroundColor: '#bfbfbf',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          position: "absolute",
          bottom: 0
        }}>
          <TouchableOpacity style={{ width: 100, height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
            activeOpacity={0.8}
            onPress={() => {
              copyyonghuming3=docs.yonghuming,
              copy_id = docs._id,
              this.onShare();
            }}>
            <EvilIcons name={'share-google'} size={30} color={'#000'} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>{docs.forward}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.refs.modal6.open()}
            activeOpacity={0.8}
            style={{ width: 100, height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Feather name={'message-square'} size={22} color={'#000'} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>评论</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ width: 100, height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
            onPress={() => {
              copy_id1 = docs._id;
              this._onClickLikes();
            }}>
            <FontAwesome name={'heart-o'} size={20} color={'#000'} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>{docs.likes}</Text>
          </TouchableOpacity>
        </View>
        <Modal style={styles.modal4} position={"bottom"} ref={"modal6"} >
          <TextInput
            maxLength={200}
            multiline={true}
            placeholder='写评论...'
            textAlignVertical="top"
            style={{
              width: '70%',
              height: 120,
              backgroundColor: '#f2f2f2',
              borderRadius: 10,}}
              onChangeText={(text)=>{
                this.setState({huitie:text});
              }}></TextInput>
          <TouchableOpacity
            onPress={() =>{
              copyusername2=username,
              copyusericon=usericon, 
              this.refs.modal6.close(),
            this._onClickPinglun(),
          this.fetchData()}}
            style={{
              width: '15%',
              height: 40,
              backgroundColor: '#945357',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 70
            }}>
            <Text style={{ fontSize: 15, color: '#fff' }}>发送</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}



const styles = StyleSheet.create({

  body: {
    width: '100%',
    backgroundColor: '#f2f2f2'
  },
  ques: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  word: {
    fontSize: 15,
    color: '#000',
    letterSpacing: 2,
  },
  names: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  head: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 50,
    marginRight: 7
  },
  right: {
    width: 250,
    height: 40,
  },
  shang: {
    width: '95%',
    height: '60%',
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  guanzhu: {
    width: 45,
    height: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
  },
  modal4: {
    height: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    flexDirection: 'row'
  },

}); 