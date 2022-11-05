import { AtSymbolIcon, InboxArrowDownIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {}

export const FormDeuda = (props: Props) => {
  return (
    <div className='m-28 shadow-md px-10 py-10 border-y-4  rounded-lg w-auto'>

            <h3 className='capitalize text-gray-600 text-center pb-4 my-6'>Registrar información de la deuda</h3>
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



            <div className='flex justify-center'>
                <div className={`flex items-center justify-center  rounded-xl bg-violet-700 shadow-violet-700 text-white  dark:bg-white py-3 px-6 m-4 shadow-md w-60`}>
                    <button className="flex items-center"><InboxArrowDownIcon className='w-5 h-5 mr-4 text-white'></InboxArrowDownIcon> <p>guardar</p></button>
                </div>
            </div>

        </div>
  )
}
