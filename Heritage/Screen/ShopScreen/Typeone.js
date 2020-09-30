import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  Animated,
  Easing,
  Path,
  Svg,
  G,
  getPanelWidth
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AnimatedTabs from "react-native-animated-tabs";
import FontAwesome from 'react-native-vector-icons/FontAwesome'



// export default class App extends Component {
//   constructor () {
//     super()
//     this.spinValue = new Animated.Value(0)
//   }
//   componentDidMount () {
//     this.spin()
//   }
//   spin () {
//     this.spinValue.setValue(0)
//     Animated.timing(
//       this.spinValue,
//       {
//         toValue: 1,
//         duration: 4000,
//         easing: Easing.ease
//       }
//     ).start(() => this.spin()) // 一轮动画完成后的回调，这里传spin可以形成无限动画
//   }
//     render() {
//         const { navigation } = this.props;
//         const spin = this.spinValue.interpolate({
//           inputRange: [1, 9],
//           outputRange: ['0deg', '360deg']
//         })
//         return (
//           <View style={{flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center'}}>
//           <Animated.Image
//             style={{
//               width: 227,
//               height: 200,
//               transform: [{rotate: spin}] }}
//               source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
//           />
//         </View>
//         );
//     }
// }
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.animatedValue = new Animated.Value(0); // 渐隐动画初始值，默认为0，透明
// }
// animation(){
//   setInterval(()=>{
//   this.animatedValue.setValue(0);
//       Animated.timing(
//           this.animatedValue,
//           {
//               toValue: 1,
//               duration: 2000,
//               easing: Easing.linear
//           }
//       ).start();
//     },2000)
//         }

//   render(){

//   const textSize = this.animatedValue.interpolate({
//       inputRange: [0, 0.3, 1],
//       outputRange: [0, 300, 0]
// });

//     return(
//       <View>
//       <Animated.Text
//       style={{
//         marginLeft: textSize,
//         marginTop: 10,
//         color: 'green'}} >
//           {
//               this.animation()
//           }
//       Animated Text!
//   </Animated.Text>
//   </View>
//     )
//   }
// }
// export default class App extends Component {

//   render(){

//     return(
// <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite"  style={{ textAlign: 'center' }}>❤️</Animatable.Text>

//     )
//   }
// }
export default class LikeBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      like: 100,
      liked: 'null',
    };
  }
  islike = () => {
    let liked = this.state.liked;
    if (liked) {
      if (liked === 'like') {
        this.setState({ liked: null })
        this.setState({ like: this.state.like - 1 });
      }
      else {
        this.setState({ liked: 'like' });
        this.setState({ like: this.state.like + 1, });

      }
    }
    else {
      this.setState({
        like: this.state.like + 1,
      });
      this.setState({ liked: 'like' });
    }
  };
  render() {
    return (
      <div style={{ width: 60, float: "left" }}>
        <FontAwesome onClick={this.islike} name={'like'} theme={this.state.liked === 'like' ? 'filled' : ''} />{this.state.like}
      </div>
    );
  }
}

