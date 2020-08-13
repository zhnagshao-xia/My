import React, { Component } from 'react';
import {
    Text,View,
    AppRegistry,StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';


export default class Index extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount(){

    }


    render() {
        return (
            <View style={styles.div}>
                <WebView
                      style={styles.webView1}
                      source={{uri: 'file:///android_asset/web/index.html'}}
                />
            </View>
        );
    }
};
const styles = StyleSheet.create({

    div:{
        flex:1,
        flexDirection:'row',
        backgroundColor:"#F5F5F5"
    },
    webView1:{
        backgroundColor:'#000001',

        flex:1,
        width:'100%',
        height:'100%',
    },

});
AppRegistry.registerComponent('Index', () => Index);