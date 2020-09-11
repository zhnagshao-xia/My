import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground,Image,ScrollView,FlatList,Dimensions,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modalbox';
import {InformationTab} from '../jump';

export default class Craftsmandetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }
  render() {
    const { navigation } = this.props;
  return (
    <View style={{flex:1}}>
      <View style={{height:45,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ded7c9"}}>
        <View style={{flexDirection:'row',justifyContent:"space-between",width:"90%"}}>
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}>
          <FontAwesome name={'angle-left'} size={25} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => this.refs.modal6.open()} >
          <Feather name={'more-horizontal'} size={20} color={'#000'} /></TouchableOpacity>
      </View>
      </View>
      <View style={styles.mationUp}>
      <ImageBackground style={{width:'100%',height:'100%',flexDirection:'row'}} 
      source={require('../../Image/HomeScreen/Personalbg.png')}
      resizeMode='stretch'>
        <View style={{width:'40%',height:'100%'}}>
          <Image style={styles.headpic}
          source={require('../../Image/HomeScreen/yi1.png')}/>
         <View style={styles.namerow}>
           <Text style={{fontSize:15,color:'black'}}
            onPress={()=>{
              Alert.alert("111");
            }}
           >叶良康</Text>
           <TouchableOpacity style={styles.like}>
             <FontAwesome
                    name={'plus'}
                    size={15}
                    color={'#000'} />
             <Text style={{fontSize:12,marginLeft:2}}>关注</Text>
           </TouchableOpacity>
         </View>
        </View>
        <View style={styles.center}>
          <View style={{width:30,height:130}}>
            <Text style={{fontSize:12,textAlign:'center'}}>鄞</Text>
            <Text style={{fontSize:12,textAlign:'center'}}>州</Text>
            <Text style={{fontSize:12,textAlign:'center'}}>竹</Text>
            <Text style={{fontSize:12,textAlign:'center'}}>编</Text>
          </View>
          <View style={{width:1,height:130,backgroundColor:'black'}}></View>
          <View style={{width:30,height:130,flexDirection:'column-reverse'}}>
          <Text style={{fontSize:12,textAlign:'center'}}>人</Text>
          <Text style={{fontSize:12,textAlign:'center'}}>承</Text>
          <Text style={{fontSize:12,textAlign:'center'}}>传</Text>
          <Text style={{fontSize:12,textAlign:'center'}}>遗</Text>
          <Text style={{fontSize:12,textAlign:'center'}}>非</Text>
          </View>
        </View>
        <View style={{width:'40%',height:'100%',flexDirection:'row-reverse'}}>
          <View style={styles.fans}>
            <View style={{width:50,height:30,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:15,color:'#fff'}}>关注  0</Text>
            </View>
            <View style={{width:1,height:20,backgroundColor:'#fff',marginLeft:5,marginRight:5}}></View>
            <View style={{width:50,height:30,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:15,color:'#fff'}}>粉丝  0</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
    <View style={{flex:1}}>
          <InformationTab/>
    </View>
    <Modal style={styles.modal4} position={"bottom"} ref={"modal6"} >
          <View style={{width:'100%',height:'75%',flexDirection:'row'}}>
            <TouchableOpacity style={{width:'25%',height:'100%',alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:60,height:60}}
              source={require('../../Image/HomeScreen/wechat.png')}></Image>
              <Text style={{fontSize:15}}>微信好友</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'25%',height:'100%',alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:60,height:60}}
              source={require('../../Image/HomeScreen/friend.png')}></Image>
              <Text style={{fontSize:15}}>朋友圈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'25%',height:'100%',alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:60,height:60}}
              source={require('../../Image/HomeScreen/qq.png')}></Image>
              <Text style={{fontSize:15}}>QQ好友</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'25%',height:'100%',alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:60,height:60}}
              source={require('../../Image/HomeScreen/share.png')}></Image>
              <Text style={{fontSize:15}}>复制链接</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{width:'100%',height:'25%',backgroundColor:'#f2f2f2',alignItems:'center',justifyContent:'center'}}
           onPress={() => this.refs.modal6.close()} >
            <Text style={{fontSize:15}}>取消</Text>
          </TouchableOpacity>        
        </Modal>
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
  works1:{
    width:370,
    height:230,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  works1pic:{
    width:170,
    height:210,
    // backgroundColor:'skyblue',
    marginRight:25,
    flexDirection:'column-reverse',
    marginTop:20
  },
  works2pic:{
    width:170,
    height:210,
    // backgroundColor:'skyblue',
    flexDirection:'column-reverse',
    marginTop:20
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
