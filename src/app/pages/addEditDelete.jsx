import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ModalWrap from '../component/modal';

function AddEditDelete() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Link to="/" className="backtohome">Back to home page</Link>
            <div className='container mt-5'>
                <Table bordered hover className='customeTable'>
                <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <span className='status live'>Live</span>
                            </td>
                            <td>
                                <i className='bx bxs-edit'></i>
                                <i className='bx bxs-trash'></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                                <span className='status draft'>Draft</span>
                            </td>
                            <td>
                                <i className='bx bxs-edit'></i>
                                <i className='bx bxs-trash'></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                                <span className='status error'>Error</span>
                            </td>
                            <td>
                                <i className='bx bxs-edit'></i>
                                <i className='bx bxs-trash'></i>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <div className='row'>
                    <div className='col-md-12'>
                        <Button variant="primary" onClick={() => setShow(true)}>
                            Add
                        </Button>
                    </div>
                </div>
            </div>

            {show && <ModalWrap closeModal={() => setShow(false)} />}

            {/* <ModalWrap
                show={show}
                onHide={handleClose}
            ></ModalWrap> */}
        </>
    )
}

export default AddEditDelete;