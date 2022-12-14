
import { SearchTitle } from "../components/SearchTitle";
import { StatuCard } from "../components/StatuCard";

import {

  CurrencyDollarIcon, MagnifyingGlassIcon, PlusCircleIcon,

} from "@heroicons/react/24/outline";
import { TableCar } from "../components/TableCar";



type Props = {}

export const ShopPage = (props: Props) => {
  return (
    <div className="w-full h-full">

      <div className=" w-full h-56 flex justify-end ">

        <div className="flex lg:flex-row p-8">
          <StatuCard icono={<CurrencyDollarIcon className="  w-9  text-white" />} mtt={'-mt-12'} w={'w-56'} h={'h-40'} titulo={'Compras'} color={'bg-amber-400'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
        </div>
      </div>


      <div className="flex justify-between px-7">
        <div className={`flex items-center  rounded-xl bg-yellow-500 shadow-yellow-500 text-white  dark:bg-white py-3 px-6 m-4 shadow-md`}>
          <button className="flex items-center"><PlusCircleIcon className='w-5 h-5 mr-4 text-white'></PlusCircleIcon> <p>agregar Compra</p></button>
        </div>
        <div className='flex items-center  rounded-xl dark:bg-white py-3 px-6 m-4 shadow-md'>
          <label htmlFor='search'><MagnifyingGlassIcon className='w-5 h-5 mr-4 text-gray-500'></MagnifyingGlassIcon></label>
          <input id='search' type="text" placeholder='buscar producto' className='text-sm text-gray-500 w-full outline-none' />
        </div>
      </div>

      {/* <TableCar color={'text-amber-800'} /> */}
    </div>
  )
}




