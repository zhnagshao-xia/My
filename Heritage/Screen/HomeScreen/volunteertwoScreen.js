import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView,FlatList, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Card from '../../Card'

export default function Servicescreen ({navigation}){
  return (
    <View style={styles.container}>
      <View style={{
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 0.5,
          borderBottomColor: "#000",
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
          <Text style={{
            fontSize: 18,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>志愿者</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('记',{username:username})}
            style={{
              width: 50,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Entypo name={'back-in-time'} size={22} color={'#000'} />
          </TouchableOpacity>
        </View>
      <View style={{flex:1,overflow:"hidden"}}>
        <Card />
      </View>
    </View>

    
  );
}



const styles = StyleSheet.create({
    container: {
       flex: 1
    },
    letter_up_1:{
      width:'80%',
      backgroundColor:'#fff',
      top:10,
      left:25
    },
    word:{
      fontSize:14,
      color:'#000',
      letterSpacing:1,
      top:4,
      left:4
    }
  }); 