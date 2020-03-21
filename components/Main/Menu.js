import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default class Menu extends Component {
    gotoAuthentication(){
        const {navigation} = this.props;
        navigation.navigate({name: 'authentication'})
    }

    gotoChaneInfo(){
        const {navigation} = this.props;
        navigation.navigate({name: 'changeInfo'})
    }

    gotoOrderHistory(){
        const {navigation} = this.props;
        navigation.navigate({name: 'orderHistory'})
    }

    render(){

        return(
            <View style={{flex: 1, backgroundColor: 'rgb(64,63,64)'}}>
                <Text>Component Menu </Text>
                <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoChaneInfo.bind(this)}>
                    <Text>Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
                    <Text>Go to OrderHistory</Text>
                </TouchableOpacity>
            </View>
        )
    }
}