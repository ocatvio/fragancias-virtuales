import {  ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

import { NavLink,useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../feature/user/authUser_slice";
import * as T from '../../types/index'

type Props = {
    items:Array<T.Menu.menuItem>,
    response:boolean
}

export const ItemMenu = (props: Props) => {

  const dispatch = useAppDispatch()

  const navigation = useNavigate()

  const handleLogout = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    e.preventDefault()

    console.log("loagout")

    dispatch(logout())

    navigation('/',{
      replace:true
    })




  }

  const path = useLocation().pathname
  return (
    <div>
         <ul className="pt-6 ">
            {  props.items.map((item) => (
              <NavLink
                to={item.tor}
                key={item.title}
                className={`${path === item.tor ?"text-emerald-500":"text-gray-500"}  shadow-md   flex items-center p-2 my-8 text-sm font-normal duration-300  gap-x-4 rounded-lg dark:text-white hover:bg-fondoCard2 cursor-pointer  dark:hover:bg-gray-700  ${
                  item.gap ? "mt-20 " : "mt-2"
                }`}
              >
                {item.icono}
                <p
                  className={`${!props.response && "hidden origin-left duration-300"}`}
                >
                  {item.title}
                </p>{" "}
              </NavLink>
            ))}
            <li className="mt-24 ">
              <button
               onClick={handleLogout}
                
                className=" shadow-md  flex items-center p-2 my-4 text-sm font-normal duration-300 text-gray5 gap-x-1 rounded-lg dark:text-white hover:bg-fondoCard2 cursor-pointer  dark:hover:bg-gray-700 "
              >
                <ArrowLeftOnRectangleIcon
                  aria-hidden="true"
                  className='className="w-7 h-7 text-gray-600  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20"'
                ></ArrowLeftOnRectangleIcon>
                <span className="flex-1 text-lg">salir</span>
              </button>
            </li>
          </ul>
    </div>
  )
}

