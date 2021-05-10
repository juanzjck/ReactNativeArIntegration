import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    form:{
       backgroundColor:'white',
       
       width:'100%',
       paddingLeft:10,
       paddingRight:10,
       alignContent:'center',
       justifyContent:'center',
       alignItems:'center',
      
    },
    input:{
        backgroundColor:'white',
        margin:10,
        height:50,
        borderColor:'black',
        borderWidth:1,
        width:'90%'
    },
    text:{
        fontSize:20,
        marginLeft:10,
        marginBottom:3
    },
    selectItems:{
        zIndex:3,
    
    },
    selectContainer:{
        backgroundColor:'white',
        borderWidth:1,
        width:'90%'
    }
})