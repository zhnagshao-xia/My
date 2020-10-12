import React ,{Component}from 'react';
import {StyleSheet, Text, View, TouchableOpacity,AsyncStorage, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class outScreen extends Component{
    render(){
        const { navigation } = this.props;
  return (
      <ScrollView>
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
          }}>关于我们</Text>
        </View>
      </View>
    <View style={{flex:1,padding:20,flexDirection:"column"}}>
        <Text>&#12288;&#12288;非物质文化遗产是人们世代相传、与群众生活密切相关的各种传统文化表现形式和文化空间。为推动非物质文化遗产的活态传承，促进非物质文化遗产的创新性发展，我们开发了一个基于传统文化的学习平台——“非遗＋”APP。</Text>
        <Text>&#12288;&#12288;APP名称为“非遗＋”，意为非遗文化与现代创新相结合，旨在通过和合教育的方式体现当代非物质文化遗产的深厚历史文化背景，全面介绍了民间各种传统文化，为各类人群提供体验传统技能的机会。主要针对在校大学生以及青少面群众。在外观方面采用了极简风格，去除冗余、厚重和繁杂的装饰效果。视觉上给人以清新、脱俗的感觉。UI界面干净整齐，使用起来格外简洁，给用户带来了更加良好的操作体验。</Text>
        <Text>&#12288;&#12288;用户可以通过APP这个平台去接受这样一种永恒的非物质文化遗产，去传承“非遗”文化，去创造更大的价值。邂逅非遗，注定是场不一样的相遇。在当今信息化高速发展，互联网无处不在的时代，推动非物质文化遗产的活态传承，促进非物质文化遗产的创新性发展，成为摆在人们面前的一个重要课题。我们希望能通过这样一个平台供各类人群去了解浙江的非物质文化遗产并将其传承下去。重点是对于在校大学生的培养，让更多大学生去了解注重非遗，并将非遗传承下去。与非遗文化有关的志愿者、活动实践模块中，用户可以在实践中体验非遗的深刻内涵，在了解学习的基础上，创造性转化、创新性发展，不断赋予时代内涵、丰富表现形式，体现当代非物质文化遗产的核心含义。</Text>
    </View>
    </ScrollView>
  );
}}