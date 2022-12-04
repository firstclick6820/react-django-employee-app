// Import React Components
import React, { useState } from 'react';



// Import Bootstrap Components

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


// import Axios
import axios from 'axios'


// API_URL
const API_URL = `http://localhost:8000/departments/`


const AddDepartment = ({show, handleClose, loadData}) => {
    

    // loadData call to the API to retriveiw data from the db
    // 
    const handleSubmit = (event) => {
        event.preventDefault()
    
        const department_name = event.target.DepartmentName.value;
    
        axios.post(API_URL,{

            "DepartmentID" : null,
            "DepartmentName": department_name
            }
        ).then(response => {
          console.log(response.data)
          loadData();
        }).catch(errors => console.log(errors.message))
    
        
        handleClose();
      }


  return (


        
      <Modal show={show} onHide={handleClose}>
        {/* Modal Header */}
        <Modal.Header closeButton>
          <Modal.Title>Add Department</Modal.Title>
        </Modal.Header>

        {/* Modal Body */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* First Element of the form */}
            <Form.Group className="mb-3" controlId="DepartmentName" >
              <Form.Label>Department Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g, Finance"
                autoFocus
                name='DepartmentName'
              />
            </Form.Group>

            <Form.Group className="mb-3 d-grid gap-2">  
                <Button variant="outline-primary" type='submit'>
                    Add
                </Button>
            </Form.Group>

          </Form>
        </Modal.Body>
      </Modal>
                

  )
}

export default AddDepartment;



