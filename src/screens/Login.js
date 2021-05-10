import React from 'react'
import {SafeAreaView, View} from 'react-native'
import { HeaderLogin } from '../components/HeaderLogin'
import { Layout } from '../components/Layouts'
import { FormLogin } from '../components/FormLogin'
import {styles} from './styles'
const Login = ({navigation}) =>{
    return(
        <Layout>
            <View style={styles.container}>
                <FormLogin navigation={navigation}/>
            </View>
        </Layout>
    )
}
export default Login