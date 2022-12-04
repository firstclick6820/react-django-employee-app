// Import Bootstarp Components

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



// import axios
import axios from 'axios';

const API_URL = 'http://localhost:8000/departments'


const DepartmentUpdate = ({show, handleClose, deatils, loadData}) => {
  const id = deatils.depId
  const name = deatils.depName

 const handleSubmit = (event) => {
    event.preventDefault();

    const updated_name = event.target.DepartmentName.value;
    const id = event.target.DepartmentID.value;

    axios.put(`${API_URL}/${id}/`, {"DepartmentID": id, "DepartmentName": updated_name}).then(response => {
      console.log(response.data)
      loadData();
    }).catch(errors => {
      console.log(errors.message)
    })

    handleClose();
    
 }


  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Department</Modal.Title>
        </Modal.Header>

        {/* Modal Body */}
        <Modal.Body>
          <Form onSubmit = {handleSubmit}>

            {/* First Element of the form */}
            <Form.Group className="mb-3" controlId="DepartmentID" >
              <Form.Label>Department ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g, Finance"
                autoFocus
                disabled
                defaultValue= {id}
                name='DepartmentID'
              />
            </Form.Group>
            {/* Second Element of the form */}
            <Form.Group className="mb-3" controlId="DepartmentName" >
              <Form.Label>Department Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g, Finance"
                autoFocus
                defaultValue= {name}
                name='DepartmentName'
              />
            </Form.Group>

            <Form.Group className="mb-3 d-grid gap-2">  
                <Button variant="outline-primary" type='submit'>
                    Save
                </Button>
            </Form.Group>

          </Form>
        </Modal.Body>
    </Modal>
  )
}

export default DepartmentUpdate