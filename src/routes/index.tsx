import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AddPassenger = React.lazy(() => import('../views/AddPassenger'));
const BookedPassengers = React.lazy(() => import('../views/BookedPassengersList'));
const PassengerDetails = React.lazy(() => import('../views/BookedPassengersList/PassengerDetails'));
const BookTicket = React.lazy(() => import('../views/BookTicket'));
const DashBoard = React.lazy(() => import('../views/Dashboard'));
const NotFound = React.lazy(() => import('../views/NotFound'));


const DefaultRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/addPassenger" element={<AddPassenger />} />
          <Route path="/bookTicket" element={<BookTicket />} />
          <Route path="/bookedpassengers" element={<BookedPassengers />} />
          <Route path="/passengerDetails/:id" element={<PassengerDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default DefaultRoutes