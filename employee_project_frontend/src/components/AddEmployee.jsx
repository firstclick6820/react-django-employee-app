// Import React Components
import {useState, useEffect} from 'react'

// Import Bootstrap Components

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


// Import Axios
import axios from 'axios';

// API_URL
const API_URL = `http://localhost:8000/employees/`


const AddEmployee = ({show, handleClose, loadData}) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const EmployeeName = event.target.EmployeeName.value;
        const DateOfJoining = event.target.DateOfJoining.value;
        const DepartementName = event.target.DepartementName.value;

        axios.post(API_URL, {
            "EmployeeName": EmployeeName,
            "DepartementName": DepartementName,
            "DateOfJoining": DateOfJoining,
            "EmployeeImage": 'default.jpg',
        }).then(response => {
            console.log(response.data)
            loadData()
        }).catch(errors => 
            console.log(errors.message)
        )

        handleClose();
    }


  return (
    <Modal show={show} onHide={handleClose} >

        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>


        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="EmployeeName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g, Moh Khalid Momand"
                autoFocus
                name="EmployeeName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="DepartementName">
              <Form.Label>Department Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g, Finance"
                autoFocus
                name="DepartementName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="DateOfJoining">
              <Form.Label>Date of Joining</Form.Label>
              <Form.Control
                type="date"
                placeholder="e.g, 2022-03-03"
                autoFocus
                name="DateOfJoining"
              />
            </Form.Group>


            <Form.Group className="mb-3 d-grid gap-2">
                <Button variant="outline-primary" type='submit'>
                    Add Employee
                </Button>
            </Form.Group>

          </Form>
        </Modal.Body>



    </Modal>
  )
}

export default AddEmployee;