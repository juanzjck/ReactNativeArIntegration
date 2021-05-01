import React from 'react'
import {View, TextInput,Text} from 'react-native'
import {styles} from './styles'
import DropDownPicker from 'react-native-dropdown-picker';
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
            <DropDownPicker
                items={[
                    {label: 'USA', value: 'usa'},
                    {label: 'UK', value: 'uk'},
                    {label: 'France', value: 'france'},
                ]}
             
                containerStyle={styles.input}
                style={{backgroundColor: 'white'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({
                    country: item.value
                })}
            />
             <Text style={styles.text}>Identificación</Text>
            <TextInput style={styles.input} />
            
        </View>
    )
}