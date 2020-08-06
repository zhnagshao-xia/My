import React, {Component} from 'react';
import {
  StyleSheet, 
  FlatList,
  Text,
  View,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class orderScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style = {styles.container}>
          <FlatList
            data = {[
              {key:'传统纯手工打造油纸伞来自西子湖畔的美意...',
              price:'￥288'},
              {key:''},
              {key:''},
              {key:''},
              {key:''},
    
            ]}
            renderItem = {({item})=>
            <View style = {styles.one}>
              <View style={{flexDirection:'row',width:'100%',}}>
                <View style={{width:'22%',height:100,margin:10,backgroundColor:'#000'}}>
                    {/* <Image style={{width:85,height:85}} source={require('./picture/umbrella2.png')}></Image> */}
                </View>
                <View style={{ width:'70%',height:85,marginTop:10}}>
                    <Text style={{width:'100%',fontSize:16}}>{item.key}</Text>
                    <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                        <Text style={{fontSize:16,color:'#f76220'}}>{item.price}</Text>
                        <Text style={{}}>已签收</Text>
                    </View>
                  
                <TouchableOpacity 
                style={{width:65,
                height:25,
                borderRadius:15,
                alignItems:'center',
                justifyContent:'center',
                borderColor:'black',
                borderWidth:0.7,
                position:'absolute'}}>
                  <Text style={{fontSize:15}}>评 价</Text>
                </TouchableOpacity>
              </View>
              </View> 
            </View>
            }
          />
      </View> 
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'#f2f2f2',
  },
 one: {
    height: 140,
    width:'90%',
    backgroundColor:'#fff',
    marginLeft:18,
    marginTop:18,
    borderRadius:15,
  },

  footer:{
    width:'100%',
    height:'7%',

  }
});