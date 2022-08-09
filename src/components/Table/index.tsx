import Table from 'react-bootstrap/Table';

interface Tabledata {
    id: number,
    name: string,
    address: string,
    passportNumber: number,
    action:any
}

interface Title {
    text: string | number | boolean | string | null | undefined,
}

function CustomTable({ ...props }) {
    const { data, header } = props

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {header && header?.map((title: Title, index: number)=>(

                    <th key={index}>{title.text}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((data: Tabledata ) => {
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