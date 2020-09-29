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
          style={{
            width: 50,
            position: "absolute",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            left: 0
          }}>
          <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
        <View style={{ width: 200 }}>
          <Text style={{
            fontSize: 18,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>匠心力作</Text>
        </View>
      </View>
      <Turn />
    </View>
  );
}