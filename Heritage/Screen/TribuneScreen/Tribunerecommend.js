import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import { TextInput } from 'react-native-gesture-handler';
import Barrage from './Barrage'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

var https = "http://121.196.191.45";

export default function CollectionScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <View style={{height:"55%"}}>
        {/* <View style={{ flex: 1 }}>
          <Barrage />
        </View> */}
      </View>
      <View style={{width:"100%",position:"absolute",bottom:0,backgroundColor:"#fff"}}>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <TouchableOpacity
        onPress={() => navigation.navigate('mainbody',{_id:"5f593d16d4966ae48caebb7c"})}
        activeOpacity={0.8}
          style={{
            width: '90%',
            borderWidth: 2,
            borderColor: 'black',
            flexDirection: 'row',
            padding: 10
          }}>
          <Image style={{ width: 50, height: 50, borderRadius: 50, marginRight: 10 }}
            source={{ uri: https + "/picture/touxiang/fans/a0.jpg" }}>
          </Image>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 15, marginTop: 10 }}>诗画浙江</Text>
            <View style={{ width: '90%', marginTop: 10 }}>
              <Text style={{ fontSize: 13, }}>【二十四节气：#在时间里感受非遗#】“春雨惊春清谷天，夏满芒夏暑相连。秋处露秋寒霜降，冬雪雪冬小大寒。”这首仅28个字的24节气歌蕴含了中华民族千百年来的智慧。2016年，“二十四节气”入选联合国教科文组织非物质文化遗产名录。#非遗在身边#惊蛰、谷雨、芒种...二十四节气的名字，你最喜欢哪一个</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:"center"}}>
      <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', width: '90%',justifyContent:"space-between"}}>
        <TouchableOpacity style={{ width: 35, height: 35,}}>
          <Image style={{ width: '100%', height: '100%' }} source={require('../../Image/TribuneScreen/pic14.png')}></Image>
        </TouchableOpacity>
        <TextInput style={{ width: '75%', height: '60%', backgroundColor: '#dcdcdc', borderRadius: 20, padding: 10 }}></TextInput>
        <TouchableOpacity style={{ width: 40, height: 40,alignItems: 'center', justifyContent: 'center' }}>
          <FontAwesome name={'arrow-circle-o-up'} size={24} color={'grey'} />
        </TouchableOpacity>
      </View>
      </View>
      </View>
    </View>
  );
}