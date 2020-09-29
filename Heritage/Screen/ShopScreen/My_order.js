import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class My_order extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;
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
                        }}>我的订单</Text>
                    </View>
                </View>
                <ScrollView style={styles.contant}>
                    <View style={{ width: '100%', alignItems: "center", marginBottom: 30 }}>
                        <FlatList
                            data={[
                                {
                                    key: '传统纯手工打造油纸伞来自西子湖畔的美意...',
                                    price: '￥288',
                                    total: '已签收'
                                },
                                {
                                    key: '传统纯手工打造油纸伞来自西子湖畔的美意...',
                                    price: '￥288',
                                    total: '已签收'
                                },
                                {
                                    key: '传统纯手工打造油纸伞来自西子湖畔的美意...',
                                    price: '￥288',
                                    total: '已签收'
                                },
                                {
                                    key: '传统纯手工打造油纸伞来自西子湖畔的美意...',
                                    price: '￥288',
                                    total: '已签收'
                                },
                                {
                                    key: '传统纯手工打造油纸伞来自西子湖畔的美意...',
                                    price: '￥288',
                                    total: '已签收'
                                }
                            ]}
                            renderItem={({ item }) =>
                                <View
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate('商品详情页面')}
                                    style={styles.one}>
                                    <View style={{
                                        width: '100%',
                                        height: '80%',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <View style={{ width: 110, height: '100%' }}>
                                            <Image style={{ width: 100, height: 100 }}
                                                source={require('../../Image/ShopScreen/umbrella2.png')}>
                                            </Image>
                                        </View>
                                        <View style={{ width: 230, height: '95%', }}>
                                            <Text style={{ fontSize: 15 }}>{item.key}</Text>
                                            <View style={{
                                                flexDirection: 'row-reverse',
                                                marginTop: 30,
                                                justifyContent: 'space-between'
                                            }}>
                                                <Text style={{
                                                    fontSize: 15,
                                                    color: '#f76220',
                                                    marginRight: 10
                                                }}>{item.total}</Text>
                                                <Text style={{ fontSize: 15 }}>{item.price}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{justifyContent:'flex-end',flexDirection:"row"}}>
                                    <TouchableOpacity 
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate("评价商品页面")}
                                    style={{width:70,
                                        height:30,
                                        borderRadius:15,
                                        borderWidth:0.5,
                                        alignItems:"center",
                                        justifyContent:"center",
                                        borderColor:"#000"}}>
                                        <Text style={{fontSize:16}}>评价</Text>
                                    </TouchableOpacity>
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
        flex: 1,
    },
    contant: {
        width: '100%',
        backgroundColor: '#f2f2f2',
    },
    one: {
        height: 160,
        width: '100%',
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 10,
        padding:15
    },
});