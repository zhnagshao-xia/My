import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, ScrollView, FlatList, Dimensions, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modalbox';
import { InformationTab } from '../jump';

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL1 = http + "/shouyiren/personal";
var URL2 = http + "/shouyiren/guanzhu/num";
var URL3 = http + "/shouyiren/fensi/num";
var URL4 = http + "/shouyiren/addguanzhu1";
var URL5 = http + "/shouyiren/addguanzhu2";
var URL6 = http + "/shouyiren/addguanzhu3";
var URL7 = http + "/shouyiren/nameupdate";
var copyname;
var copytouxiang;

export default class Craftsmandetail extends Component {
  constructor(props) {
    super(props);
    const { navigation, route } = this.props;
    let name = route.params.name;
    let username = route.params.username;
    let usericon = route.params.usericon;
    this.state = {
      username,
      usericon,
      name,
      sum1: "0",
      sum2: "0",
      docs: [],
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch(URL1, {//手艺人详情
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name
      })
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          docs: json.docs[0],
        })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      });
    fetch(URL2, {//关注数
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name
      })
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          sum1: json.docs[0]?.sum ?? 0,
        })
        console.log(json.docs)
      });
    fetch(URL3, {//粉丝数
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name
      })
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          sum2: json.docs[0]?.sum || 0,
        })
        console.log(json.docs)
      });
  }

  _onClickAddguanzhu1 = () => {
    fetch(URL4, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        name: copyname,
        touxiang: copytouxiang,
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

  _onClickAddguanzhu2 = () => {
    fetch(URL5, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        usericon: this.state.usericon,
        name: copyname,
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

  _onClickAddguanzhu3 = () => {
    fetch(URL6, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        usericon: this.state.usericon,
        name: copyname,
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

  render() {
    const { navigation } = this.props;
    const data = this.state.docs;
    const sum1 = this.state.sum1;
    const sum2 = this.state.sum2;
    const username = this.state.username;
    const usericon = this.state.usericon;
    return (
      <View style={{ flex: 1 }}>
        <View style={{
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ded7c9"
        }}>
          <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "90%" }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <FontAwesome name={'angle-left'} size={25} color={'#000'} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => this.refs.modal6.open()} >
              <Feather name={'more-horizontal'} size={20} color={'#000'} /></TouchableOpacity>
          </View>
        </View>
        <View style={styles.mationUp}>
          <ImageBackground style={{ width: '100%', height: '100%', flexDirection: 'row' }}
            source={require('../../Image/HomeScreen/Personalbg.png')}
            resizeMode='stretch'>
            <View style={{ width: '40%', height: '100%' }}>
              {/* <Image style={styles.headpic}
                source={{ uri:  https + data.touxiang }} /> */}
              <View style={styles.namerow}>
                {/* <Text style={{ fontSize: 15, color: 'black' }}
                >{data.name}</Text> */}
                <TouchableOpacity
                  style={styles.like}
                  onPress={() => {
                    copyname = data.name,
                      copytouxiang = data.touxiang,
                      this._onClickAddguanzhu1(),
                      this._onClickAddguanzhu2(),
                      this._onClickAddguanzhu3(),
                      this.fetchData()
                  }}>
                  <FontAwesome
                    name={'plus'}
                    size={15}
                    color={'#000'} />
                  <Text style={{ fontSize: 12, marginLeft: 2 }}>关注</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.center}>
              <View style={{ width: 23, height: 130, }}>
                {/* <Text style={{ fontSize: 12, textAlign: 'center', textAlignVertical: 'center', }}>{data.xiangmu}</Text> */}
              </View>
              <View style={{ width: 1, height: 130, backgroundColor: 'black' }}></View>
              <View style={{ width: 23, height: 130, flexDirection: 'column-reverse' }}>
                <Text style={{ fontSize: 12, textAlign: 'center', textAlignVertical: 'center', }}>非遗传承人</Text>
              </View>
            </View>
            <View style={{ width: '40%', height: '100%', flexDirection: 'row-reverse' }}>
              <View style={styles.fans}>
                <View style={{ width: 70, height: 30, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
                  <Text style={{ fontSize: 15, color: '#fff' }}>关注   </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('手艺人关注', { name: data.name, username: username, usericon: usericon })}>
                    <Text style={{ fontSize: 15, color: '#fff' }}>{sum1}</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: 1, height: 20, backgroundColor: '#fff', marginLeft: 5, marginRight: 5 }}></View>
                <View style={{ width: 70, height: 30, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
                  <Text style={{ fontSize: 15, color: '#fff' }}>粉丝   </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('手艺人粉丝', { name: data.name, username: username, usericon: usericon })}>
                    <Text style={{ fontSize: 15, color: '#fff' }}>{sum2}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{ flex: 1 }}>
          <InformationTab />
        </View>
        <Modal style={styles.modal4} position={"bottom"} ref={"modal6"} >
          <View style={{ width: '100%', height: '75%', flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 60, height: 60 }}
                source={require('../../Image/HomeScreen/wechat.png')}></Image>
              <Text style={{ fontSize: 15 }}>微信好友</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 60, height: 60 }}
                source={require('../../Image/HomeScreen/friend.png')}></Image>
              <Text style={{ fontSize: 15 }}>朋友圈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 60, height: 60 }}
                source={require('../../Image/HomeScreen/qq.png')}></Image>
              <Text style={{ fontSize: 15 }}>QQ好友</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 60, height: 60 }}
                source={require('../../Image/HomeScreen/share.png')}></Image>
              <Text style={{ fontSize: 15 }}>复制链接</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ width: '100%', height: '25%', backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'center' }}
            onPress={() => this.refs.modal6.close()} >
            <Text style={{ fontSize: 15 }}>取消</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mationUp: {
    width: '100%',
    height: '25%',

    // backgroundColor:'black'
  },
  headpic: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  namerow: {
    width: 130,
    height: 30,
    marginLeft: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  like: {
    width: 55,
    height: 23,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'center'
  },
  center: {
    width: '20%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fans: {
    width: 150,
    height: 35,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginTop: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  works: {
    width: 200,
    height: 120,
    backgroundColor: 'red',
    flexDirection: 'column-reverse',
  },
  workname: {
    width: 100,
    height: 25,
    backgroundColor: '#c9aa74',
    borderTopRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  works1: {
    width: 370,
    height: 230,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  works1pic: {
    width: 170,
    height: 210,
    // backgroundColor:'skyblue',
    marginRight: 25,
    flexDirection: 'column-reverse',
    marginTop: 20
  },
  works2pic: {
    width: 170,
    height: 210,
    // backgroundColor:'skyblue',
    flexDirection: 'column-reverse',
    marginTop: 20
  },
  process: {
    paddingVertical: 10,
    flexDirection: 'column',
    paddingRight: 20
  },
  expressRightFirst: {
    width: 360,
    paddingLeft: 25,
    borderLeftWidth: 1,
    borderLeftColor: 'black',
    flexDirection: 'column',

  },
  expressItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 5,
    width: 370

  },
  expressLeft: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'relative',
    right: 364,
    top: 15,
    backgroundColor: 'red'
  },
  modal4: {
    height: 150,

  },
  btn: {
    width: 40,
    height: 40,
    backgroundColor: 'red'
  }
});
