import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
// import { AuthContext } from "../context/AuthContext";
import perfil from '../../assets/perfil.jpg'
import { validateUser } from "../helpers/validateUser";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGetUserQuery } from "../../feature";
import { login } from "../../feature/user/authUser_slice";

export const LoginPage = () => {
  const {formState,onInputChange}=useForm({
    email:'',
    password:''
  })

  const {data} = useGetUserQuery()

  const dispatch=useAppDispatch()


  const {email,password} = formState

  const navigate=useNavigate();

  // const {login} = useContext(AuthContext);

  const onLogin = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    

    const user = {
      logged:true,
      "name":email,
      password,
    }

    const userNew = validateUser(user,data?.data)

    if(userNew?.length ==0){
      return;
    }

    const authUser = {
      user:userNew,
      logged:true
    }

    // let lastPath = localStorage.getItem('lastPath')

    dispatch(login(authUser))

    // lastPath= (user.name ==='admin')? '/dashboard':lastPath

    // console.log(lastPath)

    

    navigate("/dashboard",{
      replace:true
    })

    
   
   
  }

 
  return (
    <div className="lg:mt-10 ">
    <form onSubmit={onLogin}  className="flex flex-col lg:h-5/6 lg:w-3/12 m-auto h-auto  bg-whiteC rounded-lg shadow-lg px-4 py-14">
      
      <img className="m-auto mb-4 rounded-full w-36 h-36 object-cover" src="https://c.tenor.com/5Jc-2qvQCx4AAAAi/wedang-pokak-cup.gif" alt="foto perfil" />
     
      <input
        type="text"
        placeholder="Example@gmail.com"
        className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm mb-4"
        name="email"
        value={email}
        onChange={onInputChange}
     />
      <input
        type="password"
        placeholder="password"
        className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm mb-4"
        name="password"
        value={password}
        onChange={onInputChange}
     />
      <button type="submit"  className=" text-xs m-auto  rounded-full bg-btn text-whiteC px-10 py-3  mt-8 lg:w-1/2 mb-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">Iniciar Sesion</button>
      <button className="w-36"> <p className="mb-2 cursor-pointer">¿No tiene cuenta?</p></button>

    
      <p className="cursor-pointer font-semibold text-btn">¿Olvidaste tu contraseña?</p>
    </form>
    
  </div>
  );
};
