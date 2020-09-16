import React from 'react';
import { Text,View ,TouchableOpacity} from 'react-native';
import {TribuneTab} from '../jump';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'


export default function homeheritage({navigation}) {
  return (
    <View style={{flex:1}}>
      <TribuneTab/>
      <TouchableOpacity 
      onPress={() => navigation.navigate('publish')}
      activeOpacity={0.8}
      style={{position:'absolute',top:10,right:15}}>
      <Entypo name={'plus'} size={29} color={'grey'} />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('message')}
      activeOpacity={0.8} 
      style={{position:'absolute',top:10,right:55}}>
      <FontAwesome name={'envelope-o'} size={26} color={'grey'} />
      </TouchableOpacity>
    </View>
  );
}
