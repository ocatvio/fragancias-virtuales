import { useNavigate } from 'react-router-dom'
import * as T from '../../types/index'
import img from '../../assets/lgo.png'

type Props = {
    product: Array<T.Product.Request> | undefined
}

export const DetailProduct = (props: Props) => {

    const navitation = useNavigate()

    const back = () => {
        navitation(-1)
    }



    return (
        <div className='lg:mx-32 my-20'>
            {props.product && (
                <div className='grid lg:grid-cols-2 gap-2'>
                    <div className="lg:flex grid justify-center   rounded-t-md shadow-lg">
                        <div className=' lg:flex lg:flex-col grid grid-cols-2 lg:mx-0 mx-4 shrink-0'>
                            <img className='w-32' src={img} alt="" />
                            <img className='w-32' src={img} alt="" />
                            <img className='w-32' src={img} alt="" />
                            {/* <img className='w-32' src={img} alt="" /> */}
                        </div>
                        <img className='mx-3 lg:mx-0 rounded-md w-80 h-90 object-center object-cover ' src={props.product[0].image.secure_url} alt="" />
                    </div>


                    <div className=' lg:p-16  text-center shadow-md rounded-t-md'>
                        <h3 className='font-bold m-4'>{props.product[0].name}</h3>

                        <div className='m-4'>
                            <h3 className='text-gray-700 font-semibold'>${props.product[0].price.toString()}</h3>
                            <p className='text-gray-500'>{props.product[0].description}</p>
                        </div>
                        <button onClick={back} className='bg-violet-600 text-white px-14 py-2 rounded-full m-2 shadow-purple-600 shadow-md'>regresar</button>
                    </div>



                </div>
            )}
        </div>
    )
}
