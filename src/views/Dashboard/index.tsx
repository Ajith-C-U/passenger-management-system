import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionGetPassengersList } from '../../action';
import CustomTable from '../../components/Table';

const DashBoard = () => {
  const dispatch = useDispatch<any>()
  const passengers = useSelector<any>(state => state?.passengers);
  const [loader, setLoader] = useState(true)


  // GET PASSENGER LIST FUNCTION
  const getPassengerList = React.useCallback(async () => {
    dispatch(actionGetPassengersList());
    setLoader(false)
  }, [dispatch])


  useEffect(() => {
    if (loader) {
      getPassengerList()
    }
  }, [getPassengerList, loader])



  // SETTING DATA TO TABLE
  const getTableData = () => {
    // @ts-ignore: Unreachable code error
    const newPassengerList = passengers?.passengers?.data?.data?.length && [...passengers?.passengers?.data?.data].map((passenger, i) => ({
      ...passenger
    }))
    return newPassengerList || [];
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
          <CustomTable data={getTableData()} />
        </Col>
      </Row>
    </div>
  )
}

export default DashBoard