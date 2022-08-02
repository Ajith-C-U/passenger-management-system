import Table from 'react-bootstrap/Table';


const CustomTable1 = ({ ...props }) => {
    const { data } = props

    return (
        <div className='m-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Start Date</th>
                        <th>Number Of Passengers</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.length && data?.map((data: { id: number, startDate: string, numberofPassengers: string, chooseClass: string, action: any }, index : number) => {
                        return (
                                <tr key={index}>
                                    <td>{data?.startDate}</td>
                                    <td>{data?.numberofPassengers}</td>
                                    <td>{data?.chooseClass}</td>
                                    <td>{data?.action}</td>
                                </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>
    );
}

export default CustomTable1;