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
            {
                "id": "3",
                "name": "舞蹈",
                select: false
            },
            {
                "id": "4",
                "name": "音乐",
                select: false
            },
            {
                "id": "5",
                "name": "美术",
                select: false
            },
            {
                "id": "6",
                "name": "舞蹈",
                select: false
            },
            {
                "id": "7",
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
                        style={[styles.markRow, styles.markChecked]}>
                        <Text style={styles.markCheckedText}>{item.name}</Text>
                    </TouchableOpacity>
                )
            } else {
                menuArr.push(

                    // 未选中状态
                    <TouchableOpacity
                        onPress={() => this._selectMultiItemPress(item)}
                        style={[styles.markRow, styles.markUnCheck]}>
                        <Text style={styles.markUnCheckText}>{item.name}</Text>
                    </TouchableOpacity>
                )
            }
        }
        return (
            //讲各类状态框输出到前端页面
            <View style={styles.multiBox}>
                {menuArr}
            </View>
        );
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView
                    style={{ flexDirection: "row" }}
                    horizontal={true}
                >{this._renderMultiMark()}</ScrollView>
                <Button title={"确定"} onPress={() => this._submitMultiPress()} />
            </View>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    multiBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "column"
    },
    markRow: {
        width: 90,
        height: 40,
        lineHeight: 40,
        padding: 10,
        marginBottom: 16,
        marginRight: 16,
        borderRadius: 24,
        borderWidth: 0.5,
    },
    markChecked: {
        backgroundColor: "#aaa",
        borderColor: "white",
    },
    markUnCheck: {
        backgroundColor: "white",
        borderColor: "#111",
    },
    markCheckedText: {
        fontSize: 15,
        color: "white",
        textAlign: "center",
        flexDirection: "row"
    },
    markUnCheckText: {
        fontSize: 15,
        color: "#000",
        textAlign: "center",
    },
});