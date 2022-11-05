import  { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
type Props = {
    icon:ReactNode,
    route:string
};

export const Icons = (props: Props) => {

    const buy = useAppSelector((state) => state.buy);

  return (
    <>
     
     <Link to={props.route}>
        <div className=" w-11 p-2 shadow-md border-x-2 border-b-2 h-11 mt-2 relative rounded-md">
          {props.icon}
          {props.route === '/' || props.route === '' ?"":
          <div className="w-5 h-5 bg-red-600 absolute -top-2 right-0 rounded-full m-auto text-center">
          <p className=" capitalize  text-sm text-white font-semibold">{buy.length}</p>
          </div>
          }
        </div>{" "}
      </Link>
      
    </>
  );
};
