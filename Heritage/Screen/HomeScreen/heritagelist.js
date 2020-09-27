import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

var https = "http://121.196.191.45";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    kuang:{
        marginBottom:15,
        width:100,
        paddingHorizontal:10,
        borderLeftWidth:2,
        borderLeftColor:"#945357"
    },
    zi:{
        textAlign:"center",
        fontSize:15,
        letterSpacing:3
        
    }
});
export default class DrawerExample extends React.Component {
    constructor() {
        super(...arguments);
        this.onOpenChange = isOpen => {
            console.log('是否打开了 Drawer', isOpen.toString());
        };
    }
    render() {
        const { navigation, route } = this.props;
        const sidebar = (
            <ScrollView style={[styles.container]}>
                <View style={{height:60,
                alignItems:"center",
                justifyContent:"center"}}>
                    <Text style={{fontSize:19}}>分类</Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.kuang}>
                        <Text style={styles.zi}>民间文学</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.kuang}>
                        <Text style={styles.zi}>传统工艺</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} activeOpacity={0.8} style={styles.kuang}>
                        <Text style={styles.zi}>传统舞蹈</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.kuang}>
                        <Text style={styles.zi}>传统戏剧</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.kuang}>
                        <Text style={styles.zi}>曲    艺</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.kuang}>
                        <Text style={styles.zi}>传统美术</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.kuang}>
                        <Text style={styles.zi}>传统技艺</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.kuang}>
                        <Text style={styles.zi}>传统医药</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.kuang}>
                        <Text style={styles.zi}>民    俗</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.kuang}>
                        <Text style={styles.zi}>传统体育游艺杂技</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
        return (
            <Drawer
                sidebar={sidebar}
                position="right"
                open={false}
                drawerRef={el => (this.drawer = el)}
                onOpenChange={this.onOpenChange}
                drawerBackgroundColor="#fff"
                drawerWidth={170}
            >
                <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
                    <View style={{
                        height: 45,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#fff",
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        
                    }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                            style={{
                                width: 50,
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <FontAwesome name={'angle-left'} size={25} color={'#000'} />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                        }}>杭州</Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => this.drawer && this.drawer.openDrawer()}
                            style={{
                                width: 50,
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <Feather name={'menu'} size={20} color={'#000'} /></TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={{marginTop: 10 }}>
                            <FlatList
                                data={[
                                    {
                                        demo: '50',
                                        demo1: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                                    },
                                    {
                                        demo: '50',
                                        demo1: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                                    },
                                    {
                                        demo: '50',
                                        demo1: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                                    },
                                    {
                                        demo: '50',
                                        demo1: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                                    },
                                    {
                                        demo: '50',
                                        demo1: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                                    },
                                    {
                                        demo: '50',
                                        demo1: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                                    },
                                ]}
                                renderItem={({ item }) =>
                                    <View style={{
                                        width: '100%',
                                        height: 300,
                                        backgroundColor: "#fff",
                                        alignItems: "center",
                                        paddingVertical: 10,
                                        marginBottom:20
                                    }}>
                                        <View style={{ width: '95%', flexDirection: "column" }}>
                                            <View style={{ width: "100%", height: 200 }}>
                                                <Image style={{ width: '100%', height: "100%" }}
                                                    source={{uri:https+"/picture/shouye_feiyi/haibaotu/杭州.png"}}></Image>
                                            </View>
                                            <TouchableOpacity activeOpacity={0.8}>
                                            <Text style={{fontSize:20,lineHeight:40,letterSpacing:2}}>啦啦啦啦啦啦</Text>
                                            <Text ellipsizeMode="tail" style={{height:35}}>{item.demo1}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                }
                            />
                        </View>
                    </ScrollView>
                </View>
            </Drawer>
        );
    }
}
