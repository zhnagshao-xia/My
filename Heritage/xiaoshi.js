import React, {Component} from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class examples extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{padding: 10}}
                    onPress={()=>{
                        this.refs.toast.show('hello world!',DURATION.LENGTH_LONG);
                    }}>
                    <Text>Press me</Text>
                </TouchableOpacity>
                <Toast
                    ref="toast"
                    style={{backgroundColor:'red'}}
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'black'}}
                />
            </View>
        );
    }}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});