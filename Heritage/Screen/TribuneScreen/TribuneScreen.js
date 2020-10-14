import React from 'react';
import { Text,View ,TouchableOpacity} from 'react-native';
import { Badge,WhiteSpace } from '@ant-design/react-native';
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
      <Entypo name={'plus'} size={24} color={'grey'} />
      </TouchableOpacity>
      
      <Badge text={109} dot style={{position:'absolute',top:12,right:45}}>
      <TouchableOpacity
      onPress={() => navigation.navigate('message')}
      activeOpacity={0.8}>
      <FontAwesome name={'envelope-o'} size={20} color={'grey'} />
      </TouchableOpacity>
      </Badge>
      
    </View>
  );
}
