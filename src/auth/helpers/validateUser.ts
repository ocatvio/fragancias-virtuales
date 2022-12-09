import { useAppSelector } from "../../app/hooks";
import * as T from '../../types/index'


export const validateUser = (userc:any,users?:Array<T.User.Request>) => {

    console.log("validate",users)

   

    const user = users?.filter(user => {
      
        const r = (user.name === userc.name) ? true : false;

        return r
    })

    if(!user)return false
    
    return true
}
