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
  FlatList,
  AsyncStorage
} from 'react-native';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL1 = http + "/shouyiren/personal";

export default class Craftsmandetail extends Component {
constructor(props){
  super(props);
  this.state={
    name:"",
    docs:[],
    chuancheng:[],
  }
}

  componentDidMount() {
    this.fetchData();
  }


  fetchData() {
    fetch(URL1, {//手艺人详情
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.props.name
      })
    })
      .then((response) => response.json())
      .then((json)=>{  
        this.setState({
          docs:json.docs,
          chuancheng:json.docs[0].chuancheng
        })
        console.log(json.docs)
      })
      .catch((error)=>console.error(error))
      .finally(()=>{
        this.setState({isLonding:false});
      });}

  render() {
    const { navigation } = this.props;
    const data = this.state.docs;
    let invoice = this.state.chuancheng;
  let items = [];
  invoice.map((el, index) => {
      let colorValue = index === 0 ? 'black' : 'black';
      let backgroundColor = index === 0 ? 'black' : 'black';
      items.push(
          <View style={styles.expressItem} key={index}>
              <View style={styles.expressRightFirst}>
                  <View style={styles.process}>
                      <Text style={{color:colorValue,fontSize:14}}>{el.jingli}</Text>
                     
                  </View>
              </View>
              <View style={[styles.expressLeft,{backgroundColor:backgroundColor}]}/>
          </View>
      );
  });
    return (
      <View style={{width:'100%',alignItems:'center',marginVertical:10}}>
              <FlatList
                data={data}
                renderItem={({ item }) =>
                <View style={{flex:1,alignItems:"center"}}>
                  <View style={{width:"95%"}}>
                    <View style={{width:'100%',flexDirection:'row',alignItems:'center',marginVertical:10}}>
                      <View style={{width:4,height:25,backgroundColor:'#c9aa74',marginRight:10}}></View>
                      <Text style={{fontSize:15}}>简介</Text>
                    </View>
                    <View style={{width:'100%',marginBottom:20,paddingRight:20}}>
                      <Text style={{fontSize:13}}>{item.jianjie}</Text>
                    </View>
                  </View>
                  <View style={{width:"95%"}}>
                    <View style={{width:'100%',flexDirection:'row',alignItems:'center',marginVertical:10}}>
                      <View style={{width:4,height:25,backgroundColor:'#c9aa74',marginRight:10}}></View>
                      <Text style={{fontSize:15}}>传承之路</Text>
                    </View>
                    <View style={{width:'100%',marginBottom:20}}>
                    {items}
                    </View>
                  </View>
                  <View style={{width:"95%"}}>
                    <View style={{width:'100%',flexDirection:'row',alignItems:'center',marginVertical:10}}>
                      <View style={{width:4,height:25,backgroundColor:'#c9aa74',marginRight:10}}></View>
                      <Text style={{fontSize:15}}>非遗技艺</Text>
                    </View>
                    <ImageBackground style={styles.works}
                    source={{uri:https+item.zhanshitu}}>
                      <View style={styles.workname}>
                        <Text style={{fontSize:12,color:'#fff'}}>{item.xiangmu}</Text>
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
    width:150,
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