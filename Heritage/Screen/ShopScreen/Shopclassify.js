import React from 'react';
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList,
    ImageBackground,
    Animated,
    Surface,
    styleDict
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

var https = "http://121.196.191.45";

export default class BasicTabsExample extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={{
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
                        }}>集市</Text>
                    </View>
                </View>
                <ScrollView style={{ marginBottom: 50 }}>
                    <View style={{
                        width: "100%",
                        alignItems: "center",
                    }}>
                        <View style={{ width: "92%" }}>
                            <Image style={{
                                width: "100%",
                                height: 200,
                                resizeMode: "stretch",
                                marginVertical: 10
                            }}
                                source={{uri:https+"/picture/shopping/class/海报.jpg"}}>
                            </Image>
                            <Text style={{
                                fontSize: 15,
                                marginBottom: 5,
                                fontWeight: "bold"
                            }}>找寻记忆中的痕迹</Text>
                            <Text style={{
                                fontSize: 12,
                                marginBottom: 10
                            }}>时间沉淀的美</Text>
                            <View style={{
                                borderColor: "#000",
                                borderRadius: 100,
                                height: 0.5,
                                borderWidth: 0.5,
                                borderStyle:"dashed"
                            }}></View>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30, width: 130 }}>
                                <Text style={{ fontSize: 15, textAlign: "right" }}>琢磨</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>ZHUOMO</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"木雕"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/琢磨/木雕.jpg"}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>木雕</Text>
                                    <Text>MUDIAO</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"石雕"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/琢磨/石雕.jpg"}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>石雕</Text>
                                    <Text>SHIDIAO</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"铜雕"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/琢磨/铜雕.jpg"}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>铜雕</Text>
                                    <Text>TONGDIAO</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"锡雕"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/琢磨/锡雕.jpg"}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>锡雕</Text>
                                    <Text>XIDIAO</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={()=>{
                            navigation.navigate('Shopclassifymore',{dalei:"琢磨",pinyin:"ZHUOMO"})
                            }}>
                            <View style={{width:"100%",
                            height:30,
                            marginTop:40,
                            borderColor:'#000',
                            borderWidth:1,
                            borderRadius:6,
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"row"
                            }}>
                                <Text style={{letterSpacing:2}}>more</Text>
                                <AntDesign name={'caretright'} size={7} color={'#000'} style={{marginTop:5}} />
                            </View>
                            </TouchableOpacity>
                            <View style={{
                                borderColor: "#000",
                                borderRadius: 100,
                                height: 0.5,
                                borderWidth: 0.5,
                                borderStyle:"dashed",
                                marginTop:30
                            }}></View>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30}}>
                                <Text style={{ fontSize: 15, textAlign: "right" }}>浴火</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>YUHUO</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"越窑"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>越窑</Text>
                                    <Text>YUEYAO</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/浴火/越窑.jpg"}}>
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"婺州窑"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent:"flex-end",
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>婺州窑</Text>
                                    <Text>WUZHOUYAO</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/浴火/婺州窑.jpg"}}>
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"龙泉窑"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>龙泉窑</Text>
                                    <Text>LONGQUANYAO</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/浴火/龙泉窑.jpg"}}>
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"南宋官窑"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent:"flex-end",
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "36%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>南宋官窑</Text>
                                    <Text>NANSONGGUANYAO</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/浴火/南宋官窑.jpg"}}>
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={()=>{
                            navigation.navigate('Shopclassifymore',{dalei:"浴火",pinyin:"YUHUO"})
                            }}>
                            <View style={{width:"100%",
                            height:30,
                            marginTop:40,
                            borderColor:'#000',
                            borderWidth:1,
                            borderRadius:6,
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"row"
                            }}>
                                <Text style={{letterSpacing:2}}>more</Text>
                                <AntDesign name={'caretright'} size={7} color={'#000'} style={{marginTop:5}} />
                            </View></TouchableOpacity>
                            <View style={{
                                borderColor: "#000",
                                borderRadius: 100,
                                height: 0.5,
                                borderWidth: 0.5,
                                borderStyle:"dashed",
                                marginTop:30
                            }}></View>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30, width: 130 }}>
                                <Text style={{ fontSize: 15, textAlign: "right" }}>茶道</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>CHADAO</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"绿茶"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/茶道/绿茶.jpg"}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>绿茶</Text>
                                    <Text>LVCHA</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"云雾茶"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/茶道/云雾茶.jpg"}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>云雾茶</Text>
                                    <Text>YUNWUCHA</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"龙顶茶"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/茶道/龙顶茶.jpg"}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>龙顶茶</Text>
                                    <Text>LONGDINGCHA</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"白茶"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/茶道/白茶.jpg"}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>白茶</Text>
                                    <Text>BAICHA</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={()=>{
                            navigation.navigate('Shopclassifymore',{dalei:"茶道",pinyin:"CHADAO"})
                            }}>
                            <View style={{width:"100%",
                            height:30,
                            marginTop:40,
                            borderColor:'#000',
                            borderWidth:1,
                            borderRadius:6,
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"row"
                            }}>
                                <Text style={{letterSpacing:2}}>more</Text>
                                <AntDesign name={'caretright'} size={7} color={'#000'} style={{marginTop:5}} />
                            </View></TouchableOpacity>
                            <View style={{
                                borderColor: "#000",
                                borderRadius: 100,
                                height: 0.5,
                                borderWidth: 0.5,
                                borderStyle:"dashed",
                                marginTop:30
                            }}></View>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30}}>
                                <Text style={{ fontSize: 15, textAlign: "right" }}>珍馐</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>ZHENXIU</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"糕点"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>糕点</Text>
                                    <Text>GAODIAN</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/珍馐/糕点.jpg"}}>
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"小食"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent:"flex-end",
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>小食</Text>
                                    <Text>XIAOSHI</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/珍馐/小食.jpg"}}>
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"百味"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>百味</Text>
                                    <Text>BAIWEI</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/珍馐/百味.jpg"}}>
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"酒香"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent:"flex-end",
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>酒香</Text>
                                    <Text>JIUXIANG</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/珍馐/酒香.jpg"}}>
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={()=>{
                            navigation.navigate('Shopclassifymore',{dalei:"珍馐",pinyin:"ZHENXIU"})
                            }}>
                            <View style={{width:"100%",
                            height:30,
                            marginTop:40,
                            borderColor:'#000',
                            borderWidth:1,
                            borderRadius:6,
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"row"
                            }}>
                                <Text style={{letterSpacing:2}}>more</Text>
                                <AntDesign name={'caretright'} size={7} color={'#000'} style={{marginTop:5}} />
                            </View></TouchableOpacity>
                            <View style={{
                                borderColor: "#000",
                                borderRadius: 100,
                                height: 0.5,
                                borderWidth: 0.5,
                                borderStyle:"dashed",
                                marginTop:30
                            }}></View>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30, width: 130 }}>
                                <Text style={{ fontSize: 15, textAlign: "right" }}>市井</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>SHIJING</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"纸品"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/市井/纸品.jpg"}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>纸品</Text>
                                    <Text>ZHIPIN</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"日用"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/市井/日用.jpg"}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>日用</Text>
                                    <Text>RIYONG</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"饰品"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/市井/饰品.jpg"}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>饰品</Text>
                                    <Text>SHIPIN</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:"文玩"})
                               }}>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+"/picture/shopping/class/市井/文玩.jpg"}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>文玩</Text>
                                    <Text>WENWAN</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={()=>{
                            navigation.navigate('Shopclassifymore',{dalei:"市井",pinyin:"SHIJING"})
                            }}>
                            <View style={{width:"100%",
                            height:30,
                            marginTop:40,
                            borderColor:'#000',
                            borderWidth:1,
                            borderRadius:6,
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"row"
                            }}>
                                <Text style={{letterSpacing:2}}>more</Text>
                                <AntDesign name={'caretright'} size={7} color={'#000'} style={{marginTop:5}} />
                            </View></TouchableOpacity>
                            {/* <View style={{
                                borderColor: "#000",
                                borderRadius: 100,
                                height: 0.5,
                                borderWidth: 0.5,
                                borderStyle:"dashed",
                                marginTop:30
                            }}></View> */}
                        </View>
                    </View>
                    <Text style={{textAlign:"center",marginTop:20}}>———————————————到底啦———————————————</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({



});
