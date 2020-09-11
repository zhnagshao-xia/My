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
  Modal,
  Button
} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class App extends Component {
  state = {
    modalVisible: false,
    modalVisibleTwo: false,
    modalVisibleThird: false,
    modalVisibleFour: false,
};
_openModalWin = () => {
this.setState({modalVisible: true});
}
_closeModalWin = () => {
this.setState({modalVisible: false});
}
_openModalTwo = () => {
  this.setState({modalVisibleTwo: true});
  }
_closeModalTwo = () => {
  this.setState({modalVisibleTwo: false});
  }
_openModalThird = () => {
    this.setState({modalVisibleThird: true});
    }
_closeModalThird = () => {
    this.setState({modalVisibleThird: false});
    }
_openModalFour = () => {
      this.setState({modalVisibleFour: true});
      }
_closeModalFour = () => {
      this.setState({modalVisibleFour: false});
      
      }
    render() {
      return (
        <View>
           <View style={{height:45,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:0.5,
            borderBottomColor:"#000",}}>
        <View style={{flexDirection:'row',justifyContent:"space-between",width:"90%"}}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}>
          <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
          <Text style={{fontSize:18,
            textAlign: 'center',
            textAlignVertical: 'center',}}>活动记录</Text>
          <TouchableOpacity
           onPress={this._openModalFour}>
          <FontAwesome name={'trash-o'} size={25} color={'#000'} />
          </TouchableOpacity>
          <Modal
                    animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                    transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                    visible={this.state.modalVisibleFour} // 是否显示 modal 窗口
                    onRequestClose={() => { this._closeModalFour(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                    onShow={()=>{console.log('modal窗口显示了');}} // 回调函数会在 modal 显示时调用
                >
            <TouchableOpacity
              style={{height:'100%',width:'100%',position:"absolute"}}
              >
                    <View style={styles.modalLayer}>
                      <TouchableOpacity onPress={()=>{}}>
                        <View style={styles.modalContainer}>
                          <View style={{width:'100%',height:'60%',alignItems:'center',justifyContent:'center',borderBottomWidth:0.5,borderColor:'black'}}>
                            <Text style={styles.modalTitleStyle}>确认要清空所有记录？</Text>
                          </View>  
                            <View style={styles.cancel}>
                              <TouchableOpacity style={{width:'50%',height:'100%',alignItems:'center',justifyContent:'center'}}
                                onPress={this._closeModalFour}>
                                <Text style={{fontSize:15}}>取 消</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={{width:'50%',height:'100%',alignItems:'center',justifyContent:'center',borderColor:'black',borderLeftWidth:0.5}}
                                onPress={this._closeModalFour}>
                                <Text style={{fontSize:15,color:'#935558'}}>确 认</Text>
                              </TouchableOpacity> 
                            </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/* </TouchableWithoutFeedback> */}
            </TouchableOpacity>
                </Modal>
      </View>
      </View>
          <View style={styles.container}>
            <FlatList
                data = {[
                {key:'主题：浙江·非遗博览会举行',place:'地点：杭州市西湖区',time:'时间：2020.08.01-2020.09.01'},
                {key:'主题：浙江·非遗博览会举行',place:'地点：杭州市西湖区',time:'时间：2020.08.01-2020.09.01'},
                {key:'主题：浙江·非遗博览会举行',place:'地点：杭州市西湖区',time:'时间：2020.08.01-2020.09.01'},
                ]}
                renderItem = {({item})=>
                <View style = {styles.one}>
                     <View style={{width:'100%',height:20,flexDirection:'row-reverse'}}>
                         <TouchableOpacity style={styles.mark}
                          onPress={this._openModalWin}
                          >
                         <AntDesign
                            name={'close'}
                            size={20}
                            color={'#000'} />
                         </TouchableOpacity>
                         <Modal
                    animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                    transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                    visible={this.state.modalVisible} // 是否显示 modal 窗口
                    onRequestClose={() => { this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                    onShow={()=>{console.log('modal窗口显示了');}} // 回调函数会在 modal 显示时调用
                >
            <TouchableOpacity
              style={{height:'100%',width:'100%',position:"absolute"}}
              >
                    <View style={styles.modalLayer}>
                      <TouchableOpacity onPress={()=>{}}>
                        <View style={styles.modalContainer}>
                          <View style={{width:'100%',height:'60%',alignItems:'center',justifyContent:'center',borderBottomWidth:0.5,borderColor:'black'}}>
                            <Text style={styles.modalTitleStyle}>确认要删除这条记录？</Text>
                          </View>  
                            <View style={styles.modalButtonStyle}>
                              <TouchableOpacity style={{width:'50%',height:'100%',alignItems:'center',justifyContent:'center'}}
                                onPress={this._closeModalWin}>
                                <Text style={{fontSize:15}}>取 消</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={{width:'50%',height:'100%',alignItems:'center',justifyContent:'center',borderColor:'black',borderLeftWidth:0.5}}
                                onPress={this._closeModalWin}>
                                <Text style={{fontSize:15,color:'#935558'}}>确 认</Text>
                              </TouchableOpacity> 
                            </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/* </TouchableWithoutFeedback> */}
            </TouchableOpacity>
                </Modal>
                     </View>
                    <View style={styles.first}>
                      <Text style={styles.key}>{item.key}</Text>  
                      <TouchableOpacity style={styles.message}>
                        <Text style={{fontSize:12, textAlign:'center'}}>原 文</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.second}>
                      <Text style={styles.key}>{item.place}</Text>
                      <TouchableOpacity style={{width:15,height:15,marginLeft:10,alignItems:'center',justifyContent:'center'}}
                      onPress={this._openModalTwo}>
                        <Entypo
                          name={'location-pin'}
                          size={20}
                          color={'#000'} />
                      </TouchableOpacity>
                      <Modal
                    animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                    transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                    visible={this.state.modalVisibleTwo} // 是否显示 modal 窗口
                    onRequestClose={() => { this._closeModalTwo(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                    onShow={()=>{console.log('modal窗口显示了');}} // 回调函数会在 modal 显示时调用
                >
            <TouchableOpacity
              style={{height:'100%',width:'100%',position:"absolute"}}
              onPress={this._closeModalTwo}>
                    <View style={styles.modalLayer}>
                      <TouchableOpacity onPress={()=>{}}>
                        <View style={styles.daohang}>
                          <View style={{width:'90%',height:'75%'}}>
                            <Image style={{width:'100%',height:'100%'}}
                            source={require('../../Image/Activityhistory/ditu.png')}
                            ></Image>
                          </View>
                          <View style={{width:'90%',height:'15%'}}>
                            <View style={{width:'100%',height:'60%',backgroundColor:'#fff',alignItems:'center',flexDirection:'row'}}>
                              <Text style={{fontSize:15}}>位置</Text>
                              <TouchableOpacity style={{width:20,height:20,marginLeft:250,alignItems:'center',justifyContent:'center'}}>
                                <AntDesign
                                name={'close'}
                                size={20}
                                color={'#000'} />
                              </TouchableOpacity>
                            </View>
                            <Text style={{fontSize:12}}>浙江省杭州市西湖区</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
              </TouchableOpacity>
                </Modal>
                    </View>
                    <View style={styles.third}>
                      <Text style={styles.key}>{item.time}</Text>
                      <TouchableOpacity style={{width:40,height:40,marginLeft:135,alignItems:'center',justifyContent:'center'}}
                     onPress={this._openModalThird}>
                        <FontAwesome
                          name={'th'}
                          size={40}
                          color={'grey'} />
                      </TouchableOpacity>
                      <Modal
                      animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                      transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                      visible={this.state.modalVisibleThird} // 是否显示 modal 窗口
                      onRequestClose={() => { this._closeModalThird(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                      onShow={()=>{console.log('modal窗口显示了');}} // 回调函数会在 modal 显示时调用
                      >
                        <TouchableOpacity
                        style={{height:'100%',width:'100%',position:"absolute"}}>
                          <View style={styles.modalLayer}>
                            <TouchableOpacity onPress={()=>{}}>
                              <View style={styles.ma}>
                                <View style={{width:'100%',height:'85%',borderColor:'grey',borderBottomWidth:1,alignItems:'center'}}>
                                  <View style={{width:'100%',height:'85%',alignItems:'center',justifyContent:'center'}}>
                                    <Image style={{width:200,height:200}}
                                    source={require('../../Image/Activityhistory/ma.jpg')}
                                    ></Image>
                                  </View>
                                  <View style={{width:'100%',height:'15%',alignItems:'center'}}>
                                    <Text style={{fontSize:15}}>现场签到</Text>
                                  </View>
                                </View>
                                <TouchableOpacity style={{width:'100%',height:'15%',alignItems:'center',justifyContent:'center'}}
                                onPress={this._closeModalThird}>
                                  <Text style={{fontSize:15,color:'#935558'}}>关闭</Text>
                                </TouchableOpacity>
                              </View>
                            </TouchableOpacity>
                         </View>
                        </TouchableOpacity>
                      </Modal>
                    </View>
                </View>
                }
            />
          </View>
          </View>
         );
    }
  }
  const styles = StyleSheet.create({
    container:{
      width:'100%',
      height:'100%',
      backgroundColor:'#f2f2f2',
    },
    one:{
      width:'100%',
      height:110,
      backgroundColor:'#fff',
      marginBottom:15,
      // marginTop:20
    },
    key:{
      marginLeft:10
    },
    mark:{
      width:20,
      height:20,
      alignItems:'center',
      justifyContent:'center'
    },
    first:{
      width:'100%',
      height:20,
      flexDirection:'row'
    },
    message:{
      width:45,
      height:18,
      backgroundColor:'#b7c4b3',
      borderRadius:5,
      marginLeft:150,
      borderWidth:0.5,
      borderColor:'black'
    },
    second:{
      width:'100%',
      height:20,
      flexDirection:'row'
    },
    third:{
      width:'100%',
      height:40,
      flexDirection:'row'
    },
    contentStyle: {
      padding:30
    },
    contentTextStyle: {
      textAlign: 'center',
      fontSize: 26
    },
    modalLayer: {
      backgroundColor: 'rgba(100,100,100, 0.3)',
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      padding: 32
    },
    modalContainer: {
      height: 110,
      width:300,
      backgroundColor: '#fff',
      justifyContent: 'center',
      borderRadius:10
    },
    modalTitleStyle: {
      textAlign: 'center',
      fontSize:15
    },
    modalButtonStyle: {
      width:'100%',
      height:'40%',
      flexDirection:'row',
      alignItems:'center',
    },
    daohang:{
      height: 300,
      width:350,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius:10,
    },
    ma:{
    width:300,
    height:350,
    backgroundColor: '#fff',
    borderRadius:10,
    },
    cancel:{
        width:'100%',
        height:'40%',
        flexDirection:'row',
        alignItems:'center',
       
    }
    })