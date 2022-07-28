import Table from 'react-bootstrap/Table';

function CustomTable1({ ...props }) {
    const { data } = props

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data: { id: number, startDate : string, endDate : string, numberofPassengers : string, chooseClass : string, action: any }) => {
                    return (
                        <>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.startDate}</td>
                                <td>{data.endDate}</td>
                                <td>{data.numberofPassengers}</td>
                                <td>{data.chooseClass}</td>
                                <td>{data.action}</td>
                            </tr>
                        </>
                    )
                })}

            </tbody>
        </Table>
    );
}

export default CustomTable1;