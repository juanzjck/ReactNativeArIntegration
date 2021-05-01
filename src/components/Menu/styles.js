import {StyleSheet,Dimensions} from 'react-native' 
let { height,width} = Dimensions.get('window');

export const styles=StyleSheet.create({
    menuItem:{
        color:'white'
    },
    container:{
        backgroundColor:'#143343',
        height:height-60,
      
    }
})