import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import Table from 'react-bootstrap/Table';

function CustomTable({ ...props }) {
    const { data, header } = props

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {header && header?.map((title: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; },index: any)=>(

                    <th key={index}>{title.text}</th>
                    ))}
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