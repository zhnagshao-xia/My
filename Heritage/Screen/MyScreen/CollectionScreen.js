import React, { Component } from 'react';
import {View, StyleSheet, Text, Button,
  TouchableOpacity, TextInput, Image, ScrollView, FlatList,
  ImageBackground} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

var URL = "http://192.168.50.91:3000/users/shoucang/list";

export default class CollectionScreen extends Component{
  constructor(props) {
    super(props);
    const {navigation,route} = this.props;
    let username = route.params.username;
    this.state = {
      username,
      docs: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }
  
  componentDidMount() {//componentDidMount:生命周期
    this.fetchData();
  }
  
  fetchData() {
    fetch(URL, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username
      })
    })
      .then((response) => response.json())
      .then((json)=>{  
        this.setState({
          docs:json.docs[0].shoucang,
        })
      })
      .catch((error)=>console.error(error))
      .finally(()=>{
        this.setState({isLonding:false});
      })
  }

  render(){
    const { navigation } = this.props;
    const data = this.state.docs;
  return (
    <View style={styles.container}>
      <View style={{
            backgroundColor:"#fff",
            height:45,
            alignItems:"center",
            justifyContent:"center",
            flexDirection:'row',
            borderBottomWidth:0.5,
            borderBottomColor:"#000",}}>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            style={{right:155}}>
              <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
              <Text style={{fontSize:18,
                textAlign: 'center',
                textAlignVertical: 'center',}}>收藏</Text>
          </View>
        <ScrollView>
        <FlatList
        data={data}
        renderItem={({ item }) =>
        <View style={{width:'100%',height:150,alignItems:'center',backgroundColor:'#fff',flexDirection:'column-reverse',marginBottom:20}}>
            <Image style={{width:'60%',height:'100%'}} source={{uri:item.zhanshitu}}></Image>
            <View style={{width:'100%',height:30,backgroundColor:'rgba(20,20,20,0.5)',position:'absolute',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15,color:'#fff'}}>{item.xiangmu}</Text>
            </View>
        </View>
        }
      />
        </ScrollView>
      </View>
  )};
}
const styles = StyleSheet.create({ 
  container:{
      flex:1,
  },
  contant:{
      width:'100%',
      backgroundColor:'#f2f2f2',

  },
}); 