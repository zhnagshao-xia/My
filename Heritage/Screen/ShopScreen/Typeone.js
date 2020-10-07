import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
  
var ffk = true;
export default class App extends React.Component {
  state = {
    w: 0,
    h: 0,
  };

  _onPress = () => {
    // Animate the update
    if (ffk) {
      LayoutAnimation.spring();
      this.setState({ w: this.state.w+200, h: this.state.h + 200 })
      ffk = false
    } else {
      this.setState({ w: 0, h: 0 })
      ffk = true;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.box, { width: this.state.w, height: this.state.h }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


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
// s

