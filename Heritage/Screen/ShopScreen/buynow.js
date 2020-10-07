import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Alert
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL1 = http + "/shopping/shopcar/address";
var URL2 = http + "/shopping/shopcar/buy";
var copyusername;

export default class buynow extends Component {
    constructor(props) {
        super(props);
        const { navigation, route } = this.props;
        let goods = route.params.goods;
        let miaoshu = route.params.miaoshu;
        let fengmian = route.params.fengmian;
        let price = route.params.price;
        let number = route.params.number;
        this.state={
            goods,
            miaoshu,
            fengmian,
            price,
            number,
            username:"立即登录",
            address:[],
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
        console.log("888" + username)
    }

    _onClickBuy=()=>{
        fetch(URL2, {
            method: 'POST',
            credentials: "include",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: copyusername,
              goods:this.state.goods,
              fengmian:this.state.fengmian,
              price:this.state.price,
              number:this.state.number,
              miaoshu:this.state.miaoshu
            })
          })
            .then(function (res) {
              return res.json();
            }).then(function (json) {
              if (json.code == 200) {
              }
            })
    }

    render() {
        const { navigation } = this.props;
        const address = this.state.address;
        const username = this.state.username;
        const goods = this.state.goods;
        const miaoshu = this.state.miaoshu;
        const fengmian = this.state.fengmian;
        const price = this.state.price;
        const number = this.state.number;
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
                        <View style={{ height: 120, width: '90%', backgroundColor: '#fff', marginTop: 20, borderRadius: 15, flexDirection: 'row',paddingTop:20 }}>
                           
                                <Image style={{ width: 40, height: 40,marginLeft:15 }} source={require('../../Image/ShopScreen/location.png')}></Image>
                            
                            <View style={{ width: 260, height: 130, marginLeft: 15 }}>
                                <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                <Text style={{ fontSize: 18 }}>{address.shopname}</Text>
                                <Text style={{ fontSize: 18 }}>{address.telephone}</Text>
                                </View>
                                <Text style={{ fontSize: 15, marginTop: 15 }}>{address.dizhi}</Text>
                            </View>
                        </View>
                                <TouchableOpacity 
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('商品详情页面',{goods:goods})}
                                style={styles.one}>
                                    <View style={{ width: '100%', height: '80%', flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 110, height: '100%' }}>
                                            <Image style={{ width: 100, height: 100, marginLeft: 15 }} source={{uri:https+fengmian}}></Image>

                                        </View>
                                        <View style={{ width: 230, height: '95%', margin: 15 }}>
                                            <Text style={{ fontSize: 15 }}>{miaoshu}</Text>
                                            <View style={{ flexDirection: 'row-reverse', marginTop: 30 }}>
                                                <Text style={{ fontSize: 15, color: '#f76220', marginRight: 10 }}>￥{price}</Text>
                                                <Text style={{ fontSize: 15 }}>小计：</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                        </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={{ fontSize: 15, marginLeft: 200 }}>合计：</Text>
                    <Text style={{ fontSize: 20, color: '#f76220' }}>￥{price}</Text>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={() =>
                        {   
                            copyusername=username,
                            this._onClickBuy(),
                            Alert.alert('下单成功')
                            navigation.navigate('订单',{username:username})}}
                    style={{ width: 80, height: 30, backgroundColor: '#f76220', marginLeft: 10, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 15, color: '#fff' }}>确认订单</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
        alignItems: 'center'
    },
});