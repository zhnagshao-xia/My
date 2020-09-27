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

// let data = require('../../data.json');
export default class representativework extends Component {
  render() {
    return (
        <FlatList 
        data = {[
          {},
        {},
        {},
        {}
        ]}
          numColumns ={2} // 一行2个
          renderItem={({item})=><GoodsList url={{}}/>}
        >
        </FlatList>
    )
  }
}
class GoodsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.goodsContainer}>
        <ImageBackground source={require('../../Image/HomeScreen/mao.png')} 
        style={styles.goodsImg}>
            <View style={{width:'100%',height:35,backgroundColor:'rgba(0,0,0,0.5)'}}>
            <View style={{width:'100%',height:'50%',justifyContent:'center'}}>
              <Text style={{fontSize:13,color:'#c9aa74'}}>鄞州竹编</Text>
            </View>
            <View style={{width:'100%',height:'50%',flexDirection:'row-reverse'}}>
              <Text style={{fontSize:13,color:'#c9aa74'}}>------猫头鹰</Text>
            </View>
          </View>
        </ImageBackground>
        <View>
        </View>
        {/* <View style={{width:'100%',height:20,backgroundColor:'red'}}></View> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
 
  },
  goodsContainer: {
    flex:1, // 空间平均分布
    alignItems: 'center',
    // backgroundColor:'red'
  },
  goodsImg: {
    width:170,
    height:210,
    // backgroundColor:'skyblue',
    flexDirection:'column-reverse',
    marginTop:20
  },
  goodsPrice: {
    color: '#f00'
  }
})