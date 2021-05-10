import React from 'react'
import {View,Text} from 'react-native'
import { ButtonToggle } from '../ButtonToggle'
import {styles} from './styles'
export const NotificationItem = ({id,date,codeBar,dosage,daysToNotification,productId}) =>{
    return(
        <ButtonToggle title={`Notificacion ${id} ${new Date(date).getDay()}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}`}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>
                    Fecha de compra:
                </Text>
                <Text style={styles.text}>
                {date}
                </Text>
                <Text style={styles.textTitle}>
                    Codigo de barra del producto:
                </Text>
                <Text style={styles.text}>
                {codeBar}
                </Text>
                <Text style={styles.textTitle}>
                Dosis:
                </Text>
                <Text style={styles.text}>
                Cantidad: {dosage.quantity}
                </Text>
                <Text style={styles.text}>
                Días para notificar: {dosage.days}
                </Text>
            </View>
         
        </ButtonToggle>
    )
}