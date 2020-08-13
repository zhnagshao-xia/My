import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, TextInput, Image, ScrollView, FlatList, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignItems: 'center', marginVertical:10 }}>
                        <TouchableOpacity style={{ width: 25, height: 25, marginLeft: 10, alignItems: 'center' }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../../Image/ShopScreen/pic26.png')}></Image>
                        </TouchableOpacity>
                        <View style={{ width: '75%', height: 30, backgroundColor: '#dcdcdc', marginLeft: 10, borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 15, height: 15, marginLeft: 10 }} source={require('../../Image/ShopScreen/pic28.png')}></Image>
                            <TextInput style={{ height: 50, width: 250 }} placeholder='搜索你想要的美物'></TextInput>
                        </View>
                        <TouchableOpacity style={{ width: 25, height: 25, marginLeft: 10, alignItems: 'center' }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../../Image/ShopScreen/pic27.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={styles.contant}>
                        <View style={{ flexDirection: 'row', width: '100%', height: 100, backgroundColor: '#fff', alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center', marginLeft: 50 }}>
                                <Image
                                    style={{ width: 60, height: 60, borderRadius: 50 }}
                                    source={require('../../Image/ShopScreen/pic5.jpg')}
                                >
                                </Image>
                                <Text style={{ marginTop: 3 }}>雕刻工艺</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 60, height: 60, borderRadius: 50 }}
                                    source={require('../../Image/ShopScreen/pic4.jpg')}
                                >
                                </Image>
                                <Text style={{ marginTop: 3 }}>瓷器工艺</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 60, height: 60, borderRadius: 50 }}
                                    source={require('../../Image/ShopScreen/pic3.jpg')}
                                >
                                </Image>
                                <Text style={{ marginTop: 3 }}>工艺特色</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
                                <Image
                                    style={{ width: '100%', height: '100%', borderRadius: 50 }}
                                    source={require('../../Image/ShopScreen/pic24.png')}
                                >
                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.last}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15, marginTop: 10, color: '#c9ab77' }}>新品推荐</Text>
                            </View>
                            <View style={styles.key}>
                                <View style={{ width: '50%', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ width: '90%', height: 300, backgroundColor: 'red', marginTop: 15 }}>
                                        <ImageBackground
                                            style={{ width: '100%', height: '100%', flexDirection: 'row-reverse' }}
                                            source={require('../../Image/ShopScreen/umbrella2.png')}>
                                            <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 230 }}>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                    <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>油纸伞</Text>
                                                    <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥288</Text>
                                                </View>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row-reverse' }}>
                                                    <Text style={{ fontSize: 15, color: '#fff' }}>已售1000件</Text>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: '90%', height: 250, backgroundColor: 'red', marginTop: 15 }}>
                                        <ImageBackground
                                            style={{ width: '100%', height: '100%', flexDirection: 'row-reverse' }}
                                            source={require('../../Image/ShopScreen/umbrella1.png')}>
                                            <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 180 }}>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                    <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>油纸伞</Text>
                                                    <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥288</Text>
                                                </View>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row-reverse' }}>
                                                    <Text style={{ fontSize: 15, color: '#fff' }}>已售1000件</Text>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: '90%', height: 250, backgroundColor: 'red', marginTop: 15 }}>
                                        <ImageBackground
                                            style={{ width: '100%', height: '100%', flexDirection: 'row-reverse' }}
                                            source={require('../../Image/ShopScreen/umbrella2.png')}>
                                            <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 180 }}>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                    <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>油纸伞</Text>
                                                    <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥288</Text>
                                                </View>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row-reverse' }}>
                                                    <Text style={{ fontSize: 15, color: '#fff' }}>已售1000件</Text>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: '90%', height: 300, backgroundColor: 'red', marginTop: 15 }}>
                                        <ImageBackground
                                            style={{ width: '100%', height: '100%', flexDirection: 'row-reverse' }}
                                            source={require('../../Image/ShopScreen/umbrella2.png')}>
                                            <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 230 }}>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                    <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>油纸伞</Text>
                                                    <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥288</Text>
                                                </View>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row-reverse' }}>
                                                    <Text style={{ fontSize: 15, color: '#fff' }}>已售1000件</Text>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '50%', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ width: '90%', height: 230, backgroundColor: 'red', marginTop: 15 }}>
                                        <ImageBackground
                                            style={{ width: '100%', height: '100%', flexDirection: 'row-reverse' }}
                                            source={require('../../Image/ShopScreen/umbrella2.png')}>
                                            <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 160 }}>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                    <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>油纸伞</Text>
                                                    <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥288</Text>
                                                </View>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row-reverse' }}>
                                                    <Text style={{ fontSize: 15, color: '#fff' }}>已售1000件</Text>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: '90%', height: 280, backgroundColor: 'red', marginTop: 15 }}>
                                        <ImageBackground
                                            style={{ width: '100%', height: '100%', flexDirection: 'row-reverse' }}
                                            source={require('../../Image/ShopScreen/umbrella2.png')}>
                                            <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 210 }}>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                    <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>油纸伞</Text>
                                                    <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥288</Text>
                                                </View>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row-reverse' }}>
                                                    <Text style={{ fontSize: 15, color: '#fff' }}>已售1000件</Text>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: '90%', height: 350, backgroundColor: 'red', marginTop: 15 }}>
                                        <ImageBackground
                                            style={{ width: '100%', height: '100%', flexDirection: 'row-reverse' }}
                                            source={require('../../Image/ShopScreen/umbrella2.png')}>
                                            <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 280 }}>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                    <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>油纸伞</Text>
                                                    <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥288</Text>
                                                </View>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row-reverse' }}>
                                                    <Text style={{ fontSize: 15, color: '#fff' }}>已售1000件</Text>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: '90%', height: 300, backgroundColor: 'red', marginTop: 15 }}>
                                        <ImageBackground
                                            style={{ width: '100%', height: '100%', flexDirection: 'row-reverse' }}
                                            source={require('../../Image/ShopScreen/umbrella2.png')}>
                                            <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 230 }}>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                    <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>油纸伞</Text>
                                                    <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥288</Text>
                                                </View>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row-reverse' }}>
                                                    <Text style={{ fontSize: 15, color: '#fff' }}>已售1000件</Text>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
    },
    header: {
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    contant: {
    },
    last: {
        marginTop: 20,
        backgroundColor: '#fff',
        width: '100%',
    },
    key: {
        flexDirection: 'row',
    }
})