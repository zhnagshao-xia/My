import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
              
                    <FlatList
                        data={[
                            { key: '' },
                            { key: '' },
                            { key: '' },
                            { key: '' },
                        ]}
                        renderItem={({ item }) =>
                            <View style={styles.one}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 85, height: 85, marginLeft: 10, marginTop: 10 }}>
                                        <Image style={{ width: 85, height: 85 }} source={require('../../Image/ShopScreen/umbrella2.png')}></Image>
                                    </View>
                                    <Text style={styles.demol}>{item.key}</Text>
                                    <View style={{ width: 250, height: 85, marginLeft: 10, marginTop: 10 }}>
                                        <Text style={{ fontSize: 15, width: '100%', height: 45 }}>传统纯手工打造油纸伞来自西子湖畔的美意...</Text>
                                        <View style={{ width: '100%', height: 40, flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 20, color: '#f76220', marginTop: 15 }}>￥288</Text>
                                            <Text style={{ fontSize: 15, marginTop: 15, marginLeft: 130 }}>已签收</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row-reverse' }}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('评价商品页面')}
                                        style={{ width: 75, height: 30, marginRight: 20, borderRadius: 15, alignItems: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 0.5 }}>
                                        <Text style={{ fontSize: 15 }}>评 价</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    />
                </View>
           
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
   
    one: {
        height: 130,
        width: '90%',
        backgroundColor: '#fff',
        margin:15,
        borderRadius: 15
    },

    footer: {
        width: '100%',
        height: '7%',

    }
});