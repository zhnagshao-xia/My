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
            {
                "id": "1",
                "name": "美术",
                select: false
            },
            {
                "id": "2",
                "name": "舞蹈",
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
                        style={{
                            borderWidth: 1,
                            borderColor: '#c9c5c5',
                            width: 50,
                            height: 23,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 10,
                            borderRadius: 5,

                            backgroundColor: "#aaa",
                        }}>
                        <Text style={{
                            fontSize: 12,
                        }}>已关注</Text>
                    </TouchableOpacity>
                )
            } else {
                menuArr.push(

                    // 未选中状态
                    <TouchableOpacity
                        onPress={() => this._selectMultiItemPress(item)}
                        style={{
                            borderWidth: 1,
                            borderColor: '#c9c5c5',
                            width: 50,
                            height: 23,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 10,
                            borderRadius: 5,

                            backgroundColor: "white",
                        }}>
                        <Text style={{
                            fontSize: 12,
                        }}>+关注</Text>
                    </TouchableOpacity>
                )
            }
        }
        return (
            //讲各类状态框输出到前端页面
            <View>{menuArr}</View>
        );
    }

    render() {

        return (
            <View>{this._renderMultiMark()}</View>
        );

    }
}
const styles = StyleSheet.create({
});