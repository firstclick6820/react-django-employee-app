// Import React Components
import {useState, useEffect} from 'react';


// import boostrap Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'

// Import Axios
import axios from 'axios'


// API_URL
const API_URL = `http://localhost:8000/employees`


const EmployeeUpdate = ({show, handleClose, loadData, details}) => {

  const empID = details.empId;
  const empName = details.empName;
  const empDept = details.empDept;
  const dateofjoining = details.doj;


  const handleSubmit = (event) => {
    event.preventDefault();


    const EmployeeID = event.target.EmployeeID.value;
    const EmployeeName = event.target.EmployeeName.value;
    const DepartementName = event.target.DepartementName.value;
    const DateOfJoining = event.target.DateOfJoining.value;
    const EmployeeImage = 'default.jpg'


    axios.put(`${API_URL}/${EmployeeID}/`, {
      "EmployeeID" : EmployeeID,
      "EmployeeName": EmployeeName,
      "DepartementName": DepartementName,
      "DateOfJoining": dateofjoining,
      "EmployeeImage": EmployeeImage
    })
      .then((response) => {
        console.log("Updated.")
        loadData();

      })
      .catch((errors) => {
        console.log(errors.message)
      })


      handleClose();

  }

  return (
    <Modal show={show} onHide={handleClose}>


      <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>


        <Modal.Body>
          <Form onSubmit={handleSubmit}>


          <Form.Group className="mb-3" controlId="EmployeeID">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                defaultValue={empID}
                disabled
                name="EmployeeID"
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="EmployeeName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={empName}
                placeholder="e.g, Moh Khalid Momand"
                autoFocus
                name="EmployeeName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="DepartementName">
              <Form.Label>Department Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={empDept}
                placeholder="e.g, Finance"
                autoFocus
                name="DepartementName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="DateOfJoining">
              <Form.Label>Date of Joining</Form.Label>
              <Form.Control
                type="date"
                defaultValue={dateofjoining}
                placeholder="e.g, 2022-03-03"
                autoFocus
                name="DateOfJoining"
              />
            </Form.Group>


            <Form.Group className="mb-3 d-grid gap-2">
                <Button variant="outline-primary" type='submit'>
                    Save Changes
                </Button>
            </Form.Group>

          </Form>
        </Modal.Body>

    </Modal>
  )
}

export default EmployeeUpdate