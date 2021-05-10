import React from 'react'
import { View,Text, Image, TouchableHighlight} from 'react-native'
import { Layout } from '../components/Layouts'
import { styles } from './styles'
import {connect} from 'react-redux'
import Modal from 'react-native-modal';
const imagen = require('../Assets/img/singleSignOnOutLook.png')
const SingleSignOnO = connect()(({dispatch,navigation}) =>{
    const handleLogin = () =>{
        dispatch({
            type:'SET_USER',
            playload:{
                fullName:'Juan Salazar',
                email:'juan@gmail.com',
                phone:"0978888475",
                typeDNI:'cedula',
                dni:"1715969646",
                password:'252525'
            }
        })
        dispatch({
            type:'ADD_USER',
            playload:{
                fullName:'Juan Salazar',
                email:'juan@gmail.com',
                phone:"0978888475",
                typeDNI:'cedula',
                dni:"1715969646",
                password:'252525'
            }
        })
        dispatch({
            type:'LOGIN',
            playload:true
        })
    }
    const handkeCancel = () =>{
        navigation.navigate('Login')
    }
    return(
        <Modal isVisible={true} customBackdrop={<View style={styles.modalBackground} />}>
            <TouchableHighlight onPress={()=>handkeCancel()}>
                <Text style={styles.exitbButton}>X</Text>
            </TouchableHighlight>
            
            <View style={styles.modalSignOn}>

                <Image style={styles.singleSignOne} source={imagen}/>
                <TouchableHighlight style={styles.buttonSignOne} onPress={()=>handleLogin()} >
                    <Text style={styles.whiteText}>Iniciar sesión</Text>
                </TouchableHighlight>
            </View>
       </Modal>
    )
})
export default SingleSignOnO