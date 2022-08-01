import React from 'react'
import { Image, Spinner } from 'react-bootstrap'
import "./index.scss"

export const GlobalSpinner = () => {
    return (
        <div className='spinners'>
            <Image src="/logo.gif" />
        </div>
    )
}

export const ButtonSpinner = ( label : any ) => {
    return (
        <div className='button-spinner gap-2'>
            <Spinner animation="border" size="sm" variant="secondary" role="status" />
            <span >{label}</span>
        </div>
    )
}