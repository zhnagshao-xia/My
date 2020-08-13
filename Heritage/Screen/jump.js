import * as React from 'react';
import { Button, Text, View, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeScreen from './HomeScreen/HomeScreen'
import MyScreen from './MyScreen/MyScreen'
import ShopScreen from './ShopScreen/ShopScreen'
import TribuneScreen from './TribuneScreen/TribuneScreen'
import CraftsmanshipScreen from './HomeScreen/CraftsmanshipScreen'
import volunteerScreen from './HomeScreen/volunteerScreen'
import activityScreen from './HomeScreen/activityScreen'
import SignUp from './HomeScreen/VolunteerComponents/SignUp'
import ActivityDetails from './HomeScreen/ActivityDetails'
import signScreen from './HomeScreen/signScreen'
import Activityhistory from './HomeScreen/Activityhistory'
import Volunteerhistory from './HomeScreen/Volunteerhistory'
import storyScreen from './HomeScreen/storyScreen'
import masterpieceScreen from './HomeScreen/masterpieceScreen'
import CraftsmanScreen from './HomeScreen/CraftsmanScreen'

import CollectionScreen from './MyScreen/CollectionScreen'
import followScreen from './MyScreen/followScreen'
import fansScreen from './MyScreen/fansScreen'
import orderScreen from './MyScreen/orderScreen'
import addressScreen from './MyScreen/addressScreen'
import authenticationScreen from './MyScreen/authenticationScreen'
import serviceScreen from './MyScreen/serviceScreen'
import outScreen from './MyScreen/outScreen'



const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();


export default function bottom_nav() {
  return (<NavigationContainer independent="true">
    <Tab.Navigator
      activeColor='#945357'
      labelStyle={{ fontSize: 2 }}
      barStyle={{ backgroundColor: "#fff" }}>
      <Tab.Screen name="首页"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'home'}
              size={28}
              color={color} />
          ),
        }} >
           {() => (
            <SettingsStack.Navigator >
              <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
              <HomeStack.Screen name="传承志" component={CraftsmanshipScreen} />
              <HomeStack.Screen name="志愿者" component={volunteerScreen} />
              <HomeStack.Screen name="活动" component={activityScreen} />
              <HomeStack.Screen name="详情" component={ActivityDetails} />
              <HomeStack.Screen name="报名表" component={signScreen} />
              <HomeStack.Screen name="记录" component={Activityhistory} />
              <HomeStack.Screen name="记" component={Volunteerhistory} />
              <HomeStack.Screen name="故事" component={storyScreen} />
              <HomeStack.Screen name="匠心力作" component={masterpieceScreen} />
              <HomeStack.Screen name="signUp" options={{title: '填报信息'}} component={SignUp} />
              <HomeStack.Screen name="手艺人" component={CraftsmanScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
      <Tab.Screen name="集市" component={ShopScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'credit-card'}
              size={23}
              color={color} />
          ),
        }} >

        </Tab.Screen>
      <Tab.Screen name="讨论" component={TribuneScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'cloud'}
              size={22}
              color={color} />
          ),
        }} ></Tab.Screen>
      <Tab.Screen name="我的" 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'odnoklassniki'}
              size={25}
              color={color} />
          ),
        }} >
          {() => (
            <SettingsStack.Navigator>
              <HomeStack.Screen name="我的" component={MyScreen} options={{headerShown:false}} />
              <HomeStack.Screen name="收藏" component={CollectionScreen} />
              <HomeStack.Screen name="关注" component={followScreen} />
              <HomeStack.Screen name="粉丝" component={fansScreen} />
              <HomeStack.Screen name="订单" component={orderScreen} />
              <HomeStack.Screen name="地址" component={addressScreen} />
              <HomeStack.Screen name="认证" component={authenticationScreen} />
              <HomeStack.Screen name="客服" component={serviceScreen} />
              <HomeStack.Screen name="设置" component={outScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
  );
}













