import { AtSymbolIcon, InboxArrowDownIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { useAddUserMutation } from "../../feature"
import { useForm } from "../../hooks/useForm"


type Props = {}

export const FromUser = (props: Props) => {

    const [postUser, { isLoading, error }] = useAddUserMutation()

    const [image, setImage] = useState<File | null>(null)

    const { onInputChange, formState, onResetForm } = useForm({
        name: '',
        phone: '',
        address: '',
        email: ''
    })

    const { name, phone, address, email } = formState

    console.log(name)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('image', image as File)
        formData.append('name', name as string)
        formData.append('phone', phone as string)
        formData.append('address', address as string)
        formData.append('email', email as string)

        await postUser(formData).unwrap()

        onResetForm()


    }


    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            setImage(e.target.files[0])
        }
    }

    return (
        <div className='lg:m-10 shadow-xl px-10 py-10  rounded-lg w-auto'>

            <form onSubmit={handleSubmit}>
                <h3 className='capitalize text-gray-600 font-semibold text-center pb-4 my-6'>Registrar información del cliente</h3>
                <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm border-y-2 my-3'>
                    <label htmlFor='search'><UserIcon className='w-5 h-5 mr-4 text-violet-700 '></UserIcon></label>
                    <input name="name" value={name} onChange={onInputChange} autoComplete="of" id='search' type="text" placeholder='nombre completo' className='text-sm capitalize text-gray-500 w-full outline-none' />
                </div>
                <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-md my-3'>
                    <label htmlFor='search'><PhoneIcon className='w-5 h-5 mr-4 text-violet-700'></PhoneIcon></label>
                    <input name="phone" value={phone} onChange={onInputChange} autoComplete="of" id='search' type="text" placeholder='telefono' className='text-sm capitalize text-gray-500 w-full outline-none' />
                </div>
                <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-md my-3'>
                    <label htmlFor='search'><AtSymbolIcon className='w-5 h-5 mr-4 text-violet-700'></AtSymbolIcon></label>
                    <input name="email" value={email} onChange={onInputChange} autoComplete="of" id='search' type="email" placeholder='correo electronico' className='text-sm capitalize text-gray-500 w-full outline-none' />
                </div>
                <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-md my-3'>
                    <label htmlFor='search'><UserIcon className='w-5 h-5 mr-4  text-violet-700'></UserIcon></label>
                    <input  name="address" value={address} onChange={onInputChange} autoComplete="of" id='search' type="text" placeholder='dirección' className='text-sm capitalize text-gray-500 w-full outline-none ' />
                </div>

                <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
                    {/* <label htmlFor='search'><AtSymbolIcon className='w-5 h-5 mr-4 text-gray-700'></AtSymbolIcon></label> */}
                    <input name='image' onChange={handleImage} id='search' type="file" placeholder='imagen' className='file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-purple-600 hover:file:bg-violet-100   text-sm capitalize text-gray-700 w-full outline-none file:appearance-none block' />
                </div>



                <div className='flex justify-center'>
                    <div className={`flex items-center justify-center  rounded-xl bg-violet-700 shadow-violet-700 text-white  dark:bg-white py-3 px-6 m-4 shadow-md w-60`}>
                        <button className="flex items-center"><InboxArrowDownIcon className='w-5 h-5 mr-4 text-white'></InboxArrowDownIcon> <p>guardar</p></button>
                    </div>
                </div>
            </form>

        </div>
    )
}

