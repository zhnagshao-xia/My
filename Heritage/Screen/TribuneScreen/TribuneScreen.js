import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class BasicTabsExample extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tabs = [
      { title: '关注' },
      { title: '推荐' },
      { title: '最新' },
    ];
    const attention = {
      height: '100%',
    };
    const recommend = {
      height: '100%',
    };
    const newest = {
      height: '100%',
      backgroundColor: '#f2f2f2',
    };
    return (
      <View style={{ flex: 1 }}>
        <Tabs tabs={tabs}
        tabBarTextStyle={{
          color:"#945357",
          fontSize:12
        }}
        tabBarUnderlineStyle={{
          width:50,
          marginLeft:36,
          backgroundColor:'#945357'
        }}
        >
          <View style={attention}>
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
                        <FontAwesome name={'share'} size={20} color={'#000'} />
                        <FontAwesome name={'heart-o'} size={20} color={'#000'} />
                        <FontAwesome name={'comment'} size={20} color={'#000'} />
                        </View>
                      </View>
                    </View>
                  </View>
                }
              />
            </View>
          </View>
          <View style={recommend}>
            <View style={{ 
              height:350,
              // height: '60%', 
              backgroundColor: 'rgba(100,100,100,0.1)' }}>
              <ImageBackground 
                    style={{width:'100%',height:'100%',opacity:0.2}}
                    source={require('../../Image/TribuneScreen/pic9.jpg')}>
                </ImageBackground>
            </View>
            <View style={{ 
              height:150,
            // height: '30%', 
            alignItems: 'center', 
            justifyContent: 'center' }}>
              <View style={{ 
                width: '90%', 
                height: '90%', 
                borderWidth: 2, 
                borderColor: 'black',
                flexDirection: 'row' }}>
                  <Image style={{width:50,height:50,borderRadius:50,margin:10}} 
                  source={require('../../Image/TribuneScreen/pic10.jpg')}>
                  </Image>
                  <View style={{flexDirection:'column',}}>
                    <View style={{flexDirection:'row',marginVertical:20}}>
                  <Text style={{ fontSize: 15 }}>高血堂</Text>
                  <TouchableOpacity style={{ 
                    width: 50, 
                    height: 20,
                    marginLeft:30, 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    borderWidth: 1, 
                    borderColor: 'black',
                    justifyContent:"center",
                    borderRadius:5 }}>
                  <Text style={{color: '#945357' ,fontSize: 12,marginRight:3}}>+</Text>
                    <Text style={{ fontSize: 12 }}>关注</Text>
                  </TouchableOpacity>
                  </View>
                <View style={{width:'85%'}}>
                  <Text style={{ fontSize: 13, }}>官宣：浙江30件国家级非遗位数位列全国第一。</Text>
                </View>
                </View>
                
              </View>
            </View>
            <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', width: '90%', marginLeft: 20 }}>
              <TouchableOpacity style={{ width: 35, height: 35, marginRight: 10, marginLeft: 5 }}>
                <Image style={{width:'100%',height:'100%'}}    source={require('../../Image/TribuneScreen/pic14.png')}></Image>
              </TouchableOpacity>
              <TextInput style={{ width: '70%', height: '60%', backgroundColor: '#dcdcdc', borderRadius: 20, padding: 10 }}></TextInput>
              <TouchableOpacity style={{ width: 40, height: 40, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 13 }}>发送</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={newest}>
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
                        <Text style={{ fontSize: 15, marginBottom: 5 }}>
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
                    <FontAwesome name={'share'} size={20} color={'#000'} />
                    <FontAwesome name={'heart-o'} size={20} color={'#000'} />
                    <FontAwesome name={'comment'} size={20} color={'#000'} />
                    </View>
                  </View>
                </View>
              </View>
                }
              />
            </View>
          </View>
        </Tabs>
      </View>
    );
  }
}
export const title = 'Tabs';
export const description = 'Tabs example';
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
