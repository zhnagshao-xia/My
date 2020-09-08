import React from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


export default function ActivityDetails({navigation}) {
    return (
        <View>
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
            textAlignVertical: 'center',}}>活动</Text>
          <TouchableOpacity
        activeOpacity={0.6}>
          <Feather name={'more-horizontal'} size={20} color={'#000'} /></TouchableOpacity>
      </View>
      </View>
        <ScrollView >
            <FlatList
                data={[
                    {
                        title: '王钏巧：工匠精神传续百年活字',
                        time: '2020-7-25',
                        text1: `王钏巧·木活字印刷技术省级非遗传承人`,
                        text2: `非物质文化遗产与文学术研讨活动内容简介：我有过许多东西，有小熊玩具、有迷你抓娃娃机、有书桌、还有书本……但我最喜欢的还是那个电话手表。这..

                        本文《我的心爱之物作文500字电话手表》由小学生作文大全整理，仅供参考。如果觉得很不错，欢迎点评和分享～感谢你的阅读与支持！
                        
                        我有过许多东西，有小熊玩具、有迷你抓娃娃机、有书桌、还有书本……但我最喜欢的还是那个电话手表。
                        
                        这个电话手表是我生日的时候妈妈送给我的礼物，它有两小段表带，还有一个宽两厘米，长六厘米的屏幕。表带外面是黑色的，而里面却是粉色的。屏幕关上是黑色的，开了却是彩色的。屏幕的外框是黑粉相间的，侧面是粉色的。这就是电话手表的形状。噢，对了，屏幕的背面还有一个按钮，是关机按钮。正面也有一个按钮，是拨电话的。
                        
                        电话手表有许多功能，比如:打电话，发信息、拍照片、录视频、加好友、看时间，运动PK、领积分、发红包……电话手表还有许多作用，比如:你在商场里和家人走散了，你可以打开电话手表，打电话给你的家人，告诉他们你在哪儿。如果你遇到坏人了，你可以拨打110或发送求救信号给你的家人，这样他们就可以知道你所在的地址。如果......
                        
                        我记得有一次，我在商场迷路了，和爸爸妈妈走散了，我着急得像热锅上的蚂蚁，突然我想到了我有手表呀!我就开始拨妈妈的号码，188……我按下了拨号键，结果听到了一段语音提示：“您的电话已欠费，请速交话费……”我又想起我的手表可以付费，我就去交费了，当我正准备给妈妈打电话时，妈妈正好打来了电话，她对我说:“你去哪了？电话一直打不通，可把我担心坏了，终于打通你的电话，总算找到你了。”
                        
                        我爱我的电话手表。`
                    },
                ]}
                renderItem={({ item }) =>
                    <View style={{ 
                        paddingHorizontal: 30,
                     paddingTop: 20,
                     paddingBottom:40,
                     alignItems:"center",}}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 16 }}>{item.title}</Text>
                            <Text style={{ lineHeight: 30,fontSize: 15 }}>{item.time}</Text>
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
                    </View>
                }
            />
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    
});