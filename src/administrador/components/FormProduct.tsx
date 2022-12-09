import { InboxArrowDownIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddProductMutation, useGetProductByIdQuery, useUpdateProductMutation } from '../../feature'
import { useForm } from '../../hooks/useForm'

type Props = {}


export const FormProduct = (props: Props) => {


  const { id } = useParams()

  const { data, isError, isLoading } = useGetProductByIdQuery(id)

  const [image, setImage] = useState<File | null | Blob>(null)

  const { formState, onInputChange, onResetForm } = useForm({
    name: data?.allProducts ? data?.allProducts[0].name:"",
    price: data?.allProducts ? data?.allProducts[0].price.toString():"",
    description: data?.allProducts ? data?.allProducts[0].description:"",
  })

 

  const [category, setCategory] = useState('')

  const [postProduct, result] = useAddProductMutation()

  const [putProduct,resultPut]=useUpdateProductMutation()

  const { name, price, description } = formState


  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.files != null) {
      setImage(e.target.files[0]); //error
    }

  }

  const handleOnsubmit = (e: React.FormEvent<HTMLFormElement>) => {

   
    e.preventDefault()


    const formData = new FormData()

    formData.append('id', id as string)
    formData.append('image', image as File)
    formData.append('name', name as string)
    formData.append('price', price as string)
    formData.append('description', description as string)
    formData.append('category', category as string)


 

    if(e.nativeEvent.submitter.name === 'btnEdit'){

      

      putProduct({
        id,
        formData
      })
      onResetForm()
      setImage(null)
      return
    }
    

    postProduct(formData)

    onResetForm()
    setImage(null)

  }



  return (


    <div className=' shadow-md px-10 py-10 border-y-4  rounded-lg w-auto'>

      <form onSubmit={handleOnsubmit}>
        <h3 className='capitalize text-gray-600 text-center pb-4 my-6'>Registrar información del producto</h3>
        <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
          {/* <label htmlFor='search'><UserIcon className='w-5 h-5 mr-4 text-gray-500'></UserIcon></label> */}
          <input name='name' value={name} onChange={onInputChange} id='search' type="text" placeholder='nombre' className='text-sm capitalize text-gray-700 w-full outline-none' />
        </div>
        <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
          {/* <label htmlFor='search'><PhoneIcon className='w-5 h-5 mr-4 text-gray-700'></PhoneIcon></label> */}
          <input name='price' value={price} onChange={onInputChange} id='search' type="text" placeholder='precio' className='text-sm capitalize text-gray-700 w-full outline-none' />
        </div>

        <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
          {/* <label htmlFor='search'><UserIcon className='w-5 h-5 mr-4 text-gray-700'></UserIcon></label> */}
          <input name='description' value={description} onChange={onInputChange} id='search' type="textarea" placeholder='descripción' className='text-sm capitalize text-gray-700 w-full outline-none' />
        </div>

        <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
          {/* <label htmlFor='search'><UserIcon className='w-5 h-5 mr-4 text-gray-700'></UserIcon></label> */}
          {/* <input name='category' value={category} onChange={onInputChange} id='search' type="textarea" placeholder='categoria' className='text-sm capitalize text-gray-700 w-full outline-none' /> */}
          <select className='text-sm capitalize text-gray-700 w-full outline-none' onChange={(e) => setCategory(e.target.value)} value={category} name="category" id="">
            <option selected disabled value=""  > elegir una categoria</option>
            <option value="Mujer">Mujer</option>
            <option value="Hombre">Hombre</option>
          </select>
        </div>

        <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-sm my-3'>
          {/* <label htmlFor='search'><AtSymbolIcon className='w-5 h-5 mr-4 text-gray-700'></AtSymbolIcon></label> */}
          <input name='image' onChange={handleImage} id='search' type="file" className='
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-purple-600
      hover:file:bg-violet-100   text-sm capitalize text-gray-700 w-full outline-none file:appearance-none block'  />
        </div>



        <div className='flex justify-center'>
          <div className={`flex items-center justify-center  rounded-xl bg-purple-600 shadow-purple-600 text-white  dark:bg-white py-3 px-6 m-4 shadow-md w-60`}>
            {
              id
                ?
                <button name='btnEdit' className="btnedit flex items-center"><InboxArrowDownIcon className='w-5 h-5 mr-4 text-white'></InboxArrowDownIcon> <p>editar producto</p></button>
                :
                <button name='btnSave' className="flex items-center"><InboxArrowDownIcon className='w-5 h-5 mr-4 text-white'></InboxArrowDownIcon> <p>agregar producto</p></button>

            }


          </div>
        </div>

      </form>
    </div>


  )
}
