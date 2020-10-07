import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import BarrageMoveView from './BarrageMoveView';
import BarrageInputView from './BarrageInputView';
import UI from './UI';

export default class Barrage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            icon:[]
        };
        this.id = 0;
        this.data = [
            '小时候不会背节气歌，老师敲我头上一疙瘩',
            '惊蛰',
            '夏至，而此后白昼越来越短，黑夜越来越长，宜静宜想',
            '立春，春天来了，万物复苏',
            '古人真是聪明',
            '都非常好听，小时候就觉得二十四节气好美啊',
            '立春，万物复苏',
            '霜降',
            '农历农时农事农谚里都是大有学问',
            '24节气歌蕴含了中华民族千百年来的智慧',
            '哪个节气都有自己的特点，哪个都不能少',
            '夏至',
            '一到立春，扫帚都被妈妈收起来了',
            '一到立夏，就在梨树下吃鸡蛋',
            '立秋就开始在地里打滚',
            '立冬就开始搬柴火进门',
            '每个节气都有不同的意义',
            '大雪，因为喜欢下雪',
            '最喜欢惊蛰和小满了，都感觉是很可爱的名字',
            '中华文化，博大精深',
            '记忆里的冬至都和家人一起包饺子煮饺子吃，天寒地冻但心里都是暖暖的',
            '在时间里感受非遗',
            '都喜欢',
            '最喜欢谷雨了',
            '小大寒杀猪过年',
            '节气歌应该纳入课本',
            '都喜欢，每个节气代表的事物都不一样',
            '寒露',
            '古人总结的规律充满智慧',
            '每个都好喜欢，每个名字都好美吖',
            '千百年来劳动人民总结出来的伟大智慧',
            '这就是文化底蕴',
        ];
    }

    componentDidMount() {
        this.addBarrageWithInterval();
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval);
        this.interval1 && clearInterval(this.interval1);
    }

    addBarrageWithInterval = () => {
        this.interval = setInterval(() => {
            this.id = this.id + 1;
            const text = this.getText();
            const newData = [{ title: text, id: this.id }];
            this.setState({ data: newData });
        }, 100);
    }

    onButtonPress = (text) => {
        this.id = this.id + 1;
        const newData = [{ title: text, id: this.id }];
        this.setState({ data: newData });
    }

    getText = () => {
        const number = this.getRundomNumber(this.data.length - 1);
        return this.data[number];
    }

    getRundomNumber = (max) => {
        return Math.floor(Math.random() * (max + 1));
    }

    render() {
        console.debug('Barrage');
        return (
            <View style={styles.container}>
                <View style={styles.barrageView}>
                    <ImageBackground style={{width:'100%',height:'100%'}} source={require('../../Image/TribuneScreen/pic9.jpg')}>
                        <BarrageMoveView newMessages={this.state.data} numberOfLines={11} speed={1} />
                    </ImageBackground>
                </View>            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%'
    },
    barrageView: {
        width:'100%',
        height:'100%'
    },
});