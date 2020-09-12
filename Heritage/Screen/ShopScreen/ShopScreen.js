import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import { Drawer, List, } from '@ant-design/react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
  
import EZSwiper from 'react-native-ezswiper';
const { height, width } = Dimensions.get('window');

const images = [require('../../Image/ShopScreen/pic4.jpg'),require('../../Image/ShopScreen/pic4.jpg'),require('../../Image/ShopScreen/pic4.jpg')]


const styles = StyleSheet.create({
  scrow_container: {
    backgroundColor: '#f2f2f2',
  },
  liststyle: {
    backgroundColor: '#f2f2f2',
    width: 320,
    height: 800,
  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)'
  },
  last: {
    marginTop: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  key: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: 'white',   
    marginVertical:10 ,
    paddingVertical:10
  },
  swiper: {
    backgroundColor: 'white',
  },
  cell: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15
  },
});

export default class DrawerExample extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
    };
  }
  renderImageRow(obj, index) {    
    return (
      <View style={[styles.cell,{backgroundColor: 'gray',overflow:'hidden'}]}>
       <Image
       style={{position:'absolute',top:0,right:0,bottom:0,left:0,width: undefined, height: undefined}}
        resizeMode={'stretch'}
        source={obj}/>
      </View>
    )
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
      <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, }}>
              <TouchableOpacity
                
                style={{ width: 25, height: 25, marginLeft: 10, alignItems: 'center' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../../Image/ShopScreen/pic26.png')}></Image>
              </TouchableOpacity>
              <View style={{ width: '75%', height: 30, backgroundColor: '#dcdcdc', marginLeft: 10, borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 20, height: 20, marginLeft: 10 }} source={require('../../Image/ShopScreen/pic28.png')}></Image>
                <TextInput style={{ height: 50, width: 250 }} placeholder='搜索你想要的美物'></TextInput>
              </View>
              <TouchableOpacity
                 onPress={() => navigation.navigate('商城购物车')}
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 10,
                  alignItems: 'center'
                }}>
                <FontAwesome name={'shopping-cart'} size={25} color={'#000'} />
              </TouchableOpacity>
            </View>
          </View>
        <ScrollView style={styles.scrow_container}>
          <ScrollView style={[styles.container]} contentInsetAdjustmentBehavior="automatic">
          <EZSwiper style={[styles.swiper,{width: width,height: 150 }]}
                    dataSource={images}
                    width={ width }
                    height={150 }
                    renderRow={this.renderImageRow}
                    onPress={this.onPressRow}      
                    onWillChange={this.onWillChange}     
                    onDidChange={this.onDidChange}                                                                                
                    ratio={0.6}
                    index={2}   
                    horizontal={true}  
                    loop={true}  
                    autoplayTimeout={2}                                      
                    />
          </ScrollView>
          <View style={{
            flexDirection: 'row',
            width: '100%',
            height: 100,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}>
            <TouchableOpacity style={{}}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={require('../../Image/ShopScreen/pic5.jpg')}
              >
              </Image>
              <Text style={{ marginTop: 3, fontSize: 13 }}>雕刻工艺</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={require('../../Image/ShopScreen/pic4.jpg')}
              >
              </Image>
              <Text style={{ marginTop: 3, fontSize: 13 }}>瓷器工艺</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={require('../../Image/ShopScreen/pic3.jpg')}
              >
              </Image>
              <Text style={{ marginTop: 3, fontSize: 13 }}>工艺特色</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => navigation.navigate('商城分类页面')}
              style={{}}>
              <Image
                style={{ width: 20, height: 20, }}
                source={require('../../Image/ShopScreen/pic24.png')}
              >
              </Image>
            </TouchableOpacity>
          </View>
          <View style={styles.last}>
            <View style={{ height:50,justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 15, color: '#c9ab77' }}>新品推荐</Text>
            </View>
            <View  style={{flexDirection:'row',width:"100%"}}>
                <View style={{width:70,height:30,backgroundColor:"#000",marginHorizontal:20}}></View>
                <View style={{width:70,height:30,backgroundColor:"#000",marginHorizontal:20}}></View>
                <View style={{width:70,height:30,backgroundColor:"#000",marginHorizontal:20}}></View>
                <View style={{width:70,height:30,backgroundColor:"#000",marginHorizontal:20}}></View>
                <View style={{width:70,height:30,backgroundColor:"#000",marginHorizontal:20}}></View>
                <View style={{width:70,height:30,backgroundColor:"#000",marginHorizontal:20}}></View>
                <View style={{width:70,height:30,backgroundColor:"#000",marginHorizontal:20}}></View>
                <View style={{width:70,height:30,backgroundColor:"#000",marginHorizontal:20}}></View>
            </View>
            
            {/* <View style={styles.key}>
              <View style={{ width: '50%', alignItems: 'center' }}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('商品详情页面')}
                style={{ width: '90%', height: 300, backgroundColor: 'red', marginTop: 15 }}>
                  <ImageBackground
                    style={{ width: '100%', height: '100%', flexDirection: 'row-reverse' }}
                    source={require('../../Image/ShopScreen/umbrella2.png')}>
                    <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 230 }}>
                      <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>油纸伞</Text>
                        <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥288</Text>
                      </View>
                      <View style={{ width: '100%', height: '50%', flexDirection: 'row-reverse' }}>
                        <Text style={{ fontSize: 15, color: '#fff' }}>已售1000件</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '90%', height: 250, backgroundColor: 'red', marginTop: 15 }}>
                  <ImageBackground
                    style={{ width: '100%', height: '100%', flexDirection: 'row-reverse' }}
                    source={require('../../Image/ShopScreen/umbrella1.png')}>
                    <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 180 }}>
                      <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>油纸伞</Text>
                        <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥288</Text>
                      </View>
                      <View style={{ width: '100%', height: '50%', flexDirection: 'row-reverse' }}>
                        <Text style={{ fontSize: 15, color: '#fff' }}>已售1000件</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={{ width: '50%', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: '90%', height: 230, backgroundColor: 'red', marginTop: 15 }}>
                  <ImageBackground
                    style={{ width: '100%', height: '100%', flexDirection: 'row-reverse' }}
                    source={require('../../Image/ShopScreen/umbrella2.png')}>
                    <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 160 }}>
                      <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>油纸伞</Text>
                        <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥288</Text>
                      </View>
                      <View style={{ width: '100%', height: '50%', flexDirection: 'row-reverse' }}>
                        <Text style={{ fontSize: 15, color: '#fff' }}>已售1000件</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '90%', height: 280, backgroundColor: 'red', marginTop: 15 }}>
                  <ImageBackground
                    style={{ width: '100%', height: '100%', flexDirection: 'row-reverse' }}
                    source={require('../../Image/ShopScreen/umbrella2.png')}>
                    <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(50,50,50,0.7)', marginTop: 210 }}>
                      <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>油纸伞</Text>
                        <Text style={{ fontSize: 15, marginLeft: 60, color: '#fff' }}>￥288</Text>
                      </View>
                      <View style={{ width: '100%', height: '50%', flexDirection: 'row-reverse' }}>
                        <Text style={{ fontSize: 15, color: '#fff' }}>已售1000件</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View> */}
          </View>
        </ScrollView>
        </View>
    );
  }
}