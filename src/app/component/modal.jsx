import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalWrap = ({ closeModal }) => {
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

                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                        // style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingSelect" label="Status">
                        <Form.Select aria-label="Floating label select example">
                            <option>Select Status</option>
                            <option value="1">Live</option>
                            <option value="2">Draft</option>
                            <option value="3">Error</option>
                        </Form.Select>
                    </FloatingLabel>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default ModalWrap;