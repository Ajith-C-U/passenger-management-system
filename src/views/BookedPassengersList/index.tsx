import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionGetBookedPassengersList } from '../../action';
import CustomTable1 from '../../components/BookedPassengersTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookedPassengers = () => {
  const dispatch = useDispatch<any>()
  const bookTicket = useSelector<any>(state => state?.passengers);
  const [loader, setLoader] = useState(true)


  // GET PASSENGER LIST FUNCTION
  const getBookedPassengerList = React.useCallback(async () => {
    dispatch(actionGetBookedPassengersList());
    setLoader(false)
  }, [dispatch])


  useEffect(() => {
    if (loader) {
        getBookedPassengerList()
    }
  }, [getBookedPassengerList, loader])

  const handleRemovePassenger = (id: any): any => {
    // dispatch(actionRemovePassenger(id));
  }

  const handleView = (id: any) : any => {
    // dispatch(actionViewDetails(id));
  }

  const CustomActions = (id: any) => (
    <div>
      <Button onClick={handleView(id)}>View</Button>
      <Button onClick={handleRemovePassenger(id)}>Delete</Button>
    </div>
  )

  // SETTING DATA TO TABLE
  const getTableData = () => {
    // @ts-ignore: Unreachable code error
    const newBookedPassengerList = bookTicket?.bookTicket?.data?.data?.length && [...bookTicket?.bookTicket?.data?.data].map((booked, i) => ({
      ...booked, 
      action: <CustomActions  />
    }))
    return newBookedPassengerList || [];
  }


  return (
    <div className='dashboard'>
      <Row>
        <Col className='d-flex justify-content-between'>
          <span>Passenger Management System</span>
          <div className='p-2 m-2'>
          <Link to="/addPassenger"><Button>Add Passenger</Button></Link>
          <Link to="/bookTicket"><Button>Book Ticket</Button></Link>
          </div>
        </Col>
        <Col xs={12}>
          <CustomTable1 data={getTableData()} />
        </Col>
      </Row>
    </div>
  )
}

export default BookedPassengers