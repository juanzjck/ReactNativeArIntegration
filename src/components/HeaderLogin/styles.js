import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    Logo:{
        width:60,
        height:60,
        resizeMode:'contain'
    },
    text:{
        fontSize:20,
        color:'#cf910e'
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignContent:'center',
        alignItems:'center',
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
})