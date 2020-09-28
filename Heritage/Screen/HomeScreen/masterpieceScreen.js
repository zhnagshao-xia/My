import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Turn from '../../turn'
export default function masterpieceScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        backgroundColor: "#dfd7ca",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: "#000"
      }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={{ right: 150 }}>
          <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
        <Text style={{
          fontSize: 18,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>匠心力作</Text>
        {/* <Text style={{bottom:28}}>12</Text> */}
      </View>

      <Turn />

      {/* <View style={{
        backgroundColor: "#dfd7ca",flexDirection:'row'}}>
          <TouchableOpacity style={{left:10,bottom:15}}>
          <FontAwesome name={'angle-left'} size={25} color={'#000'} />
        </TouchableOpacity>
        <TouchableOpacity style={{left:380,bottom:15}}>
          <FontAwesome name={'angle-right'} size={25} color={'#000'} />
        </TouchableOpacity>
        </View> */}
    </View>
  );
}