import React, {useEffect,useState} from 'react';
import { FlatList, View,Text } from 'react-native';
import { NotificationItem } from '../NotificationItem';
import { styles } from './styles';
import {connect} from 'react-redux'
import RNRestart from 'react-native-restart';
function mapStateToProps(state){
  return{
    notifications:state.notifications.notifications
  }
}
export const NotificationsList = connect(mapStateToProps)(({notifications, navigation}) =>{
   const [loading,setLoading]=useState(true)
  const renderItem = (item) =>{

      return <NotificationItem {...item.item}/>
   }

   useEffect(()=>{
    setTimeout(()=>setLoading(false),500)
   } ,notifications)
   if(loading)return <Text>Cargando</Text>
    return(
        <View style={styles.container}>
            <FlatList
             data={notifications}
             renderItem={renderItem}
             keyExtractor={item => item.id}
              />
        </View>
    )
})