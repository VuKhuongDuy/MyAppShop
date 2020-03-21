import 'react-native-gesture-handler';
import React, {Component} from 'react'
import {View, Text, StatusBar} from 'react-native'
import Authentication from './Authentication/Authentication'
import ChangeInfo from './ChangeInfo/ChangeInfo'
import Main from './Main/Main'
import OrderHistory from './OrderHistory/OrderHistory'
import {NavigationContainer}  from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


// StatusBar.setHidden(true);

const Stack = createStackNavigator();

export default class App extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="main">
                    <Stack.Screen 
                        name="main" 
                        component={Main} 
                        options={{
                            title: 'Main',
                            headerStyle: {
                              backgroundColor: 'orange',
                            },
                            headerTintColor: 'green',
                            headerTitleStyle: {
                              fontWeight: 'bold',
                            },
                        }}
                    />
                    <Stack.Screen 
                        name="authentication" 
                        component={Authentication} 
                        options={{
                            title: 'My home',
                            headerStyle: {
                              backgroundColor: 'orange',
                            },
                            headerTintColor: 'green',
                            headerTitleStyle: {
                              fontWeight: 'bold',
                            },
                        }}
                    />
                    <Stack.Screen 
                        name="orderHistory" 
                        component={OrderHistory} 
                        options={{
                            title: 'My OrderHistory',
                            headerStyle: {
                              backgroundColor: 'orange',
                            },
                            headerTintColor: 'green',
                            headerTitleStyle: {
                              fontWeight: 'bold',
                            },
                        }}
                    />
                    <Stack.Screen 
                        name="changeInfo" 
                        component={ChangeInfo} 
                        options={{
                            title: 'Change Info',
                            headerStyle: {
                              backgroundColor: 'orange',
                            },
                            headerTintColor: 'green',
                            headerTitleStyle: {
                              fontWeight: 'bold',
                            },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
