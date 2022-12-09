import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

type Props = {
    children: any
}

export const PrivateRoute = (props: Props) => {

    const auth = useAppSelector(state => state.auth)

    const {logged} = auth;
  
    return (
        <>
            {
                !logged
                    ? props.children
                    : props.children
            }
        </>

    )
}

