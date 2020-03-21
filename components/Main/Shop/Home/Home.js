import React, {Component} from 'react'
import {View, Text} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={{backgroundColor: 'rgb(210,167,201)'}}>
                <Text>Home component</Text>
            </View> 
        )
    }
}