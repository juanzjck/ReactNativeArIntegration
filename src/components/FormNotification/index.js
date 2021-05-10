import React, {useState,useEffect} from 'react'
import {View,Text,TextInput} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from '../Button';
import {connect} from 'react-redux'
import { BarCodeCam } from '../BarCodeCam';
import {styles as stylesGlobal} from '../styles'
function mapStateToProps(state){
  return{
    codeProduct:state.product.codeProduct,
    notifications:state.notifications.notifications
  }
}
export const FormNotification = connect(mapStateToProps)(({notifications,codeProduct,dispatch,navigation}) =>{
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState('');
    const [days, setDays] = useState('');
    const [notifyOn, setNotifyOn] = useState('');
    const [showCamera, setShowCamera] = useState(false);
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    const onChange = (event, selectedDate,) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
      useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          console.log('m')
          setQuantity('');
          setDays('');
          setNotifyOn('');
          setShowCamera(false);
          setLoading(true)
        });
    
        return unsubscribe;
      }, [navigation]);

      const handleValidate=()=>{
        return  quantity!=''&&days!=''&&notifyOn!=''?true:false
      }
      const handleAddNotification = () =>{
        if(handleValidate()){
          dispatch({
            type:'ADD_NOTIFICATION',
            playload: {
              id:'1',
              date:`${date}`,
              codeBar:codeProduct,
              dosage:{
                  quantity:quantity,
                  days:days
              },
              daysToNotification:notifyOn,
              productId:'codeProduct'
            }
          })
  
          navigation.navigate('Notifications')  
        }else{
          setError('Debes llenar todos los campos')
        }
        
      }
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

      const renderForm =()=>{
        
        return(
          <View style={styles.form}>
            <Text style={stylesGlobal.textError}>{error}</Text>
         <Text style={styles.title}>Fecha de ultima compra</Text>
          
            <Button onPress={showDatepicker} title="Selecionar fecha" />
        
            <Button onPress={showTimepicker} title="Selecionar hora" />
    
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
            <Text style={styles.title}>Codigo de barras</Text>
          
            <Button onPress={()=>setShowCamera(true)} title="Codigo de barras" />
            <Text >{codeProduct&&codeProduct}</Text>
            <Text style={styles.title}>Dosis</Text>
           
            <View style={styles.dosageContanaer}>
              <TextInput value={quantity} onChangeText={setQuantity} placeholder='Cantidad' style={styles.dosageInput}/>
              <TextInput value={days} onChangeText={setDays} placeholder='Dias' style={styles.dosageInput}/>
            </View>
            <Text>
              Notificame en
            </Text>
            <TextInput value={notifyOn} onChangeText={setNotifyOn} placeholder='Días' style={styles.dosageInput}/>
            <Button onPress={()=>handleAddNotification()} title="Agregar"/>
        </View>
        )
      }
    return(
      showCamera?<BarCodeCam onCompliteScan={()=>setShowCamera(false)} onPressCloseButton={()=>setShowCamera(false)} closeButton={true}/>:renderForm()
    )
})