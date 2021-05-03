import React from 'react'
import { View,ScrollView } from 'react-native'
import {styles} from './styles'
export const Layout = ({children}) =>{
    return(
        <ScrollView style={styles.ScrollView}>
            <View style={styles.layout}>
                {children}
            </View>
        </ScrollView>
    )
}