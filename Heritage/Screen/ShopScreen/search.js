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
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Shoplist extends React.Component {
    render() {
        const { navigation } = this.props;
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
                    }}>dsfghdfhbs</Text>
                </View>
            </View>
        <ScrollView style={styles.scrow_container}>
          <View style={styles.last}>
            <View style={{ marginBottom: 60 }}>
              <SafeAreaView style={styles.container1}>
                <SectionList />

                <FlatList
                  numColumns={2} // 一行2个
                  renderItem={({ item }) =>
                    <View >
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.item}
                        onPress={()=>{
                          navigation.navigate("商品详情页面")
                        }}
                      >
                        <View>
                          <Image
                            source={require('../../Image/HomeScreen/3.jpg')}
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
                            <Text style={styles.itemText}>1213</Text>
                            <Text style={{
                              textAlign: "right",
                              color: "#fff",
                              fontSize: 12
                            }}>￥2324</Text>
                          </View>
                          <Text style={{
                            textAlign: "right",
                            color: "#fff",
                            fontSize: 8
                          }}>月销：1341</Text>
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
      width: 121432,
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
