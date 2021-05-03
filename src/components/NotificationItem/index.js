import React from 'react'
import {View,Text} from 'react-native'
import {styles} from './styles'
export const NotificationItem = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Notification # 1</Text>
        </View>
    )
}