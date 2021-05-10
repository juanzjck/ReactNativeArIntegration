import {StyleSheet,Dimensions} from 'react-native'
let { height,width} = Dimensions.get('window');

export const styles=StyleSheet.create({
    logoL:{
      width:300,
      height:500,
      resizeMode:'contain' 
    },
    logoContainer:{
      width:'100%',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center'
    },
    title:{
      fontSize:25,
      margin:10
    },
    titleCenter:{
      fontSize:25,
      margin:10,
      textAlign:'center'
    },
    container:{
      width:'100%',
      height:height-25,

    },
    singleSignOne:{
      width:100,
      resizeMode:'contain',
      height:100
    },
    modalSignOn:{
      width:350,
      height:400,
      backgroundColor:'white',
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,

      elevation: 18,
    },
    buttonSignOne:{
      padding:10,
      width:150,
      backgroundColor:'blue',
      height:50,
      color:'white',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
        
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      textAlign:'center'
    },
    whiteText:{
      fontSize:15,
      color:'white'
    },
    modalBackground:{
      width:width,
      height:10000,
      backgroundColor:'#002738'
    },
    exitbButton:{
      color:'white',
      fontSize:15,
      alignSelf:'flex-end'
    }
})