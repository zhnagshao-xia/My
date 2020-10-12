import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Button,
  TouchableOpacity, TextInput, Image, ScrollView, FlatList,
  ImageBackground
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL = http+"/users/shoucang/list";

export default class CollectionScreen extends Component {
  constructor(props) {
    super(props);
    const { navigation, route } = this.props;
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
      .then((json) => {
        this.setState({
          docs: json.docs[0].shoucang,
        })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      })
  }

  render() {
    const { navigation } = this.props;
    const data = this.state.docs;
    return (
      <View style={styles.container}>
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
            }}>收藏</Text>
          </View>
        </View>
        <ScrollView>
          <FlatList
            data={data}
            renderItem={({ item }) =>
            <TouchableOpacity activeOpacity={0.8}
            onPress={()=>{
              navigation.navigate('heritageDetails',{xiangmu:item.xiangmu,cityname:item.suozaidi})
            }}>
              
              <View
              // source={require('../../Image/MyScreen/bg.jpg')}
              style={{ width: '100%', height: 150, alignItems: 'center', flexDirection: 'column-reverse', marginBottom: 10}}>
                <View style={{width:'85%',borderRadius:17,overflow:"hidden"}}>
                <Image 
                style={{ width: '100%', height: '100%' }} 
                source={{ uri: https+item.zhanshitu }}
                ></Image>
                <View style={{ width: '100%', 
                backgroundColor: 'rgba(20,20,20,0.5)',
                  justifyContent: 'center' ,
                  position:"absolute",
                  padding:10,
                  bottom:0}}>
                  <Text style={{ fontSize: 15, color: '#fff' }}>{item.xiangmu}</Text>
                </View>
              </View>
              </View>
              </TouchableOpacity>
            }
          />
        </ScrollView>
      </View>
    )
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contant: {
    width: '100%',
    backgroundColor: '#fff',

  },
}); 