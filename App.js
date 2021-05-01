/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';


import { NavigationContainer } from '@react-navigation/native';

import {
  View,
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//screens
import Home from './src/screens/Home';
import Profile from './src/screens/Profile'
import {HeaderMenu} from './src/components/HeaderMenu'
import { Menu } from './src/components/Menu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  renderPrincipalMenu = () =>{
   const optionScreen={
     header:(props={ scene, previous, navigation})=>{
       return HeaderMenu(props)
      }}
    return(
      <Stack.Navigator initialRouteName="Home" headerMode='screen' >
        <Stack.Screen name="Home" component={Home}  options={optionScreen} />
        <Stack.Screen name="Profile" component={Profile} options={optionScreen} />
        <Stack.Screen name="Notifications" component={Home} options={optionScreen}/>
    
      </Stack.Navigator>
    )
  }
  render() { 
    return (
      <NavigationContainer>
          <Drawer.Navigator drawerStyle={{
              top:67,
              width: '60%',
            }}
            drawerContent={(props)=><Menu {...props}/>}>
            <Drawer.Screen name="HomeContainer" component={this.renderPrincipalMenu} />
          
          </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
 
export default App;
