import React from 'react';
import styled from 'styled-components';
import {
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-paper';
import { useFocusEffect } from "@react-navigation/native"

var https = "http://121.196.191.45";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
// const tabBarHeight=85;

function Card({
  canOpen,
  changeDragAction,
  image,
  title,
  author,
  navigation,
  text
}) {
  const [focused,setFocused] = React.useState(false)
  useFocusEffect(
    React.useCallback(() => {
      console.log("整不了")
    }, [])
  )

  return (<Project
    canOpen={canOpen}
    changeDragAction={changeDragAction}
    image={image}
    title={title}
    author={author}
    navigation={navigation}
    text={text}
    focused={focused}
  />)
}

class Project extends React.Component {
  state = {
    cardWidth: new Animated.Value(315),
    cardHeight: new Animated.Value(460),
    titleTop: new Animated.Value(20),
    opacity: new Animated.Value(0),
    textHeight: new Animated.Value(100),
  };


  openCard = () => {
    if (!this.props.canOpen) return;
    this.props.changeDragAction(false); // 关闭卡片手势事件
    // console.log(this.props)
    Animated.spring(this.state.cardWidth, {
      toValue: screenWidth,
      useNativeDriver: false,
    }).start();
    Animated.spring(this.state.cardHeight, {
      toValue: screenHeight,
      useNativeDriver: false,
    }).start();
    Animated.spring(this.state.titleTop, {
      toValue: 40,
      useNativeDriver: false,
    }).start();
    Animated.timing(this.state.opacity, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
    Animated.spring(this.state.textHeight, {
      toValue: 1000,
      useNativeDriver: false,
    }).start();

    StatusBar.setHidden(true);
  };

  closeCard = () => {
    this.props.changeDragAction(true); // 卡片手势事件开启
    Animated.spring(this.state.cardWidth, {
      toValue: 315,
      useNativeDriver: false,
    }).start();
    Animated.spring(this.state.cardHeight, {
      toValue: 460,
      useNativeDriver: false,
    }).start();
    Animated.spring(this.state.titleTop, {
      toValue: 20,
      useNativeDriver: false,
    }).start();
    Animated.timing(this.state.opacity, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
    Animated.spring(this.state.textHeight, {
      toValue: 100,
      useNativeDriver: false,
    }).start();

    StatusBar.setHidden(false);
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.openCard}>
        <AnimatedContainer
          style={{ width: this.state.cardWidth, height: this.state.cardHeight }}>
          <Cover>
            <Image source={{ uri: this.props.image || undefined }} />
            <AnimatedTitle style={{ top: this.state.titleTop }}>
              {this.props.title}
            </AnimatedTitle>
            <Author>by {this.props.author}</Author>
          </Cover>
          
          <AnimatedText style={{ height: this.state.textHeight }}>
            {this.props.text}
          </AnimatedText>
          <Button
            onPress={() => {
              this.props.navigation.navigate('signUp',{title:this.props.title});
            }}
            style={{
              position: 'absolute',
              bottom: '10%',
              width: '90%',
              left: '5%',
              opacity: this.state.opacity,
            }}
            mode="contained">
            去报名
          </Button>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 70,
              right: 20,
            }}
            onPress={this.closeCard}>
            <AnimatedCloseView style={{ opacity: this.state.opacity }}>
              <AntDesign name="closecircleo" size={32} />
            </AnimatedCloseView>
          </TouchableOpacity>
        </AnimatedContainer>
      </TouchableWithoutFeedback>
    );
  }
}

export default Card;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

const AnimatedCloseView = Animated.createAnimatedComponent(CloseView);

const Container = styled.View`
  width: 315px;
  height: 460px;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 290px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 290px;
`;

const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 300px;
`;

const AnimatedTitle = Animated.createAnimatedComponent(Title);

const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Text = styled.Text`
  font-size: 17px;
  margin: 20px;
  line-height: 20px;
  color: #3c4560;
`;

const AnimatedText = Animated.createAnimatedComponent(Text);
