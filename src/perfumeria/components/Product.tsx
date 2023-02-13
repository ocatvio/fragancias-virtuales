import {Link} from 'react-router-dom'
import { ShoppingCartIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';

import { useAppDispatch,useAppSelector } from '../../app/hooks';
import { addCar } from '../../feature/buy/buy_slice';
import * as T from '../../types/index';






interface buy {
    id:string
}



export const Product = (props:T.Product.Request) => {



    const dispatch = useAppDispatch()





    const handleAddCar = () => {
       dispatch(addCar(props.id))
    }


    return (
        <div className="w-60 py-4 p-5 rounded-md">
            <div className="bg-slate-100 relative  pb-1 px-1 rounded-t-md shadow-lg">
                <img className=' rounded-md w-60 h-48 object-center object-cover' src={props.image?.secure_url} alt="image producto" />
            </div>
            <div className='rounded-b-md '>
                <div className='flex justify-between items-center'>
                    <h4 className='font-semibold   text-gray-700 rounded-b-2xl rounded-tl-2xl rounded-tr-sm  py-2 mt-1 '>{props.name}</h4>
                    <div>
                    <Link to={`/detail/${props.id}`}>
                    <EllipsisVerticalIcon className='w-6 h-7  m-auto text-purple-900' />
                    </Link>
                    </div>
                </div>

                <p className='leading-5 text-sm my-1  text-zinc-500'>{props.description}. </p>
                <div className='flex justify-between items-center my-3 rounded-md'>
                    <p className='font-semibold text-zinc-700'>${props.price.toString()}</p>
                    <div className='mr-3 w-8 h-8 p-1 bg-emerald-500 shadow-2xl text-white rounded-b-xl cursor-pointer rounded-l-xl rounded-tr-sm'>
                       <button onClick={handleAddCar}> <ShoppingCartIcon className='w-5 h-6 m-auto text-card' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

