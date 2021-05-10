import React from 'react'
import {View,Text} from 'react-native'
import { FormNotification } from '../components/FormNotification'
import { Layout } from '../components/Layouts'
import {connect} from 'react-redux'

function mapStateToProps(state){
    return{
        notifications:state.notifications.notifications
    }
}

class AddNotificacions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading:true }
    }

    render() { 
      
        return(
            <Layout>
               
                <FormNotification navigation={this.props.navigation}/>
            </Layout>
        )
    }
}

export default connect(mapStateToProps)(AddNotificacions)
