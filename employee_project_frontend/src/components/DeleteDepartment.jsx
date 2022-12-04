// Import Bootstrap Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


// Import Axios
import axios from 'axios'


// API URL LINK
const API_URL = "http://localhost:8000/departments"

const DeleteDepartment = ({show, handleClose, details}) => {

    const DepartmentName = details.DepartmentName;
    const DepartmentID = details.DepartmentID;


    const handleSubmit = () => {
        
        axios.delete(`${API_URL}/${DepartmentID}/`).then(response => {
            console.log('Deleted')
        }).catch(errors => {
            alert(errors.message)
        })


        handleClose();
    }

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Department</Modal.Title>
        </Modal.Header>

        {/* Modal Body */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>


            <Form.Group className="mb-3" controlId="DepartmentName" >
              <Form.Label>Are you sure to delete the department ?</Form.Label>
              <Form.Control
                type="text"
                disabled
                defaultValue= {DepartmentName}
                name='DepartmentName'
              />
            </Form.Group>

            <Form.Group className="mb-3 d-grid gap-2">  
                <Button variant="outline-danger" type='submit'>
                    Delete
                </Button>
            </Form.Group>

          </Form>
        </Modal.Body>
    </Modal>
  )
}

export default DeleteDepartment