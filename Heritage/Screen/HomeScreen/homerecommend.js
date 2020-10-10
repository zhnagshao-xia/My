import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  FlatList,
  AsyncStorage,
  Alert,
} from 'react-native';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL = http + "/users/usericon";
var URL1 = http + "/shouyiren";
var URL2 = http + "/shouyiren/addguanzhu1";
var URL3 = http + "/shouyiren/addguanzhu2";
var URL4 = http + "/jiangxinlizuo";
var URL5 = http + "/shouyiren/addguanzhu3";
var copyname;
var copytouxiang;
var copyusername;
var copyusericon;

export default class homerecommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "立即登录",
      usericon: "/picture/touxiang/fans/b0.jpg",
      docs: [],
      docs1: [],
    }
    this.state = {
      docs: this.props.multiList,
      selectMultiItem: [],
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
          usericon: json.docs  .usericon,//usericon: json.docs[0].usericon,
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

  componentDidMount() {
    this.checkUserAction();
    this.fetchData();
  }

  fetchData() {
    fetch(URL1, {//推荐手艺人
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
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
    fetch(URL4, {//匠心力作
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          docs1: json.docs,
        })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      });
  }

  _onClickAddguanzhu1 = () => {
    fetch(URL2, {
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
    fetch(URL3, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        usericon: copyusericon,
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
    fetch(URL5, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        usericon: copyusericon,
        username2: copyname,
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

  static defaultProps = 
  {
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
  //多选
  _selectMultiItemPress(item,i) {
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
    let username = this.state.username;
    let usericon = this.state.usericon;
    let docs = this.state.docs;
    let len = docs.length;
    let menuArr = [];
    for (let i = 0; i < len; i++) {
      let item = docs[i];
      if (item.select) {
        menuArr.push(
          //选中状态
          <View style={styles.BigSize}>
            <View style={{ width: '100%', height: 190 }}>
              <Image
                style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                source={{uri:https+item.xingxiangtu}}>
              </Image>
            </View>
            <View style={styles.fourword}>
              <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <View style={{ marginLeft: 110, marginVertical: 10 }}>
                  <Text style={{ fontSize: 14 }}>{item.name}</Text>
                  <View style={{ width: 150 }}>
                    <Text style={{ color: '#c6a46c', fontSize: 12 }}>{item.chenghao}</Text>
                  </View>
                </View>
                <TouchableOpacity
                activeOpacity={0.8}
                  onPress={() => this._selectMultiItemPress(item,i)}
                  style={{
                    borderWidth: 1,
                    borderColor: '#c9c5c5',
                    width: 50,
                    height: 23,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{
                    fontSize: 12,
                  }}>已关注</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('手艺人详细页面', { name: item.name, username: username, usericon: usericon })}
                  style={styles.touxiang}>
                  <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                    source={{ uri: https + item.touxiang }}>
                  </Image>
                </TouchableOpacity>
              </View>
              <Text style={{ marginLeft: 30, fontSize: 14 }}>{item.xingrong}</Text>
            </View>

          </View>
        )
      } else {
        menuArr.push(

          // 未选中状态
          <View style={styles.BigSize}>
            <View style={{ width: '100%', height: 190 }}>
              <Image
                style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                source={{uri:https+item.xingxiangtu}}>
              </Image>
            </View>
            <View style={styles.fourword}>
              <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <View style={{ marginLeft: 110, marginVertical: 10 }}>
                  <Text style={{ fontSize: 14 }}>{item.name}</Text>
                  <View style={{ width: 150 }}>
                    <Text style={{ color: '#c6a46c', fontSize: 12 }}>{item.chenghao}</Text>
                  </View>
                </View>
                <TouchableOpacity
                activeOpacity={0.8}
                  onPress={() => this._selectMultiItemPress(item,i)}
                  style={{
                    borderWidth: 1,
                    borderColor: '#c9c5c5',
                    width: 50,
                    height: 23,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{
                    fontSize: 12,
                  }}>+关注</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('手艺人详细页面', { name: item.name, username: username, usericon: usericon })}
                  style={styles.touxiang}>
                  <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                    source={{ uri: https + item.touxiang }}>
                  </Image>
                </TouchableOpacity>
              </View>
              <Text style={{ marginLeft: 30, fontSize: 14 }}>{item.xingrong}</Text>
            </View>
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
    const data1 = this.state.docs1;
    const username = this.state.username;
    const usericon = this.state.usericon;
    navigation.isFocused = () => {
      console.log("监测用户状态")
      this.checkUserAction();
    }
    return (
      <ScrollView style={styles.main}>
        <View style={{ width: '100%', alignItems: "center", }}>
          <View style={styles.lunbokuang}>
            <Swiper style={styles.wrapper}
              showsButtons={false}
              autoplay={true}
              paginationStyle={styles.paginationStyle}
              dotStyle={styles.dotStyle}
              activeDotStyle={styles.activeDotStyle}
            >
              <View style={styles.slide1}>
                <ImageBackground
                  style={{ width: '100%', height: '100%', }}
                  source={require('../../Image/HomeScreen/1.jpg')}>
                </ImageBackground>
              </View>
              <View style={styles.slide2}>
                <ImageBackground
                  style={{ width: '100%', height: '100%' }}
                  source={require('../../Image/HomeScreen/2.jpg')}>
                </ImageBackground>
              </View>
              <View style={styles.slide3}>
                <ImageBackground
                  style={{ width: '100%', height: '100%' }}
                  source={require('../../Image/HomeScreen/3.jpg')}>
                </ImageBackground>
              </View>
            </Swiper>
          </View>
        </View>
        <View style={styles.Headlinesmain}>
          <View style={styles.Headlines}>
            <View style={styles.Headlines_left}>
              <Image
                style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
                source={require('../../Image/HomeScreen/Headlines.png')}>
              </Image>
            </View>
            <View style={styles.Headlines_right}>
              <Swiper style={styles.wrapper}
                horizontal={false}
                autoplay autoplayTimeout={3}
                showsPagination={false} >
                <View style={styles.slide}>
                  <Text style={styles.text}>第十二届浙江·中国非遗博览会9月在线上举办</Text>
                </View>
                <View style={styles.slide}>
                  <Text style={styles.text}>浙江非遗生活馆亮相第14届中国（义乌）文交会</Text>
                </View>
                <View style={styles.slide}>
                  <Text style={styles.text}>第五届“大匠至心”非遗传承发展杭州沙龙开幕</Text>
                </View>
              </Swiper>
            </View>
          </View>
        </View>
        <View style={{ width: '100%', alignItems: "center", }}>
          <View style={styles.partthree}>
            <TouchableOpacity activeOpacity={0.8} style={styles.threeleft}
              onPress={() => navigation.navigate('传承志')}>
              <ImageBackground
                style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
                source={require('../../Image/HomeScreen/Craftsmanship.png')}>
                <View style={{ flexDirection: 'column', marginLeft: 35, marginTop: 20 }}>
                  <Text style={{ color: '#fff', fontSize: 14 }}>传</Text>
                  <Text style={{ color: '#fff', fontSize: 14 }}>承</Text>
                  <Text style={{ color: '#fff', fontSize: 14 }}>志</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={styles.threeright}>
              <TouchableOpacity activeOpacity={0.8} style={styles.righttop}
                onPress={() => navigation.navigate('志愿者')}>
                <ImageBackground
                  style={styles.tu}
                  source={require('../../Image/HomeScreen/volunteer.png')}>
                  <Text style={{ color: '#fff', fontSize: 14 }}>志愿者</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.rightbottom}
                onPress={() => navigation.navigate('活动')}>
                <ImageBackground
                  style={styles.tu}
                  source={require('../../Image/HomeScreen/activity.png')}>
                  <Text style={{ color: '#fff', fontSize: 14 }}>活动</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.partfour}>
          <View style={{
            width: '100%',
          }}>
            <View style={styles.fourtitle}>
              <Text style={{ fontSize: 15, color: '#c6a46c' }}>
                推荐手艺人
                  </Text>
            </View>
            <ScrollView >
              {this._renderMultiMark()}
              {/* <FlatList
                data={data}
                renderItem={({ item }) =>
                  <View style={styles.BigSize}>
                    <View style={{ width: '100%', height: 190 }}>
                      <Image
                        style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                        source={{ uri: https + item.xingxiangtu }}>
                      </Image>
                    </View>
                    <View style={styles.fourword}>
                      <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}>
                        <View style={{ marginLeft: 110, marginVertical: 10 }}>
                          <Text style={{ fontSize: 14 }}>{item.name}</Text>
                          <View style={{width:150}}>
                          <Text style={{ color: '#c6a46c', fontSize: 12 }}>{item.chenghao}</Text>
                          </View>
                        </View>
                        <View
                          activeOpacity={0.8}
                          style={styles.guanzhu}
                          onPress={() => {
                            copyusername = username,
                              copyusericon = usericon,
                              copyname = item.name,
                              copytouxiang = item.touxiang,
                              this._onClickAddguanzhu1(),
                              this._onClickAddguanzhu2(),
                              this._onClickAddguanzhu3()
                          }}
                          >
                          {this._renderMultiMark()}
                          <Text style={{ color: '#945357', fontSize: 12, marginRight: 3 }}>+</Text>
                          <Text style={{ fontSize: 12 }}>关注</Text>
                        </View>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => navigation.navigate('手艺人详细页面', { name: item.name, username: username, usericon: usericon })}
                          style={styles.touxiang}>
                          <Image
                            style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                            source={{ uri: https + item.touxiang }}>
                          </Image>
                        </TouchableOpacity>
                      </View>
                      <Text style={{ marginLeft: 30, fontSize: 14 }}>{item.xingrong}</Text>
                    </View>
                  </View>
                }
              /> */}
            </ScrollView>
            <View style={{alignItems:"center"}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('手艺人', { username: username, usericon: usericon })}
              style={{
                width: '95%',
                height: 40,
                backgroundColor: '#dcdad2',
                justifyContent: "center",
                alignItems: 'center',
                flexDirection: 'row',
                borderRadius: 8
              }}>
              <Text style={{ fontSize: 14, marginRight: 10 }}>查看更多</Text>
              <FontAwesome
                name={'angle-double-right'}
                size={15}
                color={'#000'} />
            </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.partfive}>
          <View style={{ width: '95%' }}>
            <View style={styles.fivetitle}>
              <Text style={{ fontSize: 15, color: '#c6a46c' }}>
                匠心力作
                  </Text>
            </View>
            <ScrollView >
              <FlatList
                data={data1}
                renderItem={({ item }) =>
                  <View>
                    <View style={{ width: '100%', height: 250, }}>
                      <Image
                        style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                        source={{ uri: https + item.picture }}>
                      </Image>
                    </View>
                    <View style={{ width: '100%', height: 50, justifyContent: "center", alignItems: "center" }}>
                      <Text style={{ fontSize: 14 }}>
                        {item.jxlzproject}
                      </Text>
                    </View>
                  </View>
                }
              />
            </ScrollView>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('匠心力作')}
              style={{
                width: '100%',
                height: 40,
                backgroundColor: '#dcdad2',
                justifyContent: "center",
                alignItems: "center",
                flexDirection: 'row',
                borderRadius: 8,
                marginBottom: 30
              }}>
              <Text style={{ fontSize: 14, marginRight: 10 }}>查看更多</Text>
              <FontAwesome
                name={'angle-double-right'}
                size={20}
                color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  };
}
const styles = StyleSheet.create({
  fivetitle: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#b5b5b5',
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    marginBottom: 10
  },
  partfive: {
    backgroundColor: '#fff',
    alignItems: "center",
    width: '100%',
  },
  BigSize: {
    width: '95%',
    margin: 10
  },
  touxiang: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
    top: -25,
    left: 20,
    overflow: "hidden",
    resizeMode: "center",
  },
  guanzhu: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#c9c5c5',
    width: 50,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5
  },
  fourword: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#b5b5b5',
    // marginBottom: 10,
    paddingBottom: 20
  },
  fourtitle: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#b5b5b5',
    justifyContent: "center",
    alignItems: "center",
    width: '95%',
    marginBottom: 10
  },
  partfour: {
    backgroundColor: '#fff',
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20
  },
  tu: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    justifyContent: "center",
    alignItems: "center"
  },
  rightbottom: {
    width: '100%',
    height: '48.5%',
    marginTop: '3%'
  },
  righttop: {
    width: '100%',
    height: '48.5%',
  },
  threeright: {
    width: '40%',
    height: '100%',
    marginLeft: '1%',
    flexDirection: 'column'
  },
  threeleft: {
    width: '59%',
    height: '100%',
  },
  partthree: {
    width: '95%',
    height: 140,
    flexDirection: 'row',
    marginBottom: 15
  },
  Headlines_right: {
    marginLeft: 10,
    width: 300,
    justifyContent: 'center'
  },
  Headlines_left: {
    width: 45,
    height: 20,
  },
  Headlines: {
    width: '90%',
    alignItems: "center",
    flexDirection: 'row',
  },
  Headlinesmain: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    backgroundColor: '#f2f2f2',
  },
  wrapper: {},
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },
  slide: {

  },
  text: {
    fontSize: 13,
  },
  paginationStyle: {
    bottom: 6,
  },
  dotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    opacity: 0.4,
    borderRadius: 0,
  },
  activeDotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 0,
  },
  lunbokuang: {
    height: 170,
    width: '95%',
    backgroundColor: '#000',
    alignItems: "center",
    justifyContent: "center",
  },
});