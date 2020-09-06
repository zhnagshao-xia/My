import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default function CollectionScreen() {
  return (
    <ScrollView>
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
              <Text style={{ fontSize: 14 }}>叶良康</Text>
              <Text style={{ color: '#c6a46c', fontSize: 12 }}>鄞州竹编非遗传承人</Text>
            </View>
            <TouchableOpacity style={styles.guanzhu}>
              <Text style={{ color: '#945357', fontSize: 12, marginRight: 3 }}>+</Text>
              <Text style={{ fontSize: 12 }}>关注</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touxiang}>
              <Image
                style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                source={require('../../Image/HomeScreen/yi1.png')}>
              </Image>
            </TouchableOpacity>
          </View>
          <Text style={{ marginLeft: 30, fontSize: 14 }}>潜心研究工艺竹编，成为代表性传承人</Text>
        </View>

      </View>

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
              <Text style={{ fontSize: 14 }}>叶良康</Text>
              <Text style={{ color: '#c6a46c', fontSize: 12 }}>鄞州竹编非遗传承人</Text>
            </View>
            <TouchableOpacity style={styles.guanzhu}>
              <Text style={{ color: '#945357', fontSize: 12, marginRight: 3 }}>+</Text>
              <Text style={{ fontSize: 12 }}>关注</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touxiang}>
              <Image
                style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                source={require('../../Image/HomeScreen/yi1.png')}>
              </Image>
            </TouchableOpacity>
          </View>
          <Text style={{ marginLeft: 30, fontSize: 14 }}>潜心研究工艺竹编，成为代表性传承人</Text>
        </View>

      </View>

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
              <Text style={{ fontSize: 14 }}>叶良康</Text>
              <Text style={{ color: '#c6a46c', fontSize: 12 }}>鄞州竹编非遗传承人</Text>
            </View>
            <TouchableOpacity style={styles.guanzhu}>
              <Text style={{ color: '#945357', fontSize: 12, marginRight: 3 }}>+</Text>
              <Text style={{ fontSize: 12 }}>关注</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touxiang}>
              <Image
                style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                source={require('../../Image/HomeScreen/yi1.png')}>
              </Image>
            </TouchableOpacity>
          </View>
          <Text style={{ marginLeft: 30, fontSize: 14 }}>潜心研究工艺竹编，成为代表性传承人</Text>
        </View>

      </View>
    </ScrollView>
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
    // marginBottom: 10,
    paddingBottom: 20
  }
});