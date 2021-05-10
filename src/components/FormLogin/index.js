import React, {useState} from 'react'
import {View, TextInput,Text, TouchableHighlight,Image} from 'react-native'
import {styles} from './styles'
import {styles as stylesGlobal} from '../styles'
import {Picker} from '@react-native-picker/picker';
import { Button } from '../Button';
import {connect} from 'react-redux'
const outLook= require('../../Assets/img/outlookicon.png')
const gmail= require('../../Assets/img/Gmail-Logo.png')
const facebook= require('../../Assets/img/facebooklogo.png')

function mapStateToProps(state){
    return{
        login: state.user.login,
        users:state.user.users
    }
}
export const FormLogin =  connect(mapStateToProps)(({navigation,dispatch,users}) =>{
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [error,setError]=useState(false)
    const RenderIcon = ({icon,text,onPress, navigation}) =>{

        return (
            <TouchableHighlight underlayColor="white" onPress={()=>onPress()} >
                <View style={styles.contentOneSignOn}>
                    <Image style={styles.icon} source={icon}/>
                    <Text style={styles.textOneSignOn}>
                        {text}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
    const reducer = (acomulative,current) =>current.email==email && current.password==pass?true:false

    const handleLogin = () =>{
        if(users.reduce(reducer,1)){
            dispatch({
                type:'SET_USER',
                playload:{
                    fullName:"Usuario1",
                    email:email,
                    phone:"09999999",
                    typeDNI:'Cedula',
                    dni:"1715969646"
                }
            })
            dispatch({
                type:'LOGIN',
                playload:true
            })
        }else{
            setError('La contraseña o correo es erroneo')
        }
       
    }
    return(
        <View style={styles.form}>
            <Text style={stylesGlobal.title}>Iniciar sesión</Text>
            {error&&<Text style={stylesGlobal.textError}>{error}</Text>}
            <Text style={styles.text}>E-mail</Text>
            <TextInput onChangeText={setEmail} style={styles.input} />
            <Text style={styles.text}>Pasword</Text>
            <TextInput onChangeText={setPass} style={styles.input} />
            <Button onPress={()=>handleLogin()} title='Iniciar sesión'/>
            <TouchableHighlight  underlayColor="grey" style={styles.newUser} onPress={()=>navigation.navigate('Register')}>
                <Text style={styles.text}>
                    Crear cuenta
                </Text>
            </TouchableHighlight>
            <View style={styles.iconsContainer}>
                <RenderIcon onPress={()=>navigation.navigate('SingleSignOnF')} icon={facebook} text="Facebook"/>
                <RenderIcon onPress={()=>navigation.navigate('SingleSignOnG')} icon={gmail} text="Gmail"/>
                <RenderIcon onPress={()=>navigation.navigate('SingleSignOnO')} icon={outLook} text="Outlook"/>
            </View>   
        </View>
    )
})