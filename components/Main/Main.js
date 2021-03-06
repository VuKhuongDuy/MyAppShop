import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Drawer from 'react-native-drawer'
import Menu from './Menu'
import Shop from './Shop/Shop'

export default class Main extends Component{
    closeControlPanel = () => {
        this.drawer.close()
    };

    openControlPanel = () => {
        this.drawer.open()
    };

    render(){
        const {navigation} = this.props;
        return(
            <Drawer
                ref={(ref) => this.drawer = ref}
                content={<Menu navigation={navigation}/>}
                tapToClose={true}
                openDrawerOffset={0.4}
                // openDrawerOffset={0.7}
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        )
    }
}