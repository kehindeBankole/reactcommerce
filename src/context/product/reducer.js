export default function ProductReducer(state , action){
    switch(action.type){
        case "fetch" : return {
            ...state , 
            products : [],
            load : true,
            err : ''
        }
        case "success" : return {
            ...state , 
            products : action.payload,
            load : false,
            err : ''
        }
        case "fail" : return {
            ...state,
            products : [] ,
            load : false , 
            err : action.payload
        }
        default : return state
    }
}