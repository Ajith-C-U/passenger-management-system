import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionGetPassengersList } from '../../action';
import CustomTable from '../../components/Table';
import header from "./header.json"

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
          <span className='logo p-2 m-2'>Passenger Management System</span>
          <div className='p-2 m-2'>
          <Link to="/addPassenger" className='p-2 m-2'><Button>Add Passenger</Button></Link>
          <Link to="/bookTicket"  className='p-2 m-2'><Button>Book Ticket</Button></Link>
          </div>
        </Col>
        <Col xs={12}>
          <CustomTable header={header} data={getTableData()} />
        </Col>
      </Row>
    </div>
  )
}

export default DashBoard