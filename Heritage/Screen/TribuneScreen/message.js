import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground,Image,ScrollView,FlatList,Dimensions,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Tabs, Flex } from '@ant-design/react-native';
export default class Activity extends Component {
    render() {
    const state = this.state;
    const { navigation } = this.props;
    const tabs = [
      { title: '新增回复' },
      { title: '新增关注' },
      { title: '新增点赞' },
    ];
    const style = {
      height: '100%',
      width: '100%',
    };
        return ( 
        <View style={{width:'100%',height:'100%',backgroundColor:'#f2f2f2'}}>           
            <View style={{height:45,
                alignItems:"center",
                justifyContent:"center",
                borderBottomWidth:0.5,
                borderBottomColor:"#000",}}>
                <View style={{flexDirection:'row',justifyContent:"space-between",width:"90%"}}>
                    <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}>
                        <FontAwesome name={'angle-left'} size={25} color={'#000'} />
                    </TouchableOpacity>
                    <Text style={{fontSize:18,
                        textAlign: 'center',
                        textAlignVertical: 'center',}}>消息</Text>
                    <View>
                    </View>
                </View>
            </View>
            <View style={{width:'100%',height:50,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-around'}}>
                <ImageBackground style={{width:40,height:40,marginTop:10}}
                source={require('../../Image/message/massage.png')}></ImageBackground>
                <ImageBackground style={{width:40,height:40,marginTop:10}}
                source={require('../../Image/message/love.png')}></ImageBackground>
                <ImageBackground style={{width:40,height:40,marginTop:10}}
                source={require('../../Image/message/good.png')}></ImageBackground>
            </View>
            <View style={{width:'100%',height:600,backgroundColor:'#f2f2f2'}}>
            <Tabs
          tabs={tabs}
          tabBarTextStyle={{
            color: "#945357",
            fontSize: 15
          }}
          tabBarUnderlineStyle={{
            width: 65,
            height:1,
            marginLeft: 35,
            backgroundColor: '#945357',
          }}
        >
             <View style={{width:'100%',height:'100%'}}>
                  <FlatList
                    data={[
                      {
                        title1: '我爱非遗+',title2:'你'
                      },
                    ]}
                    renderItem={({ item }) =>
                    <View style={{width:'100%',height:'100%'}}>
                        <View style={{width:'100%',height:80,backgroundColor:'#fff',marginBottom:10,flexDirection:'row',alignItems:'center',marginTop:10}}>
                            <ImageBackground style={{
                              width:50,
                              height:50,
                              backgroundColor:'blue',
                              borderRadius:50,
                              marginLeft:10}}></ImageBackground>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title1}</Text>
                            <Text style={{fontSize:15,color:'#955458',marginLeft:10}}>回复了</Text>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title2}</Text>
                        </View>
                        <View style={{width:'100%',height:80,backgroundColor:'#fff',marginBottom:10,flexDirection:'row',alignItems:'center'}}>
                            <ImageBackground style={{
                              width:50,
                              height:50,
                              backgroundColor:'blue',
                              borderRadius:50,
                              marginLeft:10}}></ImageBackground>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title1}</Text>
                            <Text style={{fontSize:15,color:'#955458',marginLeft:10}}>回复了</Text>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title2}</Text>
                        </View>
                        <View style={{width:'100%',height:80,backgroundColor:'#fff',marginBottom:10,flexDirection:'row',alignItems:'center'}}>
                            <ImageBackground style={{
                              width:50,
                              height:50,
                              backgroundColor:'blue',
                              borderRadius:50,
                              marginLeft:10}}></ImageBackground>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title1}</Text>
                            <Text style={{fontSize:15,color:'#955458',marginLeft:10}}>回复了</Text>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title2}</Text>
                        </View>
                        
                    </View>
                    
                }
                />
              </View>
              <View style={{width:'100%',height:'100%'}}>
                  <FlatList
                    data={[
                      {
                        title1: '我爱非遗+',title2:'你'
                      },
                    ]}
                    renderItem={({ item }) =>
                    <View style={{width:'100%',height:'100%'}}>
                        <View style={{width:'100%',height:80,backgroundColor:'#fff',marginBottom:10,flexDirection:'row',alignItems:'center',marginTop:10}}>
                            <View style={{width:50,height:50,backgroundColor:'blue',borderRadius:50,marginLeft:10}}></View>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title1}</Text>
                            <Text style={{fontSize:15,color:'#955458',marginLeft:10}}>关注了</Text>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title2}</Text>
                        </View>
                        <View style={{width:'100%',height:80,backgroundColor:'#fff',marginBottom:15,flexDirection:'row',alignItems:'center'}}>
                            <View style={{width:50,height:50,backgroundColor:'blue',borderRadius:50,marginLeft:10}}></View>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title1}</Text>
                            <Text style={{fontSize:15,color:'#955458',marginLeft:10}}>关注了</Text>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title2}</Text>
                        </View>
                        <View style={{width:'100%',height:80,backgroundColor:'#fff',flexDirection:'row',alignItems:'center'}}>
                            <View style={{width:50,height:50,backgroundColor:'blue',borderRadius:50,marginLeft:10}}></View>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title1}</Text>
                            <Text style={{fontSize:15,color:'#955458',marginLeft:10}}>关注了</Text>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title2}</Text>
                        </View>
                        
                    </View>
                    
                }
                />
              </View>
              <View style={{width:'100%',height:'100%'}}>
                  <FlatList
                    data={[
                      {
                        title1: '我爱非遗+',title2:'你'
                      },
                    ]}
                    renderItem={({ item }) =>
                    <View style={{width:'100%',height:'100%'}}>
                        <View style={{width:'100%',height:80,backgroundColor:'#fff',marginBottom:15,flexDirection:'row',alignItems:'center',marginTop:10}}>
                            <View style={{width:50,height:50,backgroundColor:'blue',borderRadius:50,marginLeft:10}}></View>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title1}</Text>
                            <Text style={{fontSize:15,color:'#955458',marginLeft:10}}>点赞了</Text>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title2}</Text>
                        </View>
                        <View style={{width:'100%',height:80,backgroundColor:'#fff',marginBottom:15,flexDirection:'row',alignItems:'center'}}>
                            <View style={{width:50,height:50,backgroundColor:'blue',borderRadius:50,marginLeft:10}}></View>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title1}</Text>
                            <Text style={{fontSize:15,color:'#955458',marginLeft:10}}>点赞了</Text>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title2}</Text>
                        </View>
                        <View style={{width:'100%',height:80,backgroundColor:'#fff',marginBottom:15,flexDirection:'row',alignItems:'center'}}>
                            <View style={{width:50,height:50,backgroundColor:'blue',borderRadius:50,marginLeft:10}}></View>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title1}</Text>
                            <Text style={{fontSize:15,color:'#955458',marginLeft:10}}>点赞了</Text>
                            <Text style={{marginLeft:10,fontSize:13}}>{item.title2}</Text>
                        </View>
                        
                    </View>
                    
                }
                />
              </View>
            </Tabs>
        </View> 
        </View> 
        )
    }
}
        const styles = StyleSheet.create({})