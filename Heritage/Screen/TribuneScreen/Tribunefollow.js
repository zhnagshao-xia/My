import React from 'react';
import { Share,ScrollView, Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
export default function CollectionScreen() {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
                     <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={onShare}>
                    <EvilIcons name={'share-google'} size={30} color={'#000'} /></TouchableOpacity>
                  <TouchableOpacity
                  activeOpacity={0.8}>
                    <FontAwesome name={'heart-o'} size={20} color={'#000'} /></TouchableOpacity>
                  <TouchableOpacity
                  activeOpacity={0.8}>
                    <Feather name={'message-square'} size={22} color={'#000'} /></TouchableOpacity>
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
  