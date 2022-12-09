import {
    TrashIcon,
    PencilSquareIcon,
    InformationCircleIcon,
} from "@heroicons/react/24/outline";

import * as T from '../../types/index'

import { useDeleteUserMutation,useDeleteProductMutation } from "../../feature";
import { ThTable } from "./ThTable";
import {  useNavigate } from "react-router-dom";

type Props = {
    info: any
}

const ItemTable = (props: Props) => {

    const navigate=useNavigate()

    const { info } = props

    const [delUsuer, result] = useDeleteUserMutation()
    const [delProduct,res]= useDeleteProductMutation()




    const handleDelete = () => {

        info.category ? delProduct(info.id) :delUsuer(info.id)

    }

    const handleEdit=() => {
        navigate(`/editProduct/${info.id}`,{
            replace:true
        })
    }


    return (
        <>
            <tr>
                <th className="flex gap-2 items-center   align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">

                    <div className="w-10 h-10 rounded-full ">
                        <img className="rounded-full w-10 h-10 object-cover" src={info.image.secure_url?info.image.secure_url:'no-image'} alt="..." />
                    </div>
                    <div>
                        {info.name}
                    </div>
                </th>


                {
                    info.category
                        ?
                        <>
                            <ThTable item={info.description} />
                            <ThTable item={info.price.toString()} />
                            <ThTable item={info.category} />
                            <ThTable item={'20'} />
                        </>

                        :
                        <>
                        <ThTable item={info.phone} />
                        <ThTable item={info.email} />
                        <ThTable item={info.address} />
                    </>

                }
                

                <th className="  align-middle  px-2 py-4 text-left">
                    <p className="font-semibold text-xs shadow-md w-20 text-center rounded-full p-1  bg-opacity-80   text-emerald-500 ">estado</p>
                </th>

                <th>
                    <div className="flex gap-2">
                        <button onClick={handleDelete}>
                            <TrashIcon className="w-6 h-6 text-red-600" />
                        </button>
                        <button onClick={handleEdit}>
                            <PencilSquareIcon className="w-6 h-6 text-sky-600" />
                        </button>
                        <button>
                            <InformationCircleIcon className="w-6 h-6 text-emerald-700" />
                        </button>
                    </div>
                </th>
                <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {/* <Progress color="red" value="60" /> */}
                </th>
            </tr>
        </>
    )
}

export default ItemTable