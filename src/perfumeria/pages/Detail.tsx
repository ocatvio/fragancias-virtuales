import {useParams} from 'react-router-dom'
import { DetailProduct } from '../components/DetailProduct'
import { useGetProductByIdQuery } from '../../feature/product/product_api_slice'

import * as T from '../../types/index'

type Props = {}

export const Detail = (props: Props) => {

    
    const {id} = useParams();

    const {data} = useGetProductByIdQuery(id)

    let products:Array<T.Product.Request>|undefined=data?.allProducts


    return (
       <DetailProduct product={products}/>
    )
}
