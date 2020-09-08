import * as React from 'react';
import { Button, Text, View, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import WelcomeScreen from '../Screen/welcome'
import HomeScreen from './HomeScreen/HomeScreen'
import MyScreen from './MyScreen/MyScreen'
import ShopScreen from './ShopScreen/ShopScreen'
import TribuneScreen from './TribuneScreen/TribuneScreen'

import homerecommend from './HomeScreen/homerecommend'
import homeinherit from './HomeScreen/homeinherit'
import homeheritage from './HomeScreen/homeheritage'
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
import Craftsmandetail from './HomeScreen/Craftsmandetail'

import Shopcart from './ShopScreen/Shopcart'
import Shopclassify from './ShopScreen/Shopclassify'
import Shopproductdetail from './ShopScreen/Shopproductdetail'
import Wood_carving from './ShopScreen/Wood_carving'
import Tree_root_carving from './ShopScreen/Tree_root_carving'
import Bronze_carving from './ShopScreen/Bronze_carving'
import Stone_carving from './ShopScreen/Stone_carving'
import Other_carving from './ShopScreen/Other_carving'

import CollectionScreen from './MyScreen/CollectionScreen'
import followScreen from './MyScreen/followScreen'
import fansScreen from './MyScreen/fansScreen'
import orderScreen from './MyScreen/orderScreen'
import addressScreen from './MyScreen/addressScreen'
import authenticationScreen from './MyScreen/authenticationScreen'
import serviceScreen from './MyScreen/serviceScreen'
import outScreen from './MyScreen/outScreen'
import editScreen from './MyScreen/editScreen'
import loginScreen from './MyScreen/loginScreen'
import registerScreen from './MyScreen/registerScreen'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const PersonalTabNavigation = createMaterialTopTabNavigator();

export function PersonalTab() {
  return (
    <PersonalTabNavigation.Navigator
      tabBarOptions={{
        //底部横线样式
        activeTintColor: '#945357', //标签栏激活时的染色
        pressColor: '#945357',//android按下时涟漪效果的颜色
        indicatorStyle: {
          height: 2,
          backgroundColor: "#945357",
          width: 40,
          marginLeft: 40,
          marginBottom: 5,
        },
        tabStyle: {
          height: 45,
        },
        labelStyle: {
              fontSize: 16, 
          },
      }}>
      <PersonalTabNavigation.Screen name="homerecommend" component={homerecommend} options={{ title: '推荐' }} />
      <PersonalTabNavigation.Screen name="homeinherit" component={homeinherit} options={{ title: '传承', }} />
      <PersonalTabNavigation.Screen name="homeheritage" component={homeheritage} options={{ title: '非遗' }} />
    </PersonalTabNavigation.Navigator>
  );
}

//底部导航栏
 function bottom_nav() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#945357',
      inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="首页"
       component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'home'}
              size={31}
              color={color} />
          ),
        }} >
        </Tab.Screen>
      <Tab.Screen name="集市" component={ShopScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'credit-card'}
              size={25}
              color={color} />
          ),
        }} >
        </Tab.Screen>
      <Tab.Screen name="讨论" component={TribuneScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'cloud'}
              size={26}
              color={color} />
          ),
        }} ></Tab.Screen>
      <Tab.Screen name="我的" 
       component={MyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'odnoklassniki'}
              size={25}
              color={color} />
          ),
        }} >
        </Tab.Screen>
    </Tab.Navigator>
  );
}

// 堆栈导航
function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="bottom_nav" component={bottom_nav}  options={{headerShown:false}}/>
        <Stack.Screen name="homerecommend" component={homerecommend} />
        <Stack.Screen name="homeinherit" component={homeinherit} />
        <Stack.Screen name="homeheritage" component={homeheritage} />
        <Stack.Screen name="传承志" component={CraftsmanshipScreen} />
        <Stack.Screen name="志愿者" component={volunteerScreen} />
        <Stack.Screen name="活动" component={activityScreen} />
        <Stack.Screen name="详情" component={ActivityDetails} />
        <Stack.Screen name="报名表" component={signScreen} />
        <Stack.Screen name="记录" component={Activityhistory} />
        <Stack.Screen name="记" component={Volunteerhistory} />
        <Stack.Screen name="故事" component={storyScreen} />
        <Stack.Screen name="匠心力作" component={masterpieceScreen} />
        <Stack.Screen name="signUp" options={{title: '填报信息'}} component={SignUp} />
        <Stack.Screen name="手艺人" component={CraftsmanScreen} />
        <Stack.Screen name="手艺人详细页面" component={Craftsmandetail} />

        <Stack.Screen name="集市" component={ShopScreen}  />
        <Stack.Screen name="商城购物车" component={Shopcart} />
        <Stack.Screen name="商城分类页面" component={Shopclassify} />
        <Stack.Screen name="商品详情页面" component={Shopproductdetail} />
        <Stack.Screen name="木雕详情页面" component={Wood_carving} />
        <Stack.Screen name="根雕详情页面" component={Tree_root_carving} />
        <Stack.Screen name="铜雕详情页面" component={Bronze_carving} />
        <Stack.Screen name="石雕详情页面" component={Stone_carving} />
        <Stack.Screen name="其他雕刻详情页面" component={Other_carving} />

        <Stack.Screen name="讨论" component={TribuneScreen}  />

        <Stack.Screen name="我的" component={MyScreen}  />
        <Stack.Screen name="收藏" component={CollectionScreen} />
        <Stack.Screen name="关注" component={followScreen} />
        <Stack.Screen name="粉丝" component={fansScreen} />
        <Stack.Screen name="订单" component={orderScreen} />
        <Stack.Screen name="地址" component={addressScreen} />
        <Stack.Screen name="认证" component={authenticationScreen} />
        <Stack.Screen name="客服" component={serviceScreen} />
        <Stack.Screen name="设置" component={outScreen} />
        <Stack.Screen name="编辑" component={editScreen} />
        <Stack.Screen name="登录" component={loginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="注册" component={registerScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
  }
  export default function App() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
