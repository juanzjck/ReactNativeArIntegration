import React from 'react'
import {View,Text} from 'react-native'
import { Layout } from '../components/Layouts'
import { NotificationsList } from '../components/NotificationsList'
import { styles } from './styles'

const Notifications = () =>{
    return(
        <Layout>
            <Text style={styles.title}>Teiene # Notificaiones </Text>
            <NotificationsList/>
        </Layout>
    )
}
export default Notifications