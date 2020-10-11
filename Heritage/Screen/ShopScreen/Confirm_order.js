import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Alert,
    Modal,
    Animated,
  Easing
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL1 = http + "/shopping/shopcar/address";
var URL2 = http + "/shopping/shopcar/goods";
var URL3 = http + "/shopping/shopcar/allprice";
var URL4 = http + "/shopping/shopcar/buy";
var URL5 = http + "/shopping/shopcar/allbuy";
var copyusername;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:"立即登录",
            address:[],
            shopcar:[],
            sum:[],
            progress: new Animated.Value(0),
            modalVisible: false,
        }
    }

    checkUserAction = async () => {
        const res = await AsyncStorage.getItem('userInfo') || '{}'//AsyncStorage.getItem通过key字段来进行查询存储的数据，把该结果值作为参数传入第二个callback方法
        const { username = '' } = JSON.parse(res)
        username && this.setState({
          username
        });
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
                    address: json.docs[0].address[0],
                })
                console.log("1111"+json.docs)
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLonding: false });
            });
            fetch(URL2, {
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
                        shopcar: json.docs[0].shopcar,
                    })
                    console.log("1111"+json.docs)
                })
                .catch((error) => console.error(error))
                .finally(() => {
                    this.setState({ isLonding: false });
                });
                fetch(URL3, {
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
                            sum: json.docs[0].sum,
                        })
                        console.log("1111"+json.docs)
                    })
                    .catch((error) => console.error(error))
                    .finally(() => {
                        this.setState({ isLonding: false });
                    });
        console.log("888" + username)
    }

    _onClickAllbuy = () => {
        this.setState({modalVisible: true});
        fetch(URL5, {
          method: 'POST',
          credentials: "include",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: copyusername,
          })
        })
          .then(function (res) {
            return res.json();
          }).then(function (json) {
            if (json.code == 200) {
            //   Alert.alert("下单成功")
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
      }
    render() {
        const { navigation } = this.props;
        const address = this.state.address;
        const data = this.state.shopcar;
        const sum =this.state.sum;
        const username = this.state.username;
        navigation.isFocused = () => {
            console.log("监测用户状态")
            this.checkUserAction();
          }
        return (
            <View style={styles.container}>
                <View style={{
                    backgroundColor: "#fff",
                    height: 45,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack()}
                        style={{
                            width: 50,
                            position: "absolute",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            left: 0
                        }}>
                        <FontAwesome name={'angle-left'} size={25} color={'#000'} />
                    </TouchableOpacity>
                    <View style={{ width: 200 }}>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                        }}>确认订单</Text>
                    </View>
                </View>
                <ScrollView style={styles.contant}>
                    <View style={{width:'100%',alignItems:"center"}}>
                        <View style={{width: '90%', backgroundColor: '#fff', marginTop: 20, borderRadius: 15, flexDirection: 'row',paddingVertical:20 }}>
                           
                                <Image style={{ width: 40, height: 40,marginLeft:15 }} source={require('../../Image/ShopScreen/location.png')}></Image>
                            
                            <View style={{ marginLeft: 15}}>
                                <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                <Text style={{ fontSize: 18 }}>{address.shopname}</Text>
                                <Text style={{ fontSize: 18 }}>{address.telephone}</Text>
                                </View>
                                <Text style={{ fontSize: 15, marginTop: 15 }}>{address.dizhi}</Text>
                            </View>
                        </View>
                        <FlatList
                            data={data}
                            renderItem={({ item }) =>
                            tradeBox(item.goods,item.fengmian,item.price,item.number,item.miaoshu)}/>
                        <FlatList
                            data={data}
                            renderItem={({ item }) =>
                                <TouchableOpacity 
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('商品详情页面',{goods:item.goods})}
                                style={styles.one}>
                                    <View style={{ width: '100%', height: '80%', flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 110, height: '100%' }}>
                                            <Image style={{ width: 100, height: 100, marginLeft: 15 }} source={{uri:https+item.fengmian}}></Image>

                                        </View>
                                        <View style={{ width: 230, height: '95%', margin: 15 }}>
                                            <Text style={{ fontSize: 15 }}>{item.miaoshu}</Text>
                                            <View style={{ flexDirection: 'row-reverse', marginTop: 30 }}>
                                                <Text style={{ fontSize: 15, color: '#f76220', marginRight: 10 }}>￥{item.price}</Text>
                                                <Text style={{ fontSize: 15 }}>小计：</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                        </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={{ fontSize: 15}}>合计：</Text>
                    <Text style={{ fontSize: 20, color: '#f76220' }}>￥{sum}</Text>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={() =>
                        {   
                            // copyusername=username,
                            this._onClickAllbuy(),
                            // Alert.alert('下单成功')
                            navigation.navigate('订单',{username:username})}}
                    style={{ width: 80, height: 30, backgroundColor: '#f76220', marginLeft: 10, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 15, color: '#fff' }}>确认订单</Text>
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
                              <Text style={{fontSize:15}}>提交成功</Text>
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
                </View>
            </View>
        );
        function tradeBox(goods,fengmian,price,number,miaoshu){
                fetch(URL4, {
                  method: 'POST',
                  credentials: "include",
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    username: username,
                    goods:goods,
                    fengmian:fengmian,
                    price:price,
                    number:number,
                    miaoshu:miaoshu
                  })
                })
                  .then(function (res) {
                    return res.json();
                  }).then(function (json) {
                    if (json.code == 200) {
                    }
                  })
              }
        }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contant: {
        width: '100%',
        backgroundColor: '#f2f2f2',
    },
    one: {
        height: 130,
        width: '100%',
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
    },
    footer: {
        width: '100%',
        height: '7%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-end',
        paddingRight:20
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
});