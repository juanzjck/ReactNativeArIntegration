function product(state={products:products,selecProduct:null},action){
    switch(action.type){
        case 'SET_SELECTED_PRODUCT':{
            return{
                ...state,
                selecProduct:action.playload
            }
        }
        case 'CODE_PRODUCT':{
            return{
                ...state,
                codeProduct:action.playload
            }
        }

        default :{
            return {...state}
        }
    }
}
const products = [{
    id:'d',
    benefit:'Algo',
    content:'Algo',
    HowToUse:'algo',
    warning:'algo'
}]
export default product