import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    FlatList, 
    ImageBackground, 
    Image, 
    TouchableOpacity } from 'react-native';
export default function loginScreen() {
    return (
        <View style={styles.container}>
          <ImageBackground source={require('../../Image/loginScreen/background.png')} style={styles.Image}>
            <View style={styles.container_up}>
              <View style={styles.logo}>
                <Image source={require('../../Image/loginScreen/logo.png')} style={styles.logo_image}></Image>
              </View>
            </View>
            <View style={styles.container_down}>
              <View style={styles.log}>
                <Text style={{ fontSize: 16, letterSpacing: 12, color: '#6092a0' }}>登录</Text>
              </View>
              <View style={styles.textinput}>
                <Image style={{ width: 15, height: 15, marginLeft: 10 }} source={require('../../Image/loginScreen/logo.png')}></Image>
                <TextInput placeholderTextColor="#6092a0" style={{ height: 50, width: 250 }} placeholder='请输入用户名...'></TextInput>
              </View>
              <View style={styles.textinput}>
                <Image style={{ width: 15, height: 15, marginLeft: 10 }} source={require('../../Image/loginScreen/logo.png')}></Image>
                <TextInput placeholderTextColor="#6092a0" style={{ height: 50, width: 250 }} placeholder='请输入密码...'></TextInput>
              </View>
              <TouchableOpacity style={styles.logbutton}>
                <Text style={{color:'#fdfdfd'}}>立即登录</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container_bottom}>       
              <TouchableOpacity 
              onPress={() => navigation.navigate('注册')}
              style={{width:'32%'}}><Text style={{color:'#fff'}}>注册账号</Text></TouchableOpacity>
              <TouchableOpacity style={{width:'32%',alignItems:'flex-end'}}><Text style={{color:'#fff'}}>忘记密码</Text></TouchableOpacity>         
            </View>
          </ImageBackground>
        </View>
      );
    }

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    Image: {
      flex: 1,
      resizeMode: "cover",
    },
    container_up: {
      height: '35%',
      alignItems: 'center',
      flexDirection: 'column-reverse'
    },
    logo: {
      width: '50%',
      height: '90%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo_image: {
      width: '70%',
      height: '95%'
    },
    container_down: {
      height: 270,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 60,
      marginHorizontal: 35,
      backgroundColor:'#fff'
    },
    log: {
      height: 50,
      width: '100%',
      alignItems: 'center',
      flexDirection: 'column-reverse'
    },
    textinput: {
      width: '85%',
      height: 30,
      backgroundColor: '#fff',
      marginLeft: 10,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 15,
      borderWidth:1,
      borderColor:'#6092a0'
    },
    logbutton:{
      marginTop:15,
      backgroundColor:'#6092a0',
      width:'85%',
      height:'15%',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20
    },
    container_bottom:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
      marginTop:40
    },
  }); 