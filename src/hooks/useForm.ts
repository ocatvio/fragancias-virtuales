import { useState } from "react"

type Props = {
    name?:string,
    phone?:string,
    address?:string,
    email?:string,
    description?:string,
    price?:string,
    category?:string,
    password?:string
}

export const useForm = (props: Props) => {
  
   const [formState,setFormState]= useState(props)

   const onInputChange =(e:React.ChangeEvent<HTMLInputElement> )=>{


    const {name,value} = e.target

    console.log({[name]:value})

    setFormState({...formState,[name]:value})
   }

   const onResetForm = () => {
    setFormState(props)
   }

   return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
   }
}

