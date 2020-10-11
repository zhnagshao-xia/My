import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, SectionList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL1 = http + "/shopping/shopcar";

export default class Shopcart extends Component {

  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
    this.renderSectionHeader = this.renderSectionHeader.bind(this)
    this.state = {
      status: [],
      isSelectedAllItem: false,
      totalNum: 0,
      totalPrice: 0.00,
      docs:[],
      shoppingCartData:[]
    }
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
            username: "诗画浙江"
        })
    })
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                docs: json.docs[0],
                shoppingCartData:json.docs[0]
            })
            console.log("1111"+json.docs)
        })
        .catch((error) => console.error(error))
        .finally(() => {
            this.setState({ isLonding: false });
        });
}

  componentWillMount() {
const shoppingCartData = {
  "docs": [
      {
          "shopcar": [
              {
                  "goods": "手倚莲花",
                  "miaoshu": "#乐清黄杨木雕#华东一枝花#于精雕细刻中不乏写意流畅#手倚莲花",
                  "price": 688,
                  "fengmian": "/picture/shopping/goods/琢磨/木雕/乐清黄杨木雕2_1.jpg",
                  "number": "1"
              },
              {
                  "goods": "龙龟",
                  "miaoshu": "#乐清黄杨木雕#华东一枝花#于精雕细刻中不乏写意流畅#龙龟",
                  "price": 688,
                  "fengmian": "/picture/shopping/goods/琢磨/木雕/乐清黄杨木雕12_1.jpg",
                  "number": "1"
              },
              {
                  "goods": "调皮兔",
                  "miaoshu": "#乐清黄杨木雕#华东一枝花#于精雕细刻中不乏写意流畅#调皮兔",
                  "price": 688,
                  "fengmian": "/picture/shopping/goods/琢磨/木雕/乐清黄杨木雕19_1.jpg",
                  "number": "1"
              },
              {
                  "goods": "国泰民安",
                  "miaoshu": "#乐清黄杨木雕#华东一枝花#于精雕细刻中不乏写意流畅#国泰民安",
                  "price": 688,
                  "fengmian": "/picture/shopping/goods/琢磨/木雕/乐清黄杨木雕17_1.jpg",
                  "number": "1"
              },
              {
                  "goods": "牛气冲天",
                  "miaoshu": "#乐清黄杨木雕#华东一枝花#于精雕细刻中不乏写意流畅#牛气冲天",
                  "price": 688,
                  "fengmian": "/picture/shopping/goods/琢磨/木雕/乐清黄杨木雕8_1.jpg",
                  "number": "1"
              }
          ]
      }
  ]
}
this.setState({shoppingCartData: shoppingCartData})
    let dataArr = shoppingCartData.docs
    let tempStatusArr = []
      let items = dataArr[0].shopcar
      let shopObj = {}
      shopObj.checked = false
      let tempItems = []
      for (let j = 0; j < items.length; j++) {
        let item = items[j]
        item.checked = false
        item.quantity = item.number
        tempItems.push(item)
      }
      shopObj.items = tempItems
      tempStatusArr.push(shopObj)
    this.state.status = tempStatusArr
    console.log(this.state.status)
  }


  checkItem(sectionIndex, index) {
    let tempStatus = this.state.status
    let tempShop = tempStatus[sectionIndex]
    let tempShopItems = tempStatus[sectionIndex].items
    let item = tempShopItems[index]
    item.checked = !item.checked

    let isSelectedAllShopItem = true
    for (let j = 0; j < tempShopItems.length; j++) {
      let item = tempShopItems[j]
      if (!item.checked) {
        isSelectedAllShopItem = false
        break
      }
    }

    tempShop.checked = isSelectedAllShopItem

    let isSelectedAllShop = true
    for (let k = 0; k < tempStatus.length; k++) {
      let shop = tempStatus[k]
      if (!shop.checked) {
        isSelectedAllShop = false
        break
      }
    }

    this.calculateCountAndPrice()
    this.setState({ isSelectedAllItem: isSelectedAllShop, status: tempStatus })
  }

  checkedShop(index) {
    let tempStatus = this.state.status
    let shop = tempStatus[index]
    shop.checked = !shop.checked
    let items = shop.items
    for (let j = 0; j < items.length; j++) {
      let item = items[j]
      item.checked = shop.checked
    }

    let isSelectedAllShop = true
    for (let j = 0; j < tempStatus.length; j++) {
      let shop = tempStatus[j]
      if (!shop.checked) {
        isSelectedAllShop = false
        break
      }
    }
    this.calculateCountAndPrice()
    this.setState({ isSelectedAllItem: isSelectedAllShop, status: tempStatus })
  }
  checkAllShop() {
    let tempSelectedAllItem = !this.state.isSelectedAllItem
    let tempStatus = this.state.status
    for (let i = 0; i < tempStatus.length; i++) {
      let shop = tempStatus[i]
      shop.checked = tempSelectedAllItem
      let items = shop.items
      for (let j = 0; j < items.length; j++) {
        let item = items[j]
        item.checked = tempSelectedAllItem
      }
    }

    this.calculateCountAndPrice()
    this.setState({ isSelectedAllItem: tempSelectedAllItem, status: tempStatus })
  }

  minus(sectionIndex, index) {
    let tempStatus = this.state.status
    let minQuantity = 1//设定最小购买数
    let shop = tempStatus[sectionIndex]
    let items = shop.items
    let item = items[index]
    if (item.quantity <= minQuantity) {
      alert('商品购买数量不能小于:' + minQuantity)
    } else {
      item.quantity -= 1
    }

    if (item.checked) {
      this.calculateCountAndPrice()
    }
    this.setState({ status: tempStatus })
  }

  add(sectionIndex, index) {
    let tempStatus = this.state.status
    let maxQuantity = 1//设定最大购买数
    let shop = tempStatus[sectionIndex]
    let items = shop.items
    let item = items[index]
    if (item.quantity >= maxQuantity) {
      alert('商品购买数量不能大于:' + maxQuantity)
    } else {
      item.quantity += 1
    }
    if (item.checked) {
      this.calculateCountAndPrice()
    }
    this.setState({ status: tempStatus })
  }

  calculateCountAndPrice() {
    let tempTotalNum = 0
    let tempTotalPrice = 0
    let tempStatus = this.state.status
    for (let i = 0; i < tempStatus.length; i++) {
      let shop = tempStatus[i]
      let items = shop.items
      for (let j = 0; j < items.length; j++) {
        let item = items[j]
        if (item.checked) {
          tempTotalNum += 1
          tempTotalPrice += item.price * item.quantity
        }
      }
    }
    this.setState({ totalNum: tempTotalNum, totalPrice: tempTotalPrice })
  }

  renderItem = info => {
    let item = info.item
    let index = info.index
    let sectionIndex = info.section.index
    let shop = this.state.status[sectionIndex]
    let statusItem = shop.items[index]
    return (
      <View style={styles.cellStyle}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ width: '10%', height: '100%', justifyContent: 'center' }}
          onPress={() => this.checkItem(sectionIndex, index)}>
          <Image style={styles.checkBox} source={statusItem.checked ? require('../../Image/ShopScreen/ic_selected.png') : require('../../Image/ShopScreen/ic_defult.png')} resizeMode={'center'} />
        </TouchableOpacity>
        <Image style={{ width: '20%', height: 80 }} source={{ uri: https+item.fengmian }}>
        </Image>
        <View style={{ width: '70%' }}>
          <View style={{ flex: 1, marginHorizontal: 10, height: 50 }}>
            <Text style={{ fontSize: 13, color: 'black' }}>{item.miaoshu}</Text>
          </View>
          <View style={{ width: 95, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
            <Text style={{ fontSize: 15, color: '#f76220' }}>{`￥${item.price}`}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.minus(sectionIndex, index)} style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5, marginLeft: 120, borderWidth: 0.5, borderColor: 'black' }}>
                <Image style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} source={require('../../Image/ShopScreen/Group.png')} />
              </TouchableOpacity>
              <View style={{ width: 40, height: 27, borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 15 }}>{statusItem.quantity}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5, borderWidth: 0.5, borderColor: 'black' }} onPress={() => this.add(sectionIndex, index)}>
                <Image style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={require('../../Image/ShopScreen/Group5.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderSectionHeader = info => {
    let section = info.section.key
    let index = info.section.index
    let shop = this.state.status[index]
    return (
      <View style={styles.sectionHeader}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.checkedShop(index)}>
          <Image style={styles.checkBox} source={shop.checked ? require('../../Image/ShopScreen/ic_selected.png') : require('../../Image/ShopScreen/ic_defult.png')} resizeMode={'center'} />
        </TouchableOpacity>
        <Text style={{ color: 'blue', fontSize: 12 }}>{section}</Text>
      </View>
    )
  }

  render() {
const shoppingCartData = {
  "docs": [
      {
          "shopcar": [
              {
                  "goods": "手倚莲花",
                  "miaoshu": "#乐清黄杨木雕#华东一枝花#于精雕细刻中不乏写意流畅#手倚莲花",
                  "price": 688,
                  "fengmian": "/picture/shopping/goods/琢磨/木雕/乐清黄杨木雕2_1.jpg",
                  "number": "1"
              },
              {
                  "goods": "龙龟",
                  "miaoshu": "#乐清黄杨木雕#华东一枝花#于精雕细刻中不乏写意流畅#龙龟",
                  "price": 688,
                  "fengmian": "/picture/shopping/goods/琢磨/木雕/乐清黄杨木雕12_1.jpg",
                  "number": "1"
              },
              {
                  "goods": "调皮兔",
                  "miaoshu": "#乐清黄杨木雕#华东一枝花#于精雕细刻中不乏写意流畅#调皮兔",
                  "price": 688,
                  "fengmian": "/picture/shopping/goods/琢磨/木雕/乐清黄杨木雕19_1.jpg",
                  "number": "1"
              },
              {
                  "goods": "国泰民安",
                  "miaoshu": "#乐清黄杨木雕#华东一枝花#于精雕细刻中不乏写意流畅#国泰民安",
                  "price": 688,
                  "fengmian": "/picture/shopping/goods/琢磨/木雕/乐清黄杨木雕17_1.jpg",
                  "number": "1"
              },
              {
                  "goods": "牛气冲天",
                  "miaoshu": "#乐清黄杨木雕#华东一枝花#于精雕细刻中不乏写意流畅#牛气冲天",
                  "price": 688,
                  "fengmian": "/picture/shopping/goods/琢磨/木雕/乐清黄杨木雕8_1.jpg",
                  "number": "1"
              }
          ]
      }
  ]
}
    let tempArr = shoppingCartData.docs.map((item, index) => {
      let tempData = {}
      // tempData.key = item.shopName
      tempData.index = index
      tempData.data = item.shopcar
      return tempData
    })
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{
          backgroundColor: "#fff",
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderBottomColor: "#000",
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
            }}>购物车</Text>
          </View>
        </View>
        <SectionList
          // renderSectionHeader={this.renderSectionHeader}//店铺组件
          renderItem={this.renderItem}
          sections={tempArr}
          ItemSeparatorComponent={() => <View />}
          ListHeaderComponent={() => <View />}
          ListFooterComponent={() => <View />}
        />
        <View style={styles.toolBar}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.checkAllShop()}>
              <Image style={styles.checkBox} source={this.state.isSelectedAllItem ? require('../../Image/ShopScreen/ic_selected.png') : require('../../Image/ShopScreen/ic_defult.png')} resizeMode={'center'} />
            </TouchableOpacity>
            <Text>全选</Text>
          </View>
          <Text style={{ marginHorizontal: 10 }}>合计:
            <Text style={{ color: '#f76220' }}>￥{parseFloat(this.state.totalPrice).toFixed(2)}</Text>
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('确认订单')}
            style={{ width: 100, backgroundColor: '#f76220', alignItems: 'center', marginRight: 5, justifyContent: 'center', height: 35, borderRadius: 20 }}>
            <Text style={{ color: '#fff' }}>下单({this.state.totalNum})</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  navBar: {
    height: 50,
    alignItems: 'center',
    // justifyContent: 'center',
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    flexDirection: 'row',
    // alignItems:'center',
    // justifyContent:'center'
  },
  cellStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    // borderBottomWidth: 1,
    // borderBottomColor:'black',
    backgroundColor: '#fff',
    width: '100%',
    height: 100
  },
  sectionHeader: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'grey'
  },
  checkBox: {
    width: 40,
    height: 40,
  },
  toolBar: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#fff'

  }
})
