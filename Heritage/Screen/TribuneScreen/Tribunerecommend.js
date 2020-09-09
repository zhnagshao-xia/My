import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import { TextInput } from 'react-native-gesture-handler';
import Barrage from './Barrage'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function CollectionScreen() {
  return (
    <View>
      <View style={{
        height: 350,
        backgroundColor: 'rgba(100,100,100,0.1)'
      }}>
        {/* <ImageBackground
          style={{ width: '100%', height: '100%', opacity: 0.2 }}
          source={require('../../Image/TribuneScreen/pic9.jpg')}> */}
          <View style={{ flex: 1 }}>
            <Barrage />
          </View>
        {/* </ImageBackground> */}
      </View>
      <View style={{
        height: 150,
        // height: '30%', 
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View style={{
          width: '90%',
          height: '90%',
          borderWidth: 2,
          borderColor: 'black',
          flexDirection: 'row'
        }}>
          <Image style={{ width: 50, height: 50, borderRadius: 50, margin: 10 }}
            source={require('../../Image/TribuneScreen/pic10.jpg')}>
          </Image>
          <View style={{ flexDirection: 'column', }}>
            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
              <Text style={{ fontSize: 15 }}>高血堂</Text>
              <TouchableOpacity style={{
                width: 50,
                height: 20,
                marginLeft: 30,
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'black',
                justifyContent: "center",
                borderRadius: 5
              }}>
                <Text style={{ color: '#945357', fontSize: 12, marginRight: 3 }}>+</Text>
                <Text style={{ fontSize: 12 }}>关注</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '85%' }}>
              <Text style={{ fontSize: 13, }}>官宣：浙江30件国家级非遗位数位列全国第一。</Text>
            </View>
          </View>

        </View>
      </View>
      <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', width: '90%', marginLeft: 20 }}>
        <TouchableOpacity style={{ width: 35, height: 35, marginRight: 10, marginLeft: 5 }}>
          <Image style={{ width: '100%', height: '100%' }} source={require('../../Image/TribuneScreen/pic14.png')}></Image>
        </TouchableOpacity>
        <TextInput style={{ width: '75%', height: '60%', backgroundColor: '#dcdcdc', borderRadius: 20, padding: 10 }}></TextInput>
        <TouchableOpacity style={{ width: 40, height: 40, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
          <FontAwesome name={'arrow-circle-o-up'} size={24} color={'grey'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}