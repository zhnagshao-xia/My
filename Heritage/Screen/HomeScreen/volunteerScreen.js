import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { PanResponder, Animated, View, TouchableOpacity, ImageBackground } from "react-native";
import { Appbar } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL1 = http + "/volunteer";
var URL2 = http + "/volunteer/timelong";

export default class VolunteerScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    pan: new Animated.ValueXY(),
    scale: new Animated.Value(0.9),
    translateY: new Animated.Value(44),
    thirdScale: new Animated.Value(0.8),
    thirdTranslateY: new Animated.Value(-50),
    index: 0,
    opacity: new Animated.Value(0),
    isDrag: true,
    docs: [],
    Projects: [],
    sum: 0
  };

  getNextIndex = (index) => {
    var nextIndex = index + 1;
    if (nextIndex > this.state.Projects.length - 1) {
      return 0;
    }
    return nextIndex;
  };

  changeDragAction = (isDrag) => {
    this.setState({
      isDrag,
    });
  };

  UNSAFE_componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => this.state.isDrag,

      onPanResponderGrant: () => {
        Animated.spring(this.state.scale, {
          toValue: 1,
          useNativeDriver: false,
        }).start();
        Animated.spring(this.state.translateY, {
          toValue: 0,
          useNativeDriver: false,
        }).start();

        Animated.spring(this.state.thirdScale, {
          toValue: 0.9,
          useNativeDriver: false,
        }).start();
        Animated.spring(this.state.thirdTranslateY, {
          toValue: 44,
          useNativeDriver: false,
        }).start();

        Animated.timing(this.state.opacity, {
          toValue: 1,
          useNativeDriver: false,
        }).start();
      },

      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y },
      ], { useNativeDriver: false }),
      onPanResponderRelease: () => {
        const positionY = this.state.pan.y.__getValue();
        const positionX = this.state.pan.x.__getValue();
        // console.log(positionY+","+positionX)
        Animated.timing(this.state.opacity, { toValue: 0, useNativeDriver: false }).start();

        // console.log(positionY);
        if (positionY > -400) {
          Animated.timing(this.state.pan, {
            toValue: { x: positionX * 10, y: positionY * 10 },
            useNativeDriver: false,
          }).start(() => {
            this.state.pan.setValue({ x: 0, y: 0 });
            this.state.scale.setValue(0.9);
            this.state.translateY.setValue(44);
            this.state.thirdScale.setValue(0.8);
            this.state.thirdTranslateY.setValue(-50);
            this.setState({ index: this.getNextIndex(this.state.index) });
          });
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 }, useNativeDriver: false
          }).start();

          Animated.spring(this.state.scale, {
            toValue: 0.9,
            useNativeDriver: false,
          }).start();
          Animated.spring(this.state.translateY, {
            toValue: 44,
            useNativeDriver: false,
          }).start();

          Animated.spring(this.state.thirdScale, {
            toValue: 0.8,
            useNativeDriver: false,
          }).start();
          Animated.spring(this.state.thirdTranslateY, {
            toValue: -50,
            useNativeDriver: false,
          }).start();
        }
      },
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(URL1, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          Projects: json.docs,
        });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      });
    fetch(URL2, {//志愿时长
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          sum: json.docs[0].sum,
        })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      })
  }

  render() {
    const { navigation } = this.props;
    const { Projects } = this.state;
    const sum = this.state.sum;
    console.log(sum)
    return (
      <>
        <Appbar.Header
          style={{ height: 45, backgroundColor: '#fff', elevation: 0, borderBottomWidth: 0.5, borderBottomColor: "#000" }}
        >
          <TouchableNativeFeedback onPress={() => navigation.goBack()}
            style={{ width: 50, height: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome name="angle-left" color="#000" size={30} />
          </TouchableNativeFeedback>
          <Appbar.Content
            title="志愿者"
            style={{ justifyContent: "center", alignItems: "center" }}
          ></Appbar.Content>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("记", { sum: sum })}
            style={{ width: 50, height: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name={"back-in-time"} size={25} color={"#000"} />
          </TouchableNativeFeedback>
        </Appbar.Header>
        {Projects && Projects.length != 0 ? (


          <Container  style={{backgroundColor:"red"}}>
            <ImageBackground
            style={{ width: '100%', height: '100%', resizeMode: 'stretch',justifyContent:"center",alignItems:"center" }}
                source={require('../../Image/HomeScreen/volunteer_bg.jpg')}>
            <AnimatedMask style={{ opacity: this.state.opacity }} />
            <Animated.View
              style={{
                transform: [
                  { translateX: this.state.pan.x },
                  { translateY: this.state.pan.y },
                ],
              }}
              {...this._panResponder.panHandlers}
            >
              <Card
                title={Projects[this.state.index].title}
                image={https+Projects[this.state.index].image}
                author={Projects[this.state.index].author}
                text={Projects[this.state.index].text}
                canOpen={true}
                changeDragAction={this.changeDragAction}
                navigation={this.props.navigation}
              />
            </Animated.View>
            <Animated.View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                transform: [
                  { scale: this.state.scale },
                  { translateY: this.state.translateY },
                ],
              }}
            >
              <Card
                title={Projects[this.getNextIndex(this.state.index)].title}
                image={https+Projects[this.getNextIndex(this.state.index)].image}
                author={Projects[this.getNextIndex(this.state.index)].author}
                text={Projects[this.getNextIndex(this.state.index)].text}
              />
            </Animated.View>
            <Animated.View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -3,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                transform: [
                  { scale: this.state.thirdScale },
                  { translateY: this.state.thirdTranslateY },
                ],
              }}
            >
              <Card
                title={Projects[this.getNextIndex(this.state.index + 1)].title}
                image={https+Projects[this.getNextIndex(this.state.index + 1)].image}
                author={Projects[this.getNextIndex(this.state.index + 1)].author}
                text={Projects[this.getNextIndex(this.state.index + 1)].text}
              />
            </Animated.View>
            </ImageBackground>
          </Container>) : (<Text>Loading..</Text>)}
      </>
    );
  }
}

const Mask = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  z-index: -3;
`;

const AnimatedMask = Animated.createAnimatedComponent(Mask);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f0f3f5;
`;

const Text = styled.Text``;
