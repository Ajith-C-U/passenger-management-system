import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { actionBookTicket } from '../../action';
import { v4 as uuid } from "uuid"
import { useNavigate } from 'react-router-dom';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss"

const BookTicket = () => {
    const dispatch = useDispatch<any>()
    const bookTicket = useSelector<any>(state => state?.passengers);
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());

    const newStartDate = startDate.toLocaleDateString()

    const [value, setValue] = useState({ id: uuid(), startDate: "", numberofPassengers: "", chooseClass: "", from: "", to: "" })


    const handleChange = (e: any) => {
        setValue({ ...value, [e.target.name]: e.target.value, startDate: newStartDate });
    }

    const CheckValidation = (value: any) => {
        if (value === "") {
            return "This field is required"
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        // @ts-ignore: Unreachable code error
        const newBookedTicket = bookTicket?.bookTicket?.data?.data?.push(value)
        dispatch(actionBookTicket((value: any) => [...value, newBookedTicket]));
        navigate("/bookedpassengers")
    }

    const options = [
        {
            country: "India",
            longitude: 20.5937,
            latitude: 78.9629
        },
        {
            country: "Canada",
            longitude: 56.1304,
            latitude: 106.3468
        },
        {
            country: "Germany",
            longitude: 51.1657,
            latitude: 10.4515
        },
        {
            country: "Usa",
            longitude: 37.0902,
            latitude: 95.7129
        },
        {
            country: "England",
            longitude: 52.3555,
            latitude: 1.1743
        }
    ]
    

    return (
        <div className='book-ticket'>
            <div className="date-picker mb-3">
                <label>Choose Date to Travel</label>
                <ReactDatePicker selected={startDate} onChange={(date) => date && setStartDate(date)} minDate={moment().toDate()} />
                <span className='validation'>{CheckValidation(value.startDate)}</span>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Number of Passengers</Form.Label>
                    <Form.Control type="number" name="numberofPassengers" min="1" value={value.numberofPassengers} onChange={handleChange} onKeyDown={e => (e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 187 || e.keyCode === 189) && e.preventDefault()} placeholder="Number of Passengers" />
                    <span className='validation'>{CheckValidation(value.numberofPassengers)}</span>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Choose Class</Form.Label>
                    <Form.Select name="chooseClass" value={value.chooseClass} onChange={handleChange}>
                        <option value="">Select Class</option>
                        <option value="First Class">First Class</option>
                        <option value="Business Class">Business Class</option>
                        <option value="Premium Economy">Premium Economy</option>
                        <option value="Economy Class">Economy Class</option>
                        <option value="Basic Economy">Basic Economy</option>
                    </Form.Select>
                    <span className='validation'>{CheckValidation(value.chooseClass)}</span>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>From</Form.Label>
                    <Form.Select name="from" value={value.from} onChange={handleChange}>
                        <option value="">Select Your Place</option>
                        {options && options.map((opt: { longitude: any; latitude: any; country: string | number | boolean | null | undefined; }, index: React.Key | null | undefined) => {
                            return (
                                <>
                                    <option key={index} value={`${opt.longitude},${opt.latitude}`}>{opt.country}</option>
                                </>
                            )
                        })}
                    </Form.Select>
                    <span className='validation'>{CheckValidation(value.from)}</span>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>To</Form.Label>
                    <Form.Select name="to" value={value.to} onChange={handleChange}>
                        <option>Select Your Place</option>
                        {options && options.map((opt: { longitude: any; latitude: any; country: string | null | undefined; }, index: React.Key | null | undefined) => {
                            return (
                                <>
                                    <option key={index} value={`${opt.longitude},${opt.latitude}`}>{opt.country}</option>
                                </>
                            )
                        })}
                    </Form.Select>
                    <span className='validation'>{CheckValidation(value.to)}</span>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!value.chooseClass || !value.from || !value.to || !value.numberofPassengers || !value.startDate}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default BookTicket