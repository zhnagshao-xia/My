import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
export default function CollectionScreen() {
    return (
        <View style={{ width: '100%', backgroundColor: '#f2f2f2' }}>
          <FlatList
            data={[
              { key: '' },
              { key: '' },
              { key: '' },
              { key: '' },
            ]}
            renderItem={({ item }) =>
              <View style={styles.one}>
                <Text style={styles.demol}>{item.key}</Text>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                  <Image style={{ 
                    width: 50, 
                    height: 50, 
                    borderRadius: 50, 
                    backgroundColor: '#000', 
                    margin: 10 }} 
                    source={require('../../Image/TribuneScreen/pic10.jpg')}>
                    </Image>
                  <View >
                    <View style={{ 
                      flexDirection: 'row', 
                      alignItems: 'center', 
                      marginTop: 20, 
                      marginBottom: 10 }}>
                      <View>
                        <Text style={{ fontSize: 15, marginBottom: 3 }}>
                          叶子不是椰子
                          </Text>
                        <Text style={{ fontSize: 12 }}>
                          刚刚
                          </Text>
                      </View>
                    </View>
                    <View style={{ width: '85%', marginBottom: 10 }}>
                      <Text style={{ fontSize: 13 }}>
                        浙江省级非物质文化遗产已于2005年、2007年公布了两批，共计289项。是我国非物质文化遗产保护较早的省份之一，保护成果具中国首位。
                        </Text>
                    </View>
                    <View style={{ 
                      width: 250, 
                      flexDirection: 'row', 
                      marginBottom: 10, 
                      justifyContent: 'space-between', }}>
                    <EvilIcons name={'share-google'} size={30} color={'#000'} />
                    <FontAwesome name={'heart-o'} size={20} color={'#000'} />
                    <Feather name={'message-square'} size={22} color={'#000'} />
                    </View>
                  </View>
                </View>
              </View>
            }
          />
        </View>
    );
  }
  const styles = StyleSheet.create({
    one: {
      width: '100%',
      marginBottom: 20,
      backgroundColor: '#fff'
    },
    demol: {
      fontSize: 0
    },
  
  })
  