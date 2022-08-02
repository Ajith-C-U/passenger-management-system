import React, { useEffect, useState, FC } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { actionGetBookedPassengersList, actionRemovePassenger } from '../../action';
import CustomTable1 from '../../components/DragAndDrop';
import BookedPassengerTable from '../../components/DragAndDrop/BookedPassengersTable';
import "./index.scss"

interface Props {
  id: any
  // any props that come into the component
}

const BookedPassengers = () => {
  const dispatch = useDispatch<any>()
  const bookTicket: any = useSelector<any>(state => state?.passengers);
  const [loader, setLoader] = useState(true)
  const navigate = useNavigate()

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

// Table Data
  const getTableData = () => {
    const newBookedPassengerList = bookTicket?.bookTicket?.data?.data?.length && [...bookTicket?.bookTicket?.data?.data].map(passenger => ({
      ...passenger,
      action: <CustomActions id={passenger?.id} />
    }))
    
    return newBookedPassengerList || [];
  }
 

  const CustomActions: FC<Props> = ({ id }) => (
    <span className='d-flex flex-direction-row align-items-center mr-2'>
      <Link to={`/passengerDetails/${id}`}>
        <Button className='d-flex justify-content-center align-items-center ms-2'>View</Button>
      </Link>
    </span>)


  return (
    <div className='booked-passengers'>
      <Row>
        <Col className='d-flex justify-content-between'>
        <span className='logo p-2 m-2' onClick={() => navigate("/")}>Passenger Management System</span>
          <div className='p-2 m-2'>
          <Link to="/addPassenger" className='p-2 m-2'><Button>Add Passenger</Button></Link>
          <Link to="/bookTicket"  className='p-2 m-2'><Button>Book Ticket</Button></Link>
          </div>
        </Col>
        <Col xs={12}>
        <BookedPassengerTable data={getTableData()} />
        </Col>
        <Col xs={12}>
          <CustomTable1 data={getTableData()} />
        </Col>
      </Row>
    </div>
  )
}

export default BookedPassengers