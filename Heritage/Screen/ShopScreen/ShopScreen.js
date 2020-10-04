import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions,
  SafeAreaView,
  SectionList,
  FlatList,
} from 'react-native';
import { Button, Drawer, List, } from '@ant-design/react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import EZSwiper from 'react-native-ezswiper';
const { height, width } = Dimensions.get('window');

const numColumns = 2;

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL1 = http + "/shopping";

const images = [
  { uri: https + "/picture/shopping/headcarousel/1.jpg" },
  { uri: https + "/picture/shopping/headcarousel/2.jpg" },
  { uri: https + "/picture/shopping/headcarousel/3.jpg" },
  { uri: https + "/picture/shopping/headcarousel/4.jpg" },
  { uri: https + "/picture/shopping/headcarousel/5.jpg" }]

export default class DrawerExample extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
      docs: [],
    };
  }

  renderImageRow(obj, index) {
    return (
      <View style={[styles.cell, { backgroundColor: 'gray', overflow: 'hidden' }]}>
        <Image
          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, width: undefined, height: undefined }}
          resizeMode={'stretch'}
          source={obj} />
      </View>
    )
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
        // console.log(json.docs)
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLonding: false });
      });
  }

  render() {
    const { navigation } = this.props;
    const data = this.state.docs;
    return (
      <View>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('商城分类页面')}
              style={{ width: 25, height: 25, marginLeft: 10, alignItems: 'center' }}>
              <Image style={{ width: '100%', height: '100%' }} source={require('../../Image/ShopScreen/pic26.png')}></Image>
            </TouchableOpacity>
            <View style={{ width: '75%', height: 30, backgroundColor: '#dcdcdc', marginLeft: 10, borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 20, height: 20, marginLeft: 10 }} source={require('../../Image/ShopScreen/pic28.png')}></Image>
              <TextInput style={{ height: 50, width: 250 }} placeholder='搜索你想要的美物'></TextInput>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('商城购物车')}
              style={{
                width: 25,
                height: 25,
                marginLeft: 10,
                alignItems: 'center'
              }}>
              <FontAwesome name={'shopping-cart'} size={25} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scrow_container}>
          <ScrollView style={[styles.container]} contentInsetAdjustmentBehavior="automatic">
            <EZSwiper style={[styles.swiper, { width: width, height: 150 }]}
              dataSource={images}
              width={width}
              height={150}
              renderRow={this.renderImageRow}
              onPress={this.onPressRow}
              onWillChange={this.onWillChange}
              onDidChange={this.onDidChange}
              ratio={0.6}
              index={2}
              horizontal={true}
              loop={true}
              autoplayTimeout={2}
            />
          </ScrollView>
          <View style={{
            flexDirection: 'row',
            width: '100%',
            height: 100,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Shopclassifymore', { dalei: "琢磨", pinyin: "ZHUOMO" })
              }}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 50 }}
                source={{ uri: https + "/picture/shopping/class/琢磨/琢磨.jpg" }}
              >
              </Image>
              <Text style={{ marginTop: 3, fontSize: 13, marginLeft: 18 }}>琢磨</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Shopclassifymore', { dalei: "浴火", pinyin: "YUHUO" })
              }}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 50 }}
                source={{ uri: https + "/picture/shopping/class/浴火/浴火.jpg" }}
              >
              </Image>
              <Text style={{ marginTop: 3, fontSize: 13, marginLeft: 18 }}>浴火</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Shopclassifymore', { dalei: "茶道", pinyin: "CHADAO" })
              }}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 50 }}
                source={{ uri: https + "/picture/shopping/class/茶道/茶道.jpg" }}
              >
              </Image>
              <Text style={{ marginTop: 3, fontSize: 13, marginLeft: 18 }}>茶道</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('商城分类页面')}
              style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 50 }}
                source={{ uri: https + "/picture/shopping/class/全部.jpg" }}
              >
              </Image>
              <Text style={{ marginTop: 3, fontSize: 13, marginLeft: 12 }}>全部</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.last}>
            <View style={{
              height: 50, justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: "#000",
              marginBottom: 20
            }}>
              <Text style={{ fontSize: 15, color: '#c9ab77' }}>新品推荐</Text>
            </View>
            <View style={{ marginBottom: 60 }}>
              <SafeAreaView style={styles.container1}>
                <SectionList />

                <FlatList
                  data={data}
                  numColumns={2} // 一行2个
                  renderItem={({ item }) =>
                    <View >
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.item}
                        onPress={()=>{
                          navigation.navigate("商品详情页面",{goods:item.goods})
                        }}
                      >
                        <View>
                          <Image
                            source={{ uri: https + item.fengmian }}
                            style={styles.itemImage}
                          />
                        </View>
                        <View style={{
                          backgroundColor: "rgba(0,0,0,0.8)",
                          width: 160,
                          position: "absolute",
                          bottom: 10,
                          height: 40,
                          padding: 5,
                          flexDirection: 'column'
                        }}>
                          <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                          }}>
                            <Text style={styles.itemText}>{item.goods}</Text>
                            <Text style={{
                              textAlign: "right",
                              color: "#fff",
                              fontSize: 12
                            }}>￥{item.price}</Text>
                          </View>
                          <Text style={{
                            textAlign: "right",
                            color: "#fff",
                            fontSize: 8
                          }}>月销：{item.sales}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  } />

              </SafeAreaView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  scrow_container: {
    backgroundColor: '#f2f2f2',
  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)'
  },
  last: {
    marginTop: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  key: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    paddingVertical: 10
  },
  swiper: {
    backgroundColor: 'white',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },



  container1: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    width: width / numColumns,
    height: 270,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 160,
    height: 240,
  },
  itemText: {
    fontSize: 14,
    color: "#fff"
  }
});