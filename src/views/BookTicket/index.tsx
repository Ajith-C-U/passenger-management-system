import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { actionBookTicket } from '../../action';
import { v4 as uuid } from "uuid"
import { useNavigate } from 'react-router-dom';
import DateRangePicker from 'rsuite/DateRangePicker';
import moment from "moment";
import "rsuite/dist/rsuite.css";

const BookTicket = () => {
    const dispatch = useDispatch<any>()
    const bookTicket = useSelector<any>(state => state?.passengers);
    const navigate = useNavigate()
    const [fromDate] = useState(new Date());
    const [toDate] = useState(new Date());
    const [value, setValue] = useState({ id: uuid(), startDate: "10/25/2022", endDate: "10/26/2022", numberofPassengers: "", chooseClass: "" })

    
    const handleChange = (e: any) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }
    
    const handleDateChange = (e: any) => {
        console.log(e[1], "datae");
    }
    
    const handleSubmit = (e: any) => {
        e.preventDefault()
        // @ts-ignore: Unreachable code error
        const newBookedTicket = bookTicket?.bookTicket?.data?.data?.push(value)
        dispatch(actionBookTicket((value: any) => [...value, newBookedTicket]));
        navigate("/bookedpassengers")
    }

    return (
        <>
            <DateRangePicker
                onChange={handleDateChange}
                >
                <button>
                    {moment(fromDate).format("LL")} to {moment(toDate).format("LL")}
                </button>
            </DateRangePicker>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Number of Passengers</Form.Label>
                    <Form.Control type="text" name="numberofPassengers" value={value.numberofPassengers} onChange={e => handleChange(e)} placeholder="Number of Passengers" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Choose Class</Form.Label>
                    <Form.Select name="chooseClass" value={value.chooseClass} onChange={e => handleChange(e)}>
                        <option>Select Class</option>
                        <option value="First Class">First Class</option>
                        <option value="Business Class">Business Class</option>
                        <option value="Premium Economy">Premium Economy</option>
                        <option value="Economy Class">Economy Class</option>
                        <option value="Basic Economy">Basic Economy</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default BookTicket