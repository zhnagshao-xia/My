import React ,{Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

var http = "http://192.168.50.91:3000";
var URL1 = http+"/shouyiren/craftsman";
var URL2 = http + "/shouyiren/addguanzhu1";
var URL3 = http + "/shouyiren/addguanzhu2";
var URL4 = http + "/shouyiren/addguanzhu3";
var copyname;
var copytouxiang;

export default class CollectionScreen extends Component{
  constructor(props) {
    super(props);
    const {navigation,route} = this.props;
    let username = route.params.username;
    let usericon = route.params.usericon;
    this.state = {
      username,
      usericon,
      docs: [],
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(URL1, {//手艺人
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
      });
    }

    _onClickAddguanzhu1 = () => {
      fetch(URL2, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          name: copyname,
          touxiang: copytouxiang,
        })
      })
        .then(function (res) {
          return res.json();
        }).then(function (json) {
          if (json.code == 200) {
            Alert.alert("关注成功")
          }
        })
    }
  
    _onClickAddguanzhu2 = () => {
      fetch(URL3, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          usericon: this.state.usericon,
          name: copyname,
        })
      })
        .then(function (res) {
          return res.json();
        }).then(function (json) {
          if (json.code == 200) {
            Alert.alert("关注成功")
          }
        })
    }

    _onClickAddguanzhu3 = () => {
      fetch(URL4, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          usericon: this.state.usericon,
          username2: copyname,
        })
      })
        .then(function (res) {
          return res.json();
        }).then(function (json) {
          if (json.code == 200) {
            Alert.alert("关注成功")
          }
        })
    }

  render(){
    const { navigation } = this.props;
    const data = this.state.docs;
    const username = this.state.username;
    const usericon = this.state.usericon;
  return (
    <View>
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
            style={{right:130}}>
              <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
              <Text style={{fontSize:18,
                textAlign: 'center',
                textAlignVertical: 'center',}}>推荐手艺人</Text>
          </View>
    <ScrollView >
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <View style={styles.BigSize}>
            <View style={{ width: '100%', height: 190 }}>
              <Image
                style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
                source={{uri:item.xingxiangtu}}>
              </Image>
            </View>
            <View style={styles.fourword}>
              <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <View style={{ marginLeft: 110, marginVertical: 10 }}>
                  <Text style={{ fontSize: 14 }}>{item.name}</Text>
                  <Text style={{ color: '#c6a46c', fontSize: 12 }}>{item.chenghao}</Text>
                </View>
                <TouchableOpacity 
                style={styles.guanzhu}
                onPress={() => {
                    copyname = item.name,
                    copytouxiang = item.touxiang,
                    this._onClickAddguanzhu1(),
                    this._onClickAddguanzhu2()
                }} >
                  <Text style={{ color: '#945357', fontSize: 12, marginRight: 3 }}>+</Text>
                  <Text style={{ fontSize: 12 }}>关注</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => navigation.navigate('手艺人详细页面',{name:item.name,username:username,usericon:usericon})}
                style={styles.touxiang}>
                  <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                    source={{uri:item.touxiang}}>
                  </Image>
                </TouchableOpacity>
              </View>
              <Text style={{ marginLeft: 30, fontSize: 14 }}>{item.xingrong}</Text>
            </View>
          </View>
        }
      />
    </ScrollView>
    </View>
  )};
}


const styles = StyleSheet.create({
  BigSize: {
    width: '95%',
    margin: 10
  },
  touxiang: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
    top: -25,
    left: 20,
    overflow: "hidden",
    resizeMode: "center",
  },
  guanzhu: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#c9c5c5',
    width: 50,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5
  },
  fourword: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#b5b5b5',
    paddingBottom: 20
  }
});