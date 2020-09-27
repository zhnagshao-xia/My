import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modalbox';

var http = "http://192.168.50.91:3000";
var URL1 = http+"/chuanchengzhi/addnumber";
var URL2 = http+"/chuanchengzhi/details";

export default class heritageDetails extends Component{
    constructor(props) {
        super(props);
        const {navigation,route} = this.props;
        let name = route.params.name;
        this.state = {
          name,
          isOpen: false,
          isDisabled: false,
          swipeToClose: true,
          sliderValue: 0.3,
          docs:[]
        };
      }

      componentDidMount() {//componentDidMount:生命周期
        this.fetchData();
        this._onClickAdd();
      }

      _onClickAdd=()=> {//浏览量
        fetch(URL1, {
          method: 'POST',
          credentials: "include",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name:this.state.name
          })
        })
        .then(function (res) {
          return res.json();
      }).then(function (json) {
          if (json.code == 200) {
              
          } 
      })
      } 

      fetchData() {
        fetch(URL2, {
          method: 'POST',
          credentials: "include",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.state.name
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

    render() {
        const { navigation } = this.props;
        const data = this.state.docs;
    return (
        <View>
            <View style={{height:45,
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:0.5,
            borderBottomColor:"#000",
            flexDirection:'row',
            justifyContent:"space-between",}}>
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        style={{width:50,
          height:"100%",
          justifyContent:"center",
          alignItems:"center",}}>
          <FontAwesome name={'angle-left'} size={25} color={'#000'} />
          </TouchableOpacity>
          <Text style={{fontSize:18,
            textAlign: 'center',
            textAlignVertical: 'center',}}>故事</Text>
          <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => this.refs.modal6.open()} 
        style={{width:50,
          height:"100%",
          justifyContent:"center",
          alignItems:"center",
          }}>
          <Feather name={'more-horizontal'} size={20} color={'#000'} /></TouchableOpacity>
      </View>
        <ScrollView >
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <View style={{ 
                        paddingHorizontal: 30,
                     paddingTop: 20,
                     marginBottom:90,
                     alignItems:"center",}}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 16 }}>{item.storytitle}</Text>
                            <Text style={{ lineHeight: 30,fontSize: 15 }}>{item.name}</Text>
                        </View>
                        <View>
                            <Text style={{ textAlign: 'auto', lineHeight: 25, fontSize: 15 }}>&#12288;&#12288;{item.project}</Text>
                            <View style={{ alignItems: "center" }}>
                                <Image style={{
                                    width: 200,
                                    height: 100,
                                    resizeMode: 'stretch',
                                    marginVertical: 15
                                }}
                                    source={{uri:item.picture}}>
                                </Image>
                            </View>
                            <Text style={{ textAlign: 'auto', lineHeight: 25, fontSize: 15 }}>&#12288;&#12288;{item.story}</Text>
                        </View>
                    </View>
                }
            />
        </ScrollView>
        <Modal style={styles.modal4} position={"bottom"} ref={"modal6"} >
          <View style={{width:'100%',height:'60%',flexDirection:'row'}}>
            <TouchableOpacity style={{width:'25%',height:'100%',alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:60,height:60}}
              source={require('../../Image/HomeScreen/wechat.png')}></Image>
              <Text style={{fontSize:15}}>微信好友</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'25%',height:'100%',alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:60,height:60}}
              source={require('../../Image/HomeScreen/friend.png')}></Image>
              <Text style={{fontSize:15}}>朋友圈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'25%',height:'100%',alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:60,height:60}}
              source={require('../../Image/HomeScreen/qq.png')}></Image>
              <Text style={{fontSize:15}}>QQ好友</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'25%',height:'100%',alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:60,height:60}}
              source={require('../../Image/HomeScreen/share.png')}></Image>
              <Text style={{fontSize:15}}>复制链接</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{width:'100%',height:'40%',backgroundColor:'#f2f2f2',alignItems:'center'}}
           onPress={() => this.refs.modal6.close()} >
            <Text style={{fontSize:15,marginTop:3}}>取消</Text>
          </TouchableOpacity>        
        </Modal>
        </View>
    );
}
}
const styles = StyleSheet.create({
    modal4: {
        height: 200,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',    
      },
    
});