import React, { Component }  from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Alert,
    TextInput, 
    FlatList, 
    ImageBackground, 
    Image, 
    TouchableHighlight,
    TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

var http = "http://121.196.191.45:3000";
var URL=http+'/regist';

export default class registerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        password2: "",
    }
};
_onClickRegist = () => {
  var navigation = this.props.navigation;
  fetch(URL, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username:this.state.username,
          password:this.state.password,
          password2:this.state.password2
      })
  }).then(function (res) {
      return res.json();
  }).then(function (json) {
      if (json.code == 200) {
          Alert.alert("注册成功")
          navigation.navigate("登录");
      } else if (json.code == 400) {
          Alert.alert("用户名已被注册")
      } else if (json.code == 401){
          Alert.alert("用户名不能为空")
      } else if (json.code == 402){
          Alert.alert("密码不能为空")
      } else if (json.code == 403){
          Alert.alert("两次输入的密码不一样")
      } else if (json.code == 404){
          Alert.alert("密码应在6~12位之间")
      }
  })
};
render(){
  const { navigation } = this.props;
    return (
        <View style={styles.container}>
          <ImageBackground source={require('../../Image/loginScreen/background.png')} style={styles.Image}>
            <View style={styles.container_up}>
              <View style={styles.logo}>
                <Image source={require('../../Image/loginScreen/logo.png')} style={styles.logo_image}></Image>
              </View>
            </View>
            <View style={styles.container_down}>
              <View style={styles.register}>
                <Text style={{ fontSize: 16, letterSpacing: 12, color: '#6092a0' }}>注册</Text>
              </View>
              <View style={styles.textinput}>
              <View style={{marginLeft:10,marginRight:5}}>
                <FontAwesome name={'user'} size={28} color={'#6092a0'}/></View>
                <TextInput 
                    placeholderTextColor="#6092a0" 
                    style={{ height: 50, width: 250 }} 
                    placeholder='请输入用户名' 
                    onChangeText={(text)=>{this.setState({username:text});}}></TextInput>
              </View>
              <View style={styles.textinput}>
              <View style={{marginLeft:10,marginRight:5}}>
                <FontAwesome name={'lock'} size={29} color={'#6092a0'}/></View>
                <TextInput 
                    password={true}
                    keyboardType='numeric'
                    secureTextEntry={true}
                    placeholderTextColor="#6092a0" 
                    style={{ height: 50, width: 250 }} 
                    placeholder='请输入密码'
                    secureTextEntry={true}
                    onChangeText={(text)=>{this.setState({password:text});}}></TextInput>
              </View>
              <View style={styles.textinput}>
              <View style={{marginLeft:10,marginRight:5}}>
                <FontAwesome name={'lock'} size={29} color={'#6092a0'}/></View>
                <TextInput 
                    password={true}
                    keyboardType='numeric'
                    secureTextEntry={true}
                    placeholderTextColor="#6092a0" 
                    style={{ height: 50, width: 250 }} 
                    placeholder='请确认密码'
                    onChangeText={(text)=>{this.setState({password2:text});}}></TextInput>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text>注册即代表您已同意《</Text>
                <TouchableOpacity 
                activeOpacity='0.8'
                onPress={()=>navigation.navigate('Usersaggreement')}><Text style={{color:"#6092a0"}}>注册与使用协议</Text></TouchableOpacity>
                <Text>》</Text>
              </View>
              <TouchableOpacity 
              style={styles.registerbutton}
              onPress={() =>
              {this._onClickRegist();}}
              >
                <Text style={{color:'#fdfdfd'}}>立即注册</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
            onPress={() => {this.props.navigation.navigate("登录");}}
            activeOpacity={0.7}
             style={{position:"absolute",margin:10}}>
            <FontAwesome name={'angle-left'} size={36} color={'#6092a0'}/>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );}
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    Image: {
      flex: 1,
      resizeMode: "cover"
    },
    container_up: {
      height: '35%',
      alignItems: 'center',
      flexDirection: 'column-reverse'
    },
    logo: {
      width: '50%',
      height: '90%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo_image: {
      width: '90%',
      height: '95%'
    },
    container_down: {
      height: 350,
      borderRadius: 10,
      alignItems: 'center',
      marginVertical:22,
      marginHorizontal: 35,
      backgroundColor:'#fff'
    },
    register: {
      height: 50,
      width: '100%',
      alignItems: 'center',
      flexDirection: 'column-reverse',
    },
    textinput: {
      width: '85%',
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      borderWidth:1,
      borderColor:'#6092a0'
    },
    registerbutton:{
      marginTop:15,
      backgroundColor:'#6092a0',
      width:'85%',
      height:'10%',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20
    },
    line:{
      borderWidth:1, 
      width:'35%', 
      height:1, 
      borderColor:'#fff',
      marginHorizontal: 15
    }
  }); 
