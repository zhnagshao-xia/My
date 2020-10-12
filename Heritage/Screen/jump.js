import * as React from 'react';
import {Animated,Easing,Button, Text, View, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';

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
import Personalinformation from './HomeScreen/personalinformation'
import Representativework from './HomeScreen/representativework'
import FollowScreen from './HomeScreen/FollowScreen'
import FansScreen from './HomeScreen/FansScreen'
import heritagelist from './HomeScreen/heritagelist'
import heritageDetails from './HomeScreen/heritageDetails'
import Heritagefenlei from './HomeScreen/Heritagefenlei'
import Heritagetwo from "./HomeScreen/Heritagetwo"

import Shopcart from './ShopScreen/Shopcart'
import Shopclassify from './ShopScreen/Shopclassify'
import Shopproductdetail from './ShopScreen/Shopproductdetail'
import Confirm_order from './ShopScreen/Confirm_order'
import Reviewscreen from './ShopScreen/Reviewscreen'
import Shopclassifymore from './ShopScreen/Shopclassifymore'
import Shoplist from './ShopScreen/Shoplist'
import Buynow from './ShopScreen/buynow'
import Searchlist from './ShopScreen/Searchlist'

import Tribunefollow from './TribuneScreen/Tribunefollow'
import Tribunerecommend from './TribuneScreen/Tribunerecommend'
import Tribunenewest from './TribuneScreen/Tribunenewest'
import message from './TribuneScreen/message'
import publish from './TribuneScreen/publish'
import mainbody from './TribuneScreen/mainbody'

import CollectionScreen from './MyScreen/CollectionScreen'
import followScreen from './MyScreen/followScreen'
import fansScreen from './MyScreen/fansScreen'
import orderScreen from './MyScreen/orderScreen'
import addressScreen from './MyScreen/addressScreen'
import authenticationScreen from './MyScreen/authenticationScreen'
import serviceScreen from './MyScreen/serviceScreen'
import outScreen from './MyScreen/outScreen'
import editScreen from './MyScreen/editScreen'
import edittwoScreen from './MyScreen/edittwoScreen'
import loginScreen from './MyScreen/loginScreen'
import registerScreen from './MyScreen/registerScreen'
import help from './MyScreen/help'
import about from './MyScreen/about'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const PersonalTabNavigation = createMaterialTopTabNavigator();
const TribuneTabNavigation = createMaterialTopTabNavigator();
const InformationTabNavigation = createMaterialTopTabNavigator();

export function InformationTab({name}) {
  return (
    <InformationTabNavigation.Navigator
      tabBarOptions={{
        //底部横线样式
        activeTintColor: '#945357', //标签栏激活时的染色
        inactiveTintColor: '#434343', //标签非栏激活时的染色
        pressColor: " rgba(148,83,87,0.5)",//android按下时涟漪效果的颜色
        indicatorStyle: {
          height: 2,
          backgroundColor: "#945357",
          width: 67,
          marginLeft: 57,
        },
        tabStyle: {
          height: 55,
        },
        labelStyle: {
          fontSize: 16,
        },
      }}>
      <InformationTabNavigation.Screen 
        name="personalinformation" 
        options={{ title: '个人信息', }}  
      > 
        { () => <Personalinformation name={name} />}
      </InformationTabNavigation.Screen>
      <InformationTabNavigation.Screen 
        name="representativework"
        options={{ title: '代表作', }} 
        >
        { () => <Representativework name={name} />}  
        </InformationTabNavigation.Screen>
    </InformationTabNavigation.Navigator>
  );
}

export function TribuneTab() {
  
  return (
    <TribuneTabNavigation.Navigator
      initialRouteName="Tribunerecommend"
      tabBarOptions={{
        //底部横线样式
        activeTintColor: '#945357', //标签栏激活时的染色
        inactiveTintColor: '#434343', //标签非栏激活时的染色
        pressColor: " rgba(148,83,87,0.5)",//android按下时涟漪效果的颜色
        indicatorStyle: {
          height: 2,
          backgroundColor: "#945357",
          width: 40,
          marginLeft: 15,
        },
        labelStyle: {
          fontSize: 18,
        },
        tabStyle: {
          width: 65,
          height: 45,
        },
      }}>
      <TribuneTabNavigation.Screen name="Tribunefollow" component={Tribunefollow} options={{ title: '关注', }} />
      <TribuneTabNavigation.Screen name="Tribunerecommend" component={Tribunerecommend} options={{ title: '推荐', }} />
      <TribuneTabNavigation.Screen name="Tribunenewest" component={Tribunenewest} options={{ title: '最新' }} />
    </TribuneTabNavigation.Navigator>
  );
}

export function PersonalTab() {
  return (
    <PersonalTabNavigation.Navigator
      initialRouteName="homerecommend"
      swipeEnabled={false}
      tabBarOptions={{
        //底部横线样式
        activeTintColor: '#945357', //标签栏激活时的染色
        inactiveTintColor: '#434343', //标签非栏激活时的染色
        pressColor: " rgba(148,83,87,0.5)",//android按下时涟漪效果的颜色
        indicatorStyle: {
          height: 2,
          backgroundColor: "#945357",
          width: 40,
          marginLeft: 40,
        },
        tabStyle: {
          height: 45,
        },
        labelStyle: {
          fontSize: 18,
        },
      }}>
      <PersonalTabNavigation.Screen name="homerecommend" component={homerecommend} options={{ title: '推荐' }} />
      <PersonalTabNavigation.Screen name="homeinherit" component={homeinherit} options={{ title: '传承', }} />
      <PersonalTabNavigation.Screen name="homeheritage" component={homeheritage} options={{ title: '非遗' }} />
    </PersonalTabNavigation.Navigator>
  );
}


// constructor(props) {
//   super(props);
//   this.state = {
//     progress: new Animated.Value(0),
//   };
// };

// _componentDidMount() {
//   Animated.timing(this.state.progress, {
//     toValue: 1,
//     duration: 2000,
//     easing: Easing.linear,
//   }).start();
// };

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
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="bottom_nav" component={bottom_nav}  options={{headerShown:false}}/>
        <Stack.Screen name="homerecommend" component={homerecommend} />
        <Stack.Screen name="homeinherit" component={homeinherit} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        
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
        <Stack.Screen name="personalinformation" component={Personalinformation} />
        <Stack.Screen name="representativework" component={Representativework} />
        <Stack.Screen name="手艺人关注" component={FollowScreen}/>
        <Stack.Screen name="手艺人粉丝" component={FansScreen}/>
        <Stack.Screen name="heritagelist" component={heritagelist}/>
        <Stack.Screen name="heritageDetails" component={heritageDetails}/>
        <Stack.Screen name="Heritagefenlei" component={Heritagefenlei}/>
        <Stack.Screen name="Heritagetwo" component={Heritagetwo}/>

      <Stack.Screen name="集市" component={ShopScreen} />
      <Stack.Screen name="商城购物车" component={Shopcart} />
      <Stack.Screen name="商城分类页面" component={Shopclassify} />
      <Stack.Screen name="商品详情页面" component={Shopproductdetail} />
      <Stack.Screen name="确认订单" component={Confirm_order} />
      <Stack.Screen name="评价商品页面" component={Reviewscreen} />
      <Stack.Screen name="Shopclassifymore" component={Shopclassifymore}/>
      <Stack.Screen name="Shoplist" component={Shoplist}/>
      <Stack.Screen name="Buynow" component={Buynow}/>
      <Stack.Screen name="Searchlist" component={Searchlist}/>

      <Stack.Screen name="讨论" component={TribuneScreen} />
      <Stack.Screen name="Tribunefollow" component={Tribunefollow} />
      <Stack.Screen name="Tribunerecommend" component={Tribunerecommend} />
      <Stack.Screen name="Tribunenewest" component={Tribunenewest} />
      <Stack.Screen name="message" component={message} />
      <Stack.Screen name="publish" component={publish} />
      <Stack.Screen name="mainbody" component={mainbody} />

      <Stack.Screen name="我的" component={MyScreen} />
      <Stack.Screen name="收藏" component={CollectionScreen} />
      <Stack.Screen name="关注" component={followScreen} />
      <Stack.Screen name="粉丝" component={fansScreen} />
      <Stack.Screen name="订单" component={orderScreen} />
      <Stack.Screen name="地址" component={addressScreen} />
      <Stack.Screen name="认证" component={authenticationScreen} />
      <Stack.Screen name="客服" component={serviceScreen} />
      <Stack.Screen name="设置" component={outScreen} />
      <Stack.Screen name="编辑" component={editScreen} />
      <Stack.Screen name="修改" component={edittwoScreen} />
      <Stack.Screen name="登录" component={loginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="注册" component={registerScreen} options={{ headerShown: false }} />
      <Stack.Screen name="help" component={help} />
      <Stack.Screen name="about" component={about} />
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
