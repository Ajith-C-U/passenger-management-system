import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoard from '../views/Dashboard'
import NotFound from '../views/NotFound'

const DefaultRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default DefaultRoutes