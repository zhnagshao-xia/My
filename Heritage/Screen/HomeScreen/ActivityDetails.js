import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet, Image, TouchableOpacity,TouchableHighlight,AsyncStorage } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

var http = "http://192.168.50.91:3000";
var URL1 = http+"/activity/details";

export default class ActivityDetails extends Component {
    constructor(props){
        super(props);
        const {navigation,route} = this.props;
        let title = route.params.title;
        this.state={
            docs:[],
            title,
            username:"",
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

    componentDidMount(){
        this.fetchData();
      }
      
      fetchData() {
        fetch(URL1, {
          method: 'POST',
          credentials: "include",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: this.state.title
          })
        })
          .then((response) => response.json())
          .then((json)=>{  
            this.setState({
              docs:json.docs,
            })
          })
          .catch((error)=>console.error(error))
          .finally(()=>{
            this.setState({isLonding:false});
          })
      }

    render(){
        const { navigation } = this.props;
        const username  = this.state.username;
        navigation.isFocused = () => {
          console.log("监测用户状态")
          this.checkUserAction();
      }
        const data = this.state.docs;
    return (
        <View style={{marginBottom:40}}>
             <View style={{
            backgroundColor:"#fff",
            height:45,
            alignItems:"center",
            justifyContent:"center",
            flexDirection:'row',
            borderBottomWidth:0.5,
            borderBottomColor:"#000",}}>
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            style={{width:50,
                position:"absolute",
            height:"100%",
            justifyContent:"center",
            alignItems:"center",
            left:0}}>
              <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
              <View style={{width:200}}>
              <Text style={{fontSize:18,
                textAlign: 'center',
                textAlignVertical: 'center',}}>详情</Text>
                </View>
          </View>
        <ScrollView >
           
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <View style={{ 
                     paddingHorizontal: 30,
                     paddingTop: 20,
                     paddingBottom:40,
                     alignItems:"center" }}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 17 }}>{item.title}</Text>
                            <Text style={{ lineHeight: 30,fontSize: 17 }}>{item.sendtime}</Text>
                        </View>
                        <View>
                            <Text style={{ textAlign: 'auto', lineHeight: 25, fontSize: 15 }}>&#12288;&#12288;{item.content}</Text>
                            <View style={{ alignItems: "center" }}>
                                <Image style={{
                                    width: '100%',
                                    height: 250,
                                    resizeMode: 'stretch',
                                    marginVertical: 15
                                }}
                                    source={{uri:item.picture}}>
                                </Image>
                            </View>
                            <Text style={{ textAlign: 'auto', lineHeight: 25, fontSize: 15 }}>&#12288;&#12288;{item.content1}</Text>
                            <View style={{ alignItems: "center" }}>
                                <Image style={{
                                    width: '100%',
                                    height: 250,
                                    resizeMode: 'stretch',
                                    marginVertical: 15
                                }}
                                    source={{uri:item.picture1}}>
                                </Image>
                            </View>
                            <Text style={{ textAlign: 'auto', lineHeight: 25, fontSize: 15 }}>&#12288;&#12288;{item.content2}</Text>
                        </View>
                        <TouchableHighlight 
                        onPress={() => navigation.navigate('报名表',{username:username,title:item.title})}
                        underlayColor="rgba(86,132,145,0.6)"
                        style={{
                            marginTop:30,
                            width:80,
                            height:35,
                            backgroundColor:'#6092a0',
                            justifyContent:"center",
                            alignItems:"center",
                            borderRadius:10
                            }}>
                            <Text style={{color:'#fff',fontSize:14}}>去参加</Text>
                        </TouchableHighlight>
                    </View>
                }
            />
        </ScrollView>
        </View>
    );
}}
const styles = StyleSheet.create({
    
});
