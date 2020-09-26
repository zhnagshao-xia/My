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

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL1 = http + "/shouyiren/personal";

// let data = require('../../data.json');
export default class representativework extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      docs:[],
      daibiaozuo:[],
    }
  }

  componentDidMount() {
    this.fetchData();
  }


  fetchData() {
    fetch(URL1, {//手艺人详情
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.props.name
      })
    })
      .then((response) => response.json())
      .then((json)=>{  
        this.setState({
          docs:json.docs,
          daibiaozuo:json.docs[0].daibiaozuo
        })
        console.log(json.docs)
      })
      .catch((error)=>console.error(error))
      .finally(()=>{
        this.setState({isLonding:false});
      });}

  render() {
    const { navigation } = this.props;
    const data = this.state.daibiaozuo;
    return (
        <FlatList 
        data = {data}
          numColumns ={2} // 一行2个
          renderItem={({item})=>
          <View style={styles.goodsContainer}>
          <ImageBackground source={{uri:https+item.picture}} 
          style={styles.goodsImg}>
              <View style={{width:'100%',height:35,backgroundColor:'rgba(0,0,0,0.5)'}}>
              <View style={{width:'100%',height:'50%',justifyContent:'center'}}>
                <Text style={{fontSize:13,color:'#c9aa74'}}>{item.leibie}</Text>
              </View>
              <View style={{width:'100%',height:'50%',flexDirection:'row-reverse'}}>
                <Text style={{fontSize:13,color:'#c9aa74'}}>------{item.name}</Text>
              </View>
            </View>
          </ImageBackground>
          <View>
          </View>
          {/* <View style={{width:'100%',height:20,backgroundColor:'red'}}></View> */}
        </View>
        }
        >
        </FlatList>
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