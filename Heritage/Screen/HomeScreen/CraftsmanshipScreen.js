import React ,{Component}from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

var http = "http://192.168.50.91:3000";
var URL1 = http+"/chuanchengzhi";

export default class CraftsmanshipScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            docs:[],
        }
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
          }
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
        const data = this.state.docs;
    return (
        <View>
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
                textAlignVertical: 'center',}}>传承志</Text>
                </View>
          </View>
            <ScrollView style={styles.main_body}>
                <View style={{marginBottom:50}}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                    <View style={styles.part}>
                    <ImageBackground 
                    style={styles.pic} 
                    source={{uri:item.picture}}>
                    <View style={styles.eye}>
                    <FontAwesome name={'eye'} size={15} color={'#fff'} />
                    <Text style={{marginLeft:8,color:'#fff',fontSize:11}}>{item.pageview}</Text>
                    </View>
                    </ImageBackground>
                    <TouchableOpacity activeOpacity={0.8} style={styles.introduce}
                    onPress={() => navigation.navigate("故事",{name:item.name})}>
                    <View style={styles.introduce_up}>
                    <View style={{borderRightWidth: 1,justifyContent:"center" }}><Text style={{ fontSize: 15,marginRight:7}}>匠心逐梦</Text></View>
                    <View style={{paddingLeft: 7 ,justifyContent:"center"}}><Text style={styles.demol}>{item.describe}</Text></View>
                    </View>
                    <View style={styles.introduce_down}>
                    <View style={{ width: '100%', justifyContent: 'center' }}><Text style={styles.demo2}>{item.project}</Text></View>
                    </View>
                    </TouchableOpacity>
                    </View>
                    }
                />
                </View>
            </ScrollView>
        </View>
    )};
}

const styles = StyleSheet.create({
    main_body: {
        backgroundColor: '#f2f2f2',
    },
    part: {
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#fff',
        paddingBottom:10
    },
    eye: {
        position:'absolute',
        flexDirection:'row',
        right:15,
        bottom:10
    },
    pic: {
        width: '90%',
        height: 200,
        marginVertical: 16,
        backgroundColor: '#000'
    },
    introduce: {
        width: '90%',
    },
    introduce_up: {
        flexDirection: 'row',
        marginBottom:5
    },
    introduce_down: {
        width: '100%',
        height: 25,
        justifyContent: 'center',
    },
    demol: {
        fontSize: 14,
    },
    demo2: {
        fontSize: 13,
    }

});