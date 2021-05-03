import React from 'react';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import {View,Text} from 'react-native'
import {styles} from './styles'
export const Menu = (props) =>{
    return (
        <DrawerContentScrollView  {...props}>
            <View style={styles.container}>
                <DrawerItem onPress={()=>props.navigation.navigate('Home')} inactiveTintColor='white'  label="Home"/>
                <DrawerItem onPress={()=>props.navigation.navigate('Profile')} inactiveTintColor='white'  label="Profile"/>
                <DrawerItem onPress={()=>props.navigation.navigate('ProductScan')} inactiveTintColor='white'  label="Product scan"/>
                <DrawerItem onPress={()=>props.navigation.navigate('ProductScan')} inactiveTintColor='white'  label="Scan product code"/>
                <DrawerItem onPress={()=>props.navigation.navigate('ProductInfo')} inactiveTintColor='white'  label="Product info"/>
                <DrawerItem onPress={()=>props.navigation.navigate('AddNotification')} inactiveTintColor='white'  label="Add Notification"/>
                <DrawerItem onPress={()=>props.navigation.navigate('Notifications')} inactiveTintColor='white'  label="Notifications"/>
                <DrawerItem inactiveBackgroundColor='red' onPress={()=>props.navigation.navigate('Home')} inactiveTintColor='white'  label="Log Out"/>           
            </View>
        </DrawerContentScrollView>
    )
}