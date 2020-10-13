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
  Modal,
  Button,
  AsyncStorage,
  Alert,
  Animated,
} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL1 = http + "/volunteer/history";
var URL2 = http + "/volunteer/state";
var URL3 = http + "/volunteer/qrcode";
var URL4 = http + "/volunteer/address";
var URL5 = http + "/volunteer/delete";
var URL6 = http + "/volunteer/deleteall";
var copyusername;
var copytitle;
var copytitle1;
var copytitle2;

export default class App extends Component {
  // state={
  //   progressStatusValue: 0,
  //   }
  constructor(props) {
    super(props);
    const { navigation, route } = this.props;
    let sum = route.params.sum;
    this.state = {
      progressStatusValue: 0,
      username: "",
      modalVisible: false,
      modalVisibleTwo: false,
      modalVisibleThird: false,
      modalVisibleFour: false,
      modalVisibleOK: false,
      docs: [],
      author: "",
      QRcode: "",
      sum,
    };
  }
  animation = new Animated.Value(0);  //initialisation of Animated component to with initial value as the zero for start of the progress bar.
  onAnimation = () => {
    this.animation.addListener(({ value }) => {
      this.setState({ progressStatusValue: parseInt(value, 10) });
    });
    Animated.timing(this.animation, {
      toValue: this.state.sum,  //value at which it need to reach for end of the progress bar
      duration: 3000,  //duration till the progress bar will continue
    }).start();
  }
  checkUserAction = async () => {
    const res = await AsyncStorage.getItem('userInfo') || '{}'//AsyncStorage.getItem通过key字段来进行查询存储的数据，把该结果值作为参数传入第二个callback方法
    const { username = '' } = JSON.parse(res)
    username && this.setState({
      username
    })
    this.fetchData();
  }

  componentDidMount() {//componentDidMount:生命周期
    this.checkUserAction();
    this.fetchData();
    this.onAnimation();
  }

  fetchData = () => {
    fetch(URL1, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username
      })
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          docs: json.docs,
        })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      });
  }

  _onClickState = () => {
    fetch(URL2, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: copytitle1,
      })
    })
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.code == 200) {
          // Alert.alert("删除成功")
          // navigation.navigate('记录');
        }
      })
  }

  _onClickQrcode = () => {
    fetch(URL3, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: copytitle1,
      })
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          QRcode: json.docs[0].QRcode,
        })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      })
  }

  _onClickAddress = () => {
    fetch(URL4, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: copytitle,
      })
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          author: json.docs[0].author,
        })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      })
  }

  _onClickDelete = () => {
    var navigation = this.props.navigation;
    fetch(URL5, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        title: copytitle2,
      })
    })
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.code == 200) {
          // Alert.alert("删除成功")
          navigation.navigate('记');
        }
      })
  }

  _onClickDeleteAll = () => {
    var navigation = this.props.navigation;
    fetch(URL6, {
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
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.code == 200) {
          // Alert.alert("清除成功")
          navigation.navigate('记');
        }
      })
  }

  _openModalWin = () => {
    this.setState({ modalVisible: true });
  }
  _closeModalWin = () => {
    this.setState({ modalVisible: false });
  }
  _openModalTwo = () => {
    this.setState({ modalVisibleTwo: true });
  }
  _closeModalTwo = () => {
    this.setState({ modalVisibleTwo: false });
  }
  _openModalThird = () => {
    this.setState({ modalVisibleThird: true });
  }
  _closeModalThird = () => {
    this.setState({ modalVisibleThird: false });
  }
  _openModalFour = () => {
    this.setState({ modalVisibleFour: true });
  }
  _closeModalFour = () => {
    this.setState({ modalVisibleFour: false });
  }
  _openModalOk = () => {
    this.setState({ modalVisibleOK: true });
  }
  _closeModaLOk = () => {
    this.setState({ modalVisibleOK: false });
  }

  render() {
    const { navigation } = this.props;
    const username = this.state.username;
    copyusername = username;
    console.log(copyusername);
    const data = this.state.docs;
    const author = this.state.author;
    const QRcode = this.state.QRcode;
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
          }}>记录</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this._openModalFour}
            style={{
              width: 50,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <FontAwesome name={'trash-o'} size={22} color={'#000'} />
          </TouchableOpacity>
          <Modal
            animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
            transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
            visible={this.state.modalVisibleFour} // 是否显示 modal 窗口
            onRequestClose={() => { this._closeModalFour(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
            onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
          >
            <View style={{
              height: '100%',
              width: '100%',
              position: "absolute"
            }}>
              <View style={styles.modalLayer}>
                <View onPress={() => { }}>
                  <View style={styles.modalContainer}>
                    <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.5, borderColor: 'black' }}>
                      <Text style={styles.modalTitleStyle}>确认要清空所有记录？</Text>
                    </View>
                    <View style={styles.cancel}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                        onPress={this._closeModalFour}>
                        <Text style={{ fontSize: 15 }}>取 消</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', borderColor: 'black', borderLeftWidth: 0.5 }}
                        onPress={() => { this._onClickDeleteAll(), this._closeModalFour(), this.fetchData() }}>
                        <Text style={{ fontSize: 15, color: '#935558' }}>确 认</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              {/* </TouchableWithoutFeedback> */}
            </View>
          </Modal>
        </View>
        <ScrollView>
          <View style={{ width: '100%', height: 50, marginBottom: 15, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#fff' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
              <Text style={{ fontSize: 15 }}>志愿时长</Text>
              <View style={{ width: 260, height: 30 }}>
                <View style={styles.containerStyle}>
                  <Animated.View
                    style={[
                      styles.innerStyle, { width: this.state.progressStatusValue + "%" },
                    ]}
                  />
                  <Animated.Text style={styles.label}>
                    {this.state.progressStatusValue}%
                  </Animated.Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={this._openModalOk}>
              <EvilIcons
                name={'question'}
                size={25}
                color={'#000'} />
            </TouchableOpacity>
            <Modal
              animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
              transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
              visible={this.state.modalVisibleOK} // 是否显示 modal 窗口
              onRequestClose={() => { this._closeModaLOk(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
              onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
            >
              <View
                style={{ height: '100%', width: '100%', position: "absolute" }}
              >
                <View style={styles.modalLayer}>
                  <View onPress={() => { }}>
                    <View style={styles.box}>
                      <View style={{ width: '95%', height: '70%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 15 }}>志愿时长同等积分，可在集市中抵扣一定金额。具体规则为：1小时志愿时长=100积分=1元</Text>
                      </View>
                      <TouchableOpacity style={{
                        width: '100%',
                        height: '30%',
                        borderColor: 'grey',
                        borderTopWidth: 0.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                        activeOpacity={0.8}
                        onPress={this._closeModaLOk}>
                        <Text style={{ fontSize: 15 }}>我知道了</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.container}>
            <FlatList
              data={data}
              renderItem={({ item }) =>
                <View style={styles.one}>
                  <View style={{ width: '100%', flexDirection: 'row-reverse'}}>
                    <TouchableOpacity style={styles.mark}
                      onPress={() => { this._openModalWin(), copytitle2 = item.title }}
                    >
                      <AntDesign
                        name={'close'}
                        size={20}
                        color={'#000'} />
                    </TouchableOpacity>
                    <Modal
                      animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                      transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                      visible={this.state.modalVisible} // 是否显示 modal 窗口
                      onRequestClose={() => { this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                      onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
                    >
                      <View
                        style={{ height: '100%', width: '100%', position: "absolute" }}
                      >
                        <View style={styles.modalLayer}>
                          <View onPress={() => { }}>
                            <View style={styles.modalContainer}>
                              <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.5, borderColor: 'black' }}>
                                <Text style={styles.modalTitleStyle}>确认要删除这条记录？</Text>
                              </View>
                              <View style={styles.modalButtonStyle}>
                                <TouchableOpacity
                                  activeOpacity={0.8}
                                  style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                                  onPress={this._closeModalWin}>
                                  <Text style={{ fontSize: 15 }}>取 消</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  activeOpacity={0.8}
                                  style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', borderColor: 'black', borderLeftWidth: 0.5 }}
                                  onPress={() => { this._onClickDelete(), this._closeModalWin(), this.fetchData() }}>
                                  <Text style={{ fontSize: 15, color: '#935558' }}>确 认</Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                        {/* </TouchableWithoutFeedback> */}
                      </View>
                    </Modal>
                  </View>
                  <View style={styles.first}>
                    <View style={{ flexDirection: "row" }}>
                      <Text>主题：</Text>
                      <Text style={{ width: 240 }}>{item.title}</Text></View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.message}
                      onPress={() => navigation.navigate('志愿者', { title: item.title })}>
                      <Text style={{ fontSize: 12, textAlign: 'center' }}>原 文</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.second}>
                    <Text style={{}}>地点：{item.author}</Text>
                    <TouchableOpacity style={{ width: 15, height: 15, marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}
                      onPress={() => { copytitle = item.title, console.log(copytitle), this._onClickAddress(), this._openModalTwo() }}>
                      <EvilIcons
                        name={'location'}
                        size={20}
                        color={'#000'} />
                    </TouchableOpacity>
                    <Modal
                      animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                      transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                      visible={this.state.modalVisibleTwo} // 是否显示 modal 窗口
                      onRequestClose={() => { this._closeModalTwo(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                      onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
                    >
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ height: '100%', width: '100%', position: "absolute" }}
                        onPress={this._closeModalTwo}>
                        <View style={styles.modalLayer}>
                          <View onPress={() => { }}>
                            <View style={styles.daohang}>
                              <View style={{ width: '90%', height: '75%' }}>
                                <Image style={{ width: '100%', height: '100%' }}
                                  source={require('../../Image/Activityhistory/ditu.png')}
                                ></Image>
                              </View>
                              <View style={{ width: '90%', height: '15%' }}>
                                <View style={{ width: '100%', height: '60%', backgroundColor: '#fff', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={{ fontSize: 15 }}>位置</Text>
                                  <TouchableOpacity style={{ width: 20, height: 20, marginLeft: 250, alignItems: 'center', justifyContent: 'center' }}>
                                    <EvilIcons
                                      name={'location'}
                                      size={20}
                                      color={'#000'} />
                                  </TouchableOpacity>
                                </View>
                                <Text style={{ fontSize: 12 }}>{author}</Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </Modal>
                  </View>
                  <View style={styles.third}>
                    <View style={{ width: '72%' }}>
                      <Text style={styles.key}>时间：{item.time}</Text>
                      <Text style={styles.key}>状态：{item.state}</Text>
                    </View>

                    <TouchableOpacity style={{ width: '28%', height: 40, alignItems: 'center', justifyContent: 'center',left:29 }}
                      onPress={() => { copytitle1 = item.title, console.log(copytitle1), this._onClickQrcode(), this._openModalThird() }}>
                      {/* <FontAwesome
                          name={'th'}
                          size={40}
                          color={'grey'} /> */}
                      <Image style={{ width: 40, height: 40 }}
                        source={require('../../Image/Activityhistory/xiaoma.png')}
                      ></Image>
                    </TouchableOpacity>

                    <Modal
                      animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                      transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                      visible={this.state.modalVisibleThird} // 是否显示 modal 窗口
                      onRequestClose={() => { this._closeModalThird(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                      onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
                    >
                      <View
                        style={{ height: '100%', width: '100%', position: "absolute" }}>
                        <View style={styles.modalLayer}>
                          <View onPress={() => { }}>
                            <View style={styles.ma}>
                              <View style={{ width: '100%', height: '85%', borderColor: 'grey', borderBottomWidth: 1, alignItems: 'center' }}>
                                <View style={{ width: '100%', height: '85%', alignItems: 'center', justifyContent: 'center' }}>
                                  <Image style={{ width: 200, height: 200 }}
                                    source={{ uri: https + QRcode }}
                                  ></Image>
                                </View>
                                <View style={{ width: '100%', height: '15%', alignItems: 'center' }}>
                                  <Text style={{ fontSize: 15 }}>现场签到</Text>
                                </View>
                              </View>
                              <TouchableOpacity
                                activeOpacity={0.8}
                                style={{ width: '100%', height: '15%', alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => { this._onClickState(), this.fetchData(), this._closeModalThird() }}>
                                <Text style={{ fontSize: 15, color: '#935558' }}>关闭</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    </Modal>
                  </View>
                </View>
              }
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f2f2',
    paddingBottom: 20
  },
  one: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginBottom: 15,
  },
  key: {
    width: 290,
  },
  mark: {
    width: 40,
    height: 20,
    left:-10,
    top:5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  first: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  message: {
    width: 45,
    height: 18,
    top:8,
    backgroundColor: '#b7c4b3',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  second: {
    width: '100%',
    height: 20,
    flexDirection: 'row'
  },
  third: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
  },
  contentStyle: {
    padding: 30
  },
  contentTextStyle: {
    textAlign: 'center',
    fontSize: 26
  },
  modalLayer: {
    backgroundColor: 'rgba(100,100,100, 0.3)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  modalContainer: {
    height: 110,
    width: 300,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 10
  },
  modalTitleStyle: {
    textAlign: 'center',
    fontSize: 15
  },
  modalButtonStyle: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  daohang: {
    height: 300,
    width: 350,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  ma: {
    width: 300,
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cancel: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center',

  },
  ok: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center',

  },
  box: {
    height: 170,
    width: 300,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'

  },
  containerStyle: {
    marginLeft: 10,
    width: "95%",
    height: 25,
    padding: 3,
    borderColor: "#945357",
    borderWidth: 3,
    borderRadius: 30,
    marginTop: 3,
    justifyContent: "center",
  },
  innerStyle: {
    width: "100%",
    height: 15,
    borderRadius: 16,
    backgroundColor: "#945357",
  },
  label: {
    fontSize: 15,
    color: "black",
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
  }
})
