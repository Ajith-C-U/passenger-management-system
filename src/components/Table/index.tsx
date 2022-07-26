import Table from 'react-bootstrap/Table';

function CustomTable({ ...props }) {
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
                </tr>
            </thead>
            <tbody>
                {data.map((data: { id: number, name: string, address: string, passportNumber: number, action:any }) => {
                    return (
                        <>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.address}</td>
                                <td>{data.passportNumber}</td>
                                <td>{data.action}</td>
                            </tr>
                        </>
                    )
                })}

            </tbody>
        </Table>
    );
}

export default CustomTable;