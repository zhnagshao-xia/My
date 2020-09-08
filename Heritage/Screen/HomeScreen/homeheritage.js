import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
  UIManager,
  findNodeHandle,
  Animated,
  Easing,
  TouchableNativeFeedback
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class homeheritage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fadeAnim: new Animated.Value(15), //设置初始值
          modal: false,
          swiperTop: 100,
          modalTwo:false,
          modalThird:false
        };
      }
      // 传入组件的ref，获取组件据屏幕顶部的距离设置轮播图出现的位置
      getScrollTop = (ref) => {
        const handle = findNodeHandle(ref);
        UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
          console.log(pageY);
          this.setState({
            swiperTop: pageY,
          });
        });
      };

    render() {
        const { swiperTop } = this.state;
    return (
        <ScrollView>
            <TouchableOpacity  ref="TouchableOne"
              onPress={() => {
                this.getScrollTop(this.refs.TouchableOne);
                this.setState({
                  modal: !this.state.modal,
                });
              }}
              >
            <ImageBackground source={require('../../Image/homeheritage/pic_1.png')} style={{ height: 280 }}>
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
            </TouchableOpacity>
            <TouchableOpacity 
           
            ref="TouchableTwo"
              onPress={() => {
                this.getScrollTop(this.refs.TouchableTwo);
                this.setState({
                  modalTwo: !this.state.modalTwo,
                });
              }}>
            <ImageBackground source={require('../../Image/homeheritage/pic_2.png')} style={{ height: 280 }}>
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
            </TouchableOpacity>
            <TouchableOpacity 
           
            ref="TouchableThree"
              onPress={() => {
                this.getScrollTop(this.refs.TouchableThree);
                this.setState({
                  modalThird: !this.state.modalThird
                });
              }}>
            <ImageBackground source={require('../../Image/homeheritage/pic_3.png')} style={{ height: 280 }}>
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
            </TouchableOpacity>
            <TouchableOpacity 
          
            ref="TouchableFour"
              onPress={() => {
                this.getScrollTop(this.refs.TouchableFour);
                this.setState({
                  modal: !this.state.modal,
                });
              }}>
            <ImageBackground source={require('../../Image/homeheritage/pic_4.png')} style={{ height: 280 }}>
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
            </TouchableOpacity>
            <TouchableOpacity
            
             ref="TouchableFive"
              onPress={() => {
                this.getScrollTop(this.refs.TouchableFive);
                this.setState({
                  modal: !this.state.modal,
                });
              }}>
            <ImageBackground source={require('../../Image/homeheritage/pic_5.png')} style={{ height: 280 }}>
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
            </TouchableOpacity>
            <TouchableOpacity
           
            ref="TouchableSix"
              onPress={() => {
                this.getScrollTop(this.refs.TouchableSix);
                this.setState({
                  modal: !this.state.modal,
                });
              }}>
            <ImageBackground source={require('../../Image/homeheritage/pic_6.png')} style={{ height: 280 }}>
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
            </TouchableOpacity>
            <TouchableOpacity
           
            ref="TouchableSeven"
              onPress={() => {
                this.getScrollTop(this.refs.TouchableSeven);
                this.setState({
                  modal: !this.state.modal,
                });
              }}>
            <ImageBackground source={require('../../Image/homeheritage/pic_7.png')} style={{ height: 280 }}>
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
            </TouchableOpacity>
            <TouchableOpacity
         
            ref="TouchableEight"
              onPress={() => {
                this.getScrollTop(this.refs.TouchableEight);
                this.setState({
                  modal: !this.state.modal,
                });
              }}>
            <ImageBackground source={require('../../Image/homeheritage/pic_8.png')} style={{ height: 280 }}>
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
            </TouchableOpacity>
            <TouchableOpacity
          
            ref="TouchableNine"
              onPress={() => {
                this.getScrollTop(this.refs.TouchableNine);
                this.setState({
                  modal: !this.state.modal,
                });
              }}>
            <ImageBackground source={require('../../Image/homeheritage/pic_9.png')} style={{ height: 280 }}>
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
            </TouchableOpacity>
            <TouchableOpacity
           
            ref="TouchableTen"
              onPress={() => {
                this.getScrollTop(this.refs.TouchableTen);
                this.setState({
                  modal: !this.state.modal,
                });
              }}>
            <ImageBackground source={require('../../Image/homeheritage/pic_10.png')} style={{ height: 280 }}>
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
            </TouchableOpacity>
            <TouchableOpacity
           
            ref="TouchableEleven"
              onPress={() => {
                this.getScrollTop(this.refs.TouchableEleven);
                this.setState({
                  modal: !this.state.modal,
                });
              }}>
            <ImageBackground source={require('../../Image/homeheritage/pic_11.png')} style={{ height: 280 }}>
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
            </TouchableOpacity>
            <Modal
          animationType={"slide"}
          transparent={true}
          onRequestClose={() => console.log("onRequestClose...")}
          visible={this.state.modal}
        >
          <TouchableOpacity
        
            onPress={() =>
              this.setState({
                modal: false,
              })
            }
            // style={{
            //     flex: 1,
            //     justifyContent: 'center',
            //     alignItems: 'center',
            // }}
          >
          
              <View style={styles.header}>
                  <View style={{
                    position: "absolute",
                    width: "100%",
                    height:180,
                    // backgroundColor: '#fff',
                    top: swiperTop,
                    // backfaceVisibility:'red'
                    }}>
                        <View style={{width:'100%',height:'20%',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{fontSize:15,color:'#fff',marginLeft:25}}>杭州</Text>
                            <Text style={{fontSize:12,color:'#fff',marginLeft:50}}>178项非遗</Text>
                            <TouchableOpacity style={{width:70,height:40,flexDirection:'row',marginLeft:180,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:15,color:'#fff',marginRight:5}}>更多</Text>
                                <FontAwesome
                                name={'cancel'}
                                size={20}
                                color={'#000'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width:'100%',height:'80%',alignItems:'center',flexDirection:'row'}}>
                            <ScrollView horizontal={true}>
                            <TouchableOpacity style={{width:230,height:140,marginLeft:20}}>
                                <ImageBackground style={{width:'100%',height:'100%',flexDirection:'column-reverse'}} source={require('../../Image/homeheritage/qinci.png')}>
                                    <View style={{width:150,height:30,backgroundColor:'#c9aa74',borderTopRightRadius:10,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:13,color:'#fff'}}>越窑青瓷烧纸技艺</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:230,height:140,marginLeft:20}}>
                                <ImageBackground style={{width:'100%',height:'100%',flexDirection:'column-reverse'}} source={require('../../Image/homeheritage/yinshua.png')}>
                                    <View style={{width:150,height:30,backgroundColor:'#c9aa74',borderTopRightRadius:10,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:13,color:'#fff'}}>木板水印技艺</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:230,height:140,marginLeft:20}}>
                                <ImageBackground style={{width:'100%',height:'100%',flexDirection:'column-reverse'}} source={require('../../Image/homeheritage/qinci.png')}>
                                    <View style={{width:150,height:30,backgroundColor:'#c9aa74',borderTopRightRadius:10,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:13,color:'#fff'}}>越窑青瓷烧纸技艺</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                </View>
          </TouchableOpacity>
        </Modal>
        <Modal
          animationType={"slide"}
          transparent={true}
          onRequestClose={() => console.log("onRequestClose...")}
          visible={this.state.modalTwo}
        >
          <TouchableOpacity
            onPress={() =>
              this.setState({
                modalTwo: false,
              })
            }
            // style={{
            //     flex: 1,
            //     justifyContent: 'center',
            //     alignItems: 'center',
            // }}
          >
          
              <View style={styles.header}>
                  <View style={{
                    position: "absolute",
                    width: "100%",
                    height:180,
                    // backgroundColor: '#fff',
                    top: swiperTop,
                    // backfaceVisibility:'red'
                    }}>
                        <View style={{width:'100%',height:'20%',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{fontSize:15,color:'#fff',marginLeft:25}}>湖州</Text>
                            <Text style={{fontSize:12,color:'#fff',marginLeft:50}}>178项非遗</Text>
                            <TouchableOpacity style={{width:70,height:40,flexDirection:'row',marginLeft:180,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:15,color:'#fff',marginRight:5}}>更多</Text>
                                <FontAwesome
                                name={'cancel'}
                                size={20}
                                color={'#000'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width:'100%',height:'80%',alignItems:'center',flexDirection:'row'}}>
                            <ScrollView horizontal={true}>
                            <TouchableOpacity style={{width:230,height:140,marginLeft:20}}>
                                <ImageBackground style={{width:'100%',height:'100%',flexDirection:'column-reverse'}} source={require('../../Image/homeheritage/qinci.png')}>
                                    <View style={{width:150,height:30,backgroundColor:'#c9aa74',borderTopRightRadius:10,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:13,color:'#fff'}}>越窑青瓷烧纸技艺</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:230,height:140,marginLeft:20}}>
                                <ImageBackground style={{width:'100%',height:'100%',flexDirection:'column-reverse'}} source={require('../../Image/homeheritage/yinshua.png')}>
                                    <View style={{width:150,height:30,backgroundColor:'#c9aa74',borderTopRightRadius:10,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:13,color:'#fff'}}>木板水印技艺</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:230,height:140,marginLeft:20}}>
                                <ImageBackground style={{width:'100%',height:'100%',flexDirection:'column-reverse'}} source={require('../../Image/homeheritage/qinci.png')}>
                                    <View style={{width:150,height:30,backgroundColor:'#c9aa74',borderTopRightRadius:10,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:13,color:'#fff'}}>越窑青瓷烧纸技艺</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                </View>
          </TouchableOpacity>
        </Modal>
        <Modal
          animationType={"slide"}
          transparent={true}
          onRequestClose={() => console.log("onRequestClose...")}
          visible={this.state.modalThird}
        >
          <TouchableOpacity
            onPress={() =>
              this.setState({
                modalThird: false,
              })
            }
            // style={{
            //     flex: 1,
            //     justifyContent: 'center',
            //     alignItems: 'center',
            // }}
          >
          
              <View style={styles.header}>
                  <View style={{
                    position: "absolute",
                    width: "100%",
                    height:180,
                    // backgroundColor: '#fff',
                    top: swiperTop,
                    // backfaceVisibility:'red'
                    }}>
                        <View style={{width:'100%',height:'20%',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{fontSize:15,color:'#fff',marginLeft:25}}>嘉兴</Text>
                            <Text style={{fontSize:12,color:'#fff',marginLeft:50}}>178项非遗</Text>
                            <TouchableOpacity style={{width:70,height:40,flexDirection:'row',marginLeft:180,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:15,color:'#fff',marginRight:5}}>更多</Text>
                                <FontAwesome
                                name={'cancel'}
                                size={20}
                                color={'#000'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width:'100%',height:'80%',alignItems:'center',flexDirection:'row'}}>
                            <ScrollView horizontal={true}>
                            <TouchableOpacity style={{width:230,height:140,marginLeft:20}}>
                                <ImageBackground style={{width:'100%',height:'100%',flexDirection:'column-reverse'}} source={require('../../Image/homeheritage/qinci.png')}>
                                    <View style={{width:150,height:30,backgroundColor:'#c9aa74',borderTopRightRadius:10,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:13,color:'#fff'}}>越窑青瓷烧纸技艺</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:230,height:140,marginLeft:20}}>
                                <ImageBackground style={{width:'100%',height:'100%',flexDirection:'column-reverse'}} source={require('../../Image/homeheritage/yinshua.png')}>
                                    <View style={{width:150,height:30,backgroundColor:'#c9aa74',borderTopRightRadius:10,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:13,color:'#fff'}}>木板水印技艺</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:230,height:140,marginLeft:20}}>
                                <ImageBackground style={{width:'100%',height:'100%',flexDirection:'column-reverse'}} source={require('../../Image/homeheritage/qinci.png')}>
                                    <View style={{width:150,height:30,backgroundColor:'#c9aa74',borderTopRightRadius:10,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:13,color:'#fff'}}>越窑青瓷烧纸技艺</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                </View>
          </TouchableOpacity>
        </Modal>
          </ScrollView>
    );
}
componentDidMount() {
    Animated.timing(
      this.state.fadeAnim, //初始值
      {
        toValue: 22, //结束值
        duration: 2000, //动画时间
        easing: Easing.linear,
        useNativeDriver: false,
      }
    ).start(); //开始
  }
}



const styles = StyleSheet.create({
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
    item: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      header: {
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(30,30,30, 0.5)',
       
      },
    });
    

