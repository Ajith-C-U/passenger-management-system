import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Map from '../../../components/Map'

const PassengerDetails = () => {
  const { id } = useParams();
  const bookTicket: any = useSelector<any>(state => state?.passengers);
  const viewDetails = bookTicket?.bookTicket?.data?.data?.find((details: { id: number }) => details.id.toString() === id)

  return (
    <>
      <Map viewDetails={viewDetails} />
    </>
  )
}

export default PassengerDetails