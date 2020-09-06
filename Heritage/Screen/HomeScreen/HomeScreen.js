import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image,TouchableHighlight, StyleSheet, ImageBackground } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Heritage from './Heritage'

export default class HomeScreen extends Component {

  render() {
    const state = this.state;
    const { navigation } = this.props;
    const tabs = [
      { title: '推荐' },
      { title: '传承' },
      { title: '非遗' },
    ];

    const style = {
      height: '100%',
      width: '100%',
    }; 
    
    return (
       <View style={{ flex: 1 }}> 
        <Tabs
         tabs={tabs}
        tabBarTextStyle={{
          color:"#945357",
          fontSize:15
        }}
        tabBarUnderlineStyle={{
          width:50,
          marginLeft:36,
          backgroundColor:'#945357'
        }}
        >
          {/* 第一页 */}
          <ScrollView style={styles.main}>
            <View style={{ width: '100%', alignItems: "center", }}>
              <View style={styles.lunbokuang}>
                <Swiper style={styles.wrapper}
                  showsButtons={false}
                  autoplay={true}
                  paginationStyle={styles.paginationStyle}
                  dotStyle={styles.dotStyle}
                  activeDotStyle={styles.activeDotStyle}
                >
                  <View style={styles.slide1}>
                    <ImageBackground
                      style={{ width: '100%', height: '100%', }}
                      source={require('../../Image/HomeScreen/1.jpg')}>
                    </ImageBackground>
                  </View>
                  <View style={styles.slide2}>
                    <ImageBackground
                      style={{ width: '100%', height: '100%' }}
                      source={require('../../Image/HomeScreen/2.jpg')}>
                    </ImageBackground>
                  </View>
                  <View style={styles.slide3}>
                    <ImageBackground
                      style={{ width: '100%', height: '100%' }}
                      source={require('../../Image/HomeScreen/3.jpg')}>
                    </ImageBackground>
                  </View>
                </Swiper>
              </View>
            </View>
            <View style={styles.Headlinesmain}>
            <View style={styles.Headlines}>
              <View style={styles.Headlines_left}>
                <Image
                  style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
                  source={require('../../Image/HomeScreen/Headlines.png')}>
                </Image>
              </View>
              <View style={styles.Headlines_right}>
                <Swiper style={styles.wrapper}
                  horizontal={false}
                  autoplay autoplayTimeout={3}
                  showsPagination={false} >
                  <View style={styles.slide}>
                    <Text style={styles.text}>官宣：非遗+形式在浙江火热展开</Text>
                  </View>
                  <View style={styles.slide}>
                    <Text style={styles.text}>官宣：非遗+形式在浙江火热展开</Text>
                  </View>
                  <View style={styles.slide}>
                    <Text style={styles.text}>官宣：非遗+形式在浙江火热展开</Text>
                  </View>
                </Swiper>
              </View>
            </View>
            </View>
            <View style={{ width: '100%', alignItems: "center", }}>
              <View style={styles.partthree}>
                <TouchableOpacity style={styles.threeleft}
                onPress={() => navigation.navigate('传承志')}>
                  <ImageBackground
                    style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
                    source={require('../../Image/HomeScreen/Craftsmanship.png')}>
                      <View style={{flexDirection:'column',marginLeft:35,marginTop:20}}>
                        <Text style={{color:'#fff',fontSize: 14}}>传</Text>
                        <Text style={{color:'#fff',fontSize: 14}}>承</Text>
                        <Text style={{color:'#fff',fontSize: 14}}>志</Text>
                      </View>
                  </ImageBackground>
                </TouchableOpacity>
                <View style={styles.threeright}>
                  <TouchableOpacity style={styles.righttop}
                  onPress={() => navigation.navigate('志愿者')}>
                    <ImageBackground
                      style={styles.tu}
                      source={require('../../Image/HomeScreen/volunteer.png')}>
                      <Text style={{ color: '#fff', fontSize: 14 }}>志愿者</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rightbottom}
                  onPress={() => navigation.navigate('活动')}>
                    <ImageBackground
                      style={styles.tu}
                      source={require('../../Image/HomeScreen/activity.png')}>
                      <Text style={{ color: '#fff', fontSize: 14}}>活动</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.partfour}>
              <View style={{
                width: '100%',
                alignItems: "center"
              }}>
                <View style={styles.fourtitle}>
                  <Text style={{ fontSize: 15, color: '#c6a46c' }}>
                    推荐手艺人
                  </Text>
                </View>
                <View style={{ width: '95%' }}>
                  <View style={{ width: '100%', height: 190, }}>
                    <Image
                      style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                      source={require('../../Image/HomeScreen/Large.jpg')}>
                    </Image>
                  </View>
                  <View style={styles.fourword}>

                    <View style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}>
                      <View style={{ marginLeft: 110, marginVertical: 10 }}>
                        <Text style={{ fontSize: 14 }}>叶良康</Text>
                        <Text style={{ color: '#c6a46c', fontSize: 12}}>鄞州竹编非遗传承人</Text>
                      </View>
                      <TouchableOpacity style={styles.guanzhu}>
                        <Text style={{ color: '#945357' ,fontSize: 12,marginRight:3}}>+</Text>
                        <Text style={{ fontSize: 12 }}>关注</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.touxiang}>
                        <Image
                          style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                          source={require('../../Image/HomeScreen/yi1.png')}>
                        </Image>
                      </TouchableOpacity>
                    </View>
                    <Text style={{ marginLeft: 30,fontSize: 14 }}>潜心研究工艺竹编，成为代表性传承人</Text>
                  </View>
                </View>
                <View style={{ width: '95%' }}>
                  <View style={{ width: '100%', height: 190, }}>
                    <Image
                      style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                      source={require('../../Image/HomeScreen/bei.png')}>
                    </Image>
                  </View>
                  <View style={{
                    width: '100%',
                    marginBottom: 20,
                  }}>
                    <View style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}>
                      <View style={{ marginLeft: 110, marginVertical: 10 }}>
                        <Text style={{ fontSize: 14 }}>夏雨缀</Text>
                        <Text style={{ color: '#c6a46c',fontSize: 12 }}>舟山贝雕非遗传承人</Text>
                      </View>
                      <TouchableOpacity style={styles.guanzhu}>
                        <Text style={{ color: '#945357',fontSize: 12,marginRight:3 }}>+</Text>
                        <Text style={{ fontSize: 12 }}>关注</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.touxiang}
                      onPress={() => navigation.navigate('手艺人详细页面')}>
                        <Image
                          style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                          source={require('../../Image/HomeScreen/yi2.png')}>
                        </Image>
                      </TouchableOpacity>
                    </View>
                    <Text style={{ marginLeft: 30,fontSize: 14 }}>被评为“中国工美行业艺术大师”</Text>
                  </View>
                </View>
                <TouchableOpacity 
                onPress={() => navigation.navigate('手艺人')}
                  style={{
                  width: '95%',
                  height: 40,
                  backgroundColor: '#dcdad2',
                  justifyContent: "center",
                  alignItems:'center',
                  flexDirection: 'row',
                  borderRadius: 8
                }}>
                  <Text style={{ fontSize: 14,marginRight:10 }}>查看更多</Text>
                    <FontAwesome
                      name={'angle-double-right'}
                      size={15}
                      color={'#000'} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.partfive}>
              <View style={{ width: '95%' }}>
                <View style={styles.fivetitle}>
                  <Text style={{ fontSize: 15, color: '#c6a46c' }}>
                    匠心力作
                  </Text>
                </View>
                <View style={{ width: '100%', height: 190, }}>
                  <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                    source={require('../../Image/HomeScreen/jishan.png')}>
                  </Image>
                </View>
                <View style={{ width: '100%', height: 50, justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 14 }}>
                    王星记扇
                  </Text>
                </View>
                <TouchableOpacity 
                onPress={() => navigation.navigate('匠心力作')}
                style={{
                  width: '100%',
                  height: 40,
                  backgroundColor: '#dcdad2',
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: 'row',
                  borderRadius: 8,
                  marginBottom: 30
                }}>
                  <Text style={{ fontSize: 14,marginRight:10 }}>查看更多</Text>
                    <FontAwesome
                      name={'angle-double-right'}
                      size={20}
                      color={'#000'} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          {/* 第二页 */}
          <View style={{flex:1}}>
              <Heritage />
          </View>

          {/* 第三页 */}
          <ScrollView style={style}>
            <View>
            <ImageBackground source={require('../../Image/HomeScreen/pic_1.png')} style={{ height: 280 }}>
              <View style={styles.place}>
                <View style={styles.letter_up}>
                  <View style={styles.letter_left}><Text style={{ color: '#fff', fontSize: 18 }} >杭州</Text></View>
                  <View style={styles.letter_right}><Text style={{ color: '#fff', fontSize: 14 }}>178项非遗</Text></View>
                </View>
                <View style={styles.letter_bottom}>
                  <Text style={{ color: '#fff', fontSize: 15 }} >欲把西湖比西子，淡妆浓墨总相宜</Text>
                </View>
              </View>
            </ImageBackground>
            </View>
            <View>
            <ImageBackground source={require('../../Image/HomeScreen/pic_2.png')} style={{ height: 280 }}>
              <View style={styles.place}>
                <View style={styles.letter_up}>
                  <View style={styles.letter_left}><Text style={{ color: '#fff', fontSize: 18 }} >湖州</Text></View>
                  <View style={styles.letter_right}><Text style={{ color: '#fff', fontSize: 14 }}>178项非遗</Text></View>
                </View>
                <View style={styles.letter_bottom}>
                  <Text style={{ color: '#fff', fontSize: 15 }} >北望燕云不尽头，大江东去水悠悠</Text>
                </View>
              </View>
            </ImageBackground>
            </View>
            <View>
            <ImageBackground source={require('../../Image/HomeScreen/pic_3.png')} style={{ height: 280 }}>
              <View style={styles.place}>
                <View style={styles.letter_up}>
                  <View style={styles.letter_left}><Text style={{ color: '#fff', fontSize: 18 }} >嘉兴</Text></View>
                  <View style={styles.letter_right}><Text style={{ color: '#fff', fontSize: 14}}>178项非遗</Text></View>
                </View>
                <View style={styles.letter_bottom}>
                  <Text style={{ color: '#fff', fontSize: 15 }} >吴中过客莫思家，江南画船如屋里</Text>
                </View>
              </View>
            </ImageBackground>
            </View>
            <View>
            <ImageBackground source={require('../../Image/HomeScreen/pic_4.png')} style={{ height: 280 }}>
              <View style={styles.place}>
                <View style={styles.letter_up}>
                  <View style={styles.letter_left}><Text style={{ color: '#fff', fontSize: 18 }} >金华</Text></View>
                  <View style={styles.letter_right}><Text style={{ color: '#fff', fontSize: 14 }}>178项非遗</Text></View>
                </View>
                <View style={styles.letter_bottom}>
                  <Text style={{ color: '#fff', fontSize: 15 }} >岩室嵌空古洞天，初平曾此学升仙</Text>
                </View>
              </View>
            </ImageBackground>
            </View>
            <View>
            <ImageBackground source={require('../../Image/HomeScreen/pic_5.png')} style={{ height: 280 }}>
              <View style={styles.place}>
                <View style={styles.letter_up}>
                  <View style={styles.letter_left}><Text style={{ color: '#fff', fontSize: 18 }} >丽水</Text></View>
                  <View style={styles.letter_right}><Text style={{ color: '#fff', fontSize: 14 }}>178项非遗</Text></View>
                </View>
                <View style={styles.letter_bottom}>
                  <Text style={{ color: '#fff', fontSize: 15 }} >只恐压枝星欲落，最怜和叶露初晞</Text>
                </View>
              </View>
            </ImageBackground>
            </View>
            <View>
            <ImageBackground source={require('../../Image/HomeScreen/pic_6.png')} style={{ height: 280 }}>
              <View style={styles.place}>
                <View style={styles.letter_up}>
                  <View style={styles.letter_left}><Text style={{ color: '#fff', fontSize: 18 }} >宁波</Text></View>
                  <View style={styles.letter_right}><Text style={{ color: '#fff', fontSize: 14 }}>178项非遗</Text></View>
                </View>
                <View style={styles.letter_bottom}>
                  <Text style={{ color: '#fff', fontSize: 15 }} >我亦逃祥云水客，便应萧散共松扁</Text>
                </View>
              </View>
            </ImageBackground>
            </View>
            <View>
            <ImageBackground source={require('../../Image/HomeScreen/pic_7.png')} style={{ height: 280 }}>
              <View style={styles.place}>
                <View style={styles.letter_up}>
                  <View style={styles.letter_left}><Text style={{ color: '#fff', fontSize: 18 }} >衢州</Text></View>
                  <View style={styles.letter_right}><Text style={{ color: '#fff', fontSize: 14 }}>178项非遗</Text></View>
                </View>
                <View style={styles.letter_bottom}>
                  <Text style={{ color: '#fff', fontSize: 15 }} >水朝沧海何时去,兰在幽林亦自芳</Text>
                </View>
              </View>
            </ImageBackground>
            </View>
            <View>
            <ImageBackground source={require('../../Image/HomeScreen/pic_8.png')} style={{ height: 280 }}>
              <View style={styles.place}>
                <View style={styles.letter_up}>
                  <View style={styles.letter_left}><Text style={{ color: '#fff', fontSize: 18 }} >绍兴</Text></View>
                  <View style={styles.letter_right}><Text style={{ color: '#fff', fontSize: 14 }}>178项非遗</Text></View>
                </View>
                <View style={styles.letter_bottom}>
                  <Text style={{ color: '#fff', fontSize: 15 }} >正是吾庐秋好夜，上桥浑不要人扶</Text>
                </View>
              </View>
            </ImageBackground>
            </View>
            <View>
            <ImageBackground source={require('../../Image/HomeScreen/pic_9.png')} style={{ height: 280 }}>
              <View style={styles.place}>
                <View style={styles.letter_up}>
                  <View style={styles.letter_left}><Text style={{ color: '#fff', fontSize: 18 }} >台州</Text></View>
                  <View style={styles.letter_right}><Text style={{ color: '#fff', fontSize: 14 }}>178项非遗</Text></View>
                </View>
                <View style={styles.letter_bottom}>
                  <Text style={{ color: '#fff', fontSize: 15 }} >向夜双栖惊玉漏，临轩对舞拂朱袍</Text>
                </View>
              </View>
            </ImageBackground>
            </View>
            <View>
            <ImageBackground source={require('../../Image/HomeScreen/pic_10.png')} style={{ height: 280 }}>
              <View style={styles.place}>
                <View style={styles.letter_up}>
                  <View style={styles.letter_left}><Text style={{ color: '#fff', fontSize: 18 }} >温州</Text></View>
                  <View style={styles.letter_right}><Text style={{ color: '#fff', fontSize: 14 }}>178项非遗</Text></View>
                </View>
                <View style={styles.letter_bottom}>
                  <Text style={{ color: '#fff', fontSize: 15 }} >水如棋局连街陌，山似屏帷绕画楼</Text>
                </View>
              </View>
            </ImageBackground>
            </View>
            <View>
            <ImageBackground source={require('../../Image/HomeScreen/pic_11.png')} style={{ height: 280 }}>
              <View style={styles.place}>
                <View style={styles.letter_up}>
                  <View style={styles.letter_left}><Text style={{ color: '#fff', fontSize: 18 }} >舟山</Text></View>
                  <View style={styles.letter_right}><Text style={{ color: '#fff', fontSize: 14 }}>178项非遗</Text></View>
                </View>
                <View style={styles.letter_bottom}>
                  <Text style={{ color: '#fff', fontSize: 15 }} >桂花香里芙蓉好，岂许狂鹰敢入罗</Text>
                </View>
              </View>
            </ImageBackground>
            </View>
          </ScrollView>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  div:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#F5F5F5'
},
left:{
  width:'30%',
},
right:{
    width:'70%'
},
  place: {
    top:185,
    left:20,
},
letter_up:{
    flexDirection:'row',
},
letter_left:{
    alignItems:'center',
    flexDirection:'column-reverse',
    marginRight:7
},
letter_right:{
    flexDirection:'column-reverse'        
},
letter_bottom:{
    marginTop:10,
    justifyContent:'center',
},
  fivetitle: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#b5b5b5',
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    marginBottom: 10
  },
  partfive: {
    backgroundColor: '#fff',
    alignItems: "center",
    width: '100%',
  },
  touxiang: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
    top: -25,
    left: 20
  },
  guanzhu: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#c9c5c5',
    width: 50,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius:5
  },
  fourword: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#b5b5b5',
    marginBottom: 10,
    paddingBottom: 20
  },
  fourtitle: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#b5b5b5',
    justifyContent: "center",
    alignItems: "center",
    width: '95%',
    marginBottom: 10
  },
  partfour: {
    backgroundColor: '#fff',
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20
  },
  tu: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    justifyContent: "center",
    alignItems: "center"
  },
  rightbottom: {
    width: '100%',
    height: '48.5%',
    marginTop: '3%'
  },
  righttop: {
    width: '100%',
    height: '48.5%',
  },
  threeright: {
    width: '40%',
    height: '100%',
    marginLeft: '1%',
    flexDirection: 'column'
  },
  threeleft: {
    width: '59%',
    height: '100%',
  },
  partthree: {
    width: '95%',
    height: 140,
    flexDirection: 'row',
    marginBottom: 15
  },
  Headlines_right: {
    marginLeft: 15,
    width:300,
    justifyContent:'center'
  },
  Headlines_left: {
    width: 45,
    height: 20,
  },
  Headlines: {
    width:'90%',
    alignItems: "center",
    flexDirection: 'row',
  },
  Headlinesmain:{
    width:'100%',
    height: 40,
    alignItems:'center',
    justifyContent:'center'
  },
  main: {
    backgroundColor: '#f2f2f2',
  },
  wrapper: {},
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },
  slide: {
    
  },
  text: {
    fontSize:13,
  },
  paginationStyle: {
    bottom: 6,
  },
  dotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    opacity: 0.4,
    borderRadius: 0,
  },
  activeDotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 0,
  },
  lunbokuang: {
    height: 170,
    width: '95%',
    backgroundColor: '#000',
    alignItems: "center",
    justifyContent: "center",
  },
});