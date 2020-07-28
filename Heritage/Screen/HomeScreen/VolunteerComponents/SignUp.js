import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

const SignUp = () => {
  return (
    <View
      style={{
        padding: 20,
      }}>
      <ScrollView>
        <Text>
          1，真实姓名
          <Text
            style={{
              color: '#f00',
            }}>
            *
          </Text>
        </Text>
        <TextInput mode="outlined" label="姓名" />
        <Text>
          2，联系方式
          <Text
            style={{
              color: '#f00',
            }}>
            *
          </Text>
        </Text>
        <TextInput mode="outlined" label="联系方式" />
        <Text>
          3，职业
          <Text
            style={{
              color: '#f00',
            }}>
            *
          </Text>
        </Text>
        <TextInput mode="outlined" label="职业" />
        <Text>
          4，邮箱
          <Text
            style={{
              color: '#f00',
            }}>
            *
          </Text>
        </Text>
        <TextInput mode="outlined" label="邮箱" />
        <Text>5，其他</Text>
        <TextInput />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
          <Button style={{ width: 100 }} mode="contained">取消</Button>
          <Button style={{ width: 100 }} mode="contained">提交</Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
