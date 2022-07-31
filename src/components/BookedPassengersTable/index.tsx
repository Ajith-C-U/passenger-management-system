import Table from 'react-bootstrap/Table';
import BookedPassengerTable from './BookedPassengersTable';


const CustomTable1 = ({ ...props }) => {
    const { data } = props

    return (
        <>
        <BookedPassengerTable data={data} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Number Of Passengers</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.length && data?.map((data: { id: number, startDate: string, endDate: string, numberofPassengers: string, chooseClass: string, action: any }) => {
                        return (
                            <>
                                <tr>
                                    <td>{data?.startDate}</td>
                                    <td>{data?.endDate}</td>
                                    <td>{data?.numberofPassengers}</td>
                                    <td>{data?.chooseClass}</td>
                                    <td>{data?.action}</td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </Table>
        </>
    );
}

export default CustomTable1;