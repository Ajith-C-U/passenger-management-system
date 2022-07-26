import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPassenger from '../views/AddPassenger'
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default DefaultRoutes