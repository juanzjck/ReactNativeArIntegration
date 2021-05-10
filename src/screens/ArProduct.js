import React,{useEffect} from 'react'
import {View,Text} from 'react-native'
import { BarCodeCam } from '../components/BarCodeCam'
import { Layout } from '../components/Layouts'
import { Camera } from '../components/Camera'
import {connect} from 'react-redux'
import { State } from 'react-native-gesture-handler'
import { Button } from '../components/Button'

function mapStateToProps(state){
   return{
    selecProduct:state.product.selecProduct
   } 
}
const ArProduct = connect(mapStateToProps)(({navigation}) =>{

    return  (
        <Camera type='back' >
            <Button onPress={()=>navigation.navigate('ProductInfo')} title='Ver info del producto'/>
        </Camera>
    )
})

export default ArProduct