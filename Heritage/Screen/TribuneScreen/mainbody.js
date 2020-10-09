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
  LayoutAnimation,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'

import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL1 = http+"/luntan/zhengwen";
var URL2 = http+"/luntan/forward";
var URL3 = http+"/luntan/likes";
var URL4 = http+"/luntan/zhengwen/addguanzhu";
var URL5 = http+"/luntan/pinglun/likes";
var copy_id;
var copy_id1;
var copyusername;
var copyyonghuming;
var copytouxiang;
var copyyonghuming2;

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);
var ffk = true;

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;


export default class mainbody extends Component {

  state = {
    w: 0,
    h: 0,
    big: []
  };

  _onPress = () => {
    // Animate the update
    if (ffk) {
      LayoutAnimation.spring();
      this.setState({ w:parseInt(this.state.w + 200), h:parseInt(this.state.h + 200) })
      ffk = false
    } else {
      this.setState({ w: 0, h: 0 })
      ffk = true;
    }
  }


    constructor(props) {
        super(props);
        const { navigation, route } = this.props;
        let _id = route.params._id;
        this.state = {
            username:"立即登录",
            _id,
            docs:[],
            pinglun:[],
            picture:[]
        }
      }

      checkUserAction = async () => {
        const res = await AsyncStorage.getItem('userInfo') || '{}'//AsyncStorage.getItem通过key字段来进行查询存储的数据，把该结果值作为参数传入第二个callback方法
        const { username = '' } = JSON.parse(res)
        username && this.setState({
          username
        })}

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
              pinglun:json.docs[0].pinglun,
              picture:json.docs[0].picture
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
              // Alert.alert("收藏成功")
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
              // Alert.alert("点赞成功")
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
            yonghuming:copyyonghuming2,
          })
        })
          .then(function (res) {
            return res.json();
          }).then(function (json) {
            if (json.code == 200) { 
              // Alert.alert("点赞成功")
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
            yonghuming:copyyonghuming,
            touxiang:copytouxiang
          })
        })
          .then(function (res) {
            return res.json();
          }).then(function (json) {
            if (json.code == 200) {
              // Alert.alert("关注成功") 
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
        this._onClickForward();
        this.fetchData();
      };

    render() {
        const { navigation } = this.props;
        const docs = this.state.docs;
        const data = this.state.pinglun;
        const data1 = this.state.picture;
        const username = this.state.username;
        navigation.isFocused = () => {
            console.log("监测用户状态")
            this.checkUserAction();
          }
          // const big = this.state.big;
const renderCarousel = () => (
  <Carousel style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
      {data1.map((item) => {
            return (
    <Image
      style={{ flex: 1 }}
      resizeMode="contain"
      source={{ uri: https+item.p}}
    />
    )
          })}
  </Carousel>
)
        return (
            <View style={{flex:1}}>
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
                                    source={{uri:https+docs.touxiang}}
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
                            onPress={()=>{
                                copyusername=username,
                                copyyonghuming=docs.yonghuming,
                                copytouxiang=docs.touxiang,
                                this._onClickAddguanzhu()
                            }}>
                                <FontAwesome name={'plus'} size={10} color={'#000'} />
                                <Text style={{ fontSize: 12, color: 'black' }}>关注</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 13 }}>{docs.content}</Text>
                        </View>
                        <View style={{flexDirection: 'row',}}>
                        <FlatList
                        data={data1}
                        numColumns={3}
                        renderItem={({ item }) =>
                        <Lightbox springConfig={{tension: 15, friction: 7}}
     swipeToDismiss={false} 
     renderContent={renderCarousel}>
                            <View style={{width:100,height:100}}>
                            <Image style={{ width: 90, height: 90 }}
                                source={{uri:https+item.p}}
                            ></Image></View>
                            </Lightbox>
                        }/>
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
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            <View style={{
                                width: '100%',
                                backgroundColor: '#fff',
                                paddingHorizontal:20,
                                paddingBottom:20
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: "space-between"
                                }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image
                                            source={{uri:https+item.touxiang}}
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
                                        onPress={()=>{
                                            copyyonghuming2=item.yonghuming,
                                            this._onClickPinglunlikes(),
                                            this.fetchData()
                                        }}>
                                            <FontAwesome name={'heart-o'} size={20} color={'#000'} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 13, marginLeft: 5 }}>{item.likes}</Text>
                                    </View>
                                </View>
                                <View style={{ width: '100%',marginBottom:10}}>
                                    <Text style={{ fontSize: 13 }}>{item.huitie}</Text>
                                </View>
                                <TouchableOpacity 
                                onPress={this._onPress}
                                style={{ width: '95%', height: 25, backgroundColor: '#e7e7e7', borderRadius: 5, alignItems: 'center', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 13, marginRight: 5 }}> 共12条回复</Text>
                                    <FontAwesome name={'angle-right'} size={20} color={'#000'} />
                                </TouchableOpacity>
                                <View style={[styles.box, { width: this.state.w, height: this.state.h }]} />
                            </View>
                        }
                    />
                </ScrollView>
                <View style={{ width: '100%', 
                height: 45, 
                backgroundColor: '#bfbfbf', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-around',
                position:"absolute",
                bottom:0}}>
                    <TouchableOpacity style={{ width: 100, height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                    activeOpacity={0.8}
                    onPress={() => { 
                        copy_id=docs._id;
                        this.onShare(); }}>
                        <EvilIcons name={'share-google'} size={30} color={'#000'} />
                        <Text style={{ fontSize: 15, marginLeft: 5 }}>{docs.forward}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    style={{ width: 100, height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome name={'heart-o'} size={20} color={'#000'} />
                        <Text style={{ fontSize: 15, marginLeft: 5 }}>评论</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity={0.8} 
                    style={{ width: 100, height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                    onPress={()=>{
                        copy_id1=docs._id;
                        this._onClickLikes();
                    }}>
                        <Feather name={'message-square'} size={22} color={'#000'} />
                        <Text style={{ fontSize: 15, marginLeft: 5 }}>{docs.likes}</Text>
                    </TouchableOpacity>
                </View>

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
        backgroundColor: 'red'
    },
    shang: {
        width: '95%',
        height: '60%',
        flexDirection: 'row',
        alignItems: 'center',

        justifyContent: 'space-between',
    },
    guanzhu: {
        width: 40,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    box: {
      width: 200,
      height:200,
      backgroundColor: 'red',
    },

}); 