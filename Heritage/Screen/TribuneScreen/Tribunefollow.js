import React ,{Component}from 'react';
import { Share,ScrollView, Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image, FlatList,Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL1 = http+"/luntan/guanzhu";
var URL2 = http+"/luntan/forward";
var URL3 = http+"/luntan/likes";
var copy_id;
var copy_id1;

export default class CollectionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs:[]
    };
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
        console.log(json.docs)
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      });
  }

  _onClickForward = () => {
    fetch(URL2, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: copy_id,
      })
    })
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.code == 200) {
          Alert.alert("收藏成功")
        }
      })
  }

  _onClickLikes = () => {
    fetch(URL3, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: copy_id1,
      })
    })
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.code == 200) {
          Alert.alert("点赞成功")
        }
      })
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
          
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
    this._onClickForward();
    this.fetchData();
  };

  render(){
    const { navigation } = this.props;
    const data = this.state.docs;
    return (
        <View style={{ width: '100%', backgroundColor: '#f2f2f2' }}>
          <FlatList
            data={data}
            renderItem={({ item }) =>
              <View style={styles.one}>
                <Text style={styles.demol}>{item.key}</Text>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                  <Image style={{ 
                    width: 50, 
                    height: 50, 
                    borderRadius: 50, 
                    backgroundColor: '#000', 
                    margin: 10 }} 
                    source={{uri:https+item.touxiang}}>
                    </Image>
                  <View >
                    <View style={{ 
                      flexDirection: 'row', 
                      alignItems: 'center', 
                      marginTop: 20, 
                      marginBottom: 10 }}>
                      <View>
                        <Text style={{ fontSize: 15, marginBottom: 3 }}>
                          {item.yonghuming}
                          </Text>
                        <Text style={{ fontSize: 12 }}>
                          {item.time}
                          </Text>
                      </View>
                    </View>
                    <View style={{ width: '85%', marginBottom: 10 }}>
                      <Text style={{ fontSize: 13 }}>
                        {item.content}
                        </Text>
                    </View>
                    <View style={{ 
                      width: 250, 
                      flexDirection: 'row', 
                      marginBottom: 10, 
                      justifyContent: 'space-between', }}>
                    <TouchableOpacity
                  activeOpacity={0.8}
                    onPress={() => { 
                      copy_id=item._id;
                      this.onShare(); 
                     }}>
                      <View style={{flexDirection: 'row',}}>
                    <EvilIcons name={'share-google'} size={30} color={'#000'} />
              <Text style={{marginLeft:5}}>{item.forward}</Text>
                    </View>
                    </TouchableOpacity> 
                  <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={()=>{
                    copy_id1=item._id;
                    this._onClickLikes();
                    this.fetchData();
                  }}>
                    <View style={{flexDirection: 'row',}}>
                    <FontAwesome name={'heart-o'} size={20} color={'#000'} />
                    <Text style={{marginLeft:5}}>{item.likes}</Text>
                    </View>
                    </TouchableOpacity> 
                  <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={()=>
                  navigation.navigate('mainbody',{_id:item._id})}>
                    <Feather name={'message-square'} size={22} color={'#000'} /></TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            }
          />
        </View>
    )};
  }
  const styles = StyleSheet.create({
    one: {
      width: '100%',
      marginBottom: 20,
      backgroundColor: '#fff'
    },
    demol: {
      fontSize: 0
    },
  
  })
  