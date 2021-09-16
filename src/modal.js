import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';

export default function Example(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [val,setVal]=useState()
  
    const setValue=()=>{
        props.setInteger(val);
        setShow(false)
    }
    return (
      <>
        <Button variant="success" className="but" onDoubleClick={handleShow}>
         Integer
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Integer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
            <Form.Control type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} placeholder="Enter Integer" />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={setValue}>Enter</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
