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

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL1 = http + "/shopping/xiaolei";

export default class Shoplist extends React.Component {
    constructor(props) {
        super(props)
        const { navigation, route } = this.props;
        let xiaolei = route.params.xiaolei;
        this.state = {
            xiaolei,
            docs: [],
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
          },
          body: JSON.stringify({
            xiaolei: this.state.xiaolei
          })
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
        const data = this.state.docs
        return (
            <View>
                <View style={{
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
                    }}>{this.state.xiaolei}</Text>
                </View>
            </View>
        <ScrollView style={styles.scrow_container}>
          <View style={styles.last}>
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
                  <Text style={{textAlign:"center",marginTop:20}}>——————————到底啦——————————</Text>
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
      width: width / 2,
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
