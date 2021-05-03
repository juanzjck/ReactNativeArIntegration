import React from 'react'
import {TouchableHighlight, View,Text} from 'react-native'
import { ButtonToggle } from '../ButtonToggle'
import {styles} from './styles'

export const ToggleContenInfo = () =>{
    return(
        <View style={styles.container}>
            <ButtonToggle title='Benficios '/>
            <ButtonToggle title='Contenido '/>
            <ButtonToggle title='Modo de empleo '/>
            <ButtonToggle title='Advertencia '/>
        </View>
    )
}