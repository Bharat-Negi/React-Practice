import React, {useState} from 'react';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalWrap = ({ closeModal, onSubmit, defaultValue }) => {

    const [fromState, setFromState] = useState( defaultValue || {
        FirstName: "",
        LastName: "",
        Comment: "",
        Status: "live"
    })

    const [errors, setErrors] = useState("")

    const validateFrom = () => {
        if(fromState.FirstName && fromState.LastName && fromState.Status && fromState.Comment){
            setErrors("");
            return true
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(fromState)){
                if(!value){
                    errorFields.push(key)
                }
            }
            setErrors(errorFields.join(", "))
            return false
        }
    }
    
    const handleChanges = (e) => {
        setFromState({
            ...fromState,
            [e.target.placeholder]: e.target.value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateFrom()) return;

        // console.log(fromState);
        onSubmit(fromState);
        closeModal();
    }

    return (
        <div
            className="modal"
            style={{ display: 'block', position: 'absolute' }}
            onClick={(e) => {
                if (e.target.className === 'modal') closeModal();
            }}
        >
            <Modal.Dialog>
                <Modal.Header 
                    // closeButton
                >
                    <Modal.Title>Add New Line</Modal.Title>
                </Modal.Header>
                <Form>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="FirstName" value={fromState.FirstName} onChange={handleChanges} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="LastName" value={fromState.LastName} onChange={handleChanges} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Comment"
                            value={fromState.Comment} onChange={handleChanges}
                        // style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingSelect" label="Status">
                        <Form.Select aria-label="Select Status" name="Status" value={fromState.Status} onChange={handleChanges}>
                            <option>Select Status</option>
                            <option value="live">Live</option>
                            <option value="draft">Draft</option>
                            <option value="error">Error</option>
                        </Form.Select>
                    </FloatingLabel>
                    {errors && <div className='alert alert-danger mt-3'>{`Please Enter ${errors}`}</div>}
                </Modal.Body>                
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" type='submit' onClick={handleSubmit}>Save changes</Button>
                </Modal.Footer>
                </Form>
            </Modal.Dialog>
        </div>
    )
}

export default ModalWrap;