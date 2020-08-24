import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

export default class App extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
          <View style={styles.container}>
            <View style={styles.contant}>
                <View style={styles.box}>
                    <TextInput placeholder="请输入名字..." style={styles.first}></TextInput>
                    <TextInput placeholder="请输入联系方式..." keyboardType={'numeric'} style={styles.second}></TextInput>
                    <TextInput placeholder="请输入地址..." multiline={true} style={styles.third}></TextInput>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
            <View style={{width:80,
                height:40,
                borderRadius:20,
                backgroundColor:'#945357',
                marginTop:40,
                justifyContent:'center',
                alignItems:'center'}}>
                <Text>保存</Text>
            </View>
            </View>
          </View>
         );
    }
  }
  const styles = StyleSheet.create({
    container:{
      width:'100%',
      height:'100%',
      backgroundColor:'#f2f2f2',
    },
    contant:{
    },
    add:{
      width:30,
      height:30,
      backgroundColor:'red',
      marginLeft:180,
    },
    box:{
        width:'100%',
        height:250,
        backgroundColor:'#fff',
    },
    first:{
        width:'100%',
        height:'25%',
        borderBottomWidth:0.5,
        borderColor:'#000',
        padding:10,
        fontSize:15,
    },
    second:{
        width:'100%',
        height:'25%',
        borderBottomWidth:0.5,
        borderColor:'#000',
        padding:10,
        fontSize:15
    },
    third:{
        width:'100%',
        height:'50%',
        // borderBottomWidth:0.5,
        // borderColor:'#000',
        padding:10,
        textAlignVertical: 'top',
        fontSize:15,
    }
  })