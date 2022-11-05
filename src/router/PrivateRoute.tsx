import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

type Props = {
    children: any
}

export const PrivateRoute = (props: Props) => {

    const auth = useAppSelector(state => state.auth)

    console.log("ruta privada", auth.length)

    const logged = auth.map(user => user.logged)

    console.log("logged", logged)
    return (
        <>
            {
                logged
                    ? props.children
                    : <Navigate to="/" />
            }
        </>

    )
}

