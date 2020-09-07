import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, SectionList} from 'react-native'
// import {commonStyle} from './commonStyle'
const shoppingCartData = require('../ShopScreen/ShoppingCartDate.json')

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
    }
  }

  componentWillMount() {
    let dataArr = shoppingCartData.data
    let tempStatusArr = []
    for (let i = 0; i < dataArr.length; i++) {
      let items = dataArr[i].shopItems
      let shopObj = {}
      shopObj.checked = false
      let tempItems = []
      for (let j = 0; j < items.length; j++) {
        let item = items[j]
        item.checked = false
        item.quantity = item.minQuantity
        tempItems.push(item)
      }
      shopObj.items = tempItems
      tempStatusArr.push(shopObj)
    }
    this.state.status = tempStatusArr
    console.log(this.state.status)
  }

  componentDidMount() {
    // 网络请求获取购物车数据
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
    for (let k = 0; k < tempStatus.length; k ++) {
      let shop = tempStatus[k]
      if (!shop.checked) {
        isSelectedAllShop = false
        break
      }
    }

    this.calculateCountAndPrice()
    this.setState({isSelectedAllItem: isSelectedAllShop, status: tempStatus})
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
    this.setState({isSelectedAllItem: isSelectedAllShop, status: tempStatus})
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
    this.setState({isSelectedAllItem: tempSelectedAllItem, status: tempStatus})
  }

  minus(sectionIndex, index) {
    let tempStatus = this.state.status
    let shop = tempStatus[sectionIndex]
    let items = shop.items
    let item = items[index]
    if (item.quantity <= item.minQuantity) {
      alert('商品购买数量不能小于:'+item.minQuantity)
    } else {
      item.quantity -= 1
    }

    if (item.checked) {
      this.calculateCountAndPrice()
    }
    this.setState({status: tempStatus})
  }

  add(sectionIndex, index) {
    let tempStatus = this.state.status
    let shop = tempStatus[sectionIndex]
    let items = shop.items
    let item = items[index]
    if (item.quantity >= item.maxQuantity) {
      alert('商品购买数量不能大于:'+item.maxQuantity)
    } else {
      item.quantity += 1
    }
    if (item.checked) {
      this.calculateCountAndPrice()
    }
    this.setState({status: tempStatus})
  }

  calculateCountAndPrice() {
    let tempTotalNum = 0
    let tempTotalPrice = 0
    let tempStatus = this.state.status
    for (let i = 0; i < tempStatus.length; i ++) {
      let shop = tempStatus[i]
      let items = shop.items
      for (let j = 0; j < items.length; j++) {
        let item = items[j]
        if (item.checked) {
          tempTotalNum += 1
          tempTotalPrice += item.itemPrice * item.quantity
        }
      }
    }
    this.setState({totalNum: tempTotalNum, totalPrice: tempTotalPrice})
  }

  renderItem = info => {
    let item = info.item
    let index = info.index
    let sectionIndex = info.section.index
    let shop = this.state.status[sectionIndex]
    let statusItem = shop.items[index]
    return (
      <View style={styles.cellStyle}>
        <TouchableOpacity style={{width:'10%',height:'100%',justifyContent:'center'}}
         onPress={() => this.checkItem(sectionIndex, index)}>
          <Image style={styles.checkBox} source={statusItem.checked ? require('../../Image/ShopScreen/ic_selected.png') : require('../../Image/ShopScreen/ic_defult.png')} resizeMode={'center'}/>
        </TouchableOpacity>
        <Image style={{width:'20%', height: 80}} source={{uri: item.itemimg}}>
        </Image>
        <View style={{width:'70%'}}>
          <View style={{ flex: 1, marginHorizontal: 10, height: 50}}>
            <Text style={{fontSize: 13, color:'black'}}>{item.itemName}</Text>
          </View>
          <View style={{width:95,flexDirection:'row', alignItems:'center', marginHorizontal: 20}}>
            <Text style={{fontSize: 15, color:'#f76220'}}>{`￥${item.itemPrice}`}</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity onPress={() => this.minus(sectionIndex, index)} style={{borderTopLeftRadius:5,borderBottomLeftRadius:5,marginLeft:120,borderWidth:0.5,borderColor:'black'}}>
                <Image style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}} source={require('../../Image/ShopScreen/Group.png')}/>
              </TouchableOpacity>
              <View style={{width: 40,height:27,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'black',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15}}>{statusItem.quantity}</Text>
              </View>
              <TouchableOpacity style={{borderTopRightRadius:5,borderBottomRightRadius:5,borderWidth:0.5,borderColor:'black'}} onPress={() => this.add(sectionIndex, index)}>
                <Image style={{borderTopRightRadius:10,borderBottomRightRadius:10}} source={require('../../Image/ShopScreen/Group5.png')}/>
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
        <TouchableOpacity onPress={() => this.checkedShop(index)}>
          <Image style={styles.checkBox} source={shop.checked ? require('../../Image/ShopScreen/ic_selected.png') : require('../../Image/ShopScreen/ic_defult.png')} resizeMode={'center'}/>
        </TouchableOpacity>
        <Text style={{color: 'blue', fontSize: 12}}>{section}</Text>
      </View>
    )
  }

  render() {
    let tempArr = shoppingCartData.data.map((item, index) => {
      let tempData = {}
      tempData.key = item.shopName
      tempData.index = index
      tempData.data = item.shopItems
      return tempData
    })
    return (
      <View style={styles.container}>
        {/* <View style={styles.navBar}>
          <TouchableOpacity style={{width:30,height:30}} >
            <Image style={{width:'100%',height:'100%'}} source={require('./picture/pic29.png')}></Image>
          </TouchableOpacity>
          <Text style={{ fontSize: 17,marginLeft:140}}>购物车</Text>
        </View> */}
        <SectionList
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
          sections={tempArr}
          ItemSeparatorComponent={() => <View/>}
          ListHeaderComponent={() => <View/>}
          ListFooterComponent={() => <View/>}
        />
        <View style={styles.toolBar}>
          <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity onPress={() => this.checkAllShop()}>
              <Image style={styles.checkBox} source={this.state.isSelectedAllItem ? require('../../Image/ShopScreen/ic_selected.png') : require('../../Image/ShopScreen/ic_defult.png')} resizeMode={'center'}/>
            </TouchableOpacity>
            <Text>全选</Text>
          </View>
          <Text style={{marginHorizontal: 10}}>合计:
            <Text style={{color:'#f76220'}}>￥{parseFloat(this.state.totalPrice).toFixed(2)}</Text>
          </Text>
          <TouchableOpacity style={{width: 100, backgroundColor:'#f76220', alignItems: 'center',marginRight:5, justifyContent: 'center', height:35,borderRadius:20}}>
            <Text style={{color: '#fff'}}>下单({this.state.totalNum})</Text>
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
    flexDirection:'row',
    // alignItems:'center',
    // justifyContent:'center'
  },
  cellStyle: {
    flexDirection:'row',
    alignItems:'center',
    paddingVertical: 10,
    marginBottom:10,
    // borderBottomWidth: 1,
    // borderBottomColor:'black',
    backgroundColor:'#fff',
    width:'100%',
    height:100
  },
  sectionHeader: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth:0.5,
    borderColor:'grey'
  },
  checkBox: {
    width: 40,
    height: 40,
  },
  toolBar: {
    height: 44,
    flexDirection:'row',
    alignItems: 'center',
    // backgroundColor:'red'
   
  }
})
