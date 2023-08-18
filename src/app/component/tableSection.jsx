import Table from 'react-bootstrap/Table';

export const TableSection = ({tableRow, deleteRow, editRow}) => {
    return (
        <div className='container mt-5'>
            <Table bordered hover className='customeTable'>
                <thead>
                    <tr>
                        <th scope="col" width="5%">#</th>
                        <th scope="col" width="20%">First</th>
                        <th scope="col" width="20%">Last</th>
                        <th scope="col">Comment</th>
                        <th scope="col" width="10%">Status</th>
                        <th scope="col" width="10%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableRow.map((tableRow, idx) => {
                            return (
                                <tr key={idx}>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{tableRow.FirstName}</td>
                                    <td>{tableRow.LastName}</td>
                                    <td>{tableRow.Comment}</td>
                                    <td>
                                        <span className={`status ${tableRow.Status}`}>{tableRow.Status}</span>
                                    </td>
                                    <td>
                                        <i className='bx bxs-edit' onClick={() => editRow(idx)}></i>
                                        <i className='bx bxs-trash' onClick={() => deleteRow(idx)}></i>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>            
        </div>
    )
}

export default TableSection;