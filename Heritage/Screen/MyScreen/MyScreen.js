import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    FlatList,
    ImageBackground,
    AsyncStorage
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

var URL= "http://192.168.50.91:3000/users/honor";

export default class MyScreen extends Component {
    state = {
        username: '立即登录',
        honor:"暂无",
    }

    checkUserAction = async () => {
        const res = await AsyncStorage.getItem('userInfo') || '{}'//AsyncStorage.getItem通过key字段来进行查询存储的数据，把该结果值作为参数传入第二个callback方法
        const { username = '' } = JSON.parse(res)
        username && this.setState({
            username
        })
        console.log(username),
        this.fetchData();
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
            //   if(json.code==200) 
            this.setState({
              honor:json.docs[0].honor,
            })
            console.log(json.docs)
          })
          .catch((error)=>console.error(error))
          .finally(()=>{
            this.setState({isLonding:false});
          })
      }

    render() {
        const { navigation } = this.props;
        const { username } = this.state;
        const honor = this.state.honor;
        navigation.isFocused = () => {
            console.log("监测用户状态")
            this.checkUserAction();
        }
        // console.log(username);
  return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flex:4}}>
                <ImageBackground
                    style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                    source={require('../../Image/MyScreen/background.png')}>
                  </ImageBackground>
                </View>  
                <View style={{flex:2}}>
                  <View style={{width:90,height:90,borderRadius:50,position:'absolute',left:25,bottom:10,borderColor:'#fff',borderWidth:4,}}>
                <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'stretch'}}
                    source={require('../../Image/MyScreen/pic17.png')}>
                  </Image>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:5,}}>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('登录')}>
                    <Text style={{fontSize:16,marginLeft:125,marginRight:5}}>{username}</Text></TouchableOpacity>
                    <TouchableOpacity>
                    <FontAwesome name={'pencil'} size={16} color={'#000'}/>
                    </TouchableOpacity>
                    </View>
                    <Text style={{fontSize:13,marginLeft:125,marginTop:3,color:'#c9a974'}}>{honor}</Text>
                </View>
            </View>
            <View style={styles.contant}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('收藏',{username:username})}
                    style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:14}}>收藏</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => navigation.navigate('关注',{username:username})}
                style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:14}}>关注</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => navigation.navigate('粉丝',{username:username})}
                style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:14}}>粉丝</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <View style={{height:115,marginBottom:20,backgroundColor:'#fff',alignItems:'center'}}>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('订单',{username:username})}
                    style={{width:'90%',height:'50%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{width:20,justifyContent:"center",alignItems:"center"}}>
                        <FontAwesome name={'file-text-o'} size={20} color={'#000'} />
                        </View>
                        <Text style={{fontSize:14,marginLeft:10}}>我的订单</Text>
                        </View>
                        <FontAwesome name={'angle-right'} size={20} color={'#000'} />
                    </TouchableOpacity>
                    <View style={{width:'90%',height:0.5,backgroundColor:'grey'}}></View>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('地址',{username:username})}
                    style={{width:'90%',height:'50%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{width:20,justifyContent:"center",alignItems:"center"}}>
                        <FontAwesome name={'map-marker'} size={20} color={'#000'} />
                        </View>
                        <Text style={{fontSize:14,marginLeft:10}}>地址管理</Text>
                        </View>
                        <FontAwesome name={'angle-right'} size={20} color={'#000'} />
                    </TouchableOpacity>
                </View>
                <View style={{height:170,alignItems:'center',backgroundColor:'#fff'}}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('认证',{username:username})}
                style={{width:'90%',height:'33%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{width:20,justifyContent:"center",alignItems:"center"}}>
                        <FontAwesome name={'check-square-o'} size={20} color={'#000'} />
                        </View>
                        <Text style={{fontSize:14,marginLeft:10}}>认证</Text>
                        </View>
                        <FontAwesome name={'angle-right'} size={20} color={'#000'} />
                    </TouchableOpacity>
                    <View style={{width:'90%',height:0.5,backgroundColor:'grey'}}></View>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('客服')}
                    style={{width:'90%',height:'33%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{width:20,justifyContent:"center",alignItems:"center"}}>
                        <FontAwesome name={'phone'} size={20} color={'#000'} /></View>
                        <Text style={{fontSize:14,marginLeft:10}}>客服</Text>
                        </View>
                        <FontAwesome name={'angle-right'} size={20} color={'#000'} />
                    </TouchableOpacity>
                    <View style={{width:'90%',height:0.5,backgroundColor:'grey'}}></View>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('设置')}
                    style={{width:'90%',height:'33%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{width:20,justifyContent:"center",alignItems:"center"}}>
                        <FontAwesome name={'gear'} size={20} color={'#000'} /></View>
                        <Text style={{fontSize:14,marginLeft:10}}>设置</Text>
                        </View>
                        <FontAwesome name={'angle-right'} size={20} color={'#000'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
)}}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f2f2f2'
        
    },
    header:{
        flex:3,
        backgroundColor:'#f2f2f2'
    },
    contant:{
        height:80,
        marginBottom:20,
        flexDirection:'row'
    },
    footer:{
        flex:5,
        backgroundColor:'#f2f2f2',
    }
})