import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', position: 'absolute', top: '15%', fontSize: 30 }}> Filters </Text>
                <View style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity 
                    onPress={()=>{
                        this.props.navigation.navigate('Main')
                    }}
                    style={{ backgroundColor: 'blue', width: '50%', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10, marginTop: '10%' }}>
                        <Text style={{color: 'white'}}> Start </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}