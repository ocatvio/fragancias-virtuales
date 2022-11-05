import { useEffect, useState } from 'react'
import { UserIcon,PhoneIcon,AtSymbolIcon } from '@heroicons/react/24/outline'
import * as T from '../../types/index'
import { useAppSelector } from '../../app/hooks'

type Props = {}

const initalState: Array<T.Product.Request> = []

export const Cars = (props: Props) => {

  const buys = useAppSelector(state => state.buy)

  const [producInfo, setProducInfo] = useState(initalState)
  const uniqueId = [... new Set(buys)]



  useEffect(() => {


    (uniqueId.length)
      ? fetch("http://localhost:3000/product/" + uniqueId)
        .then(response => response.json())
        .then(json => setProducInfo((json.allProducts) ? json.allProducts : []))
      : setProducInfo([])
  }, [])

  let transport = 5;
  let subtotal = 0;

  if (buys?.length) {


    for (let id of buys) {
      const price = producInfo?.find(p => p.id === id)?.price
      subtotal += price ? price : 0
    }
  }

  let total = subtotal + transport;




  return (
    <div>
      {
        !producInfo.length && (<div>no tienes productos en tu carrito de compras</div>)
      }

      <div className='lg:grid lg:grid-cols-2'>
        <div className='overflow-x-scroll scrollbar-hide  lg:overscroll-none snap-x lg:snap-none lg:grid lg:grid-cols-2 flex justify-around  lg:flex-col shrink-0'>
          {
            producInfo.length && producInfo.map(p => (
              <div key={p.id} className="">
                <div className='lg:flex  mx-4 p-2 my-4 gap-8  lg:w-full w-28 '>
                  <div className=' shadow-sm mb-3 bg-gray-100 lg:rounded-xl rounded-full'>
                    <img className='w-52 lg:h-32 h-24 object-cover lg:rounded-sm rounded-full' src={p.image.secure_url} alt="" />
                  </div>
                  <div className='w-full mr-2'>
                    <h3>{p.name}</h3>
                    <p className='text-sm text-gray-500'>{p.description}</p>
                    <div className='flex justify-between'>
                      <div>{p.price}</div>
                      <div>{buys.filter(id => id === p.id).length}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>


        {
          producInfo.length && (
            <div className='lg:px-16 lg:my-5'>
              <div className='m-4 shadow-lg px-5 py-2  rounded-lg'>

              <h3 className='capitalize text-gray-600 text-center pb-4'>información personal</h3>
                <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
                  <label htmlFor='search'><UserIcon className='w-5 h-5 mr-4 text-gray-500'></UserIcon></label>
                  <input id='search' type="text" placeholder='nombre completo' className='text-sm capitalize text-gray-500 w-full outline-none' />
                </div>
                <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
                  <label htmlFor='search'><PhoneIcon className='w-5 h-5 mr-4 text-gray-500'></PhoneIcon></label>
                  <input id='search' type="text" placeholder='telefono' className='text-sm capitalize text-gray-500 w-full outline-none' />
                </div>
                <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
                  <label htmlFor='search'><AtSymbolIcon className='w-5 h-5 mr-4 text-gray-500'></AtSymbolIcon></label>
                  <input id='search' type="text" placeholder='correo electronico' className='text-sm capitalize text-gray-500 w-full outline-none' />
                </div>
                <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
                  <label htmlFor='search'><UserIcon className='w-5 h-5 mr-4 text-gray-500'></UserIcon></label>
                  <input id='search' type="text" placeholder='dirección' className='text-sm capitalize text-gray-500 w-full outline-none' />
                </div>

              </div>

              <div className='m-4 px-8 border rounded-md shadow-md'>
                
                
                <div className='flex my-3'>
                  <h3 className='grow font-bold text-gray-400'>Subtotal:</h3>
                  <h3 className='font-semibold'>${subtotal}</h3>
                </div>
                <div className='flex my-3'>
                  <h3 className='grow font-bold text-gray-400'>Transporte:</h3>
                  <h3 className='font-semibold'>${transport}</h3>
                </div>
                <div className='flex my-3 border-t pt-2 border-dashed border-emerald-500'>
                  <h3 className='grow font-bold text-gray-400'>Total:</h3>
                  <h3 className='font-semibold'>${total}</h3>
                </div>
              </div>

             <div className='flex justify-center w-full'>
             <button className=' rounded-full font-bold bg-emerald-500 px-8   text-white  py-3 my-6  shadow-emerald-200 shadow-lg'>Pagar ${total}</button>
             </div>

            </div>
          )
        }

      </div>
    </div>
  )
}
