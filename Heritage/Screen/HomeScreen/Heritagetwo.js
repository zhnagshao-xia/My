import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native';

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL1 = http + "/feiyi/find";

export default class Heritagetwo extends Component {
  // constructor(props) {
  //   super(props);
  //   const { navigation, route } = this.props;
  //   let cityname = route.params.cityname;
  //   this.state={
  //       cityname,
  //       leibie,
  //       docs:[]
  //   };
  // }


  fetchData=()=> {
    fetch(URL1, {//对应城市项目列表查询
        method: 'POST',
        credentials: "include",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cityname: this.props.cityname,
          leibie:this.state.leibie
        })
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
  }
  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
        <ScrollView>
          <View style={{ marginTop: 10 }}>
            <FlatList
              data={[
                {
                  demo: '50',
                  demo1: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                },
                {
                  demo: '50',
                  demo1: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                },
                {
                  demo: '50',
                  demo1: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                },
                {
                  demo: '50',
                  demo1: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                },
                {
                  demo: '50',
                  demo1: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                },
                {
                  demo: '50',
                  demo1: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                },
              ]}
              renderItem={({ item }) =>
                <View style={{
                  width: '100%',
                  height: 300,
                  backgroundColor: "#fff",
                  alignItems: "center",
                  paddingVertical: 10,
                  marginBottom: 20
                }}>
                  <View style={{ width: '95%', flexDirection: "column" }}>
                    <View style={{ width: "100%", height: 200 }}>
                      <Image style={{ width: '100%', height: "100%" }}
                        source={require('../../Image/HomeScreen/activity.png')}></Image>
                    </View>
                    <TouchableOpacity activeOpacity={0.8}
                      onPress={() => navigation.navigation("heritageDetails")}>
                      <Text style={{ fontSize: 20, lineHeight: 40, letterSpacing: 2 }}>啦啦啦啦啦啦</Text>
                      <Text ellipsizeMode="tail" style={{ height: 35 }}>{item.demo1}</Text>
                    </TouchableOpacity>
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