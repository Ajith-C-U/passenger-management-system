import React, { useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

    return (
        <div className='add-passenger'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='add-passenger-label'>Name</Form.Label>
                    <Form.Control type="text" name="name" value={value.name} onChange={handleChange} placeholder="Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value={value.address} onChange={handleChange} placeholder="Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Passport Number</Form.Label>
                    <Form.Control type="text" name="passportNumber" value={value.passportNumber} onChange={handleChange} placeholder="Passport Number" required />
                </Form.Group>
                <Button variant="primary" type="submit" >
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