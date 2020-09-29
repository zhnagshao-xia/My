import React, {Component} from 'react';
import {
  StyleSheet, 
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    return (
        <View style={styles.container}>
             <ScrollView>
            <View style={styles.header}>
                <View style={styles.part1}>
                    <ImageBackground style={{width:'100%',height:'100%',}} source={require('../../Image/ShopScreen/umbrella1.png')}>
                    <View style={styles.sigh}>
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        width: 50,
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                        <FontAwesome name={'angle-left'} size={25} color={'#fff'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('商城购物车')}
                    style={{
                        width: 50,
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                        <FontAwesome name={'shopping-cart'} size={25} color={'#fff'} />
                        </TouchableOpacity>
                    </View>
                    </ImageBackground>
                </View>
                <View style={styles.part2}>
                    <View style={{width:'100%',height:'40%',backgroundColor:'#fff',alignItems:'center',flexDirection:'row'}}>
                        <Text style={{fontSize:20,marginLeft:10}}>￥288</Text>
                        <Text style={{fontSize:13,marginLeft:170}}>已订购100次</Text>
                    </View>
                    <View style={{width:'100%',height:'60%',flexDirection:'row',alignItems:'center'}}>
                        <View>
                            <Text style={{fontSize:15,marginLeft:10}}>油纸伞</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontSize:13,marginLeft:10,marginTop:5}}>发货</Text>
                                <Image style={{width:20,height:20,marginLeft:20,marginTop:5}} source={require('../../Image/ShopScreen/pic20.png')}></Image>
                                <Text style={{fontSize:13,marginTop:5}}>浙江杭州</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image style={{width:30,height:30,marginLeft:130}} 
                            source={require('../../Image/ShopScreen/pic27.png')}></Image>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate('确认订单')}               
                            style={{width:80,height:35,marginLeft:15,backgroundColor:'orange',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:20}}>购买</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.contant}>
                    <View style={{width:'100%',height:50,alignItems:'center',justifyContent:'center',borderBottomWidth:0.5,borderBottomColor:'black'}}>
                        <Text style={{fontSize:20}}>评价</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={{width:'100%',height:'20%',flexDirection:'row'}}>
                            <Image style={{width:40,height:40,backgroundColor:'#fff',borderRadius:50,margin:10}} source={require('../../Image/ShopScreen/pic10.jpg')}></Image>
                            <View>
                                <Text style={{fontSize:15,marginLeft:10,marginTop:10}}>可乐泡脚</Text>
                                <Text style={{fontSize:10,marginLeft:10}}>刚刚</Text>
                            </View>
                        </View>
                        <View style={{width:'95%',height:'80%',alignItems:'center'}}>
                            <Text style={{width:'100%',height:'20%',backgroundColor:'#fff'}}>这也太美了吧</Text>
                            <Image style={{width:'100%',height:'75%'}}  source={require('../../Image/ShopScreen/umbrella2.png')}></Image>
                        </View>
                    </View>
                    <View style={styles.box}>
                    <View style={{width:'100%',height:'20%',flexDirection:'row'}}>
                            <Image style={{width:40,height:40,backgroundColor:'#fff',borderRadius:50,margin:10}} source={require('../../Image/ShopScreen/pic10.jpg')}></Image>
                            <View>
                                <Text style={{fontSize:15,marginLeft:10,marginTop:10}}>泡面搓澡</Text>
                                <Text style={{fontSize:10,marginLeft:10}}>刚刚</Text>
                            </View>
                        </View>
                        <View style={{width:'95%',height:'80%',alignItems:'center'}}>
                            <Text style={{width:'100%',height:'20%',backgroundColor:'#fff'}}>这也太美了吧</Text>
                            <Image style={{width:'100%',height:'75%'}}  source={require('../../Image/ShopScreen/umbrella1.png')}></Image>
                        </View>
                    </View>
                    <View style={styles.box}>
                    <View style={{width:'100%',height:'20%',flexDirection:'row'}}>
                            <Image style={{width:40,height:40,backgroundColor:'#fff',borderRadius:50,margin:10}} source={require('../../Image/ShopScreen/pic10.jpg')}></Image>
                            <View>
                                <Text style={{fontSize:15,marginLeft:10,marginTop:10}}>可乐泡脚</Text>
                                <Text style={{fontSize:10,marginLeft:10}}>刚刚</Text>
                            </View>
                        </View>
                        <View style={{width:'95%',height:'80%',alignItems:'center'}}>
                            <Text style={{width:'100%',height:'20%',backgroundColor:'#fff'}}>这也太美了吧</Text>
                            <Image style={{width:'100%',height:'75%'}}  source={require('../../Image/ShopScreen/umbrella3.png')}></Image>
                        </View>
                    </View>
            </View>
            </ScrollView>

        </View>
    );
}
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e6e6fa'
    },
    header:{
        width:'100%',
        height:300,
        backgroundColor:'#fff',
        marginBottom:25,
    },
    contant:{
        width:'100%',
        height:'55%',
        backgroundColor:'#fff'
    },
    part1:{
        width:'100%',
        height:'70%',
        backgroundColor:'#fff'
    },
    part2:{
        width:'100%',
        height:'30%'
    },
    sigh:{
        width:'100%',
        height:45,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    box:{
        width:'100%',
        height:300,
        backgroundColor:'#fff',
        marginBottom:10,
        alignItems:'center',
    }
})