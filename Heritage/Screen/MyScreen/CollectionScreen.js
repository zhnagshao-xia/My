import React from 'react';
import {View, StyleSheet, Text, Button,
  TouchableOpacity, TextInput, Image, ScrollView, FlatList,
  ImageBackground} from 'react-native';
export default function CollectionScreen() {
  return (
    <View style={styles.container}>
        <ScrollView>
          <View style={styles.contant}>
              <View style={{width:'100%',height:150,alignItems:'center',backgroundColor:'#fff',flexDirection:'column-reverse'}}>
                  <Image style={{width:'60%',height:'100%'}} source={require('../../Image/MyScreen/background.png')}></Image>
                  <View style={{width:'100%',height:30,backgroundColor:'rgba(20,20,20,0.5)',position:'absolute',alignItems:'center',justifyContent:'center'}}>
                      <Text style={{fontSize:15,color:'#fff'}}>越窑青瓷烧制技艺</Text>
                  </View>
              </View>
              <View style={{width:'100%',height:150,marginTop:15,alignItems:'center',backgroundColor:'#fff',flexDirection:'column-reverse'}}>
                  <Image style={{width:'60%',height:'100%'}} source={require('../../Image/MyScreen/background.png')}></Image>
                  <View  style={{width:'100%',height:30,backgroundColor:'rgba(20,20,20,0.5)',position:'absolute',alignItems:'center',justifyContent:'center'}}>
                      <Text style={{fontSize:15,color:'#fff'}}>越窑青瓷烧制技艺</Text>
                  </View>
              </View>
          </View>
        </ScrollView>
      </View>
  );
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