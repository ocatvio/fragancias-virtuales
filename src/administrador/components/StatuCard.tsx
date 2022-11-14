import {
  PresentationChartBarIcon,
  ArrowLongUpIcon,
} from "@heroicons/react/24/outline";

import { ReactNode } from "react";

type props = {
  titulo:string,
  color:string,
  numero?:string,
  visitas:string,
  fecha:string,
  w:string,
  h:string,
  mtt:string,
  icono:ReactNode
}
export const StatuCard = (props: props) => {
  return (
    <>
      <div className={`ml-10 ${props.w} ${props.h} shadow-2xl rounded-md m-1  bg-white`}>
        <div
          className={`relative ml-5 -top-7 ${props.color} left-0 w-24 h-24 rounded-xl flex justify-center`}
        >
          {props.icono}
        </div>
        <div className={`text-end   h-full ${props.mtt} mx-2`}>
          <p className="opacity-70">{props.titulo}</p>
          <p className="text-3xl">{props.numero}</p>
          <div className="relative flex gap-2 items-center mt-4 py-2 px-">
            <ArrowLongUpIcon className=" w-4 h-4 text-emerald-500" />
            <p className="text-emerald-500">{props.visitas}</p>
            <p className="opacity-70">{props.fecha}</p>
          </div>
        </div>
      </div>
    </>
  );
};
