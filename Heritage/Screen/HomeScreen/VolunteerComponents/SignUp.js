import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class App extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      const { navigation } = this.props;
      return (
        <View>
          <View style={{
            height:45,
            alignItems:"center",
            justifyContent:"center",
            flexDirection:'row',
            borderBottomWidth:0.5,
            borderBottomColor:"#000",}}>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            style={{right:130}}>
              <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
              <Text style={{fontSize:18,
                textAlign: 'center',
                textAlignVertical: 'center',}}>报名表</Text>
          </View>
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground 
                style={{width:'100%',
                marginTop:30,
                height:'100%',
                flexDirection:'row',
                borderColor:'#c40018',
                borderRightWidth:3,
                borderLeftWidth:3}} 
                source={require('../../../Image/SignUp/under.png')}>
                    <TouchableOpacity style={{width:40,height:80,alignItems:'center',justifyContent:'center',marginTop:350,marginLeft:55}}>
                        <ImageBackground style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center',resizeMode:'stretch'}} source={require('../../../Image/SignUp/submit.png')}>
                            <Text style={{fontSize:15,color:'#fff'}}>提</Text>
                            <Text style={{fontSize:15,color:'#fff'}}>交</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <View style={{width:30,height:250,marginLeft:92,marginTop:30}}>
                        <View style={{width:30,height:70,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:15,color:'black'}}>邮</Text>
                            <Text style={{fontSize:15,color:'black'}}>箱</Text>
                            <Text style={{fontSize:15,color:'red'}}>*</Text>
                        </View>
                        <TextInput multiline={true}  style={{width:30,height:180,backgroundColor:'#bfbfbf',textAlignVertical: 'top',padding:10}}></TextInput>
                    </View>
                    <View style={{width:30,height:250,marginLeft:12,marginTop:30}}>
                        <View style={{width:30,height:70,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:15,color:'black'}}>电</Text>
                            <Text style={{fontSize:15,color:'black'}}>话</Text>
                            <Text style={{fontSize:15,color:'red'}}>*</Text>
                        </View>
                        <TextInput multiline={true} style={{width:30,height:180,backgroundColor:'#bfbfbf',textAlignVertical: 'top',padding:10}}></TextInput>
                    </View>
                    <View style={{width:30,height:250,marginLeft:12,marginTop:30}}>
                        <View style={{width:30,height:70,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:15,color:'black'}}>姓</Text>
                            <Text style={{fontSize:15,color:'black'}}>名</Text>
                            <Text style={{fontSize:15,color:'red'}}>*</Text>
                        </View>
                        <TextInput multiline={true} style={{width:30,height:180,backgroundColor:'#bfbfbf',textAlignVertical: 'top',padding:10}}></TextInput>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.bottom}>
                <Image style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}} source={require('../../../Image/SignUp/spindrift.png')}></Image>
            </View>
        </View>
        </View>
        );
    }
  }
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:660,
        alignItems:'center',
        backgroundColor:'#f2f2f2',
        flexDirection:'column-reverse',
    },
    header:{
        width:'90%',
        height:'100%',
        alignItems:'center',
    },
    bottom:{
        width:"100%",
        height:150,
        position:'absolute',
        bottom:25
    }
    
})