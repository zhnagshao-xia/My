import * as React from 'react';
import { Button, Text, View, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
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


const Tab = createMaterialBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();


export default function bottom_nav() {
  return (<NavigationContainer independent="true">
    <Tab.Navigator
      activeColor='#945357'
      labelStyle={{ fontSize: 12 }}
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
              <HomeStack.Screen
                name="signUp"
                 options={{
                   title: '填报信息'
                 }}
               component={SignUp} />
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
        }} ></Tab.Screen>
      <Tab.Screen name="讨论" component={TribuneScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'cloud'}
              size={22}
              color={color} />
          ),
        }} ></Tab.Screen>
      <Tab.Screen name="我的" component={MyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'odnoklassniki'}
              size={25}
              color={color} />
          ),
        }} ></Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
  );
}













