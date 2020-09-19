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
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

var URL = "http://192.168.50.91:3000/users/fensi/list";

export default class fansScreen extends Component {
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
          docs:json.docs[0].fensi,
        })
      })
      .catch((error)=>console.error(error))
      .finally(()=>{
        this.setState({isLonding:false});
      })
  }

  render(){
    const { navigation } = this.props;
    const data = this.state.docs;
  return (
    <View style={styles.container}>
      <View style={{
            backgroundColor:"#fff",
            height:45,
            alignItems:"center",
            justifyContent:"center",
            flexDirection:'row',
            borderBottomWidth:0.5,
            borderBottomColor:"#000",}}>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            style={{right:155}}>
              <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
              <Text style={{fontSize:18,
                textAlign: 'center',
                textAlignVertical: 'center',}}>粉丝</Text>
          </View>
      <View style={styles.contant}>
          <FlatList
          data = {data}
          renderItem = {({item})=>
          <View style = {styles.one}>
              <View style={styles.headphoto}>
                  <Image style={{width:'100%',height:'100%',borderRadius:50}} 
                          source={{uri:item.touxiang}}>
                  </Image>
              </View>
              <View style={styles.massage}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={styles.key}>{item.yonghuming}</Text>
                  </View>
              </View>
              <View style={styles.like}>
              <Text style={{fontSize:17}}>+</Text>
                  <Text style={{fontSize:15}}>关注</Text>
              </View>
          </View>
          }
          />
      </View>
    </View>
   )};
}
const styles = StyleSheet.create({
container:{
width:'100%',
height:'100%',
backgroundColor:'#f2f2f2',
},
contant:{
},
return:{
width:30,
height:30,
//   backgroundColor:'blue',
},
one:{
width:'100%',
height:90,
flexDirection:'row',
backgroundColor:'#fff',
alignItems:'center',
borderColor:'black',
borderBottomWidth:0.5
// marginTop:20
},
key:{
marginLeft:10

},
headphoto:{
width:60,
height:60,
backgroundColor:'blue',
marginLeft:15,
borderRadius:50
},
massage:{
width:230,
height:60,
//   backgroundColor:'red',
justifyContent:'center'
},
like:{
  width:70,
  height:25,
  // backgroundColor:'skyblue',
  borderRadius:20,
  alignItems:'center',
  justifyContent:'center',
  borderColor:'black',
  borderWidth:1,
  flexDirection:'row'
}

})