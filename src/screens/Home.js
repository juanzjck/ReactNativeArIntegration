import React from 'react'
import {
    View,
    Image
  } from 'react-native'
import { Layout } from '../components/Layouts'
import {styles} from './styles'

const logo=require('../Assets/img/logo.png')
const Home = () =>{
    return(
        <Layout>
            <View style={styles.logoContainer}>
              <Image style={styles.logoL} source={logo}/>
            </View>
        </Layout>
    )
}

export default  Home;