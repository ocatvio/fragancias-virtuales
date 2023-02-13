import {useNavigate, useLocation} from 'react-router-dom'
import { ShoppingCartIcon,HomeIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { Icons } from './Icons'
import wps from '../../assets/wp.png'

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
        <footer className="shadow-lg">
            <div className=' border shadow-inner w-full h-16 gap-4 flex fixed bottom-0 bg-white items-center  justify-center'>
                <Icons route='/' icon={<HomeIcon className={`${path === '/'?"text-emerald-500":"text-gray-500"}`} />} />
                {/* <Icons route='/checkout' icon={<ShoppingCartIcon className={`${path === '/checkout'?"text-emerald-500":"text-gray-500"}`} />} /> */}
                {/* <Icons route='/checkout' icon={<ShoppingCartIcon className={`${path === '/checkout'?"text-emerald-500":"text-gray-500"}`} />} /> */}
                <button onClick={handleLogout}>
                <Icons route='' icon={<ArrowLeftOnRectangleIcon className={`${path === '/login'?"text-emerald-500":"text-gray-500"}`} />} />
                </button>
               <div className='h-16 w-16'>
                    <a href="https://api.whatsapp.com/send?phone=573184393201&text=hola,%20Bienvenido%20a%20perfumeria%20virtual%20es%20un%20gusto%20para%20nosotros%20poder%20atenderte"><img src={wps} alt="wps" className='object-cover' /></a>
               </div>
            </div>
           
           
        </footer>
    )
}

