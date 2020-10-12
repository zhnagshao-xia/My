import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Heritagetwo from '../HomeScreen/Heritagetwo';

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL1 = http + "/feiyi/list";

export default class DrawerExample extends React.Component {
    // constructor() {
    //     super(...arguments);
    //     this.onOpenChange = isOpen => {
    //         console.log('是否打开了 Drawer', isOpen.toString());
    //     };
    // }

    constructor(props) {
        super(props);
        // super(...arguments);
        const { navigation, route } = this.props;
        let cityname = route.params.cityname;
        this.state={
            cityname,
            docs:[],
            docs1:[]
        };
        this.onOpenChange = isOpen => {
            console.log('是否打开了 Drawer', isOpen.toString());
        };
      }

    componentDidMount() {
        this.fetchData();
      }
    
      fetchData() {
        fetch(URL1, {//对应城市项目列表查询
            method: 'POST',
            credentials: "include",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              cityname: this.state.cityname
            })
          })
            .then((response) => response.json())
            .then((json) => {
              this.setState({
                docs: json.docs,
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
        const cityname = this.state.cityname;
        const data = this.state.docs;
        const data1 = this.state.docs1;
        console.log("666"+data)
        const sidebar = (
            <ScrollView style={[styles.container]}>
                <View style={{height:60,
                alignItems:"center",
                justifyContent:"center"}}>
                    <Text style={{fontSize:19}}>分类</Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.kuang}
                    onPress={() =>
                    navigation.navigate('Heritagefenlei',{cityname:cityname,leibie:"民间文学"})
                    }>
                        <Text style={styles.zi}>民间文学</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.kuang}
                    onPress={() => 
                        navigation.navigate('Heritagefenlei',{cityname:cityname,leibie:"传统音乐"})
                        }>
                        <Text style={styles.zi}>传统音乐</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.8} 
                    activeOpacity={0.8} 
                    style={styles.kuang}
                    onPress={() => 
                        navigation.navigate('Heritagefenlei',{cityname:cityname,leibie:"传统舞蹈"})
                        }>
                        <Text style={styles.zi}>传统舞蹈</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.kuang}
                    onPress={() => 
                        navigation.navigate('Heritagefenlei',{cityname:cityname,leibie:"传统戏剧"})
                        }>
                        <Text style={styles.zi}>传统戏剧</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.kuang}
                    onPress={() => 
                        navigation.navigate('Heritagefenlei',{cityname:cityname,leibie:"曲艺"})
                        }>
                        <Text style={styles.zi}>曲     艺</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.kuang}
                    onPress={() => 
                        navigation.navigate('Heritagefenlei',{cityname:cityname,leibie:"传统美术"})
                        }>
                        <Text style={styles.zi}>传统美术</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.kuang}
                    onPress={() => 
                        navigation.navigate('Heritagefenlei',{cityname:cityname,leibie:"传统技艺"})
                        }>
                        <Text style={styles.zi}>传统技艺</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.kuang}
                    onPress={() => 
                        navigation.navigate('Heritagefenlei',{cityname:cityname,leibie:"传统医药"})
                        }>
                        <Text style={styles.zi}>传统医药</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.kuang}
                    onPress={() => 
                        navigation.navigate('Heritagefenlei',{cityname:cityname,leibie:"民俗"})
                        }>
                        <Text style={styles.zi}>民     俗</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.kuang}
                    onPress={() => 
                        navigation.navigate('Heritagefenlei',{cityname:cityname,leibie:"传统体育游艺杂技"})
                        }>
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
                        }}>{cityname}</Text>
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
                                data={data}
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
                                                    source={{uri:https+item.zhanshitu}}></Image>
                                            </View>
                                            <TouchableOpacity activeOpacity={0.8}
                                            onPress={() => navigation.navigate("heritageDetails",{xiangmu:item.xiangmu,cityname:item.suozaidi,zhanshitu:item.zhanshitu,jianjie:item.jianjie})}>
                                            <Text style={{fontSize:20,lineHeight:40,letterSpacing:2}}>{item.xiangmu}</Text>
                                            <Text ellipsizeMode="tail" style={{height:35}}>{item.jianjie}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                }
                            />
                        </View>
                        {/* <ScrollView>
                        <Heritagetwo />
                    </ScrollView> */}
                    
                    </ScrollView>
                </View>
                
            </Drawer>
        );
    }
}


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
