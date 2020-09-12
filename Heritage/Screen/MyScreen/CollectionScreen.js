import React from 'react';
import {View, StyleSheet, Text, Button,
  TouchableOpacity, TextInput, Image, ScrollView, FlatList,
  ImageBackground} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function CollectionScreen({navigation}) {
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
        data={[
          {
            title1: '叶良康',
          },
          {
            title1: '夏雨',
          },
          {
            title1: '叶良康',
            
          },
        ]}
        renderItem={({ item }) =>
        <View style={{width:'100%',height:150,alignItems:'center',backgroundColor:'#fff',flexDirection:'column-reverse',marginBottom:20}}>
            <Image style={{width:'60%',height:'100%'}} source={require('../../Image/MyScreen/background.png')}></Image>
            <View style={{width:'100%',height:30,backgroundColor:'rgba(20,20,20,0.5)',position:'absolute',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15,color:'#fff'}}>{item.title1}</Text>
            </View>
        </View>
        }
      />
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