import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    AsyncStorage,
    Alert,
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

var http = "http://192.168.50.91:3000";
var URL1 = http + "/volunteer/details/submit";
var copyusername;

export default class App extends Component {
    constructor(props) {
        super(props);
        const { navigation, route } = this.props;
        let title = route.params.title;
        this.state = {
            title,
            username: "",
            name: "",
            work: "",
            telephone: "",
            email: "",
            other: "",
        }
    }

    checkUserAction = async () => {
        const res = await AsyncStorage.getItem('userInfo') || '{}'//AsyncStorage.getItem通过key字段来进行查询存储的数据，把该结果值作为参数传入第二个callback方法
        const { username = '' } = JSON.parse(res)
        username && this.setState({
            username
        })
    }

    _onClickUp = () => {
        var navigation = this.props.navigation;
        fetch(URL1, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: copyusername,
                title: this.state.title,
                name: this.state.name,
                work: this.state.work,
                telephone: this.state.telephone,
                email: this.state.email,
                other: this.state.other,
            })
        })
            .then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 200) {
                    Alert.alert("提交成功")
                    navigation.navigate("记");
                }
            })
    }

    render() {
        const { navigation } = this.props;
        const username = this.state.username;
        copyusername = username;
        console.log(copyusername);
        navigation.isFocused = () => {
            console.log("监测用户状态")
            this.checkUserAction();
        }
        return (
            <View>
                <View style={{
                    backgroundColor: "#fff",
                    height: 45,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'row',
                    borderBottomWidth: 0.5,
                    borderBottomColor: "#000",
                }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}
                        style={{
                            width: 50,
                            position: "absolute",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            left: 0
                        }}>
                        <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
                    <View style={{ width: 200 }}>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                        }}>报名表</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <ImageBackground
                            style={{
                                width: '100%',
                                marginTop: 30,
                                height: '100%',
                                flexDirection: 'row',
                                borderColor: '#c40018',
                                borderRightWidth: 3,
                                borderLeftWidth: 3
                            }}
                            source={require('../../../Image/SignUp/under.png')}>
                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    height: 80,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 350,
                                    marginLeft: 55
                                }}
                                onPress={() => {
                                    this._onClickUp()
                                }}>
                                <ImageBackground style={{
                                    width: '100%',
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    resizeMode: 'stretch'
                                }}
                                    source={require('../../../Image/SignUp/submit.png')}>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>提</Text>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>交</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <View style={{ width: 30, height: 250, marginLeft: 12, marginTop: 30 }}>
                                <View style={{ width: 30, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black' }}>其</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }}>它</Text>
                                    <Text style={{ fontSize: 15, color: 'red' }}>*</Text>
                                </View>
                                <TextInput
                                    multiline={true}
                                    style={{ width: 30, height: 180, backgroundColor: '#bfbfbf', textAlignVertical: 'top', padding: 10 }}
                                    onChangeText={(text) => { this.setState({ other: text }) }}></TextInput>
                            </View>
                            <View style={{ width: 30, height: 250, marginLeft: 12, marginTop: 30 }}>
                                <View style={{ width: 30, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black' }}>邮</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }}>箱</Text>
                                    <Text style={{ fontSize: 15, color: 'red' }}>*</Text>
                                </View>
                                <TextInput
                                    multiline={true}
                                    style={{ width: 30, height: 180, backgroundColor: '#bfbfbf', textAlignVertical: 'top', padding: 10 }}
                                    onChangeText={(text) => { this.setState({ email: text }) }}></TextInput>
                            </View>
                            <View style={{ width: 30, height: 250, marginLeft: 12, marginTop: 30 }}>
                                <View style={{ width: 30, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black' }}>电</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }}>话</Text>
                                    <Text style={{ fontSize: 15, color: 'red' }}>*</Text>
                                </View>
                                <TextInput
                                    multiline={true}
                                    style={{ width: 30, height: 180, backgroundColor: '#bfbfbf', textAlignVertical: 'top', padding: 10 }}
                                    onChangeText={(text) => { this.setState({ telephone: text }) }}></TextInput>
                            </View>
                            <View style={{ width: 30, height: 250, marginLeft: 12, marginTop: 30 }}>
                                <View style={{ width: 30, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black' }}>职</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }}>业</Text>
                                    <Text style={{ fontSize: 15, color: 'red' }}>*</Text>
                                </View>
                                <TextInput
                                    multiline={true}
                                    style={{ width: 30, height: 180, backgroundColor: '#bfbfbf', textAlignVertical: 'top', padding: 10 }}
                                    onChangeText={(text) => { this.setState({ work: text }) }}></TextInput>
                            </View>
                            <View style={{ width: 30, height: 250, marginLeft: 12, marginTop: 30 }}>
                                <View style={{ width: 30, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black' }}>姓</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }}>名</Text>
                                    <Text style={{ fontSize: 15, color: 'red' }}>*</Text>
                                </View>
                                <TextInput
                                    multiline={true}
                                    style={{ width: 30, height: 180, backgroundColor: '#bfbfbf', textAlignVertical: 'top', padding: 10 }}
                                    onChangeText={(text) => { this.setState({ name: text }) }}></TextInput>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.bottom}>
                        <Image style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} source={require('../../../Image/SignUp/spindrift.png')}></Image>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 660,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        flexDirection: 'column-reverse',
    },
    header: {
        width: '90%',
        height: '100%',
        alignItems: 'center',
    },
    bottom: {
        width: "100%",
        height: 150,
        position: 'absolute',
        bottom: 25
    }

})