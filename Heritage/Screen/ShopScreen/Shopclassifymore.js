import React from 'react';
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList,
    ImageBackground,
    Animated,
    Surface,
    styleDict
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

var https = "http://121.196.191.45";
var http = "http://192.168.50.91:3000";
var URL1 = http+"/shopping/class";

export default class Shopclassifymore extends React.Component {
    constructor(props) {
        super(props);
        const { navigation, route } = this.props;
        let dalei = route.params.dalei;
        let pinyin = route.params.pinyin;
        this.state = {
          dalei,
          pinyin,
          docs:[],
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
            dalei: this.state.dalei
          })
        })
          .then((response) => response.json())
          .then((json) => {
            this.setState({
              docs: json.docs[0].xiaolei,
            })
            // console.log(json.docs)
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLonding: false });
          });}


    render() {
        const { navigation } = this.props;
        const dalei = this.state.dalei;
        const pinyin = this.state.pinyin;
        const data = this.state.docs;
        console.log("999"+data)
        return (
            <View style={{ flex: 1 }}>
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
                        }}></Text>
                    </View>
                </View>
                <ScrollView style={{ marginBottom: 50 }}>
                    <View style={{
                        width: "100%",
                        alignItems: "center",
                    }}>
                        <View style={{ width: "92%" }}>
                            <View style={{
                                borderColor: "#000",
                                borderRadius: 100,
                                height: 0.5,
                                borderWidth: 0.5,
                                borderStyle:"dashed"
                            }}></View>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30, width: 130 }}>
                                <Text style={{ fontSize: 15, textAlign: "right" }}>{dalei}</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>{pinyin}</Text>
                            </View> 

                            <FlatList 
                                  data={data}
                                   renderItem={({ item }) =>
                                   tradeBox(item.id,item.name,item.pinyin,item.zhanshitu)
                                   } />

                            <View style={{
                                borderColor: "#000",
                                borderRadius: 100,
                                height: 0.5,
                                borderWidth: 0.5,
                                borderStyle:"dashed",
                                marginTop:30
                            }}></View>
                        </View>
                    </View>
                    <Text style={{textAlign:"center",marginTop:20}}>到底啦</Text>
                </ScrollView>
            </View>
        );
        function tradeBox(id,name,pinyin,zhanshitu){
            if(id%2==1){
                return(
                    <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:name})
                               }}>
                    <View>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+zhanshitu}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>{name}</Text>
                                    <Text>{pinyin}</Text>
                                </View>
                            </View>
                    </View></TouchableOpacity>
                );
            }
            else if(id%2==0){
                return(
                    <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{xiaolei:name})
                               }}>
                    <View>
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                }}
                                    source={{uri:https+zhanshitu}}>
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>{name}</Text>
                                    <Text>{pinyin}</Text>
                                </View>
                            </View>
                    </View></TouchableOpacity>
                )
            }
        }
    }
}

const styles = StyleSheet.create({



});
