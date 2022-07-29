import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPassenger from '../views/AddPassenger'
import BookedPassengers from '../views/BookedPassengersList'
import PassengerDetails from '../views/BookedPassengersList/PassengerDetails'
import BookTicket from '../views/BookTicket'
import DashBoard from '../views/Dashboard'
import NotFound from '../views/NotFound'

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