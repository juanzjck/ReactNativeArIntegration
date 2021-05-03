function user(state={login:false},action){
    switch(action.type){
        case 'LOGIN':{
            console.log('dispatch')
            console.log(action.playload)
            return{
                ...state,
                login:action.playload
            }
        }
        default :{
            return {...state}
        }
    }
}
export default user