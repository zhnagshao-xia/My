import React,{Component} from 'react';
import {View,Button,Text,TouchableOpacity} from 'react-native';

 
export default class App extends Component{
    constructor(){
        super();
        this.state = {
            textValue:'Change me'
        }
    }
 
    onPress = () => {
        this.setState({
            textValue: "THE NEW TEXT GOES HERE"
        })
    }
 
     render(){
        return(
        <View style={{paddingTop: 20}}>

            <TouchableOpacity
            style={{width:200,height:100,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}
             onPress={this.onPress}>
                <Text style={{color: 'cyan'}}>{this.state.textValue}</Text>
             </TouchableOpacity>
        </View>
        );
    }
}