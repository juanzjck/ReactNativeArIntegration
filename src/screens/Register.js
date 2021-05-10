import React from 'react'
import {Text, View} from 'react-native'
import { HeaderLogin } from '../components/HeaderLogin'
import { Layout } from '../components/Layouts'
import { RegisterForm } from '../components/RegisterForm'
import {connect} from 'react-redux'
import {styles} from './styles'
const Register = ({dispatch}) =>{
    const handleRegister = () =>{
        dispatch({
            type:'LOGIN',
            playload:true
        })
    }
    return(
        <Layout>
            <View style={styles.container}>
                <Text style={styles.titleCenter}>
                    Nuevo usuario
                </Text>
                <RegisterForm onPress={()=>handleRegister()} />
            </View>
        </Layout>
    )
}
export default connect()(Register)