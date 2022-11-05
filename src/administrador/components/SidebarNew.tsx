import { ArrowLeftCircleIcon, Bars2Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const SidebarNew = () => {
  const [response, setResponse] = useState(true);

  const menu = [
    { title: "Dashboard", icon: <Bars2Icon className="w-6 h-6" />, gap: true },
    { title: "Compras", icon: <Bars2Icon className="w-6 h-6" /> },
    { title: "Productos", icon: <Bars2Icon className="w-6 h-6" /> },
    { title: "Usuarios", icon: <Bars2Icon className="w-6 h-6" /> },
    { title: "Estadisticas", icon: <Bars2Icon className="w-6 h-6" /> },
    {
      title: "Configuraciones",
      icon: <Bars2Icon className="w-6 h-6" />,
      gap: true,
    },
  ];
  const responseDashboar = () => {
    setResponse(!response);
  };

  return (
    <div className="flex">
      <div
        className={` ${
          response ? "w-80" : "w-20"
        } duration-300 h-screen bg-grayfont relative p-5 pt-6`}
      >
        <ArrowLeftCircleIcon
          onClick={responseDashboar}
          className={`absolute w-6 h-6 cursor-pointer -right-3 top-7 text-purpura bg-fondo rounded-full ${
            !response && "rotate-180"
          }`}
        />

        <div className="flex gap-x-4 items-center">
          <div>
            <ArrowLeftCircleIcon
              className={`w-8 h-8 duration-500 ${
                !response && "rotate-[360deg]"
              }`}
            />
          </div>

          <h1
            className={`text-whiteC origin-left font-medium text-xl duration-300 ${
              !response && "scale-0"
            }`}
          >
            Administrador
          </h1>
        </div>
        <ul className="pt-6 ">
          {menu.map((item) => (
            <li
              key={item.title}
              className={`text-fondoCard2 text-sm  p-2 flex items-center gap-x-4 cursor-pointer hover:bg-shopcar rounded-md ${
                item.gap ? "mt-9 " : "mt-2"
              }`}
            >
              {item.icon}
              <p
                className={`${!response && "hidden origin-left duration-300"}`}
              >
                {item.title}
              </p>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 font-semibold flex-1 h-screen">
        <h2>Home Page</h2>
      </div>
    </div>
  );
};
