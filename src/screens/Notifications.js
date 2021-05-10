import React from 'react'
import {View,Text} from 'react-native'
import { Layout } from '../components/Layouts'
import { NotificationsList } from '../components/NotificationsList'
import { styles } from './styles'
import {connect} from 'react-redux'

function mapStateToProps(state){
    return{
        notifications:state.notifications.notifications
    }
}

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Layout>
                <Text style={styles.title}>Teiene {this.props.notifications.length} Notificaiones </Text>
                <NotificationsList/>
            </Layout>
         );
    }
}
 


export default connect(mapStateToProps)(Notifications)