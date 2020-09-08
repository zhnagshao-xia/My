import React from 'react';
import {View, StyleSheet, Text, Button,
  TouchableOpacity, TextInput, Image, ScrollView, FlatList,
  ImageBackground} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function CollectionScreen({navigation}) {
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