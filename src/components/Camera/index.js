'use strict';
import React, { Component } from 'react';

import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import {styles} from './styles'
import { Button } from '../Button';
import {connect} from 'react-redux'
import { TouchableHighlight,Text } from 'react-native';


export const Camera = connect()(({children,dispatch,closeButton,type,onPressCloseButton}) =>{
    const onClose = (e)=>{
        dispatch({
            type:'SET_SELECTED_PRODUCT',
            playload:null
        })
    }
    return(
        <RNCamera type={type=='front'?RNCamera.Constants.Type.front:RNCamera.Constants.Type.back}  style={styles.camera} >
            {closeButton&&
                <TouchableHighlight  onPress={onPressCloseButton?onPressCloseButton:onClose}>
                    <Text style={styles.closeButton}>X</Text>
                </TouchableHighlight>}
                {children}
        </RNCamera>
    )
})