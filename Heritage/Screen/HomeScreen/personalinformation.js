import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  FlatList
} from 'react-native';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
export default class Craftsmandetail extends Component {
  render() {
    const { navigation } = this.props;
    let invoice = [
      {content: '1963拜钱阿兴师傅为师，学习笺匠技艺。'},
      {content: '1967去宁波市工艺竹编厂进修三个月，拜竹编大师李生友为师，回来后被聘为东山工艺竹编厂技术员。'},
      {content: '1977开始担任鄞县管江公社工艺竹编厂副厂长。'},
      {content: '1985承包了鄞县东山工艺竹编厂，开始潜心研究工艺竹编。'},
      {content: '2008年被命名为代表性传承人后，承担起四所学校竹编技艺传承指导工作，并积极参与各级组织的非遗展示活动，和各种新作品创作参展活动，带徒授艺，小批量生产工艺竹编作品。'},
    ];
  let items = [];
  invoice.map((el, index) => {
      let colorValue = index === 0 ? 'black' : 'black';
      let backgroundColor = index === 0 ? 'black' : 'black';
      items.push(
          <View style={styles.expressItem} key={index}>
              <View style={styles.expressRightFirst}>
                  <View style={styles.process}>
                      <Text style={{color:colorValue,fontSize:14}}>{el.content}</Text>
                     
                  </View>
              </View>
              <View style={[styles.expressLeft,{backgroundColor:backgroundColor}]}/>
          </View>
      );
  });
    return (
      <View style={{width:'100%',alignItems:'center',marginVertical:10}}>
              <FlatList
                data={[
                  {
                    title1: '叶良康，鄞州塘溪镇东山人，1947年出生。从16岁开始,他跟村里76岁的老茂匠学手艺，编织实用竹器。叶良康是鄞州竹编省级非物质文化遗产传承人，无师自通编竹笼，醉心竹编五十载。',
                  },
                ]}
                renderItem={({ item }) =>
                <View style={{width:'100%',height:'100%'}}>
                  <View style={{width:350,height:120}}>
                    <View style={{width:'100%',height:40,flexDirection:'row',alignItems:'center'}}>
                      <View style={{width:4,height:25,backgroundColor:'#c9aa74',marginRight:10}}></View>
                      <Text style={{fontSize:15}}>简介</Text>
                    </View>
                    <View style={{width:'100%',height:70,}}>
                      <Text style={{fontSize:13}}>{item.title1}</Text>
                    </View>
                  </View>
                  <View style={{width:350,height:350}}>
                    <View style={{width:'100%',height:40,flexDirection:'row',alignItems:'center'}}>
                      <View style={{width:4,height:25,backgroundColor:'#c9aa74',marginRight:10}}></View>
                      <Text style={{fontSize:15}}>传承之路</Text>
                    </View>
                    <View style={{width:'100%',height:300,}}>
                    {items}
                    </View>
                  </View>
                  <View style={{width:350,height:170}}>
                    <View style={{width:'100%',height:40,flexDirection:'row',alignItems:'center'}}>
                      <View style={{width:4,height:25,backgroundColor:'#c9aa74',marginRight:10}}></View>
                      <Text style={{fontSize:15}}>非遗技艺</Text>
                    </View>
                    <ImageBackground style={styles.works}
                    source={require('../../Image/HomeScreen/Large.jpg')}>
                      <View style={styles.workname}>
                        <Text style={{fontSize:12,color:'#fff'}}>鄞州竹编</Text>
                      </View>
                    </ImageBackground>
                  </View>
                </View>    
                }
              />
            </View>
      );
}
}

const styles = StyleSheet.create({
  mationUp:{
    width:'100%',
    height:'25%',
    
    // backgroundColor:'black'
  },
  headpic:{
    width:70,
    height:70,
    borderRadius:50,
    marginTop:10,
    marginLeft:40,
    borderWidth:2,
    borderColor:'#fff',
  },
  namerow:{
    width:130,
    height:30,
    marginLeft:40,
    flexDirection:'row',
    alignItems:'center',
  },
  like:{
    width:55,
    height:23,
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    flexDirection:'row',
    alignItems:'center',
    marginLeft:10,
    justifyContent:'center'
  },
  center:{
    width:'20%',
    height:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  fans:{
    width:130,
    height:35,
    backgroundColor:'rgba(0,0,0,0.5)',
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
    marginTop:110,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  works:{
    width:200,
    height:120,
    backgroundColor:'red',
    flexDirection:'column-reverse',
  },
  workname:{
    width:100,
    height:25,
    backgroundColor:'#c9aa74',
    borderTopRightRadius:5,
    justifyContent:'center',
    alignItems:'center'
  },
  
  process: {
    paddingVertical: 10,
    flexDirection: 'column',
    paddingRight: 20
},
expressRightFirst: {
    width: 360,
    paddingLeft: 25,
    borderLeftWidth: 1,
    borderLeftColor: 'black',
    flexDirection: 'column',

}, 
expressItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 5,
    width: 370
  
},
expressLeft: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'relative',
    right: 364,
    top: 15,
    backgroundColor:'red'
},
modal4: {
  height: 150,

},
btn:{
  width:40,
  height:40,
  backgroundColor:'red'
}
});