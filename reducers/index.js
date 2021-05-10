import { combineReducers } from 'redux'
import user from './user'
import notifications from './notifications'
import product from './product'
export default combineReducers({
    user,
    notifications,
    product
})