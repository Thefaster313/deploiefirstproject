import {Add_reminder, Clear_reminder, Remove_reminder} from '../Types'
import { bake_cookie, read_cookie } from 'sfcookies';
const reducer =(state=[],action)=>{

    let reducer=[];
    state=read_cookie('reducer')
    if(action.type===Add_reminder){
        reducer=[...state,{text:action.text,date:action.date,id:Math.random()}]
        bake_cookie('reducer',reducer)
   console.log("from reducer",reducer)
        return reducer
    }else if(action.type===Remove_reminder){

        reducer=state.filter(item=>item.id !==action.id)
        bake_cookie('reducer',reducer)
        console.log("fromreducer",reducer)

return reducer
    }else if (action.type===Clear_reminder){

reducer=[]
bake_cookie('reducer',reducer)
console.log("from reducer clear",reducer)
return reducer

    }
    else{return state
    }
            }

export default reducer