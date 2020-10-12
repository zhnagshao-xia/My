import React ,{Component}from 'react';
import {StyleSheet, Text, View, TouchableOpacity,AsyncStorage, Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class outScreen extends Component{
    render(){
        const { navigation } = this.props;
  return (
      <View>
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
          }}>帮助</Text>
        </View>
      </View>
    <View style={{flex:1,padding:20,flexDirection:"column"}}>
        <Text>&#12288;&#12288;如您在本平台使用过程中，遇到任何问题，或对我们有任何意见建议，都可以通过以下方式和我们进行联系：</Text>
        <Text>&#12288;&#12288;QQ：499200951</Text>
        <Text>&#12288;&#12288;微信：qwerty-123456</Text>
        <Text>&#12288;&#12288;电话：0571-87426509  0571-35807422</Text>
        <Text>&#12288;&#12288;邮箱：499200951@qq.com</Text>
        <Text>&#12288;&#12288;传真：65653456</Text>
    </View>
    </View>
  );
}}