import React, {useState} from 'react'
import {TouchableHighlight,Text, View} from 'react-native'
import {styles} from './styles'

export const Button = ({title,onPress}) =>{
    const [presed,setPresed]=useState(false);
    return(
        <TouchableHighlight expcae of button click react native
           underlayColor={'white'}  onPress={()=>onPress()}>
            <View style={styles.button}>
                <Text style={styles.text} >
                    {title}
                </Text>
            </View>
        </TouchableHighlight>
    )
} 