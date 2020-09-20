import React from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet, Image, TouchableOpacity,TouchableHighlight } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function ActivityDetails({navigation}) {
    return (
        <View>
            <View style={{
            height:45,
            alignItems:"center",
            justifyContent:"center",
            flexDirection:'row',
            borderBottomWidth:0.5,
            borderBottomColor:"#000",}}>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            style={{right:130}}>
              <FontAwesome name={'angle-left'} size={25} color={'#000'} />
              </TouchableOpacity>
              <Text style={{fontSize:18,
                textAlign: 'center',
                textAlignVertical: 'center',}}>详情</Text>
              
          </View>
        <ScrollView  style={{marginBottom:50}}>
            <FlatList
                data={[
                    {
                        title: '浙江·中国非物质文化遗产博览会举行',
                        time: '2020-7-25',
                        text1: `本次展览分为“金艺求精”“戏说百态”“味觉遗香”“和风造物”` +
                            `等不同展区，来自我国28个省（直辖市、自治区）及澳门地区共300个项目、400位非遗传承人、相关业者、专家学者，还有来自日本的12个传统工艺项目的26位工艺家，在运河畔开启了一场以“非遗”之名的嘉年华。`,
                        text2: `据浙江省文化和旅游厅有关负责人介绍，今年浙江非遗博览会首创的“一馆多点”模式，将会场从封闭的展览中心拉到了美丽的运河沿岸，让非物质文化遗产与文化遗产无缝衔接，亲密融合。主体活动以杭州市拱墅区大运河沿岸为核心区，形成“一馆多点”的带状布局模式，“一馆”即运河文化艺术中心，为本届博览会（工艺周）的主展馆，先后举办开幕式、系列展览、闭幕式暨颁奖典礼等活动；“多点”分别为桥西历史街区、运河文化广场（大运河博物馆）、运河祈利酒店等，开展系列展览与学术研讨活动。运河祈利酒店等，开展系列展览与学术研讨活动。运河祈利酒店等，开展系列展览与学术研讨活动。运河祈利酒店等，开展系列展览与学术研讨活动。运河祈利酒店等，开展系列展览与学术研讨活动。运河祈利酒店等，开展系列展览与学术研讨活动。运河祈利酒店等，开展系列展览与学术研讨活动。`
                    },
                ]}
                renderItem={({ item }) =>
                    <View style={{ 
                     paddingHorizontal: 30,
                     paddingTop: 20,
                     paddingBottom:40,
                     alignItems:"center" }}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 17 }}>{item.title}</Text>
                            <Text style={{ lineHeight: 30,fontSize: 17 }}>{item.time}</Text>
                        </View>
                        <View>
                            <Text style={{ textAlign: 'auto', lineHeight: 25, fontSize: 15 }}>&#12288;&#12288;{item.text1}</Text>
                            <View style={{ alignItems: "center" }}>
                                <Image style={{
                                    width: 200,
                                    height: 100,
                                    resizeMode: 'stretch',
                                    marginVertical: 15
                                }}
                                    source={require('../../Image/activityScreen/mark.jpg')}>
                                </Image>
                            </View>
                            <Text style={{ textAlign: 'auto', lineHeight: 25, fontSize: 15 }}>&#12288;&#12288;{item.text2}</Text>
                        </View>
                        <TouchableHighlight 
                        onPress={() => navigation.navigate('报名表')}
                        underlayColor="rgba(86,132,145,0.6)"
                        style={{
                            marginTop:30,
                            width:80,
                            height:35,
                            backgroundColor:'#6092a0',
                            justifyContent:"center",
                            alignItems:"center",
                            borderRadius:10
                            }}>
                            <Text style={{color:'#fff',fontSize:14}}>去参加</Text>
                        </TouchableHighlight>
                    </View>
                }
            />
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    
});
