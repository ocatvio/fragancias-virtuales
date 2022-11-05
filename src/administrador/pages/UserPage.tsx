

import { Link } from "react-router-dom";
import { MagnifyingGlassIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/24/outline";

import { TableCar } from "../components/TableCar";
import { StatuCard } from "../components/StatuCard";
import { useGetUserQuery } from "../../feature";


type Props = {}

const thead = ['nombre','telefono','correo','direccion','estado']


export const UserPage = (props: Props) => {

  const {data,isLoading}=useGetUserQuery()


  if(isLoading){
    return(
      <><p>cargando data ....</p></>
    )
  }

  return (
    <div className="w-full h-full ">
      <div className=" w-full h-56 flex justify-end">

        <div className="flex lg:flex-row p-8  ">
          <StatuCard icono={<UsersIcon className="  w-9  text-white" />} mtt={'-mt-12'} w={'w-56'} h={'h-40'} titulo={'Usuarios'} color={'bg-violet-700'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
        </div>

      </div>

      <div className="flex justify-between px-7">
        <div className={`flex items-center  rounded-xl bg-violet-700 shadow-violet-700 text-white  dark:bg-white py-3 px-6 m-4 shadow-md`}>
          <Link to="/addUser" className="flex items-center"><UserPlusIcon className='w-5 h-5 mr-4 text-white'></UserPlusIcon> <p>agregar Usuario</p></Link>
        </div>
        <div className='flex items-center  rounded-xl dark:bg-white py-3 px-6 m-4 shadow-md'>
          <label htmlFor='search'><MagnifyingGlassIcon className='w-5 h-5 mr-4 text-gray-500'></MagnifyingGlassIcon></label>
          <input id='search' type="text" placeholder='buscar producto' className='text-sm text-gray-500 w-full outline-none' />
        </div>
      </div>

      <div className="my-2">
        <TableCar data={data?.data}  color={'text-violet-700'}  thead={thead}/>
      </div>
    </div>
  )
}

