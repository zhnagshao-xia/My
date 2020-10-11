import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Tabs, Flex } from '@ant-design/react-native';

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL1 = http + "/luntan/message1";
var URL2 = http + "/luntan/message2";
var URL3 = http + "/luntan/message3";

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      docs2:[],
      docs3:[]
    };
  }

  componentDidMount() {//componentDidMount:生命周期
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
        console.log(json.docs)
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      });
      fetch(URL2, {
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
            docs2: json.docs,
          })
          console.log(json.docs)
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLonding: false });
        });
        fetch(URL3, {
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
              docs3: json.docs,
            })
            console.log(json.docs)
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLonding: false });
          })
  }


  render() {
    const state = this.state;
    const { navigation } = this.props;
    const data = this.state.docs;
    const data2 = this.state.docs2;
    const data3 = this.state.docs3;
    const tabs = [
      { title: '新增回复' },
      { title: '新增关注' },
      { title: '新增点赞' },
    ];
    const style = {
      height: '100%',
      width: '100%',
    };
    return (
      <View style={{ width: '100%', height: '100%', backgroundColor: '#f2f2f2' }}>
        <View style={{
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 0.5,
          borderBottomColor: "#000",
        }}>
          <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "90%" }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <FontAwesome name={'angle-left'} size={25} color={'#000'} />
            </TouchableOpacity>
            <Text style={{
              fontSize: 18,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>消息</Text>
            <View>
            </View>
          </View>
        </View>
        <View style={{ width: '100%', height: 50, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around' }}>
          <ImageBackground style={{ width: 40, height: 40, marginTop: 10 }}
            source={require('../../Image/message/massage.png')}></ImageBackground>
          <ImageBackground style={{ width: 40, height: 40, marginTop: 10 }}
            source={require('../../Image/message/love.png')}></ImageBackground>
          <ImageBackground style={{ width: 40, height: 40, marginTop: 10 }}
            source={require('../../Image/message/good.png')}></ImageBackground>
        </View>
        <View style={{ width: '100%', height: 600, backgroundColor: '#f2f2f2' }}>
          <Tabs
            tabs={tabs}
            tabBarTextStyle={{
              color: "#945357",
              fontSize: 15
            }}
            tabBarUnderlineStyle={{
              width: 65,
              height: 1,
              marginLeft: 35,
              backgroundColor: '#945357',
            }}
          >
            <View style={{ width: '100%', height: '100%' }}>
              <FlatList
                data={data}
                renderItem={({ item }) =>
                    <View style={{ width: '100%', height: 80, backgroundColor: '#fff', marginBottom: 10, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                      <View style={styles.headphoto}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 50 }}
                          source={{ uri: https + item.usericon }}>
                        </Image>
                      </View>
                      <Text style={{ marginLeft: 10, fontSize: 13 }}>{item.username}</Text>
                      <Text style={{ fontSize: 15, color: '#955458', marginLeft: 10 }}>回复了</Text>
                      <Text style={{ marginLeft: 10, fontSize: 13 }}>你</Text>
                    </View>
                }
              />
            </View>
            <View style={{ width: '100%', height: '100%' }}>
              <FlatList
                data={data2}
                renderItem={({ item }) =>
                    <View style={{ width: '100%', height: 80, backgroundColor: '#fff', marginBottom: 10, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                      <View style={styles.headphoto}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 50 }}
                          source={{ uri: https + item.usericon }}>
                        </Image>
                      </View>
                      <Text style={{ marginLeft: 10, fontSize: 13 }}>{item.username}</Text>
                      <Text style={{ fontSize: 15, color: '#955458', marginLeft: 10 }}>关注了</Text>
                      <Text style={{ marginLeft: 10, fontSize: 13 }}>你</Text>
                    </View>
                }
              />
            </View>
            <View style={{ width: '100%', height: '100%' }}>
              <FlatList
                data={data3}
                renderItem={({ item }) =>
                    <View style={{ width: '100%', height: 80, backgroundColor: '#fff', marginBottom: 15, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                      <View style={styles.headphoto}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 50 }}
                          source={{ uri: https + item.usericon }}>
                        </Image>
                      </View>
                      <Text style={{ marginLeft: 10, fontSize: 13 }}>{item.username}</Text>
                      <Text style={{ fontSize: 15, color: '#955458', marginLeft: 10 }}>点赞了</Text>
                      <Text style={{ marginLeft: 10, fontSize: 13 }}>你</Text>
                    </View>
                }
              />
            </View>
          </Tabs>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  headphoto: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    marginLeft: 15,
    borderRadius: 50,
    overflow:'hidden',
    resizeMode:"center"
  },
})