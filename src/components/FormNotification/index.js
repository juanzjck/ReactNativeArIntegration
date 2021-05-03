import React, {useState} from 'react'
import {View,Text,TextInput} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from '../Button';


export const FormNotification = () =>{
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };
    return(
        <View style={styles.form}>
         <Text style={styles.title}>ADD NOTIFICATION</Text>
          
            <Button onPress={showDatepicker} title="Select date" />
        
            <Button onPress={showTimepicker} title="Select time" />
    
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}  
            <Text style={styles.title}>Bar code</Text>
          
            <Button onPress={()=>console.log('algo')} title="Take photo" />
   
            
            <Text style={styles.title}>Dosage</Text>
            <TextInput placeholder='Dosage' style={styles.input}/>
            <View style={styles.dosageContanaer}>
              <TextInput placeholder='Quantity' style={styles.dosageInput}/>
              <TextInput placeholder='Days' style={styles.dosageInput}/>
            </View>
            <Button title="Add"/>
        </View>
    )
}