import React, { useEffect, useState, FC } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionGetBookedPassengersList } from '../../action';
import CustomTable1 from '../../components/BookedPassengersTable';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  id:any
  // any props that come into the component
}

const BookedPassengers = () => {
  const dispatch = useDispatch<any>()
  const bookTicket : any = useSelector<any>(state => state?.passengers);
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

  // const CustomActions = (id: any) => (
  //   <div>
  //      <Button><Link to={`/passengerDetails/${id}`}>View</Link></Button>
  //     <Button onClick={handleRemovePassenger(id)}>Delete</Button>
  //   </div>
  // )

  // SETTING DATA TO TABLE
  // const getTableData = () => {
  //   // @ts-ignore: Unreachable code error
  //   const newBookedPassengerList = bookTicket?.bookTicket?.data?.data?.length && [...bookTicket?.bookTicket?.data?.data].map(booked => ({
    //     ...booked,
    //     action: <CustomActions id={booked.id} />
    //   }))
    //   console.log(newBookedPassengerList,"newBookedPassengerList");
    
    //   return newBookedPassengerList || [];
    // }
    
    const getTableData = () => {
    //   // @ts-ignore: Unreachable code error
    const newBookedPassengerList = bookTicket?.bookTicket?.data?.data?.length && [...bookTicket?.bookTicket?.data?.data].map(cartItem => ({
      ...cartItem,
      action: <CustomActions id={cartItem?.id}  />,
      
    }))
    return newBookedPassengerList || [];
  }

  const CustomActions : FC<Props> =({ id}) => (<span className='d-flex flex-direction-row align-items-center'>
   
    <Link to={`/passengerDetails/${id}`}><span className='d-flex justify-content-center align-items-center ms-2'>
     View
    </span></Link>
  </span>)



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