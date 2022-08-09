import React, { useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { actionAddPassenger } from '../../action';
import { v4 as uuid } from "uuid"
import "./index.scss"

const AddPassenger = () => {
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    const passengers = useSelector<any>(state => state?.passengers);
    const [value, setValue] = useState({ id: uuid(), name: "", address: "", passportNumber: "" })
    const [isLoading, setLoading] = useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setLoading(true)
        // @ts-ignore: Unreachable code error
        const newPassengerList = passengers?.passengers?.data?.data?.push(value)
        dispatch(actionAddPassenger((value: any) => [...value, newPassengerList]));
        navigate("/")
        setLoading(false)
    }


    const handleChange = (e: any) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const CheckValidation = (value : any ) => {
        if(value === "" || undefined || null){
            return "This field is required"
        }
    }

    return (
        <div className='add-passenger'>
            <Link to="/">
            <Button className="btn btn-primary mb-3">Back</Button>
            </Link>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='add-passenger-label'>Name</Form.Label>
                    <Form.Control type="text"  maxLength={20} name="name" value={value.name} onChange={handleChange} placeholder="Name" required />
                    <span className='validation'>{CheckValidation(value.name)}</span>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" maxLength={20} name="address" value={value.address} onChange={handleChange} placeholder="Address" required />
                    <span className='validation'>{CheckValidation(value.address)}</span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Passport Number</Form.Label>
                    <Form.Control type="text" maxLength={20} name="passportNumber" value={value.passportNumber} onChange={handleChange} placeholder="Passport Number" required />
                    <span className='validation'>{CheckValidation(value.passportNumber)}</span>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!value.address || !value.name || !value.passportNumber} >
                    Submit {isLoading ? <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /> : ""}
                </Button>
            </Form>
        </div>
    )
}

export default AddPassenger