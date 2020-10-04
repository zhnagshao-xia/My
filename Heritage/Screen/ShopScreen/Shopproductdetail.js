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
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL1 = http + "/shopping/details";

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

    render() {
        const { navigation } = this.props;
        const docs = this.state.docs;
        const pinglun = this.state.pinglun;
        const xiangqingtu = this.state.xiangqingtu;
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
                                    <MaterialIcons name={'add-shopping-cart'} size={30} color={'#000'} />
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => navigation.navigate('确认订单')}
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
    }
})