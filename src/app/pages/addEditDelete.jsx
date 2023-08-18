import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TableSection from '../component/tableSection';
import ModalWrap from '../component/modal';

function AddEditDelete() {
    const [show, setShow] = useState(false);

    const [tableRow, setRows] = useState ([
        {
            FirstName: "Mohan",
            LastName: "Singh",
            Comment: "Comment Section 1",
            Status: "live"
        },
        {
            FirstName: "Ram",
            LastName: "Singh",
            Comment: "Comment Section 2",
            Status: "draft"
        },
        {
            FirstName: "Bharat",
            LastName: "Singh",
            Comment: "Comment Section 3",
            Status: "error"
        }
    ]);

    const [rowToEdit, setRowToEdit] = useState(null);    

    const handleDeleteRow = (tragetIndex) => {
        setRows(tableRow.filter((_,idx) => idx !== tragetIndex));
    }

    const handleEditRow = (idx) => {
        setRowToEdit(idx);

        setShow(true);
    }

    const handleSubmit = (newRow) => {
        rowToEdit === null ? 
        setRows([...tableRow, newRow]) : 
        setRows(tableRow.map((currRow, idx) => {
            if(idx !== rowToEdit) return currRow

            return newRow;
        }))
    }

    return (
        <>
            <Link to="/" className="backtohome">Back to home page</Link>
            <TableSection 
                tableRow={tableRow} 
                deleteRow = {handleDeleteRow}
                editRow = {handleEditRow}
            />

            <Container>
                <Row>
                    <Col md={12}>
                        <Button variant="primary" onClick={() => setShow(true)}>
                            Add
                        </Button>
                    </Col>
                </Row>
            </Container>

            {show && <ModalWrap 
                closeModal={() => {
                    setShow(false);
                    setRowToEdit(null);
                }} 
                onSubmit={handleSubmit}
                defaultValue = {rowToEdit !== null && tableRow[rowToEdit]}
            />}

            {/* <ModalWrap
                show={show}
                onHide={handleClose}
            ></ModalWrap> */}
        </>
    )
}

export default AddEditDelete;