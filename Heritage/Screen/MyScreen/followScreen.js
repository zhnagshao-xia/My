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
  Alert,
  ScrollView
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL = http + "/users/guanzhu/list";
var URL1 = http + "/users/deleteguanzhu1";
var URL2 = http + "/users/deleteguanzhu2";
var URL3 = http + "/users/deleteguanzhu3";
var copyyonghuming;

export default class followScreen extends Component {
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
          docs: json.docs[0].guanzhu,
        })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      })
  }

  _onClickDeleteguanzhu1 = () => {
    fetch(URL1, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        yonghuming: copyyonghuming,
      })
    })
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.code == 200) {
          // Alert.alert("已取消关注")
        }
      })
  }

  _onClickDeleteguanzhu2 = () => {
    fetch(URL2, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        yonghuming: copyyonghuming,
      })
    })
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.code == 200) {
          // Alert.alert("取关成功")
        }
      })
  }

  _onClickDeleteguanzhu3 = () => {
    fetch(URL3, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        yonghuming: copyyonghuming,
      })
    })
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.code == 200) {
          // Alert.alert("已取消关注")
        }
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
            }}>关注</Text>
          </View>
        </View>
        <ScrollView style={styles.contant}>
          <View style={{ marginBottom: 20 }}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={styles.one}>
                  <View style={styles.massage}>
                    <View style={styles.headphoto}>
                      <Image style={{ width: '100%', height: '100%', borderRadius: 50 }}
                        source={{ uri: https + item.touxiang }}>
                      </Image>
                    </View>
                    <Text style={styles.key}>{item.yonghuming}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      copyyonghuming = item.yonghuming,
                        this._onClickDeleteguanzhu1(),
                        this._onClickDeleteguanzhu2(),
                        this._onClickDeleteguanzhu3(),
                        this.fetchData()
                      // Alert.alert("已取消关注")
                    }}>
                    <View style={styles.like}>
                      <Text style={{ fontSize: 13 }}>取消关注</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    )
  };
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f2f2',
  },
  contant: {
  },
  return: {
    width: 30,
    height: 30,
    //   backgroundColor:'blue',
  },
  one: {
    width: '90%',
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderColor: 'black',
    borderBottomWidth: 0.5,
    justifyContent:"space-between"
    // marginTop:20
  },
  key: {
    marginLeft: 10

  },
  headphoto: {
    width: 45,
    height: 45,
    backgroundColor: '#fff',
    marginLeft: 15,
    borderRadius: 50,
    overflow: 'hidden',
    resizeMode: "center"
  },
  massage: {
    width: "100%",
    flexDirection: "row",
    alignItems:"center"
  },
  like: {
    width: 70,
    height: 25,
    // backgroundColor:'skyblue',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row'
  }

})