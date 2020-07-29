import React, { Component } from 'react';
import {
    Text,View,
    AppRegistry,StyleSheet,
} from 'react-native';


export default class Left extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount(){

    }


    render() {
        const countrys = this.props.countrys.length>0 && this.props.countrys;
        return (
            <View style={styles.div}>
                <View style={styles.line}/>
                <View style={styles.country}>
                    {
                        countrys && countrys.map((v,k)=>{
                            return(
                                this.props.conuntry != v ?
                                    <View style={styles.noChange} key={k}>
                                         <Text style={styles.noChangeFont} >{v}</Text>
                                    </View>
                                    :
                                    <View style={styles.change} key={k}>
                                        <View style={styles.circle}/>
                                         <Text style={styles.changeFont} key={k}>{v}</Text>
                                    </View>
                                )
                        })
                    }
                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    country:{
        justifyContent:"center"
    },
    noChange:{
        marginTop:30,
        marginLeft:25

    },
    circle:{
        width:15,
        height:15,
        borderWidth:1,
        borderRadius:50,
        borderColor:'#FF8247',
        backgroundColor:"#F5F5F5"
    },
    change:{
        marginTop:30,
        marginLeft:10,
        flexDirection:'row',
        alignItems:'center',
        left:-17.5
    },

    div:{
        flex:1,
        flexDirection:'row',
        backgroundColor:"#F5F5F5"
    },
    line:{
        borderWidth:1,
        borderColor:"#8B4513",
        marginLeft:20
    },
    changeFont:{
        fontSize:20,
        color:'#FF8247',
        marginLeft:15

    },
    noChangeFont:{
        fontSize:16,
        color:'#696969',
    },

});
AppRegistry.registerComponent('Left', () => Left);