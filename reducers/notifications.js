function notifications(state={notifications:notificationsList},action){
    switch(action.type){
        case 'ADD_NOTIFICATION':{
            let auxList=notificationsList
            auxList.push(action.playload)
            console.log(auxList)
            return{
                ...state,
                notifications:auxList
            }
        }
        default :{
            return {...state}
        }
    }
}

let notificationsList=[
    {
        id:'1',
        date:`${new Date()}`,
        codeBar:'123123123',
        dosage:{
            quantity:1,
            days:2
        },
        daysToNotification:2,
        productId:'d'
    },
    {
        id:'2',
        date:`${new Date()}`,
        codeBar:'123123123',
        dosage:{
            quantity:1,
            days:2
        },
        daysToNotification:2
    }
]
export default notifications