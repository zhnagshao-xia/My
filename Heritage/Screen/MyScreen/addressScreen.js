import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native"; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default class addressScreen extends Component {
    render() {
      const { navigation } = this.props;
      return (
          <View style={styles.container}>
            <View style={{backgroundColor:"#fff",
            height:45,
            alignItems:"center",
            justifyContent:"center",
            flexDirection:'row',
            borderBottomWidth:0.5,
            borderBottomColor:"#000",}}>
        <View style={{flexDirection:'row',justifyContent:"space-between",width:"90%"}}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}>
          <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
          <Text style={{fontSize:18,
            textAlign: 'center',
            textAlignVertical: 'center',}}>地址管理</Text>
          <TouchableOpacity
          onPress={() => navigation.navigate('编辑')}>
          <AntDesign name={'plus'} size={25} color={'#000'} /></TouchableOpacity>
      </View>
      </View>
            <View > 
            <FlatList
            data = {[
              {key:'张三',number:'188888888',area:'浙江省杭州市拱墅区上塘街道舟山东路36号'},
              {key:'李四',number:'199999999',area:'浙江省杭州市拱墅区上塘街道舟山东路36号'},
              {key:'王二',number:'177777777',area:'浙江省杭州市拱墅区上塘街道舟山东路36号'},
              {key:'王二',number:'177777777',area:'浙江省杭州市拱墅区上塘街道舟山东路36号'},
            ]}
            renderItem = {({item})=>
          <View style = {styles.one}>
              <View style={styles.headphoto}>
                <Image style={{width:'100%',height:'100%',borderRadius:50}} source={require('../../Image/HomeScreen/2.jpg')}></Image>
              </View>
              <View style={styles.massage}>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.key}>{item.key}</Text>
                  <Text style={styles.number}>{item.number}</Text>
                </View>
                <Text style={styles.number}>{item.area}</Text>
              </View>
              <View style={styles.edit}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('修改')}
                style={{width:50,height:50,justifyContent:'center'}}>
                  <Text style={{fontSize:15}}>编辑</Text>
                </TouchableOpacity>
              </View>
          </View>
            }
          />
            </View>
          </View>
         );
    }
  }
  const styles = StyleSheet.create({
    container:{
      width:'100%',
      height:'100%',
      backgroundColor:'#f2f2f2',
    },
    add:{
      width:30,
      height:30,
      backgroundColor:'red',
      marginLeft:140
    },
    one:{
      width:'100%',
      height:90,
      flexDirection:'row',
      backgroundColor:'#fff',
      alignItems:'center',
      borderColor:'black',
      borderBottomWidth:0.5
    },
    headphoto:{
      width:50,
      height:50,
      marginLeft:15,
      borderRadius:50,
    },
    massage:{ 
      width:'65%',
      height:60,
      paddingHorizontal:10
    },
    edit:{
      width:60,
      height:60,
      borderColor:'#000',
      borderLeftWidth:0.7,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:10
    }
  
  })