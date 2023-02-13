
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


import { Product } from '../components/Product';
import * as T from '../../types/index';
import { useGetProductQuery } from '../../feature/product/product_api_slice';

type Props = {

}


export const Home = (props: Props) => {

    const { data, isLoading, isError, isFetching } = useGetProductQuery()
    const [search, setSearch] = useState('')


    let products: Array<T.Product.Request> | undefined = data?.allProducts


    if (search) {
        products = products?.filter(p => p.name.toLocaleLowerCase().includes(search))
    }

    const categoryName = [...new Set(products?.map(p => p.category))]

    if (isLoading) {
        return (
            <div className="justify-center items-center flex  mt-64">
                <div className="loader">
                    <div className="face">
                        <div className="circle"></div>
                    </div>
                    <div className="face">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="p-5">
            <div className='flex items-center w-full rounded-xl dark:bg-white py-3 px-2 shadow-md'>
                <label htmlFor='search'><MagnifyingGlassIcon className='w-5 h-5 mr-4 text-gray-500'></MagnifyingGlassIcon></label>
                <input onChange={(e) => setSearch(e.target.value)} id='search' type="text" placeholder='buscar producto' className='text-sm text-gray-500 w-full outline-none' />
            </div>

            {
                categoryName.map(c => (
                    <div key={c}>
                        {products?.find(p => p.category === c) && (
                            <div>
                                <h3 className='capitalize py-5'>{c}</h3>
                                <div className='flex  -mx-5 shadow-md overflow-x-scroll snap-x scrollbar-hide'>
                                    {products.filter(p => p.category === c).map(p => (
                                        <div key={p.id} className=" m-2 shadow-xl rounded-lg snap-start">
                                    
                                            <Product {
                                                ...p
                                            } />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                ))
            }

        </div>
    )
}