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
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.contant}>
                    <ScrollView>
                        <View style={{ height: 150, width: '90%', backgroundColor: '#fff', marginTop: 20, borderRadius: 15, marginLeft: 18, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 60, height: 60, marginLeft: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ width: '95%', height: '95%' }} source={require('../../Image/ShopScreen/location.png')}></Image>
                            </View>
                            <View style={{ width: 260, height: 130, marginLeft: 15, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18 }}>可乐泡脚  188888888</Text>
                                <Text style={{ fontSize: 15, marginTop: 15 }}>浙江省杭州市拱墅区上塘街道舟山东路浙江树人大学</Text>
                            </View>
                        </View>
                        <FlatList
                            data={[
                                {
                                    key: '传统纯手工打造油纸伞来自西子湖畔的美意...',
                                    price: '￥288',
                                    total: '小计:'
                                },
                                {
                                    key: '传统纯手工打造油纸伞来自西子湖畔的美意...',
                                    price: '￥288',
                                    total: '小计:'
                                }
                            ]}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={styles.one}>
                                    <View style={{ width: '100%', height: '70%', flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 110, height: '100%' }}>
                                            <Image style={{ width: 100, height: 100, marginLeft: 15 }} source={require('../../Image/ShopScreen/umbrella2.png')}></Image>

                                        </View>
                                        <View style={{ width: 230, height: '95%', margin: 15 }}>
                                            <Text style={{ fontSize: 15 }}>{item.key}</Text>
                                            <View style={{ flexDirection: 'row-reverse', marginTop: 30 }}>
                                                <Text style={{ fontSize: 15, color: '#f76220', marginRight: 10 }}>{item.price}</Text>
                                                <Text style={{ fontSize: 15 }}>{item.total}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <Text style={{ fontSize: 15, marginLeft: 200 }}>合计：</Text>
                    <Text style={{ fontSize: 20, color: '#f76220' }}>￥576</Text>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('我的订单')}
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    contant: {
        width: '100%',
        height: '92%',
        backgroundColor: '#f2f2f2'
    },
    one: {
        height: 150,
        width: '90%',
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 15,
        marginLeft: 18,
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