import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import perfil from "../../assets/perfil.jpg";

type props={
  title:string
}

export const SearchTitle = (props:props) => {
  return (
    <div className="flex justify-between px-6 py-6">
      <h2 className="text-white font-semibold">{props.title}</h2>
      <div className="flex gap-4 items-center">
        <div className="flex bg-blue-500 items-center rounded-xl w-60 p-2">
          <MagnifyingGlassIcon className="w-4 h-4 text-white" />
          <input className="bg-blue-500 text-whiteC outline-none" type="text" name="" id=""></input>
        </div>

        <img
          src={perfil}
          className="rounded-full w-12 h-12 object-cover "
          alt="foto perfil"
        />
      </div>
    </div>
  );
};
