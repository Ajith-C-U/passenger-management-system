import { Image } from 'react-bootstrap'
import "./index.scss"

export const GlobalSpinner = () => {
    return (
        <div className='spinners'>
            <Image src="/logo.gif" alt="spinner" />
        </div>
    )
}