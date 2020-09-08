import React, { Component } from '../../../../node_modules/react';
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
    },
    noChange:{
        marginTop:35,
        marginLeft:15,
    },
    circle:{
        width:13,
        height:13,
        borderWidth:1,
        borderRadius:50,
        borderColor:'#945357',
        backgroundColor:"#F5F5F5"
    },
    change:{
        marginTop:30,
        marginLeft:10,
        flexDirection:'row',
        alignItems:'center',
        left:-17,
    },

    div:{
        flex:1,
        flexDirection:'row',
        backgroundColor:"#F5F5F5"
    },
    line:{
        borderWidth:0.6,
        borderColor:"#8B4513",
        marginLeft:20
    },
    changeFont:{
        fontSize:17,
        color:'#945357',
        marginLeft:15

    },
    noChangeFont:{
        fontSize:12,
        color:'#696969',
    },

});
AppRegistry.registerComponent('Left', () => Left);