import Table from 'react-bootstrap/Table';

function CustomTable({ ...props }) {
    const { data } = props

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Passport Number</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data: { id: number, name: string, address: string, passportNumber: number, action:any }) => {
                    return (
                        <>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.address}</td>
                                <td>{data.passportNumber}</td>  
                            </tr>
                        </>
                    )
                })}

            </tbody>
        </Table>
    );
}

export default CustomTable;