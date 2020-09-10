import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  FlatList
} from 'react-native';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function representativework({navigation}) {
    return (
      <View style={{width:'100%',height:'100%',alignItems:'center'}}>
      <View style={styles.works1}>
        <ImageBackground style={styles.works1pic}
        source={require('../../Image/HomeScreen/pin.png')}>
          <View style={{width:'100%',height:35,backgroundColor:'rgba(0,0,0,0.5)'}}>
            <View style={{width:'100%',height:'50%',justifyContent:'center'}}>
              <Text style={{fontSize:13,color:'#c9aa74'}}>鄞州竹编</Text>
            </View>
            <View style={{width:'100%',height:'50%',flexDirection:'row-reverse'}}>
              <Text style={{fontSize:13,color:'#c9aa74'}}>------锦绣竹编瓶</Text>
            </View>
          </View>
        </ImageBackground>
        <ImageBackground style={styles.works2pic}
        source={require('../../Image/HomeScreen/mao.png')}>
          <View style={{width:'100%',height:35,backgroundColor:'rgba(0,0,0,0.5)'}}>
            <View style={{width:'100%',height:'50%',justifyContent:'center'}}>
              <Text style={{fontSize:13,color:'#c9aa74'}}>鄞州竹编</Text>
            </View>
            <View style={{width:'100%',height:'50%',flexDirection:'row-reverse'}}>
              <Text style={{fontSize:13,color:'#c9aa74'}}>------猫头鹰</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{width:370,height:40,marginTop:20,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
        <View style={{width:100,height:2,backgroundColor:'grey'}}></View>
        <Text style={{fontSize:13,color:'black'}}>没有更多作品了</Text>
        <View style={{width:100,height:2,backgroundColor:'grey'}}></View>
      </View>
    </View>
      );
}

const styles = StyleSheet.create({
 
  works1:{
    width:370,
    height:230,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  works1pic:{
    width:170,
    height:210,
    // backgroundColor:'skyblue',
    marginRight:25,
    flexDirection:'column-reverse',
    marginTop:20
  },
  works2pic:{
    width:170,
    height:210,
    // backgroundColor:'skyblue',
    flexDirection:'column-reverse',
    marginTop:20
  },
  
});