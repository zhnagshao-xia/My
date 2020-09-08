import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  FlatList
} from 'react-native';
import { Tabs } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Heritage from './Heritage'
export default function homeinherit() {
  return (
    <View style={{ flex: 1 }}>
            <Heritage />
          </View>
  );
}