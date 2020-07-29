import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Button,
  TouchableOpacity, TextInput, Image, ScrollView, FlatList,
  ImageBackground
} from 'react-native';

export default function activityScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.contant}>
          <View style={{ alignItems: 'center', marginBottom: 15 }}>
            <Image style={styles.biaozhi}
              source={require('../../Image/activityScreen/sigh.png')}></Image>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.left}
              source={require('../../Image/activityScreen/left.png')}></Image>
            <ImageBackground style={styles.middle}
              source={require('../../Image/activityScreen/box.png')}>
              <Text style={{ color: 'red', fontSize: 19 }}>热门活动</Text>
            </ImageBackground>
            <Image style={styles.right}
              source={require('../../Image/activityScreen/right.png')}></Image>
          </View>
          <View style={{ width: '80%', top: -50, alignItems: "center" }}>
            <FlatList
              data={[
                { key: '非遗+扶贫' },
                { key: '非遗+文创' },
                { key: '' },
                { key: '' },
                { key: '' },
                { key: '' },

              ]}
              renderItem={({ item }) =>
                <TouchableOpacity style={styles.one}>
                  <ImageBackground style={{ 
                    width: '100%',
                   height: '100%', 
                   resizeMode: 'stretch', 
                   alignItems: 'center',
                    justifyContent: 'center' }}
                    source={require('../../Image/activityScreen/mark.jpg')}>
                    <View style={{ 
                      backgroundColor: 'rgba(198,164,108,0.7)', 
                      height: '50%', 
                      width: '100%', 
                      resizeMode: 'stretch', 
                      alignItems: 'center', 
                      justifyContent: 'center' }}>
                      <Text style={styles.demol}>{item.key}</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
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
    backgroundColor: '#fff',
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
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  },
  box: {
    width: 50,
    height: 50,
    margin: 20,
  },
  left: {
    width: 90,
    height: 90,
    resizeMode: 'stretch',
    marginTop: 20
  },
  right: {
    width: 90,
    height: 90,
    resizeMode: 'stretch',
    marginTop: 20
  },
  middle: {
    resizeMode: 'stretch',
    width: 180,
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
    fontSize: 18,
    color: '#fff',
    opacity: 1.0,
    zIndex: 100,

  }
})