import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { menu } from "../data/menu";
import { ItemMenu } from "./ItemMenu";

import logo from '../../assets/lgo.png'




type Props = {}

export const Sidebar = (props: Props) => {

  const [response, setResponse] = useState(false)

  const responseDashboar = () => {
    setResponse(!response)
  }

  const salir = () => {

  }
  return (
    <div className="flex bg-white">
      <div
        className={` ${response ? "w-64" : "w-20"
          } duration-300 h-screen shadow-xl relative p-5 pt-6    rounded dark:bg-gray-800`}
      >
        <ArrowLeftCircleIcon
          onClick={responseDashboar}
          className={`absolute w-6 h-6 cursor-pointer -right-3 top-7 text-hover-text bg-gray-400 rounded-full ${!response && "rotate-180"
            }`}
        />

        <div className="flex gap-x-4 items-center">
          <div>
            <img
              src={logo}
              alt="logo"
              className={`block w-10 h-10 duration-500 rounded-full ${!response && "rotate-[360deg]"
                }`}
            />
          </div>

          <h1
            className={` origin-left font-medium text-gray-800 text-xl duration-300 ${!response && "scale-0"
              }`}
          >
            Administrador
          </h1>
        </div>
        <ItemMenu items={menu} response={response} />

      </div>
    </div>
  )
}

