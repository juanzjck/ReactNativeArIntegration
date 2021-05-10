import {StyleSheet,Dimensions} from 'react-native'
const {height,width} = Dimensions.get('window')
export const styles=StyleSheet.create({
   camera:{
    height:height,
    width:width
   },
   closeButton:{
    color:'red',
    fontSize:28,
    alignSelf:'flex-end',
    backgroundColor:'white',
    padding:10,
    borderWidth:1,
    borderRadius:20
   }
})