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
  Alert
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

var URL = "http://192.168.50.91:3000/users/address/list/add";

export default class App extends Component {
  constructor(props) {
    super(props);
    const {navigation,route} = this.props;
    let username = route.params.username;
    let usericon = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=179057337,2765188365&fm=26&gp=0.jpg'
    this.state = {
      username,
      usericon,
      shopname:"",
      telephone:"",
      dizhi:""
    };
  }

  _onClickAdd=()=> {
    var navigation = this.props.navigation;
    fetch(URL, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        usericon: this.state.usericon,
        shopname: this.state.shopname,
        telephone: this.state.telephone,
        dizhi: this.state.dizhi
      })
    })
    .then(function (res) {
      return res.json();
  }).then(function (json) {
      if (json.code == 200) {
          Alert.alert("添加成功")
          navigation.goBack("地址");
      } 
  })
  }  
  
    render() {
      const { navigation } = this.props;
      return (
          <View style={styles.container}>
            <View style={{height:45,
            backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:0.5,
            borderBottomColor:"#000",}}>
        <View style={{flexDirection:'row',justifyContent:"space-between",width:"90%"}}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}>
          <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
          <Text style={{fontSize:18,
            textAlign: 'center',
            textAlignVertical: 'center',}}>编辑</Text>
          <TouchableOpacity onPress={() => {this._onClickAdd();}}>
          <AntDesign name={'check'} size={25} color={'#000'} /></TouchableOpacity>
      </View>
      </View>
            <View style={styles.contant}>
                <View style={styles.box}>
                    <TextInput 
                    placeholder="请输入名字..." 
                    style={styles.first}
                    onChangeText={(text)=>{
                      this.setState({shopname:text});
                    }}></TextInput>
                    <TextInput 
                    placeholder="请输入联系方式..." 
                    keyboardType={'numeric'} 
                    style={styles.second}
                    onChangeText={(text)=>{
                      this.setState({telephone:text});
                    }}></TextInput>
                    <TextInput 
                    placeholder="请输入地址..." 
                    multiline={true} 
                    style={styles.third}
                    onChangeText={(text)=>{
                      this.setState({dizhi:text});
                    }}></TextInput>
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