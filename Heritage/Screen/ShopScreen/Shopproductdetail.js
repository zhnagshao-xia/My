import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Alert,
    AsyncStorage,
    Modal,//加这个
  Animated,//加这个
  Easing,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL1 = http + "/shopping/details";
var URL2 = http + "/shopping/addshopcar";
var copymiaoshu;
var copyprice;
var copyfengmian;
var copyusername;

export default class App extends Component {
    constructor(props) {
        super(props);
        const { navigation, route } = this.props;
        let goods = route.params.goods;
        this.state = {
            goods,
            docs: [],
            pinglun: [],
            xiangqingtu: [],
            progress: new Animated.Value(0),
            modalVisible: false,
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

    // componentDidMount() {
    //     this.fetchData();
    // }


    fetchData() {
        fetch(URL1, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                goods: this.state.goods
            })
        })
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    docs: json.docs[0],
                    pinglun: json.docs[0].pinglun,
                    xiangqingtu: json.docs[0].xiangqingtu[0],
                })
                console.log(json.docs)
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLonding: false });
            });
    }

    __onClickAddshopcar=()=> {
        this.setState({modalVisible: true});
        fetch(URL2, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username:copyusername,
                goods: this.state.goods,
                miaoshu:copymiaoshu,
                price:copyprice,
                fengmian:copyfengmian,
                number:"1"
            })
        })
        .then(function (res) {
            return res.json();
          }).then(function (json) {
            if (json.code == 200) {
            //   Alert.alert("加购成功")
            }
          })
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
        this.fetchData();
      }

    render() {
        const { navigation } = this.props;
        const docs = this.state.docs;
        const pinglun = this.state.pinglun;
        const xiangqingtu = this.state.xiangqingtu;
        navigation.isFocused = () => {
            console.log("监测用户状态")
            this.checkUserAction();
          }
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.header}>
                        <View style={styles.part1}>
                            <ImageBackground style={{ width: '100%', height: '100%', }} source={{ uri: https + xiangqingtu.picture }}>
                                <View style={styles.sigh}>
                                    <TouchableOpacity
                                        onPress={() => navigation.goBack()}
                                        style={{
                                            width: 50,
                                            height: "100%",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                        <FontAwesome name={'angle-left'} size={25} color={'#fff'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('商城购物车')}
                                        style={{
                                            width: 50,
                                            height: "100%",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                        <FontAwesome name={'shopping-cart'} size={25} color={'#fff'} />
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.part2}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <Text style={{ fontSize: 20 }}>￥{docs.price}</Text>
                                <Text style={{ fontSize: 13 }}>已售{docs.sales}件</Text>
                            </View>
                            <View style={{ width: 300 }}>
                                <Text style={{ fontSize: 14 }}>{docs.miaoshu}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 13, }}>发货地</Text>
                                    <View style={{ marginLeft: 20, marginRight: 5 }}>
                                        <EvilIcons name={'location'} size={16} color={'#000'} />
                                    </View>
                                    <Text style={{ fontSize: 13 }}>{docs.fahuodi}</Text>

                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        this.checkUserAction(),
                                        copymiaoshu=docs.miaoshu,
                                        copyprice=docs.price,
                                        copyfengmian=docs.fengmian,
                                        this.__onClickAddshopcar()
                                    }}>
                                    <MaterialIcons name={'add-shopping-cart'} size={30} color={'#000'} />
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
                              <Text style={{fontSize:15}}>加购成功</Text>
                          </View>
                            <TouchableOpacity style={styles.modalButtonStyle}
                                    onPress={this._closeModalWin}>
                                        <Text style={{fontSize:15}}>确定</Text>
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                </Modal>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => navigation.navigate('Buynow',{goods:docs.goods,miaoshu:docs.miaoshu,fengmian:docs.fengmian,price:docs.price,number:"1"})}
                                        style={{ width: 80, height: 35, marginLeft: 15, backgroundColor: 'orange', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 20 }}>购买</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contant}>
                        <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.5, borderBottomColor: 'black' }}>
                            <Text style={{ fontSize: 20 }}>评价</Text>
                        </View>
                        <FlatList
                            data={pinglun}
                            renderItem={({ item }) =>
                                <View style={styles.box}>
                                    <View style={{ width: '100%', flexDirection: 'row'}}>
                                        <Image style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 50, margin: 10 }} 
                                        source={{uri:https+item.touxiang}}></Image>
                                        <View>
                                            <Text style={{ fontSize: 15, marginLeft: 10, marginTop: 10 }}>{item.yonghuming}</Text>
                                            <Text style={{ fontSize: 10, marginLeft: 10 }}>{item.time}</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%',paddingHorizontal:20}}>
                                        <Text style={{ width: '100%', backgroundColor: '#fff',marginBottom:10,}}>{item.pingyu}</Text>
                                        <View >
                                        <Image style={{ width: 300, height: 200 }} source={{uri:https+item.maijiaxiu}}></Image>
                                        </View>
                                    </View>
                                </View>
                            } />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6fa'
    },
    header: {
        width: '100%',
        height: 300,
        marginBottom: 35,
    },
    contant: {
        width: '100%',
        backgroundColor: '#fff'
    },
    part1: {
        width: '100%',
        height: '70%',
    },
    part2: {
        width: '100%',
        flexDirection: "column",
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: "#fff"
    },
    sigh: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    box: {
        width: '100%',
        marginBottom: 20,
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