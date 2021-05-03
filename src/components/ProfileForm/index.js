import React from 'react'
import {View, TextInput,Text} from 'react-native'
import {styles} from './styles'
import {Picker} from '@react-native-picker/picker';
import { Button } from '../Button';
export const ProfileForm = () =>{
    return(
        <View style={styles.form}>
            <Text style={styles.text}>Full Name</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>E-mail</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>Teléfono</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>Tipo de identificación</Text>
            <View style={styles.selectContainer}>
                <Picker >
                    <Picker.Item label="Ruc" value="Ruc" />
                    <Picker.Item label="Cedula" value="Cedula" />
                    <Picker.Item label="Pasaporte" value="Pasaporte" />
                </Picker>                
            </View>
           
             <Text style={styles.text}>Identificación</Text>
            <TextInput style={styles.input} />
            <Button title='Save'/>
        </View>
    )
}