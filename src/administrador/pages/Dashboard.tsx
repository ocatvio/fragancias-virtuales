
import { SearchTitle } from "../components/SearchTitle";
import { StatuCard } from "../components/StatuCard";

import {
  PresentationChartBarIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon
} from "@heroicons/react/24/outline";



export const Dashboard = () => {
  return (
    <div className="w-full flex">
      
     <div className="w-full">
     <div className="bg-blue-500 w-full h-56  ">
        <SearchTitle title={'ESTADISTICAS'} />
      </div>
      <div className="flex lg:flex-row flex-col w-full">
        <StatuCard icono={<ArrowTrendingUpIcon className="  w-9  text-white" />} mtt={'-mt-0'} w={'w-64'} h={'h-56'} titulo={'Trafico'} color={' bg-rose-500'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
        <StatuCard icono={<CurrencyDollarIcon className="  w-9  text-white" />} mtt={'-mt-12'} w={'w-64'} h={'h-40'} titulo={'Compras'} color={'bg-yellow-400'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
        <StatuCard icono={<UsersIcon className="  w-9  text-white" />} mtt={'-mt-12'} w={'w-64'} h={'h-40'} titulo={'Usuarios'} color={'bg-violet-600'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
        <StatuCard icono={<PresentationChartBarIcon className="  w-9  text-white" />} mtt={'-mt-0'} w={'w-64'} h={'h-56'} titulo={'Performance'} color={'bg-blue-500'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
      </div>

     </div>
    </div>
  )
}
