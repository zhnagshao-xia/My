import React from 'react';
import { StyleSheet, ScrollView, View, TouchableHighlight } from 'react-native';
import { Text, TextInput, Button, } from 'react-native-paper';


export default function signScreen({navigation}) {
  return (
    <View
      style={{
        padding: 20,
      }}>
      <ScrollView>
        <Text>
          1.真实姓名
          <Text
            style={{
              color: '#f00',
            }}>
            *
          </Text>
        </Text>
        <TextInput mode="outlined" label="姓名" />
        <Text>
          2.联系方式
          <Text
            style={{
              color: '#f00',
            }}>
            *
          </Text>
        </Text>
        <TextInput mode="outlined" label="联系方式" />
        <Text>
          3.职业
          <Text
            style={{
              color: '#f00',
            }}>
            *
          </Text>
        </Text>
        <TextInput mode="outlined" label="职业" />
        <Text>
          4.邮箱
          <Text
            style={{
              color: '#f00',
            }}>
            *
          </Text>
        </Text>
        <TextInput mode="outlined" label="邮箱" />
        <Text>5.其他</Text>
        <TextInput />
        <TouchableHighlight
          onPress={() => navigation.navigate('记录')}
          underlayColor="rgba(86,132,145,0.6)"
          style={{
            marginTop: 30,
            width: 90,
            height: 40,
            backgroundColor: '#6092a0',
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}>
          <Text style={{ color: '#fff', fontSize: 17 }}>提交</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};