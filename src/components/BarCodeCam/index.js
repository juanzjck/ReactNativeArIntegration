'use strict';
import React, { Component } from 'react';
import { TouchableHighlight,Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import {styles} from './styles'
import { connect } from 'react-redux';
export const BarCodeCam = connect()(({onCompliteScan,onPressCloseButton,closeButton,dispatch}) =>{
    const onBarCodeRead = (e)=>{
        dispatch({
            type:'SET_SELECTED_PRODUCT',
            playload:'d'
        })
        dispatch({
            type:'CODE_PRODUCT',
            playload:e.data
        })
        console.log('algo')
        onCompliteScan&&onCompliteScan()
    }
    const onClose = (e)=>{
        dispatch({
            type:'SET_SELECTED_PRODUCT',
            playload:null
        })
        dispatch({
            type:'CODE_PRODUCT',
            playload:null
        })
    }
    return(
        <RNCamera type={RNCamera.Constants.Type.back} onBarCodeRead={onBarCodeRead} style={styles.camera} >
               
              <BarcodeMask width={300} height={100} />
              {closeButton&&
                <TouchableHighlight  onPress={onPressCloseButton?onPressCloseButton:onClose}>
                    <Text style={styles.closeButton}>X</Text>
                </TouchableHighlight>}
        </RNCamera>
    )
})