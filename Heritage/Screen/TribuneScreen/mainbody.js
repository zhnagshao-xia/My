import React, { useState } from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    FlatList, 
    TouchableOpacity,
    Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// function activityUser(userBackGroundPic, head, username, lineNum, userLv, select) {
const App = () => {
    const [count, setCount] = useState(150);
    const onPress = () => setCount(prevCount => prevCount + 1);
    // const [count2, setCount2] = useState(50);
    // const onPress = () => setCount2(prevCount2 => prevCount2 + 1);]
  return (
    <View style={styles.container}>
        <View style={{height:45,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        borderBottomColor:'black',
        borderWidth:0.5
        }}>
            <View style={{flexDirection:'row',justifyContent:"space-between",width:"90%"}}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <FontAwesome name={'angle-left'} size={25} color={'#000'} />

                </TouchableOpacity>
                <Text style={{fontSize:18,
                textAlign: 'center',
                textAlignVertical: 'center',}}>正文</Text>
                 <View></View>
            </View>
           
      </View>
      <View style={styles.body}>
        <FlatList
            data={[{word: '我爱非遗+',
            a:'非物质文化遗产，是根据联合国教科文组织的《保护非物质文化遗产公约》定义。',
            word2:'非遗+',
            b:'共两条评论'
        },
            
        
                  ]}
                    renderItem={({ item }) =>
                    <View>
                        <View style={styles.ques}>
                            <View style={styles.names}>
                                <Image
                                source={require('../../Image/ShopScreen/pic10.jpg')}
                                style={styles.head}></Image>
                                <View style={styles.right}>
                                    <View style={styles.shang}>
                                        <Text style={styles.word}>{item.word}</Text>
                                        <TouchableOpacity style={styles.guanzhu}>
                                            <FontAwesome name={'plus'} size={10} color={'#000'} />
                                            <Text style={{fontSize:12,color:'black'}}>关注</Text>
                                        </TouchableOpacity>
                                    </View>     
                                    <Text style={{fontSize:12,marginLeft:2}}>刚刚</Text>
                                </View>
                            </View>  
                            <View style={{width:390,height:50}}>
                                <Text style={{fontSize:13}}>{item.a}</Text>   
                            </View>    
                            <View style={{width:390,height:90}}>
                                <Image style={{width:90,height:90}}
                                source={require('../../Image/TribuneScreen/pic9.jpg')}
                                ></Image>
                            </View>    
                        </View> 
                        <View style={{width:'100%',backgroundColor:'#fff',marginTop:20,alignItems:'center'}}>
                            <View style={{width:'100%',height:40,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:15}}>评论</Text>
                            </View>
                            <View style={{width:390,height:150,alignItems:'center'}}>
                                <View style={{width:'100%',height:50,alignItems:'center',flexDirection:'row'}}>
                                    <Image
                                     source={require('../../Image/ShopScreen/pic10.jpg')}
                                     style={{width:40,height:40,backgroundColor:'black',borderRadius:50,marginRight:5}}></Image> 
                                    <View style={{width:340,height:40}}>
                                        <View style={{width:'100%',height:'60%',flexDirection:'row',alignItems:'center'}}>
                                            <Text style={{fontSize:15,color:'black',marginRight:5}}>{item.word2}</Text>
                                            <TouchableOpacity style={styles.guanzhu}>
                                                <FontAwesome name={'plus'} size={10} color={'#000'} />
                                                <Text style={{fontSize:12,color:'black'}}>关注</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity  onPress={onPress}>
                                                <FontAwesome name={'thumbs-up'} size={25} color={'#000'} style={{marginLeft:200}}/>
                                            </TouchableOpacity>
                                            <Text style={{fontSize:13,marginLeft:10}}>{count}</Text>
                                        </View>
                                        <View style={{width:'100%',height:'40%',backgroundColor:'#fff'}}>
                                            <Text style={{fontSize:12}}>刚刚</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{width:'100%',height:50,}}>
                                    <Text style={{fontSize:13}}>{item.a}</Text>
                                </View>
                                <TouchableOpacity style={{width:'95%',height:25,backgroundColor:'#e7e7e7',borderRadius:5,alignItems:'center',flexDirection:'row'}}>
                                    <Text style={{fontSize:13,marginRight:5}}>{item.b}</Text>
                                    <FontAwesome name={'angle-right'} size={20} color={'#000'} />
                                </TouchableOpacity>
                            </View>
                            <View style={{width:390,height:150,alignItems:'center'}}>
                                <View style={{width:'100%',height:50,alignItems:'center',flexDirection:'row'}}>
                                    <Image
                                    source={require('../../Image/ShopScreen/pic10.jpg')}
                                     style={{width:40,height:40,backgroundColor:'black',borderRadius:50,marginRight:5}}></Image> 
                                    <View style={{width:340,height:40}}>
                                        <View style={{width:'100%',height:'60%',flexDirection:'row',alignItems:'center'}}>
                                            <Text style={{fontSize:15,color:'black',marginRight:5}}>{item.word2}</Text>
                                            <TouchableOpacity style={styles.guanzhu}>
                                                <FontAwesome name={'plus'} size={10} color={'#000'} />
                                                <Text style={{fontSize:12,color:'black'}}>关注</Text>
                                                {/* <Text style={{ borderWidth: 1, borderRadius: 2,textAlign:'center',  borderColor:select ?"#6C9575":"#EFEFEF", color: select ? '#6C9575' : "#999999", backgroundColor: select ? '#fff' : "#EFEFEF50", fontSize: 10, width:viewportWidth*0.15, paddingVertical: 5, marginTop: 10 }}>
              {select ? '关注' : '已关注'}</Text> */}
                                            </TouchableOpacity>
                                            <TouchableOpacity  onPress={onPress}>
                                            <FontAwesome name={'thumbs-up'} size={25} color={'#000'} style={{marginLeft:200}}/>
                                            </TouchableOpacity>
                                            <Text style={{fontSize:13,marginLeft:10}}>{count}</Text>
                                        </View>
                                        <View style={{width:'100%',height:'40%',backgroundColor:'#fff'}}>
                                            <Text style={{fontSize:12}}>刚刚</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{width:'100%',height:50,}}>
                                    <Text style={{fontSize:13}}>{item.a}</Text>
                                </View>
                                <TouchableOpacity style={{width:'95%',height:25,backgroundColor:'#e7e7e7',borderRadius:5,alignItems:'center',flexDirection:'row'}}>
                                    <Text style={{fontSize:13,marginRight:5}}>{item.b}</Text>
                                    <FontAwesome name={'angle-right'} size={20} color={'#000'} />
                                </TouchableOpacity>
                            </View>
                            <View style={{width:390,height:150,alignItems:'center'}}>
                                <View style={{width:'100%',height:50,alignItems:'center',flexDirection:'row'}}>
                                    <Image
                                    source={require('../../Image/ShopScreen/pic10.jpg')}
                                     style={{width:40,height:40,backgroundColor:'black',borderRadius:50,marginRight:5}}></Image> 
                                    <View style={{width:340,height:40}}>
                                        <View style={{width:'100%',height:'60%',flexDirection:'row',alignItems:'center'}}>
                                            <Text style={{fontSize:15,color:'black',marginRight:5}}>{item.word2}</Text>
                                            <TouchableOpacity style={styles.guanzhu}>
                                                <FontAwesome name={'plus'} size={10} color={'#000'} />
                                                <Text style={{fontSize:12,color:'black'}}>关注</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={onPress}>
                                            <FontAwesome name={'thumbs-up'} size={25} color={'#000'} style={{marginLeft:200}}/>
                                            </TouchableOpacity>
                                            <Text style={{fontSize:13,marginLeft:10}}>{count}</Text>
                                        </View>
                                        <View style={{width:'100%',height:'40%',backgroundColor:'#fff'}}>
                                            <Text style={{fontSize:12}}>刚刚</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{width:'100%',height:50,}}>
                                    <Text style={{fontSize:13}}>{item.a}</Text>
                                </View>
                                <TouchableOpacity style={{width:'95%',height:25,backgroundColor:'#e7e7e7',borderRadius:5,alignItems:'center',flexDirection:'row'}}>
                                    <Text style={{fontSize:13,marginRight:5}}>{item.b}</Text>
                                    <FontAwesome name={'angle-right'} size={20} color={'#000'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    }
        />
      </View>
      <View style={{width:'100%',height:45,backgroundColor:'#bfbfbf',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <TouchableOpacity style={{width:100,height:40,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <FontAwesome name={'link=ext'} size={20} color={'#000'} />
          <Text style={{fontSize:15,marginLeft:5}}>转发</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:100,height:40,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <FontAwesome name={'commenting'} size={20} color={'#000'} />
          <Text style={{fontSize:15,marginLeft:5}}>评论</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:100,height:40,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <FontAwesome name={'thumbs-up'} size={20} color={'#000'} />
          <Text style={{fontSize:15,marginLeft:5}}>点赞</Text>
          </TouchableOpacity>
      </View>
    
    </View>
  );
}
// }



const styles = StyleSheet.create({
    
    body:{
        width:'100%',
        height:570,
        backgroundColor:'#f2f2f2'
    },
    ques:{
      width:'100%',
      height:200, 
      backgroundColor:'#fff',
      alignItems:'center'
   
    },
    word:{
      fontSize:15,
      color:'#000',
      letterSpacing:3,
    },
    names:{
        width:390,
        height:50,
        alignItems:'center',
        flexDirection:'row',
    },
    head:{
        width:40,
        height:40,
        backgroundColor:'black',
        borderRadius:50,
        marginRight:5
    },
    right:{
        width:350,
        height:40,
    },
    shang:{
        width:'95%',
        height:'60%',
        flexDirection:'row',
        alignItems:'center',

        justifyContent:'space-between',
    },
    guanzhu:{
        width:40,
        height:20,
        borderRadius:5,
        borderWidth:1,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    }
  
  }); 
  export default App;