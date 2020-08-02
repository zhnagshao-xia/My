import React, {Component} from 'react';
import { AppRegistry, 
  StyleSheet, 
  ImageBackground,
  View, 
  Image,
  Text, 
  TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
 
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {},
  slide2: {},
  slide3: {},
})

export default class WelcomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Swiper style={styles.wrapper} 
              loop={false} 
              paginationStyle={{bottom: 5}}
              dot={<View style={{           //未选中的圆点样式
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 8,
                height: 8,
                borderRadius: 20,
                marginLeft: 10,
                marginRight: 9,
                marginTop: 9,
                marginBottom: 9,
            }}/>}
                activeDot={<View style={{    //选中的圆点样式
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 20,
                marginLeft: 10,
                marginRight: 9,
                marginTop: 9,
                marginBottom: 9,
            }}/>}>
        <View style={styles.slide1}>
          <ImageBackground 
          style={{width: '100%', height: '100%',resizeMode: 'stretch'}} 
          source={require('../Image/welcome/wp-1.jpg')}>
          </ImageBackground>
        </View>
        {/* <View style={styles.slide2}>
        <ImageBackground 
          style={{width: '100%', height: '100%',resizeMode: 'stretch'}} 
          source={require('../Image/welcome/wp-3.jpg')}>
          </ImageBackground>
        </View> */}
        <View style={styles.slide3}>
        <ImageBackground 
          style={{width: '100%', height: '100%',resizeMode: 'stretch'}} 
          source={require('../Image/welcome/wp-3.jpg')}>
          </ImageBackground>
        </View>
        <View style={styles.slide3}>
        <ImageBackground 
          style={{width: '100%', height: '100%',resizeMode: 'stretch'}} 
          source={require('../Image/welcome/wp-4.jpg')}>
            <TouchableOpacity style={{
              height: 120,
              width: 55,
              justifyContent:"center",
              alignItems:"center",
              top:'50%',
              left:'65%'
            }}
          onPress={() => navigation.navigate('jump')}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'stretch' 
            }}
            source={require('../Image/welcome/enter.png')}>
          </Image>
        </TouchableOpacity>
          </ImageBackground>
        </View>
      </Swiper>
    );
  }
}
AppRegistry.registerComponent('myproject', () => WelcomeScreen)