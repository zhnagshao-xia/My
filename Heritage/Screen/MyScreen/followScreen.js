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
export default function followScreen({navigation}) {
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
          <FlatList
          data = {[
          {key:'张三'},
          {key:'李四'},
          {key:'王二'},
          ]}
          renderItem = {({item})=>
          <View style = {styles.one}>
              <View style={styles.headphoto}>
                  <Image style={{width:'100%',height:'100%',borderRadius:50}} 
                          source={require('../../Image/MyScreen/background.png')}>
                  </Image>
              </View>
              <View style={styles.massage}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={styles.key}>{item.key}</Text>
                  </View>
              </View>
              <View style={styles.like}>
                  <Text style={{fontSize:13}}>取消关注</Text>
              </View>
          </View>
          }
          />
      </View>
    </View>
   );
}
const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#f2f2f2',
  },
  contant:{
  },
  return:{
    width:30,
    height:30,
  //   backgroundColor:'blue',
  },
  one:{
    width:'100%',
    height:90,
    flexDirection:'row',
    backgroundColor:'#fff',
    alignItems:'center',
    borderColor:'black',
    borderBottomWidth:0.5
    // marginTop:20
  },
  key:{
    marginLeft:10

  },
  headphoto:{
    width:60,
    height:60,
    backgroundColor:'blue',
    marginLeft:15,
    borderRadius:50
  },
  massage:{
    width:230,
    height:60,
  //   backgroundColor:'red',
    justifyContent:'center'
  },
  like:{
      width:70,
      height:25,
      // backgroundColor:'skyblue',
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      borderColor:'black',
      borderWidth:1,
      flexDirection:'row'
  }
  
})