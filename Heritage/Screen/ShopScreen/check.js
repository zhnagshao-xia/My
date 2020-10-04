import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

export default class TestMarkCheck extends Component {
    static defaultProps = {
        multiList: [
            {
                "id": "0",
                "name": "音乐",
                select: false
            },
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            multiData: this.props.multiList,
            selectMultiItem: [],
        }
    }
    //多选
    _selectMultiItemPress(item) {
        if (item.select) {
            this.state.selectMultiItem.splice(this.state.selectMultiItem.findIndex(function (x) {
                return x === item.id;
            }), 1);
        } else {
            this.state.selectMultiItem.push(item.id);
        }
        this.state.multiData[item.id].select = !item.select;
        this.setState({ multiData: this.state.multiData });
    }
    //递交 选中 
    _submitMultiPress() {
        alert(`选中了${JSON.stringify(this.state.selectMultiItem)}`)
    }
    //渲染多选标记
    _renderMultiMark() {
        let multiData = this.state.multiData;
        let len = multiData.length;
        let menuArr = [];
        for (let i = 0; i < len; i++) {
            let item = multiData[i];
            if (item.select) {
                menuArr.push(
                    //选中状态
                    <TouchableOpacity
                        onPress={() => this._selectMultiItemPress(item)}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: "white",
                            textAlign: "center",
                            flexDirection: "row"
                        }}>已关注</Text>
                    </TouchableOpacity>
                )
            } else {
                menuArr.push(

                    // 未选中状态
                    <TouchableOpacity
                        onPress={() => this._selectMultiItemPress(item)}
                    style={{}}>
                        <Text style={{
                            fontSize: 15,
                            color: "#000",
                            textAlign: "center",
                        }}>+关注</Text>
                    </TouchableOpacity>
                )
            }
        }
        return (
            //讲各类状态框输出到前端页面
            <View style={{
                width: 70,
                height: 40,
                backgroundColor: "red"
            }}>
                {menuArr}
            </View>
        );
    }

    render() {

        return (
            <View style={{flex: 1,}}>
                <View>{this._renderMultiMark()}</View>
            </View>
        );

    }
}
const styles = StyleSheet.create({

});