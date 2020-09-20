import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image, StyleSheet, FlatList, ImageBackground, Animated } from 'react-native';
import { Tabs } from '@ant-design/react-native';
export default class BasicTabsExample extends React.Component {
    render() {
        const { navigation } = this.props;
        const style = {
            height: '100%',
        };
        const tabs = [
            { title: '雕刻工艺' },
            { title: '陶瓷建盏' },
            { title: '工艺特色' },
            { title: '工艺特色' },
            { title: '工艺特色' },
            { title: '工艺特色' },
            { title: '工艺特色' },
            { title: '工艺特色' },

        ];
        return (
            <View style={{ flex: 1 }}>
                <Tabs tabs={tabs}>
                    <View style={style}>
                        <ScrollView>
                            <View style={{ width: '100%', height: '100%', backgroundColor: '#f2f2f2', alignItems: 'center' }}>
                                
                            </View>
                        </ScrollView>
                    </View>
                    <View style={style}>
                        <View style={{ width: '100%', height: '100%', backgroundColor: 'grey' }}>
                            <ScrollView>

                            </ScrollView>
                        </View>
                    </View>
                    <View style={style}>
                        <View style={{ width: '100%', height: '100%', backgroundColor: 'grey' }}>
                            <ScrollView>
                                
                            </ScrollView>
                        </View>
                    </View>
                </Tabs>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    key: {
        flexDirection: 'row',
    }


});
