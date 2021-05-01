import React from 'react'
import { View } from 'react-native'
import {styles} from './styles'
export const Layout = ({children}) =>{
    return(
        <View style={styles.layout}>
            {children}
        </View>
    )
}