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
                    // borderBottomWidth: 0.5,
                    // borderBottomColor: "#000",
                }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack()}
                        style={{ right: 160 }}>
                        <FontAwesome name={'angle-left'} size={25} color={'#000'} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 18,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                    }}>集市</Text>

                </View>
                <ScrollView style={{ marginBottom: 50 }}>
                    <View style={{
                        width: "100%",
                        alignItems: "center",
                    }}>
                        <View style={{ width: "92%" }}>
                            <Image style={{
                                width: "100%",
                                height: 160,
                                resizeMode: "stretch",
                                marginVertical: 10
                            }}
                                source={require('../../Image/HomeScreen/2.jpg')}>
                            </Image>
                            <Text style={{
                                fontSize: 15,
                                marginBottom: 5,
                                fontWeight: "bold"
                            }}>寻找章少霞的内心</Text>
                            <Text style={{
                                fontSize: 12,
                                marginBottom: 10
                            }}>熟悉而陌生的她</Text>
                            <View style={{
                                borderColor: "#000",
                                borderRadius: 100,
                                height: 0.5,
                                borderWidth: 0.5,
                                borderStyle:"dashed"
                            }}></View>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30, width: 120 }}>
                                <Text style={{ fontSize: 15, textAlign: "right" }}>性格</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>XINGGE</Text>
                            </View>
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
                                    source={require('../../Image/HomeScreen/2.jpg')}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>善良</Text>
                                    <Text>SHANLIANG</Text>
                                </View>
                            </View>
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
                                    source={require('../../Image/HomeScreen/2.jpg')}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>邪恶</Text>
                                    <Text>SHANLIANG</Text>
                                </View>
                            </View>
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
                                    source={require('../../Image/HomeScreen/2.jpg')}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>细心</Text>
                                    <Text>SHANLIANG</Text>
                                </View>
                            </View>
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
                                    source={require('../../Image/HomeScreen/2.jpg')}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>粗心</Text>
                                    <Text>SHANLIANG</Text>
                                </View>
                            </View>
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
                                <Text style={{ fontSize: 15, textAlign: "right" }}>性格</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>XINGGE</Text>
                            </View>
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
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>善良</Text>
                                    <Text>SHANLIANG</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={require('../../Image/HomeScreen/2.jpg')}>
                                </Image>
                            </View>
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
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>邪恶</Text>
                                    <Text>SHANLIANG</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={require('../../Image/HomeScreen/2.jpg')}>
                                </Image>
                            </View>
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
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>邪恶</Text>
                                    <Text>SHANLIANG</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={require('../../Image/HomeScreen/2.jpg')}>
                                </Image>
                            </View>
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
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>邪恶</Text>
                                    <Text>SHANLIANG</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={require('../../Image/HomeScreen/2.jpg')}>
                                </Image>
                            </View>
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
                            <View style={{
                                borderColor: "#000",
                                borderRadius: 100,
                                height: 0.5,
                                borderWidth: 0.5,
                                borderStyle:"dashed",
                                marginTop:30
                            }}></View>
                        </View>
                    </View>
                    <Text style={{textAlign:"center",marginTop:20}}>到底啦</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({



});
