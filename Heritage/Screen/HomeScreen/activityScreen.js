import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Button,
  TouchableOpacity, TextInput, Image, ScrollView, FlatList,
  ImageBackground
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function activityScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{height:45,
        backgroundColor:"pink",
        alignItems:"center",
        justifyContent:"center"}}>
        <View style={{flexDirection:'row',justifyContent:"space-between",width:"90%"}}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}>
          <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
          <Text style={{fontSize:18,
            textAlign: 'center',
            textAlignVertical: 'center',}}>活动</Text>
          <TouchableOpacity>
          <FontAwesome name={'clock-o'} size={25} color={'#000'} /></TouchableOpacity>
      </View>
      </View>
        <View style={styles.contant}>
          <View style={{ alignItems: 'center', marginBottom: 15 }}>
            <Image style={styles.biaozhi}
              source={require('../../Image/activityScreen/sigh.png')}></Image>
          </View>
          <View style={{ flexDirection: 'row',}}>
            <Image style={styles.left}
              source={require('../../Image/activityScreen/left.png')}></Image>
            <ImageBackground style={styles.middle}
              source={require('../../Image/activityScreen/box.png')}>
              <Text style={{ color: 'red', fontSize: 15 }}>热门活动</Text>
            </ImageBackground>
            <Image style={styles.right}
              source={require('../../Image/activityScreen/right.png')}></Image>
          </View>
          <View style={{ width: '80%', top: -50, alignItems: "center" }}>
            <FlatList
              data={[
                { key: '非遗+扶贫',text:'让非遗传承人走进千家万户' },
                { key: '非遗+文创' },
                { key: '' },
                { key: '' },
                { key: '' },
                { key: '' },

              ]}
              renderItem={({ item }) =>
                <View style={styles.one}>
                  <ImageBackground style={{ 
                    width: '100%',
                   height: '100%', 
                   resizeMode: 'stretch', 
                   alignItems: 'center',
                    justifyContent: 'center' }}
                    source={require('../../Image/activityScreen/mark.jpg')}>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('详情')}
                      style={{ 
                      backgroundColor: 'rgba(198,164,108,0.7)', 
                      height: '50%', 
                      width: '100%', 
                      resizeMode: 'stretch',
                      justifyContent: 'center' }}>
                      <Text style={styles.demol}>{item.key}</Text>
                      <Text style={styles.demo2}>{item.text}</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              }
            />
          </View>
        </View>
      </View>
    )
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: '#568491',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contant: {
    flex: 10,
    alignItems: 'center'
  },
  biaozhi: {
    width: 125,
    height: 125,
    resizeMode: 'stretch',
  },
  left: {
    width: 110,
    height: 90,
    resizeMode: 'stretch',
    marginTop: 20
  },
  right: {
    width: 110,
    height: 90,
    resizeMode: 'stretch',
    marginTop: 20
  },
  middle: {
    resizeMode: 'stretch',
    width: 120,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  one: {
    height: 150,
    width: 300,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  demol: {
    fontSize: 15,
  },
  demo2: {
    fontSize: 13,
    lineHeight:20
  },
})