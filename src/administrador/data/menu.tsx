import {
  ChartPieIcon,
  Cog6ToothIcon,
  ShoppingCartIcon,
  UsersIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/solid";
import * as T from '../../types/index'



export const menu: Array<T.Menu.menuItem> = [
  {
    title: "Estadisticas",
    tor: "/dashboard",
    icono: <ChartPieIcon className="w-6 h-6" />,
    gap: true,
  },
  {
    title: "Compras",
    tor: "/shop",
    icono: <ShoppingCartIcon className="w-6 h-6" />,
  },
  { 
    title: "Usuarios",
    tor: "/users",
    icono: <UsersIcon className="w-6 h-6" />
   },
  {
    title: "productos",
    tor: "/product",
    icono: <DocumentArrowDownIcon className="w-6 h-6" />,
  },
  {
    title: "Deudores",
    tor: "/deudores",
    icono: <Cog6ToothIcon className="w-6 h-6" />,
  },

]