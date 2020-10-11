import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import UI from './UI';

var https = "http://121.196.191.45";
// var http = "http://192.168.50.91:3000";
var http = "http://121.196.191.45:3000";
var URL1 = http + "/luntan/message1";

const imageWidth = 20;

export default class BarrageItem extends Component {
    constructor(props) {
        super(props);
        this.position = UI.size.screenWidth;
        this.isFreeState = false; // 是否空闲
        this.width = 0; // 弹幕本身的宽度
        this.state = {
            docs: [],
          };
        this.icon = [
            '/picture/touxiang/fans/a1.jpg',
            '/picture/touxiang/fans/a2.jpg',
            '/picture/touxiang/fans/a3.jpg',
            '/picture/touxiang/fans/a4.jpg',
            '/picture/touxiang/fans/a5.jpg',
            '/picture/touxiang/fans/a6.jpg',
            '/picture/touxiang/fans/a7.jpg',
            '/picture/touxiang/fans/a8.jpg',
            '/picture/touxiang/fans/a9.jpg',
            '/picture/touxiang/fans/a10.jpg',
            '/picture/touxiang/fans/a11.jpg',
            '/picture/touxiang/fans/a12.jpg',
            '/picture/touxiang/fans/a13.jpg',
            '/picture/touxiang/fans/a14.jpg',
            '/picture/touxiang/fans/a15.jpg',
            '/picture/touxiang/fans/a16.jpg',
            '/picture/touxiang/fans/a17.jpg',
            '/picture/touxiang/fans/a18.jpg',
            '/picture/touxiang/fans/a19.jpg',
            '/picture/touxiang/fans/a20.jpg',
            '/picture/touxiang/fans/a21.jpg',
            '/picture/touxiang/fans/a22.jpg',
            '/picture/touxiang/fans/a23.jpg',
            '/picture/touxiang/fans/a24.jpg',
            '/picture/touxiang/fans/a25.jpg',
            '/picture/touxiang/fans/a26.jpg',
            '/picture/touxiang/fans/a27.jpg',
            '/picture/touxiang/fans/a28.jpg',
            '/picture/touxiang/fans/a29.jpg',
            '/picture/touxiang/fans/a30.jpg',
            '/picture/touxiang/fans/a31.jpg',
            '/picture/touxiang/fans/a32.jpg',
        ]
    }

    static propTypes = {
        data: PropTypes.object, // 数据
        line: PropTypes.number, // 弹道位置
        heightOfLine: PropTypes.number, // 弹道高度
        type: PropTypes.number, // 弹幕类型
    }

    static defaultProps = {
        data: {},
        line: 0,
        heightOfLine: UI.size.screenHeight / 9 - UI.lineHeight.regular - 1, // 弹道距离父视图上边界的距离
        type: 1,
    }

    shouldComponentUpdate() {
        return false;
    }

    getTop = () => {
        const { line, heightOfLine } = this.props;
        return heightOfLine * line;
    }

    renderTextType = () => {
        const { data } = this.props;
        const { title } = data;
        this.width = UI.fontSize.regular * title.length;
        const top = this.getTop();
        return (
            <View
                style={[styles.view, { top, width: this.width, left: this.position }]}
                removeClippedSubviews={true}
                ref={a => this.view = a}
            >
                <Text>{title}</Text>
            </View>
        )
    }

    renderImageType = () => {
        const { data } = this.props;
        const { title } = data;
        this.width = UI.fontSize.regular * title.length + imageWidth;
        const top = this.getTop();
        const icon = this.icon;
        console.log(data)
        return (
            <View
                style={[styles.imageView, { top, width: this.width, left: this.position }]}
                removeClippedSubviews={true}
                ref={a => this.view = a}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                
                    <Image style={styles.image} source={{uri:https+"/picture/danmu/弹幕1.png"}}/>
                    <Text>{title}</Text> 
                </View>
            </View>
        );
}

   

    render() {
        
        console.debug('[BarrageItem]')
        const { type } = this.props;
        switch (type) {
            case 1:
                return this.renderTextType();
                break;
            case 2:
                return this.renderImageType();
                break;
            default:
                return this.renderTextType();
                break;
        }
    }
}

const styles = StyleSheet.create({
    view: {
        overflow: 'hidden',
        position: 'absolute',
        // borderWidth: 1,
    },
    text: {
        backgroundColor: 'red',
        fontSize: UI.fontSize.regular,
        lineHeight: UI.lineHeight.regular,
    },
    imageView: {
        overflow: 'hidden',
        position: 'absolute',
        flexDirection: 'row',
        // borderWidth: 1,
    },
    image: {
        width: imageWidth,
        height: imageWidth,
        // backgroundColor: 'red',
        borderRadius: 10,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 50,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});