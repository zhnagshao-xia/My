import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Image,
    Animated,
  Easing
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
export default class App extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0); // 渐隐动画初始值，默认为0，透明
}
  render(){
    this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start();
  const textSize = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [18, 32, 18]
});
    return(
      <Animated.Text
      style={{
        fontSize: textSize,
        marginTop: 10,
        color: 'green'}} >
      Animated Text!
  </Animated.Text>
    )
  }
}