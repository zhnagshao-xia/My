import React, {Component} from 'react';
import {
  StyleSheet, 
  FlatList,
  Text,
  View,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default class orderScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style = {styles.container}>
        <View style={{height:45,
        backgroundColor:"pink",
        alignItems:"center",
        justifyContent:"center"}}>
        <View style={{flexDirection:'row',justifyContent:"space-between",width:"90%"}}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}>
          <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
          <Text style={{fontSize:18,
            textAlign: 'center',
            textAlignVertical: 'center',}}>活动</Text>
          <TouchableOpacity>
          <FontAwesome name={'clock-o'} size={25} color={'#000'} /></TouchableOpacity>
      </View>
      </View>
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
                <View style={{width:85,height:100,margin:10,backgroundColor:'#000'}}>
                </View>
                <View style={{ width:200,height:85,marginTop:10}}>
                    <Text style={{width:'100%',fontSize:13}}>{item.key}</Text>
                    <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                        <Text style={{fontSize:14,color:'#f76220'}}>{item.price}</Text>
                        <Text style={{fontSize:14}}>已签收</Text>
                    </View>
                  
                <TouchableOpacity 
                style={{
                  width:60,
                  borderRadius:15,
                  alignItems:'center',
                  justifyContent:'center',
                  borderColor:'black',
                  borderWidth:0.7,
                  marginTop:10}}>
                  <Text style={{fontSize:14}}>评 价</Text>
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
    height: 130,
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