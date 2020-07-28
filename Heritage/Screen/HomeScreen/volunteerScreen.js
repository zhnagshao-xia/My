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
      // img_uri:
      //   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2747477288,1454412439&fm=26&gp=0.jpg',
      detail: '!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*&^%$#$%^&*(*&^%$%^&*()(*&^%$#@!@#$%^&*YTFV!@#$^&*(!@(@&%@$!%!^&*@())(*&'
    },
    {
      title: 'Two',
      img_uri:require('../../Image/HomeScreen/pic_6.png'),
      // img_uri:
      //   'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3315881847,431979147&fm=26&gp=0.jpg',
      detail: '3425677890987654322425675879654'
    },
    {
      title: 'Three',
      img_uri:require('../../Image/HomeScreen/pic_7.png'),
      // img_uri:
      //   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3438412554,1644478639&fm=26&gp=0.jpg',
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
