import React from 'react'
import {
    View,
    Image
  } from 'react-native'
import { Button } from '../components/Button'
import { Layout } from '../components/Layouts'
import {styles} from './styles'
import {connect} from 'react-redux'

const logo=require('../Assets/img/logo.png')
const Start = (props) =>{
    const handleLogin = () =>{
     
      props.navigation.navigate('Login');
    }
    return(
        <Layout>
            <View style={styles.logoContainer}>
              <Image style={styles.logoL} source={logo}/>
              <Button onPress={()=>handleLogin()} title='start'/>
            </View>
        </Layout>
    )
}
function mapStateToProps(state){
    return{
        login: state.user.login
    }
}

export default  connect(mapStateToProps)(Start);