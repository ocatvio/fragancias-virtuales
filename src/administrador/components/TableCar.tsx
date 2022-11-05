



import * as T from '../../types/index'
import ItemTable from './ItemTable';

type props = {
  color: string,
  data?: Array<T.User.Request> | Array<T.Product.Request>,
  theade: Array<string>,

}

export const TableCar = (props: props) => {


  return (
    <div className="mx-8  h-[50vh]  overflow-scroll snap scrollbar-hide">
      <table className=" my-4 rounded-xl items-center w-full bg-whiteC shadow-lg ">
        <thead>
          <tr>
            {
              props.theade.map(th => (
                <th key={th} className={`px-2 ${props.color} capitalize py-3 text-sm  whitespace-nowrap font-semibold text-left`}>
                  {th}
                </th>
              ))
            }
            <th className={`px-2 ${props.color}  py-3 text-sm  whitespace-nowrap font-semibold text-left`}>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {
            props.data?.map(info => (
              <ItemTable key={info.id} info={info} />
            ))
          }

        </tbody>
      </table>
    </div>
  );
};
