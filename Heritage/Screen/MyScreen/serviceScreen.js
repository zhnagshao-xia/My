import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView,FlatList, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Servicescreen ({navigation}){
  return (
    <View style={styles.container}>
      <View style={{height:45,
                backgroundColor:"#fff",
                alignItems:"center",
                justifyContent:"center",
                borderBottomWidth:0.5,
                borderBottomColor:"#000",}}>
                <View style={{flexDirection:'row',justifyContent:"space-between",width:"90%"}}>
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                        <FontAwesome name={'angle-left'} size={25} color={'#000'} />
                    </TouchableOpacity>
                    <Text style={{fontSize:18,
                    textAlign: 'center',
                    textAlignVertical: 'center'}}>客服</Text>
                    <View>
                    </View>
                </View>
            </View>
      <ScrollView style={styles.body}>
        
      </ScrollView>
      <View style={styles.bottom}>
          <TouchableOpacity style={styles.icon}>
               <FontAwesome name={'plus'} size={20} color={'#666666'}/>
          </TouchableOpacity>
          <View style={styles.input}>
               <TextInput style={{ width: '100%', height: '60%', backgroundColor: '#dcdcdc', borderRadius: 20 }}></TextInput>
          </View>
          <TouchableOpacity style={styles.icon}>
               <FontAwesome name={'send-o'} size={20} color={'#000'}/>
          </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
       flex: 1
    },
    body:{
        width:'100%',
        height:'90%',
        backgroundColor:'#f2f2f2'
    },
    letter_up_1:{
      width:'80%',
      backgroundColor:'#fff',
      top:10,
      left:25
    },
    word:{
      fontSize:14,
      color:'#000',
      letterSpacing:1,
      top:4,
      left:4
    },
    bottom:{
      backgroundColor:"#fff",
        width:'100%',
        height:'10%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    input:{
        width:'76%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        width:'12%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
  }); 