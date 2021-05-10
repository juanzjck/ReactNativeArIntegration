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
import Notifications from './src/screens/Notifications'
import ProductInfo from './src/screens/ProductInfo'
import AddNotificacions from './src/screens/AddNotificacions'
import ArProduct from './src/screens/ArProduct'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import SingleSignOnO from './src/screens/SingleSignOnO'
import SingleSignOnF from './src/screens/SingleSignOnF'
import SingleSignOnG from './src/screens/SingleSignOnG'
import FaceFilterUnity from './src/screens/FaceFilterUnity'
//screens of login
import Start from './src/screens/Start'


import {HeaderMenu} from './src/components/HeaderMenu'
import { Menu } from './src/components/Menu';
import {connect} from 'react-redux'
import { HeaderLogin } from './src/components/HeaderLogin';
import FaceFilter from './src/screens/FaceFilter';
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
        <Stack.Screen name="Notifications" component={Notifications} options={optionScreen}/>
        <Stack.Screen name="ProductInfo" component={ProductInfo} options={optionScreen}/>
        <Stack.Screen name="AddNotification" component={AddNotificacions} options={optionScreen}/>
        <Stack.Screen name="ProductScan" component={ArProduct} options={optionScreen}/>
        <Stack.Screen name="FaceScan" component={FaceFilter} options={optionScreen}/>
        <Stack.Screen name="FaceScanUnity" component={FaceFilterUnity} options={optionScreen}/>
      </Stack.Navigator>
    )
  }

  LoginMenu = () =>{
    const optionScreen={
      header:(props={ scene, previous, navigation})=>{
        return HeaderLogin()
       }}
    const optionScreen2={
    header:(props={ scene, previous, navigation})=>{
      return <></>
    }}
                
     return(
       <Stack.Navigator initialRouteName="Start" headerMode='screen' >
         <Stack.Screen options={optionScreen2} name="Start" component={Start} />
         <Stack.Screen options={optionScreen} name="Login" component={Login} />
         <Stack.Screen options={optionScreen} name="Register" component={Register} />
      
         <Stack.Screen options={optionScreen2} name="SingleSignOnO" component={SingleSignOnO} />
         <Stack.Screen options={optionScreen2} name="SingleSignOnF" component={SingleSignOnF} />
         <Stack.Screen options={optionScreen2} name="SingleSignOnG" component={SingleSignOnG} />
      
       </Stack.Navigator>
     )
   }

  RederPrincipalDrawer = () =>{
    return(
      <NavigationContainer>
          <Drawer.Navigator drawerStyle={{
            top:67,
            width: '60%',
          }}
          drawerContent={(props)=><Menu {...props}/>}>
            <Drawer.Screen name="HomeContainer" component={this.renderPrincipalMenu} />
          </Drawer.Navigator>
      </NavigationContainer>
    )
  }

  RenderLoginDrawer = () =>{
    return(
      <NavigationContainer>
        <Drawer.Navigator drawerStyle={{
        top:67,
        width: '60%',
        }}>
          <Drawer.Screen name="Start" component={this.LoginMenu} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
  render() { 
    return this.props.login?this.RederPrincipalDrawer():this.RenderLoginDrawer()
  }
}
 
function mapStateToProps(state){
  return{
    login: state.user.login
  }
}
export default connect(mapStateToProps)(App);
