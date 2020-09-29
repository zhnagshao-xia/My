import React, {Component} from 'react';
import {
  StyleSheet, 
  FlatList,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

var URL = "http://192.168.50.91:3000/users/dindan/list";

export default class orderScreen extends Component {
  constructor(props) {
    super(props);
    const {navigation,route} = this.props;
    let username = route.params.username;
    this.state = {
      username,
      docs: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {//componentDidMount:生命周期
    this.fetchData();
  }

  fetchData() {
    fetch(URL, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username
      })
    })
      .then((response) => response.json())
      .then((json)=>{  
        this.setState({
          docs:json.docs[0].dindan,
        })
      })
      .catch((error)=>console.error(error))
      .finally(()=>{
        this.setState({isLonding:false});
      })
  }

  render() {
    const { navigation } = this.props;
    const data = this.state.docs;
    return (
      <View>
       <View style={{
          backgroundColor: "#fff",
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'row',
        }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            style={{
              width: 50,
              position: "absolute",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              left: 0
            }}>
            <FontAwesome name={'angle-left'} size={25} color={'#000'} />
          </TouchableOpacity>
          <View style={{ width: 200 }}>
            <Text style={{
              fontSize: 18,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>我的订单</Text>
          </View>
        </View>
      <ScrollView style = {styles.container}>
        <View style={{marginBottom:70}}>
          <FlatList
            data = {data}
            renderItem = {({item})=>
            <View style = {styles.one}>
              <View style={{flexDirection:'row',width:'100%',}}>
                <Image source={{uri:item.fengmian}}
                 style={{width:85,height:100,margin:10,backgroundColor:'red'}}>
                </Image>
                <View style={{ width:200,height:85,marginTop:10}}>
                    <Text style={{width:'100%',fontSize:13}}>{item.goods}</Text>
                    <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                        <Text style={{fontSize:14,color:'#f76220'}}>￥{item.price}</Text>
                        <Text style={{fontSize:14}}>{item.state}</Text>
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
      </ScrollView> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width:'100%',
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