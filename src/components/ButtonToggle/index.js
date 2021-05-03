import React, {useState} from 'react'
import {TouchableHighlight,Animated, View,Text} from 'react-native'
import {styles} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
export const ButtonToggle = ({title}) =>{
    const [show,setShow] =useState(false)
    const RenderIcon = () =>{
        return show?<FontAwesomeIcon icon={ faArrowAltCircleUp } />:<FontAwesomeIcon icon={ faArrowAltCircleDown } />
    }
    return(
        <View style={styles.container}>
            <TouchableHighlight underlayColor='grey' onPress={()=>setShow(!show)} style={styles.button}>
                <View style={styles.buttonContaner}>
                    <Text style={styles.title}>
                     {title}
                    </Text>
                <RenderIcon/>
                </View>
            </TouchableHighlight>
            <View style={{display:show?'flex':'none'}}>
                <Text style={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
        </View>
    )
}