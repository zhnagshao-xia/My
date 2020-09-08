import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image, StyleSheet, FlatList, ImageBackground, Animated } from 'react-native';
import { Tabs } from '@ant-design/react-native';
export default class BasicTabsExample extends React.Component {
    render() {
        const { navigation } = this.props;
        const style = {
            height: '100%',
        };
        const tabs = [
            { title: '雕刻工艺' },
            { title: '陶瓷建盏' },
            { title: '工艺特色' },
        ];
        return (
            <View style={{ flex: 1 }}>
                <Tabs tabs={tabs}>
                    <View style={style}>
                        <ScrollView>
                            <View style={{ width: '100%', height: '100%', backgroundColor: '#f2f2f2', alignItems: 'center' }}>
                                <View style={{ width: '100%', height: 165, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                        <TouchableOpacity 
                                         onPress={() => navigation.navigate('木雕详情页面')}
                                         style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }} >
                                            <Text style={{ fontSize: 15, textAlign: 'center' }}>木雕</Text>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                    <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                        <TouchableOpacity 
                                        onPress={() => navigation.navigate('根雕详情页面')}
                                        style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 15, textAlign: 'center' }}>根雕</Text>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                    <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                        <TouchableOpacity 
                                        onPress={() => navigation.navigate('铜雕详情页面')}
                                        style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }} >
                                            <Text style={{ fontSize: 15, textAlign: 'center' }}>铜雕</Text>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                    <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                        <TouchableOpacity 
                                        onPress={() => navigation.navigate('石雕详情页面')}
                                        style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }} >
                                            <Text style={{ fontSize: 15, textAlign: 'center' }}>石雕</Text>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                    <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                        <TouchableOpacity 
                                        onPress={() => navigation.navigate('其他雕刻详情页面')}
                                        style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 15, textAlign: 'center' }}>其他</Text>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>
                                <View style={{ width: '100%', backgroundColor: '#fff', marginTop: 20 }}>
                                    <View style={styles.key}>
                                        <View style={{ width: '50%', alignItems: 'center' }}>
                                            <TouchableOpacity 
                                            onPress={() => navigation.navigate('商品详情页面')}
                                            style={{ width: '90%', height: 300, backgroundColor: 'red', marginTop: 15 }}>
                                                <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../Image/ShopScreen/pic36.jpg')}>
                                                    <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 230 }}>
                                                        <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                            <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>多子多福</Text>
                                                            <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                                    source={require('../../Image/ShopScreen/pic37.png')}>
                                                    <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 180 }}>
                                                        <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                            <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>出淤泥而不染</Text>
                                                            <Text style={{ fontSize: 15, marginLeft: 30, color: '#fff' }}>￥1988</Text>
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
                                                    source={require('../../Image/ShopScreen/pic37.png')}>
                                                    <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 180 }}>
                                                        <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                            <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>出淤泥而不染</Text>
                                                            <Text style={{ fontSize: 15, marginLeft: 30, color: '#fff' }}>￥1988</Text>
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
                                                    source={require('../../Image/ShopScreen/pic38.png')}>
                                                    <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 230 }}>
                                                        <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                            <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>蝶恋花</Text>
                                                            <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                                    source={require('../../Image/ShopScreen/pic38.png')}>
                                                    <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 160 }}>
                                                        <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                            <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>蝶恋花</Text>
                                                            <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                                    source={require('../../Image/ShopScreen/pic37.png')}>
                                                    <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 210 }}>
                                                        <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                            <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>出淤泥而不染</Text>
                                                            <Text style={{ fontSize: 15, marginLeft: 30, color: '#fff' }}>￥1988</Text>
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
                                                    source={require('../../Image/ShopScreen/pic36.jpg')}>
                                                    <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 280 }}>
                                                        <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                            <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>多子多福</Text>
                                                            <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                                    source={require('../../Image/ShopScreen/pic38.png')}>
                                                    <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 230 }}>
                                                        <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                            <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>蝶恋花</Text>
                                                            <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                            </View>
                        </ScrollView>
                    </View>
                    <View style={style}>
                        <View style={{ width: '100%', height: '100%', backgroundColor: 'grey' }}>
                            <ScrollView>
                                <View style={{ width: '100%', height: '100%', backgroundColor: '#f2f2f2', alignItems: 'center' }}>
                                    <View style={{ width: '100%', height: 165, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                            <TouchableOpacity 
                                             onPress={() => navigation.navigate('德化陶瓷详情页面')}
                                             style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }} >
                                                <Text style={{ fontSize: 15, textAlign: 'center' }}>德化陶瓷</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                        <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                            <TouchableOpacity 
                                             onPress={() => navigation.navigate('建盏详情页面')}
                                             style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 15, textAlign: 'center' }}>建盏</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                        <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                            <TouchableOpacity 
                                             onPress={() => navigation.navigate('陶瓷详情页面')}
                                             style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }} >
                                                <Text style={{ fontSize: 15, textAlign: 'center' }}>陶瓷</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                        <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                            <TouchableOpacity 
                                             onPress={() => navigation.navigate('瓷板画详情页面')}
                                             style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 15, textAlign: 'center' }}>瓷板画</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                        <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                            <TouchableOpacity 
                                             onPress={() => navigation.navigate('紫砂详情页面')}
                                             style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 15, textAlign: 'center' }}>紫砂</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ width: '100%', backgroundColor: '#fff', marginTop: 20 }}>
                                        <View style={styles.key}>
                                            <View style={{ width: '50%', alignItems: 'center' }}>
                                                <TouchableOpacity style={{ width: '90%', height: 300, backgroundColor: 'red', marginTop: 15 }}>
                                                    <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../Image/ShopScreen/pic41.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 230 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>多子多福</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic42.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 180 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>出淤泥而不染</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 30, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic43.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 180 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>出淤泥而不染</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 30, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic41.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 230 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>蝶恋花</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic43.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 160 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>蝶恋花</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic42.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 210 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>出淤泥而不染</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 30, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic41.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 280 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>多子多福</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic41.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 230 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>蝶恋花</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={style}>
                        <View style={{ width: '100%', height: '100%', backgroundColor: 'grey' }}>
                            <ScrollView>
                                <View style={{ width: '100%', height: '100%', backgroundColor: '#f2f2f2', alignItems: 'center' }}>
                                    <View style={{ width: '100%', height: 165, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                            <TouchableOpacity 
                                             onPress={() => navigation.navigate('香制品详情页面')}
                                             style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }} >
                                                <Text style={{ fontSize: 15, textAlign: 'center' }}>香制品</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                        <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                            <TouchableOpacity 
                                            onPress={() => navigation.navigate('木偶头详情页面')}
                                            style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 15, textAlign: 'center' }}>木偶头</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                        <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                            <TouchableOpacity 
                                             onPress={() => navigation.navigate('装饰画详情页面')}
                                             style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }} >
                                                <Text style={{ fontSize: 15, textAlign: 'center' }}>装饰画</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                        <ImageBackground style={{ width: 25, height: 150, resizeMode: 'stretch' }} source={require('../../Image/ShopScreen/pic40.png')}>
                                            <TouchableOpacity 
                                            onPress={() => navigation.navigate('其他工艺特色')}
                                            style={{ width: 28, height: 70, marginTop: 40, justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 15, textAlign: 'center' }}>其他</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ width: '100%', backgroundColor: '#fff', marginTop: 20 }}>
                                        <View style={styles.key}>
                                            <View style={{ width: '50%', alignItems: 'center' }}>
                                                <TouchableOpacity style={{ width: '90%', height: 300, backgroundColor: 'red', marginTop: 15 }}>
                                                    <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../Image/ShopScreen/pic44.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 230 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>多子多福</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic45.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 180 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>出淤泥而不染</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 30, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic46.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 180 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>出淤泥而不染</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 30, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic44.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 230 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>蝶恋花</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic46.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 160 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>蝶恋花</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic44.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 210 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>出淤泥而不染</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 30, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic44.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 280 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>多子多福</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                                        source={require('../../Image/ShopScreen/pic45.jpg')}>
                                                        <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 230 }}>
                                                            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                                                                <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>蝶恋花</Text>
                                                                <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥1988</Text>
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
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Tabs>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    key: {
        flexDirection: 'row',
    }


});
