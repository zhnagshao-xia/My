import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components';
import {Button} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const transXY = new Animated.ValueXY({x: 0, y: 0}); // 主卡的位置
const RectWH = new Animated.ValueXY({x: width * 0.8, y: height * 0.6}); // 主卡的大小
const otherCardTransY = new Animated.Value(40); // 其他两张卡片的位置
const otherCardScale = new Animated.Value(0.9); // 其他两张卡片的大小

// 插值生成第三章卡片的动画值
const interCardTransY = otherCardTransY.interpolate({
  inputRange: [0, 40],
  outputRange: [50, 40],
});
const interCardScale = otherCardScale.interpolate({
  inputRange: [0.9, 1],
  outputRange: [0.8, 0.9],
});
const DragCard = ({
  data,
  toggleData,
  currentIndex,
  setCurrentIndex,
  navigation,
}) => {
  const [cardAction, setCardAction] = useState(true); // 是否可拖拽
  const [ImgDisplay, setImgDisplay] = useState(true); // 图片是否显示
  const [bgc, setBGC] = useState(true); // 容器背景颜色
  useEffect(() => {
    setCardAction(true);
    setImgDisplay(true);
  }, []);
  // 开启手势
  const _PanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: () => cardAction,
    onPanResponderGrant: () => {
      setBGC(x => !x); // 背景颜色切换
      // 第二张， 第三张卡片动画
      Animated.spring(otherCardTransY, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      Animated.spring(otherCardScale, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    },
    onPanResponderMove: Animated.event([null, {dx: transXY.x, dy: transXY.y}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (event, gestureState) => {
      setBGC(x => !x); // 背景颜色切换
      // 卡片扔出
      if (gestureState.dy > 300) {
        Animated.timing(transXY, {
          toValue: {x: 0, y: 800},
          duration: 100,
          useNativeDriver: false,
        }).start(() => {
          setCurrentIndex(index => toggleData(index));
          Animated.timing(transXY, {
            toValue: {x: 0, y: 0},
            duration: 0,
            useNativeDriver: false,
          }).start();
        });
        // 数据切换
      } else {
        Animated.spring(transXY, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      }
      // 第二张， 第三张卡片动画
      Animated.spring(otherCardTransY, {
        toValue: 40,
        useNativeDriver: false,
      }).start();
      Animated.spring(otherCardScale, {
        toValue: 0.9,
        useNativeDriver: false,
      }).start();
    },
  });
  return (
    <Container bgc={bgc}>
      <AnimatedCard
        style={{
          width: RectWH.x,
          height: RectWH.y,
          transform: [{translateY: interCardTransY}, {scale: interCardScale}],
          elevation: 3,
        }}>
        <ShowImage
          source={data[toggleData(currentIndex + 1)].img_uri}
          // source={{
          //   uri: data[toggleData(currentIndex + 1)].img_uri,
          // }}
          resizeMode="stretch"
        />
      </AnimatedCard>
      <AnimatedCard
        style={{
          width: RectWH.x,
          height: RectWH.y,
          transform: [{translateY: otherCardTransY}, {scale: otherCardScale}],
          elevation: 4,
        }}>
        <ShowImage
          display={ImgDisplay}
          source={data[toggleData(currentIndex)].img_uri}
          // source={{
          //   uri: data[toggleData(currentIndex)].img_uri,
          // }}
          resizeMode="stretch"
        />
        <VolunteerInfo>
          <Title>{data[toggleData(currentIndex)].title}</Title>
          <Detail>{data[toggleData(currentIndex)].detail}</Detail>
        </VolunteerInfo>
      </AnimatedCard>
      <AnimatedCard
        {..._PanResponder.panHandlers}
        style={{
          width: RectWH.x,
          height: RectWH.y,
          transform: [{translateX: transXY.x}, {translateY: transXY.y}],
          elevation: 5,
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            Animated.spring(RectWH, {
              toValue: {x: width, y: height},
              useNativeDriver: false,
            }).start();
            setImgDisplay(false);
            setCardAction(false);
          }}>
          <ShowImage
            display={ImgDisplay}
            source={data[currentIndex].img_uri}
            // source={{
            //   uri: data[currentIndex].img_uri,
            // }}
            resizeMode="stretch"
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            Animated.spring(RectWH, {
              toValue: {x: width, y: height},
              useNativeDriver: false,
            }).start();
            setImgDisplay(false);
            setCardAction(false);
          }}>
          <VolunteerInfo>
            <CloseBtn
              onPress={() => {
                Animated.spring(RectWH, {
                  toValue: {x: width * 0.8, y: height * 0.6},
                  useNativeDriver: false,
                }).start();
                setImgDisplay(true);
                setCardAction(true);
              }}
              display={!ImgDisplay}>
              +
            </CloseBtn>
            <Title>{data[currentIndex].title}</Title>
            <Detail>{data[currentIndex].detail}</Detail>
            <Button
              onPress={() => {
                navigation.navigate('signUp');
              }}
              mode="contained"
              style={{
                display: ImgDisplay ? 'none' : 'flex',
                backgroundColor: '#31f',
                marginVertical: 20,
              }}>
              去报名
            </Button>
          </VolunteerInfo>
        </TouchableWithoutFeedback>
      </AnimatedCard>
    </Container>
  );
};

export default DragCard;

const CloseBtn = styled.Text`
  font-weight: bold;
  font-size: 50px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #ccc;
  margin-left: auto;
  margin-top: 40px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  transform: rotate(30deg);
  display: ${props => (props.display ? 'flex' : 'none')};
`;
const Detail = styled.Text`
  color: #999;
  border-radius: 4px;
`;
const Title = styled.Text`
  font-weight: bold;
  text-shadow: 1px 1px 2px #fff;
  font-size: 25px;
`;
const VolunteerInfo = styled.View`
  width: 100%;
  min-height: 37%;
  padding: 2%;
`;
const ShowImage = styled.Image`
  max-width: 100%;
  max-height: 60%;
  min-width: 100%;
  min-height: 60%;
  display: ${props => (props.display ? 'flex' : 'none')};
`;

const Card = styled.View`
  /* width: 80%;
  height: 70%; */
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  /* z-index: ${props => props.zIndex || 0}; */
  overflow: hidden;
`;
const AnimatedCard = Animated.createAnimatedComponent(Card);
const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 90%;
  background-color: ${props => (props.bgc ? '#fff' : '#ccc')};
`;
