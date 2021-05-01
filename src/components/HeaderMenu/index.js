import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {View,TouchableOpacity,Text,Image} from 'react-native'
import {styles} from './styles'
const logo= require('../../Assets/img/logo.png')
export const HeaderMenu = (props) =>{
    return (
       <View style={styles.MenuContainer}>
           <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                <Image style={styles.Logo} source={logo}/>
           </TouchableOpacity>
           <Text style={styles.text}>CUROS CUTIS</Text>
       </View>
    )
}