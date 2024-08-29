import {GM,GA,GE,GN} from './Message.action'

let initialState={
    msg:"hello"
}
    let MessageReduser=(state=initialState,action)=>{

        switch(action.type){
            case GM:
                return {msg:"Good Morning"}
            case GA:
                return {msg:"Good Afternoon"}
            case GE:
                return {msg:"Good Evening"}
            case GN:
                return {msg:"Good Night"}            

            default :
             return state    

        }

    }


export {MessageReduser}