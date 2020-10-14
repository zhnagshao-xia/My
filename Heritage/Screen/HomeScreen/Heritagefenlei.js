import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL1 = http + "/feiyi/list/find";

export default class Heritagefenlei extends React.Component {
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
        let leibie = route.params.leibie;
        this.state={
            cityname,
            leibie,
            docs:[]
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
              cityname: this.state.cityname,
              leibie:this.state.leibie
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
        const leibie = this.state.leibie;
        const data = this.state.docs;
        console.log("666"+data)
        return (
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
                        }}>{leibie}（{cityname}）</Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('heritagelist')}
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
                                            onPress={() => navigation.navigate("heritageDetails",{xiangmu:item.xiangmu,cityname:item.suozaidi})}>
                                            <Text style={{fontSize:20,lineHeight:40,letterSpacing:2}}>{item.xiangmu}</Text>
                                            <Text ellipsizeMode="tail" style={{height:35}}>{item.jianjie}</Text>
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
