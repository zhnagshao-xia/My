import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import DragCard from './VolunteerComponents/DragCard';
import styled from 'styled-components';

const {width, height} = Dimensions.get('window');
export default function volunteerScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0); // 控制主卡展示data的第几条信息
  // 卡片展示的信息
  const data = [
    {
      title: 'One',
      img_uri:require('../../Image/HomeScreen/pic_8.png'),
      detail: 'dfcsduhvesrvh'
    },
    {
      title: 'Two',
      img_uri:require('../../Image/HomeScreen/pic_6.png'),
      detail: '3425677890987654322425675879654'
    },
    {
      title: 'Three',
      img_uri:require('../../Image/HomeScreen/pic_7.png'),
      detail: 'AAWUYUGEUHNJAFHUAWIGAHDBAUSKFH'
    },
  ];
  // 卡片切换时触发次方法切换数据
  let dataLength = data.length;
  function toggleData(index) {
    let shouldIndex = index + 1;
    if (shouldIndex > dataLength - 1) {
      return 0;
    }
    return shouldIndex;
  }
  return (
    <Container>
      <DragCard
        data={data}
        toggleData={toggleData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        navigation={navigation}
      />
    </Container>
  );
}

const Container = styled.View`
  width: ${width}px;
  height: ${height}px;
  position: relative;
`;
