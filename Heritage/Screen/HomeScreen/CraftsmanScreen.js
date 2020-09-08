import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default function CollectionScreen({navigation}) {
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
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            style={{right:130}}>
              <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
              <Text style={{fontSize:18,
                textAlign: 'center',
                textAlignVertical: 'center',}}>传承志</Text>
          </View>
    <ScrollView >
      <FlatList
        data={[
          {
            title1: '叶良康',
            title2: '鄞州竹编非遗传承人',
            title3: '潜心研究工艺竹编，成为代表性传承人'
          },
          {
            title1: '夏雨',
            title2: '鄞州竹编非遗传承人',
            title3: '潜心研究工艺竹编，成为代表性传承人'
          },
          {
            title1: '叶良康',
            title2: '鄞州竹编非遗传承人',
            title3: '潜心研究工艺竹编，成为代表性传承人'
          },
        ]}
        renderItem={({ item }) =>
          <View style={styles.BigSize}>
            <View style={{ width: '100%', height: 190 }}>
              <Image
                style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
                source={require('../../Image/HomeScreen/Large.jpg')}>
              </Image>
            </View>
            <View style={styles.fourword}>
              <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <View style={{ marginLeft: 110, marginVertical: 10 }}>
                  <Text style={{ fontSize: 14 }}>{item.title1}</Text>
                  <Text style={{ color: '#c6a46c', fontSize: 12 }}>{item.title2}</Text>
                </View>
                <TouchableOpacity style={styles.guanzhu} >
                  <Text style={{ color: '#945357', fontSize: 12, marginRight: 3 }}>+</Text>
                  <Text style={{ fontSize: 12 }}>关注</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => navigation.navigate('手艺人详细页面')}
                style={styles.touxiang}>
                  <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                    source={require('../../Image/HomeScreen/yi1.png')}>
                  </Image>
                </TouchableOpacity>
              </View>
              <Text style={{ marginLeft: 30, fontSize: 14 }}>{item.title3}</Text>
            </View>
          </View>
        }
      />
    </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  BigSize: {
    width: '95%',
    margin: 10
  },
  touxiang: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
    top: -25,
    left: 20
  },
  guanzhu: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#c9c5c5',
    width: 50,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5
  },
  fourword: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#b5b5b5',
    paddingBottom: 20
  }
});