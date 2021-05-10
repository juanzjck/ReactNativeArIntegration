import React from 'react'
import {View,Image,Text} from 'react-native'
import {styles} from './styles'
const logo= require('../../Assets/img/logo.png')
export const HeaderLogin = () =>{
    return(
        <View style={styles.container}>
             <Image style={styles.Logo} source={logo}/>
            <Text style={styles.text}>CURTIS CUTIS</Text>
        </View>
    )
}