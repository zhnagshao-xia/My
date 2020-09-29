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

var http="http://192.168.50.91:3000";
var URL = http+"/users/address/list";

export default class addressScreen extends Component {
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
          docs:json.docs[0].address,
        })
      })
      .catch((error)=>console.error(error))
      .finally(()=>{
        this.setState({isLonding:false});
      })
  }  
  render() {
    const { navigation } = this.props;
    const data = this.state.docs;
      return (
          <View style={styles.container}>
            <View style={{
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 0.5,
          borderBottomColor: "#000",
          backgroundColor:"#fff",
          flexDirection: 'row',
          justifyContent: "space-between",
        }}>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            style={{
              width: 50,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}>
          <FontAwesome name={'angle-left'} size={25} color={'#000'} />
          </TouchableOpacity>
          <Text style={{fontSize:18,
            textAlign: 'center',
            textAlignVertical: 'center',}}>地址管理</Text>
          <TouchableOpacity
          onPress={() => navigation.navigate('编辑',{username:this.state.username})}
          style={{
            width: 50,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <AntDesign name={'plus'} size={25} color={'#000'} /></TouchableOpacity>
      </View>
            <View > 
            <FlatList
            data = {data}
            renderItem = {({item})=>
          <View style = {styles.one}>
              <View style={styles.headphoto}>
                <Image style={{width:'100%',height:'100%',borderRadius:50}} source={{uri:item.shopicon}}></Image>
              </View>
              <View style={styles.massage}>
                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                  <Text style={styles.key}>{item.shopname}</Text>
                  <Text style={styles.number}>{item.telephone}</Text>
                </View>
                <Text style={{marginTop:8}}>{item.dizhi}</Text>
              </View>
              <View style={styles.edit}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('修改',{shopname:item.shopname,telephone:item.telephone,dizhi:item.dizhi})}
                style={{width:50,height:50,justifyContent:'center'}}>
                  <Text style={{fontSize:15}}>编辑</Text>
                </TouchableOpacity>
              </View>
          </View>
            }
          />
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
    add:{
      width:30,
      height:30,
      backgroundColor:'red',
      marginLeft:140
    },
    one:{
      width:'100%',
      height:90,
      flexDirection:'row',
      backgroundColor:'#fff',
      alignItems:'center',
      borderColor:'black',
      borderBottomWidth:0.5
    },
    headphoto:{
      width:50,
      height:50,
      marginLeft:15,
      borderRadius:50,
    },
    massage:{ 
      width:'65%',
      height:60,
      paddingHorizontal:10
    },
    edit:{
      width:60,
      height:60,
      borderColor:'#000',
      borderLeftWidth:0.7,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:10
    },
    key:{
      fontSize:15,
      marginRight:5
    }
  
  })