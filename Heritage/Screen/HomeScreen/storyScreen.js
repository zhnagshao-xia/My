import React from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet, Image, Button,TouchableHighlight } from 'react-native';


export default function ActivityDetails({navigation}) {
    return (
        <ScrollView >
            <FlatList
                data={[
                    {
                        title: '王钏巧：工匠精神传续百年活字',
                        time: '2020-7-25',
                        text1: `王钏巧·木活字印刷技术省级非遗传承人`,
                        text2: `非物质文化遗产与文学术研讨活动。`
                    },
                ]}
                renderItem={({ item }) =>
                    <View style={{ 
                        paddingHorizontal: 30,
                     paddingTop: 20,
                     paddingBottom:40,
                     alignItems:"center" }}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 18 }}>{item.title}</Text>
                            <Text style={{ lineHeight: 30 }}>{item.time}</Text>
                        </View>
                        <View>
                            <Text style={{ textAlign: 'auto', lineHeight: 25, fontSize: 16 }}>&#12288;&#12288;{item.text1}</Text>
                            <View style={{ alignItems: "center" }}>
                                <Image style={{
                                    width: 200,
                                    height: 100,
                                    resizeMode: 'stretch',
                                    marginVertical: 15
                                }}
                                    source={require('../../Image/activityScreen/mark.jpg')}>
                                </Image>
                            </View>
                            <Text style={{ textAlign: 'auto', lineHeight: 25, fontSize: 16 }}>&#12288;&#12288;{item.text2}</Text>
                        </View>
                    </View>
                }
            />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    
});