import React,{useState} from 'react'
import {View, TextInput,Text} from 'react-native'
import {styles} from './styles'
import {Picker} from '@react-native-picker/picker';
import { Button } from '../Button';
import {connect} from 'react-redux';
import {styles as stylesGlobal} from '../styles'
function mapStateToProps(state){
    return{
        user:state.user.user
    }
}
export const RegisterForm =connect(mapStateToProps)(({onPress,user,dispatch}) =>{
    const [fullName,setFullName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [typeDNI,setTypeDNI]=useState('Cedula')
    const [dni,setDni]=useState('')
    const [pass,setPass]=useState('')
    const [error,setError]=useState(false)
    const ValidateInputs = () =>fullName!=''&&
    email!=''&&phone!=''&&typeDNI!=''&&dni!=''&&pass!=''?true:false
    const handleOnPress = () =>{
        if(ValidateInputs()){
        
            dispatch({
                type:'SET_USER',
                playload:{
                    fullName:fullName,
                    email:email,
                    phone:phone,
                    typeDNI:typeDNI,
                    dni:dni,
                    password:pass
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
            onPress&&onPress()
        }else{
            setError('Debes de llenar todos los campos')
        }
       
       
      
      
    }

    return(
        <View style={styles.form}>
              {error&&<Text style={stylesGlobal.textError}>{error}</Text>}
            <Text style={styles.text}>Full Name</Text>
            <TextInput onChangeText={setFullName} defaultValue={fullName} style={styles.input} />
            <Text style={styles.text}>E-mail</Text>
            <TextInput onChangeText={setEmail} defaultValue={email} style={styles.input} />
            <Text style={styles.text}>Teléfono</Text>
            <TextInput onChangeText={setPhone} defaultValue={phone}  style={styles.input} />
            <Text style={styles.text}>Tipo de identificación</Text>
            <View style={styles.selectContainer}>
                <Picker onValueChange={(itemValue, itemIndex) =>setTypeDNI(itemValue) } selectedValue={typeDNI} >
                    <Picker.Item label="Cedula" value="Cedula" />
                    <Picker.Item label="Ruc" value="Ruc" />
                    <Picker.Item label="Pasaporte" value="Pasaporte" />
                </Picker>                
            </View>
           
            <Text style={styles.text}>Identificación</Text>
            <TextInput onChangeText={setDni} defaultValue={dni} style={styles.input} />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput secureTextEntry={true} onChangeText={setPass} defaultValue={pass} style={styles.input} />
            <Button onPress={handleOnPress} title='Registrarse'/>
        </View>
    )
})