import React,{useEffect} from 'react'
import {View,Text} from 'react-native'
import { BarCodeCam } from '../components/BarCodeCam'
import { Layout } from '../components/Layouts'
import { Camera } from '../components/Camera'
import {connect} from 'react-redux'
import { State } from 'react-native-gesture-handler'

function mapStateToProps(state){
   return{
    selecProduct:state.product.selecProduct
   } 
}
const FaceFilter = connect(mapStateToProps)(({dispatch,selecProduct}) =>{

    return  selecProduct?<Camera type='front' closeButton={true}/>:<BarCodeCam />
})

export default FaceFilter