import { StatuCard } from "../components/StatuCard";

import { MagnifyingGlassIcon, PlusCircleIcon, UsersIcon } from "@heroicons/react/24/outline";
import { TableCar } from "../components/TableCar";
import { Link } from "react-router-dom";
import { useGetProductQuery } from "../../feature";
import { ThTable } from "../components/ThTable";


const thead = ['nombre','descripción','precio','categoria','stock','estado']

export const Product = () => {

const {data}=useGetProductQuery()


const tbody = data?.allProducts.map(p => {
  return <>
  <ThTable item={p.description}/>
  <ThTable item={p.price.toString()}/>
  <ThTable item={p.category}/>
  </>
})





  return (
    <div className="w-full h-full">


      <div className=" w-full h-56 flex justify-end ">

        <div className="flex lg:flex-row p-8">
          <StatuCard icono={<UsersIcon className="  w-9  text-white " />} mtt={'-mt-12'} w={'w-56'} h={'h-40'} titulo={'Produtos'} color={'bg-purple-600'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
        </div>

      </div>
      <div className="flex justify-between px-7">
        <div className={`flex items-center  rounded-xl bg-purple-600 shadow-purple-600 text-white  dark:bg-white py-3 px-6 m-4 shadow-md`}>
          <Link to="/addProduct" className="flex items-center"><PlusCircleIcon className='w-5 h-5 mr-4 text-white'></PlusCircleIcon> <p>agregar producto</p></Link>
        </div>
        <div className='flex items-center  rounded-xl dark:bg-white py-3 px-6 m-4 shadow-md'>
          <label htmlFor='search'><MagnifyingGlassIcon className='w-5 h-5 mr-4 text-gray-500'></MagnifyingGlassIcon></label>
          <input id='search' type="text" placeholder='buscar producto' className='text-sm text-gray-500 w-full outline-none' />
        </div>
      </div>


      <TableCar data={data?.allProducts} color={'text-purple-600'}  theade={thead} />
    </div>
  )
}
