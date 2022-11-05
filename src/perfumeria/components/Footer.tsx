import {useNavigate, useLocation} from 'react-router-dom'
import { ShoppingCartIcon,HomeIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { Icons } from './Icons'

type Props = {}

export const Footer = (props: Props) => {

        const navigation =  useNavigate()

    const handleLogout= () => {
       navigation(
        '/login',
        {replace:true}
       )
    }

    const path = useLocation().pathname
    return (
        <footer className="shadow-lg ">
            <div className=' border shadow-inner w-full gap-4 flex fixed bottom-0 bg-white items-center  justify-center'>
                <Icons route='/' icon={<HomeIcon className={`${path === '/'?"text-emerald-500":"text-gray-500"}`} />} />
                <Icons route='/checkout' icon={<ShoppingCartIcon className={`${path === '/checkout'?"text-emerald-500":"text-gray-500"}`} />} />
                <button onClick={handleLogout}>
                <Icons route='' icon={<ArrowLeftOnRectangleIcon className={`${path === '/login'?"text-emerald-500":"text-gray-500"}`} />} />
                </button>
              
           
            </div>
           
           
        </footer>
    )
}

