import React, { useEffect, useState } from 'react'
import { UserIcon, PhoneIcon, AtSymbolIcon,ExclamationCircleIcon } from '@heroicons/react/24/outline'
import * as T from '../../types/index'
import { useAppSelector,useAppDispatch } from '../../app/hooks'
import { useForm } from '../../hooks/useForm'
import { useAddBuyMutation } from '../../feature/buy/buy_api_slice'
import { clearCar } from '../../feature/buy/buy_slice'

type Props = {}

const initalState: Array<T.Product.Request> = []

export const Cars = (props: Props) => {


  const buys = useAppSelector(state => state.buy)

  const [postBuy, resp] = useAddBuyMutation();

  const dispatch = useAppDispatch()

  const { formState, onInputChange,onResetForm } = useForm({
    name: '',
    phone: '',
    address: '',
    email: ''
  })

  const [producInfo, setProducInfo] = useState(initalState)
  const uniqueId = [... new Set(buys)]


  const { name, phone, address, email } = formState



  useEffect(() => {


    (uniqueId.length)
      ? fetch("https://back-perfumeria-production.up.railway.app/product/" + uniqueId)
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



  const handleBuy = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

   


    let order: Array<{}> = []

    producInfo.map(p => {


      let newPro = {
        // codigo:p.id,
        name: p.name,
        quantity: buys.filter(id => id === p.id).length
      }

      order.push(newPro)

    })


    const buy = {
      user: {
        name,
        phone,
        address,
        email
      },
      buy: order

    }

    if (name != '' && phone !== '') {
      postBuy(buy).unwrap
      dispatch(clearCar())
      setProducInfo([])
      onResetForm()
      total=0;
      subtotal=0;
    }


  }




  return (
    <div>
      {
        !producInfo.length && (<div className='p-4  bg-red-50   flex justify-center items-center gap-3'><ExclamationCircleIcon className='text-red-500 text-sm font-semibold w-6 h-6'/><p className='text-red-500 text-sm font-semibold'>Aun no tienes productos en tu carrito de compras</p> </div>)
      }

      <div className='lg:grid lg:grid-cols-2'>
        <div className='overflow-x-scroll scrollbar-hide  lg:overscroll-none snap-x lg:snap-none lg:grid lg:grid-cols-2 flex justify-around  lg:flex-col shrink-0'>
          {
            producInfo.length ? producInfo.map(p => (
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
                      <div>{ buys.filter(id => id === p.id).length}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
            :''
          }
        </div>


        {
          producInfo.length ? (
            <form onSubmit={handleBuy} className="pb-16">
              <div className='lg:px-16 lg:my-5'>
                <div className='m-4 shadow-lg px-5 py-2  rounded-lg'>

                  <h3 className='capitalize text-gray-600 text-center pb-4'>información personal</h3>
                  <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
                    <label htmlFor='name'><UserIcon className='w-5 h-5 mr-4 text-gray-500'></UserIcon></label>
                    <input required id='name' name='name' value={name} onChange={onInputChange} type="text" placeholder='nombre completo' className='text-sm capitalize text-gray-500 w-full outline-none' />
                  </div>
                  <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
                    <label htmlFor='phone'><PhoneIcon className='w-5 h-5 mr-4 text-gray-500'></PhoneIcon></label>
                    <input required id='phone' name='phone' value={phone} onChange={onInputChange} type="text" placeholder='telefono' className='text-sm capitalize text-gray-500 w-full outline-none' />
                  </div>
                  <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
                    <label htmlFor='email'><AtSymbolIcon className='w-5 h-5 mr-4 text-gray-500'></AtSymbolIcon></label>
                    <input required id='email' name='email' value={email} onChange={onInputChange} type="text" placeholder='correo electronico' className='text-sm capitalize text-gray-500 w-full outline-none' />
                  </div>
                  <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
                    <label htmlFor='address'><UserIcon className='w-5 h-5 mr-4 text-gray-500'></UserIcon></label>
                    <input required id='address' name='address' value={address} onChange={onInputChange} type="text" placeholder='dirección' className='text-sm capitalize text-gray-500 w-full outline-none' />
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

                {/* <div className='flex justify-center w-full'>
                  <button className=' rounded-full font-bold bg-emerald-500 px-8   text-white  py-3 my-6  shadow-emerald-200 shadow-lg'>Pagar ${total}</button>
                </div> */}
                <button className='btnsend m-auto bg-emerald-500 text-white py-3 px-5 pl-1 flex items-center rounded-full overflow-hidden'>
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                      </svg>
                    </div>
                  </div>
                  <span className='espanb'>Solictar Pedido</span>
                </button>

              </div>
            </form>
          )
          :''
        }

      </div>




    </div>
  )
}


