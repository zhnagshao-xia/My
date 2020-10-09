import React, { Component } from 'react';
import { Share, Text, View, FlatList, ScrollView, StyleSheet, Image, Button, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
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
      docs: this.props.multiList,
      selectMultiItem: [],
    };
  }

  checkUserAction = async () => {
    const res = await AsyncStorage.getItem('userInfo') || '{}'//AsyncStorage.getItem通过key字段来进行查询存储的数据，把该结果值作为参数传入第二个callback方法
    const { username = '' } = JSON.parse(res)
    username && this.setState({
      username
    })
    console.log("888" + username)
    copyusername = username;
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
        // "越窑青瓷烧制技艺",
        cityname: this.state.cityname
        // "杭州"
      })
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          docs: json.docs,
        })
        console.log("555" + json.docs)
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
        cityname: this.state.cityname
      })
    })
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.code == 200) {

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

  static defaultProps =
    {
      multiList: [
        {
          "id": "0",
          "name": "音乐",
          select: false
        },{
          "id": "0",
          "name": "音乐",
          select: false
        },{
          "id": "0",
          "name": "音乐",
          select: false
        },
      ]
    };
  //多选
  _selectMultiItemPress(item, i) {
    if (item.select) {
      this.state.selectMultiItem.splice(this.state.selectMultiItem.findIndex(function (x) {
        return x === item.name;
      }), 1);
    } else {
      this.state.selectMultiItem.push(item.name);
    }
    this.state.docs[i].select = !item.select;
    this.setState({ docs: this.state.docs });
  }
  //递交 选中 
  _submitMultiPress() {
    alert(`选中了${JSON.stringify(this.state.selectMultiItem)}`)
  }
  //渲染多选标记
  _renderMultiMark() {
    const { navigation } = this.props;
    let docs = this.state.docs;
    let len = docs.length;
    let menuArr = [];
    for (let i = 0; i < len; i++) {
      let item = docs[i];
      if (item.select) {
        menuArr.push(
          //选中状态
          <View>
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
                
              </View>
              <Text style={{ textAlign: 'auto', lineHeight: 25, fontSize: 15 }}>&#12288;&#12288;{item.xiangqing}</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8}
                  style={{position:'absolute',right:0,margin:10}}
                  onPress={() => {
                    this._selectMultiItemPress(item, i)
                  }}>
                  <AntDesign name={'star'} size={23} color={'#faa83e'} />
                </TouchableOpacity>
          </View>
        )
      } else {
        menuArr.push(

          // 未选中状态
          <View>
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
              </View>
              <Text style={{ textAlign: 'auto', lineHeight: 25, fontSize: 15 }}>&#12288;&#12288;{item.xiangqing}</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8}
              style={{ position: "absolute",right:0,margin:10}}
              onPress={() => {
                this.checkUserAction(),
                  copyxiangmu = item.xiangmu,
                  copyzhanshitu = item.zhanshitu,
                  this._onClickShoucang();
                this._selectMultiItemPress(item, i)
              }}>
              <AntDesign name={'staro'} size={23} color={'#faa83e'} />
            </TouchableOpacity>
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
          {this._renderMultiMark()}
          {/* <FlatList
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
          /> */}
        </ScrollView>
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