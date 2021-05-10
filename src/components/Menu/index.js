import React from 'react';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import {View,Text} from 'react-native'
import {styles} from './styles'
import {connect} from 'react-redux'
import { NavigationActions, StackActions } from 'react-navigation';
export const Menu = connect()((props) =>{
    const handleLogOut = () =>{
        props.navigation.closeDrawer()
        props.dispatch({
            type:'LOGIN',
            playload:false
        })
        props.dispatch({
            type:'CLEAR_USER'
        })
    }
 
    return (
        <DrawerContentScrollView  {...props}>
            <View style={styles.container}>
                <DrawerItem onPress={()=>props.navigation.navigate('Home')} inactiveTintColor='white'  label="Home"/>
                <DrawerItem onPress={()=>props.navigation.navigate('Profile')} inactiveTintColor='white'  label="Perfil"/>
                <DrawerItem onPress={()=>props.navigation.navigate('ProductScan')} inactiveTintColor='white'  label="Visualización AR "/>
                <DrawerItem onPress={()=>props.navigation.navigate('FaceScan')} inactiveTintColor='white'  label="Filtros"/>
                <DrawerItem onPress={()=>props.navigation.navigate('AddNotification')} inactiveTintColor='white'  label="Agregar Notification"/>
                <DrawerItem onPress={()=>props.navigation.navigate('Notifications')} inactiveTintColor='white'  label="Notificaciones"/>
                <DrawerItem inactiveBackgroundColor='red' onPress={()=>handleLogOut()} inactiveTintColor='white'  label="Log Out"/>           
            </View>
        </DrawerContentScrollView>
    )
})