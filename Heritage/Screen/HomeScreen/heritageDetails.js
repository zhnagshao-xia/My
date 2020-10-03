import React, { Component } from 'react';
import { Share, Text, View, FlatList, ScrollView, StyleSheet, Image, Button, TouchableOpacity,AsyncStorage,Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modalbox';

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL1 = http + "/feiyi/list/details";
var URL2 = http + "/feiyi/list/details/shoucang";
var copyusername;
var copyxiangmu;
var copyzhanshitu;

export default class heritageDetails extends Component {
  constructor(props) {
    super(props);
    const { navigation, route } = this.props;
    let xiangmu = route.params.xiangmu;
    let cityname = route.params.cityname;
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      xiangmu,
      cityname,
      docs: [],
      username: "",
    };
  }

  checkUserAction = async () => {
    const res = await AsyncStorage.getItem('userInfo') || '{}'//AsyncStorage.getItem通过key字段来进行查询存储的数据，把该结果值作为参数传入第二个callback方法
    const { username = '' } = JSON.parse(res)
    username && this.setState({
      username
    })
    console.log("888" + username)
    copyusername=username;
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(URL1, {//对应项目的详情
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        xiangmu: this.state.xiangmu,
        cityname: this.state.cityname
      })
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          docs: json.docs,
        })
        console.log(json.docs)
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      });
  }

  _onClickShoucang = () => {
    fetch(URL2, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: copyusername,
        xiangmu: copyxiangmu,
        zhanshitu: copyzhanshitu,
        cityname:this.state.cityname
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

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
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
  };

  render() {
    const { navigation } = this.props;
    const data = this.state.docs;
    navigation.isFocused = () => {
      console.log("监测用户状态")
      this.checkUserAction();
    }
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
          }}></Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => { this.onShare(); }}
            style={{
              width: 50,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Feather name={'more-horizontal'} size={20} color={'#000'} /></TouchableOpacity>
        </View>
        <ScrollView >
          <FlatList
            data={data}
            renderItem={({ item }) =>
              <View style={{
                paddingHorizontal: 30,
                paddingTop: 20,
                marginBottom: 90,
                alignItems: "center",
              }}>
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 16 }}>{item.xiangmu}</Text>
                  <Text style={{ lineHeight: 30, fontSize: 15 }}>{item.jibie}</Text>
                </View>
                <View>
                  <View style={{ alignItems: "center" }}>
                    <Image style={{
                      width: 350,
                      height: 200,
                      resizeMode: 'stretch',
                      marginVertical: 15
                    }}
                      source={{ uri: https + item.zhanshitu }}>
                    </Image>
                    <TouchableOpacity activeOpacity={0.8}
                    style={{top:'-82%',left:'43%'}}
                    onPress={()=>{
                      this.checkUserAction(),
                      copyxiangmu=item.xiangmu,
                      copyzhanshitu=item.zhanshitu,
                      this._onClickShoucang()
                    }}>
                      <AntDesign name={'staro'} size={23} color={'#fff'} />
                    </TouchableOpacity>
                  </View>
                  <Text style={{ textAlign: 'auto', lineHeight: 25, fontSize: 15 }}>&#12288;&#12288;{item.xiangqing}</Text>
                </View>
              </View>
            }
          />
        </ScrollView>
        {/* <Modal style={styles.modal4} position={"bottom"} ref={"modal6"} >
          <View style={{ width: '100%', height: '60%', flexDirection: 'row' }}>
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
          <TouchableOpacity style={{ width: '100%', height: '40%', backgroundColor: '#f2f2f2', alignItems: 'center' }}
            onPress={() => this.refs.modal6.close()} >
            <Text style={{ fontSize: 15, marginTop: 3 }}>取消</Text>
          </TouchableOpacity>
        </Modal> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  modal4: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

});