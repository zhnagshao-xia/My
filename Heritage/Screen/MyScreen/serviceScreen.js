import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView,FlatList, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Chat from '../../chat'

export default function Servicescreen ({navigation}){
  return (
    <View style={styles.container}>
      <View style={{
          backgroundColor: "#fff",
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'row',
        }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            style={{
              width: 50,
              position: "absolute",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              left: 0
            }}>
            <FontAwesome name={'angle-left'} size={25} color={'#000'} />
          </TouchableOpacity>
          <View style={{ width: 200 }}>
            <Text style={{
              fontSize: 18,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>客服  </Text>
          </View>
        </View>
      <View style={{flex:1}}>
        <Chat />
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