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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class App extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      const { navigation } = this.props;
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
            textAlignVertical: 'center',}}>编辑</Text>
          <TouchableOpacity>
          <AntDesign name={'check'} size={25} color={'#000'} /></TouchableOpacity>
      </View>
      </View>
            <View style={styles.contant}>
                <View style={styles.box}>
                    <TextInput placeholder="请输入名字..." style={styles.first}></TextInput>
                    <TextInput placeholder="请输入联系方式..." keyboardType={'numeric'} style={styles.second}></TextInput>
                    <TextInput placeholder="请输入地址..." multiline={true} style={styles.third}></TextInput>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
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