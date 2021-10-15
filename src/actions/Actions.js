import { Add_reminder } from "../Types";
import { Remove_reminder,Clear_reminder } from "../Types";

export const add_reminder=(text,date)=>{
    const action={
        type:Add_reminder,
        text:text,
        date:date
    }
    console.log("Add",action)
    return action
}
export const remove_reminder=(id)=>{
    const action={
        type:Remove_reminder,
        id:id,
        
    }
    console.log("remove",action)
    return action
}
export const clear_reminder=()=>{
    const action={
        type:Clear_reminder,
        
        
    }
    console.log("Clear",action)
    return action
}