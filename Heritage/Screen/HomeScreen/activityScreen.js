import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Button,
  TouchableOpacity, TextInput, Image, ScrollView, FlatList, AsyncStorage,
  ImageBackground
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL1 = http + "/activity";

export default class activityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      username: "",
    }
  }

  checkUserAction = async () => {
    const res = await AsyncStorage.getItem('userInfo') || '{}'//AsyncStorage.getItem通过key字段来进行查询存储的数据，把该结果值作为参数传入第二个callback方法
    const { username = '' } = JSON.parse(res)
    username && this.setState({
      username
    })
    console.log(username)
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(URL1, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          docs: json.docs,
        })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      })
  }

  render() {
    const { navigation } = this.props;
    const username = this.state.username;
    navigation.isFocused = () => {
      console.log("监测用户状态")
      this.checkUserAction();
    }
    const data = this.state.docs;
    return (
      <View style={styles.container}>
        <View style={{
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 0.5,
          borderBottomColor: "#000",
          flexDirection: 'row',
          justifyContent: "space-between",
        }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            style={{
              width: 50,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <FontAwesome name={'angle-left'} size={25} color={'#000'} />
          </TouchableOpacity>
          <Text style={{
            fontSize: 18,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>活动</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('记录',{username:username})}
            style={{
              width: 50,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Entypo name={'back-in-time'} size={22} color={'#000'} />
          </TouchableOpacity>
        </View>
        <View style={styles.contant}>
          <View style={{ alignItems: 'center', marginBottom: 15 }}>
            <Image style={styles.biaozhi}
              source={require('../../Image/activityScreen/sigh.png')}></Image>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <Image style={styles.left}
              source={require('../../Image/activityScreen/left.png')}></Image>
            <ImageBackground style={styles.middle}
              source={require('../../Image/activityScreen/box.png')}>
              <Text style={{ color: 'red', fontSize: 15 }}>热门活动</Text>
            </ImageBackground>
            <Image style={styles.right}
              source={require('../../Image/activityScreen/right.png')}></Image>
          </View>
          <View style={{ width: '80%', top: -50, alignItems: "center" }}>
            <FlatList
              data={data}
              renderItem={({ item }) =>
                <View style={styles.one}>
                  <ImageBackground style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'stretch',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                    source={{ uri: https+item.picture1 }}>
                    <TouchableOpacity
                    activeOpacity={0.8}
                      onPress={() => navigation.navigate('详情', { title: item.title })}
                      style={{
                        backgroundColor: 'rgba(198,164,108,0.7)',
                        height: '50%',
                        width: '100%',
                        resizeMode: 'stretch',
                        justifyContent: 'center'
                      }}>
                      <Text style={styles.demol}>{item.title}</Text>
                      <Text style={styles.demo2}>{item.address}</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              }
            />
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: '#568491',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contant: {
    flex: 10,
    alignItems: 'center'
  },
  biaozhi: {
    width: 125,
    height: 125,
    resizeMode: 'stretch',
  },
  left: {
    width: 110,
    height: 90,
    resizeMode: 'stretch',
    marginTop: 20
  },
  right: {
    width: 110,
    height: 90,
    resizeMode: 'stretch',
    marginTop: 20
  },
  middle: {
    resizeMode: 'stretch',
    width: 120,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  one: {
    height: 150,
    width: 300,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:"#000",
    borderWidth:2
  },
  demol: {
    fontSize: 15,
  },
  demo2: {
    fontSize: 13,
    lineHeight: 20
  },
})