import {StyleSheet} from 'react-native' 

export const styles=StyleSheet.create({
    MenuContainer:{
        backgroundColor:'#002738',
        height:67,
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    Logo:{
        marginLeft:10,
        height:50,
        width:50,
        resizeMode:'contain'
    },
    text:{
        fontSize:20,
        color:'#cf910e',
        marginRight:10
    }
})