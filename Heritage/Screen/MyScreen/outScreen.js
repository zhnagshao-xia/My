import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const outScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_body}>
         <View style={styles.container_bug1}>
             <View style={styles.word}><Text style={{fontSize: 16}}>帮助</Text></View>
             <View style={styles.awe}>
                 <FontAwesome name={'github'} size={28} color={'#000'}/>
             </View>
         </View>
         <View style={styles.container_bug2}>
             <View style={styles.word}><Text style={{fontSize: 16}}>关于我们</Text></View>
             <View style={styles.awe}>
                 <FontAwesome name={'github'} size={28} color={'#000'}/>
             </View>
         </View>
      </View>
      <View style={{alignItems:'center', marginTop:18}}>
          <TouchableOpacity style={styles.button}><Text style={{fontSize:16, color:'#955357'}}>退出登录</Text></TouchableOpacity>
      </View>
    </View>
  );
}

export default outScreen;

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor:'#f2f2f2'
    },
    container_body:{
        width:'100%',
        height:'20%',
        flexDirection:'column',
        backgroundColor:'green'
    },
    container_bug1:{
        width:'100%',
        height:'50%',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#ffffff',
        borderBottomWidth: 1 ,
        borderBottomColor:'#000'
    },
    container_bug2:{
        width:'100%',
        height:'50%',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#ffffff'
    },
    word:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        marginLeft: 40
    },
    awe:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width:'30%',
        height:'25%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor:'#955357'
    }
  }); 