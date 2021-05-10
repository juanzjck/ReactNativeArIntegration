function user(state={login:false,users:usersData,user:userData},action){
    switch(action.type){
        case 'LOGIN':{

            return{
                ...state,
                login:action.playload
            }
        }
        case 'SET_USER':{
          
            return{
                ...state,
                user:action.playload
            }
        }
        case 'ADD_USER':{
            usersData.push(action.playload)
            return{
                ...state,
                users:usersData
            }
        }
        case 'CLEAR_USER':{
          
            return{
                ...state,
                user:userData
            }
        }
        default :{
            return {...state}
        }
    }
}

const userData={
    fullName:"",
    email:"",
    phone:"",
    typeDNI:'Cedula',
    dni:"",
    password:''
}
const usersData=[{
    fullName:"Camila",
    email:"camila@correo.com",
    phone:"099999999",
    typeDNI:'Cedula',
    dni:"099999999",
    password:'252525'
},{
    fullName:"Camila",
    email:"camila2@correo.com",
    phone:"099999999",
    typeDNI:'Cedula',
    dni:"099999999",
    password:'252525'
},{
    fullName:"Juan Pablo Salazar",
    email:"juanzjck1996@gmail.com",
    phone:"099999999",
    typeDNI:'Cedula',
    dni:"099999999",
    password:'252525'
}]
export default user