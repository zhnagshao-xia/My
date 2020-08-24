import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Drawer, List, } from '@ant-design/react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const styles = StyleSheet.create({
  scrow_container: {
    backgroundColor: '#f2f2f2',
  },
  liststyle: {
    backgroundColor: '#f2f2f2',
    width: 320,
    height: 800,
  },
  header: {
    flex: 1.0,
    justifyContent: 'center',
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderBottomColor:'rgba(0,0,0,0.2)'
  },
  last:{
    marginTop:10,
    backgroundColor:'#fff',
    width:'100%',
},
key:{
  flexDirection:'row',
},
});

export default class DrawerExample extends React.Component {
  constructor() {
    super(...arguments);
    this.onOpenChange = isOpen => {
      console.log('是否打开了 Drawer', isOpen.toString());
    };
  }
  render() {
    const itemArr = Array.apply(null, Array(9))
      .map((_i, index) => {
        if (index === 0) {
          return (
            <View style={styles.liststyle}>
              {/* 侧边栏 */}
            </View>
          );
        }
      });
    const sidebar = (
      <ScrollView >
        <List >{itemArr}</List>
      </ScrollView>
    );
    return (
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={el => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#000"
        drawerWidth={320}
      >
        <ScrollView style={styles.scrow_container}>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center',marginVertical: 10, }}>
              <TouchableOpacity
                onPress={() => this.drawer && this.drawer.openDrawer()}
                style={{ width: 25, height: 25, marginLeft: 10, alignItems: 'center' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../../Image/ShopScreen/pic26.png')}></Image>
              </TouchableOpacity>
              <View style={{ width: '75%', height: 30, backgroundColor: '#dcdcdc', marginLeft: 10, borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 20, height: 20, marginLeft: 10 }} source={require('../../Image/ShopScreen/pic28.png')}></Image>
                <TextInput style={{ height: 50, width: 250 }} placeholder='搜索你想要的美物'></TextInput>
              </View>
              <TouchableOpacity style={{ width: 25, height: 25, marginLeft: 10, alignItems: 'center' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../../Image/ShopScreen/pic27.png')}></Image>
              </TouchableOpacity>
            </View>
            </View>



            <View style={{ flexDirection: 'row', 
            width: '100%', 
            height: 100, 
            backgroundColor: '#fff', 
            alignItems: 'center',
            justifyContent:'space-around' }}>
              <TouchableOpacity style={{ }}>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  source={require('../../Image/ShopScreen/pic5.jpg')}
                >
                </Image>
                <Text style={{ marginTop: 3, fontSize: 13 }}>雕刻工艺</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ }}>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  source={require('../../Image/ShopScreen/pic4.jpg')}
               >
                </Image>
                <Text style={{ marginTop: 3, fontSize: 13 }}>瓷器工艺</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ }}>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  source={require('../../Image/ShopScreen/pic3.jpg')}
                >
                </Image>
                <Text style={{ marginTop: 3, fontSize: 13 }}>工艺特色</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ }}>
                <Image
                  style={{ width: 20, height: 20,}}
                  source={require('../../Image/ShopScreen/pic24.png')}
                >
                </Image>
              </TouchableOpacity>
            </View>
            <View style={styles.last}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                   <Text style={{fontSize:15,marginTop:10,color:'#c9ab77'}}>新品推荐</Text>
                </View>
                <View style={styles.key}>
                <View style={{width:'50%',alignItems:'center'}}>
                    <TouchableOpacity style={{width:'90%',height:300,backgroundColor:'red',marginTop:15}}>
                        <ImageBackground 
                            style={{width:'100%',height:'100%',flexDirection:'row-reverse'}}
                            source={require('../../Image/ShopScreen/umbrella2.png')}>
                                 <View style={{width:'100%',height:50,backgroundColor:'rgba(50,50,50,0.7)',marginTop:230}}>
                                    <View style={{width:'100%',height:'50%',flexDirection:'row'}}>
                                        <Text style={{fontSize:15,marginLeft:10,color:'#fff'}}>油纸伞</Text>
                                        <Text style={{fontSize:15,marginLeft:60,color:'#fff'}}>￥288</Text>
                                    </View>
                                    <View style={{width:'100%',height:'50%',flexDirection:'row-reverse'}}>
                                        <Text style={{fontSize:15,color:'#fff'}}>已售1000件</Text>
                                    </View>
                                </View>              
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'90%',height:250,backgroundColor:'red',marginTop:15}}>
                        <ImageBackground 
                            style={{width:'100%',height:'100%',flexDirection:'row-reverse'}}
                            source={require('../../Image/ShopScreen/umbrella1.png')}>
                                 <View style={{width:'100%',height:50,backgroundColor:'rgba(50,50,50,0.7)',marginTop:180}}>
                                    <View style={{width:'100%',height:'50%',flexDirection:'row'}}>
                                        <Text style={{fontSize:15,marginLeft:10,color:'#fff'}}>油纸伞</Text>
                                        <Text style={{fontSize:15,marginLeft:60,color:'#fff'}}>￥288</Text>
                                    </View>
                                    <View style={{width:'100%',height:'50%',flexDirection:'row-reverse'}}>
                                        <Text style={{fontSize:15,color:'#fff'}}>已售1000件</Text>
                                    </View>
                                </View>              
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{width:'50%',alignItems:'center'}}>
                    <TouchableOpacity style={{width:'90%',height:230,backgroundColor:'red',marginTop:15}}>
                        <ImageBackground 
                            style={{width:'100%',height:'100%',flexDirection:'row-reverse'}}
                            source={require('../../Image/ShopScreen/umbrella2.png')}>
                                 <View style={{width:'100%',height:50,backgroundColor:'rgba(50,50,50,0.7)',marginTop:160}}>
                                    <View style={{width:'100%',height:'50%',flexDirection:'row'}}>
                                        <Text style={{fontSize:15,marginLeft:10,color:'#fff'}}>油纸伞</Text>
                                        <Text style={{fontSize:15,marginLeft:60,color:'#fff'}}>￥288</Text>
                                    </View>
                                    <View style={{width:'100%',height:'50%',flexDirection:'row-reverse'}}>
                                        <Text style={{fontSize:15,color:'#fff'}}>已售1000件</Text>
                                    </View>
                                </View>   
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'90%',height:280,backgroundColor:'red',marginTop:15}}>
                        <ImageBackground 
                            style={{width:'100%',height:'100%',flexDirection:'row-reverse'}}
                            source={require('../../Image/ShopScreen/umbrella2.png')}>
                                <View style={{width:'100%',height:50,backgroundColor:'rgba(50,50,50,0.7)',marginTop:210}}>
                                    <View style={{width:'100%',height:'50%',flexDirection:'row'}}>
                                        <Text style={{fontSize:15,marginLeft:10,color:'#fff'}}>油纸伞</Text>
                                        <Text style={{fontSize:15,marginLeft:60,color:'#fff'}}>￥288</Text>
                                    </View>
                                    <View style={{width:'100%',height:'50%',flexDirection:'row-reverse'}}>
                                        <Text style={{fontSize:15,color:'#fff'}}>已售1000件</Text>
                                    </View>
                                </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </ScrollView>
      </Drawer>
    );
  }
}