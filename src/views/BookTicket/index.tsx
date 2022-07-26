import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { actionBookTicket } from '../../action';
import { v4 as uuid } from "uuid"


const BookTicket = () => {
    const dispatch = useDispatch<any>()
    const bookTicket = useSelector<any>(state => state?.passengers);

    const [value, setValue] = useState({ id: uuid(), name: "", address: "", passportNumber: "" })
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = (e: any) => {
        e.preventDefault()
        // @ts-ignore: Unreachable code error
        const newBookedTicket = bookTicket?.bookTicket?.data?.data?.push(value)
        dispatch(actionBookTicket(newBookedTicket));
    }


    const handleChange = (e: any) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }
  return (
    <>
        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
            <Form onSubmit={e=> {handleSubmit(e)}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value="" onChange={e => handleChange(e)} placeholder="Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value="" onChange={e => handleChange(e)}  placeholder="Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Passport Number</Form.Label>
                    <Form.Control type="text" name="passportNumber" value="" onChange={e => handleChange(e)}  placeholder="Passport Number" required  />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
  )
}

export default BookTicket