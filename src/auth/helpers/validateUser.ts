import { useAppSelector } from "../../app/hooks";
import * as T from '../../types/index'


export const validateUser = (userc:{logged:boolean,name?:string,password?:string},users?:Array<T.User.Request>) => {

    console.log("validate",users)

   

    const user = users?.filter(user => {
        console.log("iteracion",user.name)
        console.log("usuario",userc.name)
        const r = (user.name === userc.name) ? true : false;

        console.log(r)
        return r
    })

    console.log("estado del usuario",user)
    return user;
}
