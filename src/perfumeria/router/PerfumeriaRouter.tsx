import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Sidebar } from '../../administrador/components/Sidebar'
import { Dashboard } from '../../administrador/pages/Dashboard'
import { DeudaRegisterPage } from '../../administrador/pages/DeudaRegisterPage'
import { Product } from '../../administrador/pages/Product'
import { ProductPage } from '../../administrador/pages/ProductPage'
import { Settings } from '../../administrador/pages/Settings'
import { ShopPage } from '../../administrador/pages/ShopPage'
import { UserPage } from '../../administrador/pages/UserPage'
import { UserRegisterPage } from '../../administrador/pages/UserRegisterPage'
import { useAppSelector } from '../../app/hooks'
import { LoginPage } from '../../auth/pages/LoginPage'
import { Footer } from '../components/Footer'
import { Cars } from '../pages/Cars'
import { Detail } from '../pages/Detail'
import { Home } from '../pages/Home'


type Props = {}

export const PerfumeriaRouter = (props: Props) => {

    const auth = useAppSelector(state => state.auth)

    console.log("ruta privada", auth.length)

    const logged = auth.map(user => user.logged)


    return (
        <>
           
            {/* admin */}


            {/* user */}
            {
                auth.length !== 0
                    ?
                    <div className='flex'>
                         <Sidebar />

                         <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/users" element={<UserPage />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/deudores" element={<Settings />} />

                        <Route path="/addProduct" element={<ProductPage />} />
                        <Route path="/addUser" element={<UserRegisterPage />} />
                        <Route path="/addDeuda" element={<DeudaRegisterPage />} />
                        {/* <Route path="/product" element={<Detail />} /> */}
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                    </Routes>
                         
                    </div>
                   
                    :
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/checkout" element={<Cars />} />
                            <Route path="/detail/:id" element={<Detail />} />
                            <Route path="/" element={<Navigate to="/" />} />
                        </Routes>
                        <Footer />
                    </div>

            }

        </>
    )
}
