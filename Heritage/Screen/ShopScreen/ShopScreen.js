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
import { Drawer, List, } from '@ant-design/react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
  
import EZSwiper from 'react-native-ezswiper';
const { height, width } = Dimensions.get('window');

const numColumns = 2;

const images = [require('../../Image/ShopScreen/pic4.jpg'),require('../../Image/ShopScreen/pic4.jpg'),require('../../Image/ShopScreen/pic4.jpg')]


const styles = StyleSheet.create({
  scrow_container: {
    backgroundColor: '#f2f2f2',
  },
  liststyle: {
    backgroundColor: '#f2f2f2',
    width: 320,
    height: 800,
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
    marginVertical:10 ,
    paddingVertical:10
  },
  swiper: {
    backgroundColor: 'white',
  },
  cell: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15
  },



container1: {
    flex: 1,
},
item: {
    backgroundColor: '#fff',
    width: width/numColumns,
    height: 190,  
    alignItems: 'center',
    justifyContent: 'center',
},
itemImage: {
    width: 160,
    height: 160,
},
itemText: {
    fontSize: 12,
}
});


export default class DrawerExample extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
    };
  }
  renderImageRow(obj, index) {    
    return (
      <View style={[styles.cell,{backgroundColor: 'gray',overflow:'hidden'}]}>
       <Image
       style={{position:'absolute',top:0,right:0,bottom:0,left:0,width: undefined, height: undefined}}
        resizeMode={'stretch'}
        source={obj}/>
      </View>
    )
  }

  render() {
    const { navigation } = this.props;

    const data = [{
      content: [
          {key: '', title: '排行榜'},
          {key: '', title: '审帖'},
          {key: '', title: '漫画'},
          {key: '', title: '我的收藏'},
          {key: '', title: '附近'},
          {key: '', title: '随机穿越'},
          {key: '', title: '意见反馈'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},
          {key: '', title: '更多'},


      ],
      key: 'content',
  }];

    return (
      <View>
      <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('商城分类页面')}
                style={{ width: 25, height: 25, marginLeft: 10, alignItems: 'center' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../../Image/ShopScreen/pic26.png')}></Image>
              </TouchableOpacity>
              <View style={{ width: '75%', height: 30, backgroundColor: '#dcdcdc', marginLeft: 10, borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 20, height: 20, marginLeft: 10 }} source={require('../../Image/ShopScreen/pic28.png')}></Image>
                <TextInput style={{ height: 50, width: 250 }} placeholder='搜索你想要的美物'></TextInput>
              </View>
              <TouchableOpacity
                 onPress={() => navigation.navigate('商城购物车')}
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 10,
                  alignItems: 'center'
                }}>
                <FontAwesome name={'shopping-cart'} size={25} color={'#000'} />
              </TouchableOpacity>
            </View>
          </View>
        <ScrollView style={styles.scrow_container}>
          <ScrollView style={[styles.container]} contentInsetAdjustmentBehavior="automatic">
          <EZSwiper style={[styles.swiper,{width: width,height: 150 }]}
                    dataSource={images}
                    width={ width }
                    height={150 }
                    renderRow={this.renderImageRow}
                    onPress={this.onPressRow}      
                    onWillChange={this.onWillChange}     
                    onDidChange={this.onDidChange}                                                                                
                    ratio={0.6}
                    index={2}   
                    horizontal={true}  
                    loop={true}  
                    autoplayTimeout={2}                                      
                    />
          </ScrollView>
          <View style={{
            flexDirection: 'row',
            width: '100%',
            height: 100,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}>
            <TouchableOpacity style={{}}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 50 }}
                source={require('../../Image/ShopScreen/pic5.jpg')}
              >
              </Image>
              <Text style={{ marginTop: 3, fontSize: 13 }}>雕刻工艺</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 50 }}
                source={require('../../Image/ShopScreen/pic4.jpg')}
              >
              </Image>
              <Text style={{ marginTop: 3, fontSize: 13 }}>瓷器工艺</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 50 }}
                source={require('../../Image/ShopScreen/pic3.jpg')}
              >
              </Image>
              <Text style={{ marginTop: 3, fontSize: 13 }}>工艺特色</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => navigation.navigate('商城分类页面')}
              style={{}}>
              <Image
                style={{ width: 20, height: 20, }}
                source={require('../../Image/ShopScreen/pic24.png')}>
              </Image>
            </TouchableOpacity>
          </View>
          <View style={styles.last}>
            <View style={{ height:50,justifyContent: 'center',
             alignItems: 'center',
             borderBottomWidth:0.5,
             borderColor:"#000",
             marginBottom:20 }}>
              <Text style={{ fontSize: 15, color: '#c9ab77' }}>新品推荐</Text>
            </View>
            <View  style={{marginBottom:60}}>
            <SafeAreaView style={styles.container1}>
                <SectionList
                    sections={[{data}]}
                    renderItem={this._renderSectionItem}
                    />
            </SafeAreaView>
            </View>
          </View>
        </ScrollView>
        </View>
    );
  }
  keyExtractor = (item, index) => {
    return item.key;
}


_renderItem = ({item}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.item}
        >
            <Image 
                source={require('../../Image/ShopScreen/pic5.jpg')}
                style={styles.itemImage}
            />
            <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
    )
}

_renderSectionItem = ({section}) => {
    return (
        <FlatList
            data={section.data[0].content}
            numColumns={numColumns}
            renderItem={this._renderItem}
            style={{backgroundColor: '#fff'}}
            scrollEnabled={false}
        />
    )
}


}