
// import Bootstrap Componentsimport Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Import React Components
import {useState, useEffect} from 'react';



// Import Custom Components
import AddDepartment from './AddDepartment';
import DepartmentUpdate from './DepartmentUpdate';
import DeleteDepartment from './DeleteDepartment';

// Import Axios for api call
import axios from 'axios'



// API_URL
const API_URL = `http://localhost:8000/departments/`



const Departments = () => {
  
  const [departments, setDepartments] = useState([])
  const [departmentDetails, setDepartmentsDetails] = useState([])

  // switch for showing the add department model to false and true
  const [showAddDepartment, setShowAddDepartment] = useState(false);
  const [showUpdateDepartment, setUpdateDepartment] = useState(false);
  const [showDeleteDepartment, setDeleteDepartment] = useState(false);





  // Methods for Add Department Modal
  const addHandleClose = () => setShowAddDepartment(false);


  // Methods for Update Department Modal
  const updateHandleClose = () => setUpdateDepartment(false);
  

  // Method for Delete Department Modal
  const deleteHandleClose = () => setDeleteDepartment(false);

  const loadData = async () => {
     const {data} = await axios.get(API_URL);
     setDepartments(data)
  }


  useEffect(()=> {

    loadData();

    }, [])


  if (!departments) return null;

  


  return (
    <Container>
        <h3 className='mt-5 mb-5 d-flex justify-content-left'>Departments</h3>
        <Button 
                variant="primary" 
                className="mb-3"
                onClick={() => setShowAddDepartment(true)}>Add Department</Button>{' '}

        <Table striped bordered hover>
          {/* Table Header */}
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Department Name</th>
            <th>Actions</th>
          </tr>
        </thead>


      {/* Table Body */}
      
          <tbody>
            {departments.map(department=> 

              <tr key={department.DepartmentID}>
                <td>{department.DepartmentID}</td>
                <td>{department.DepartmentName}</td>
                <td>
                  <Button variant="outline-primary" onClick={ () => {
                    setUpdateDepartment(true)
                    setDepartmentsDetails({depId: department.DepartmentID, depName: department.DepartmentName}) }} >Update</Button>{' '}
                  <Button variant="outline-danger" 
                    onClick = {() => {
                        setDeleteDepartment(true)
                        setDepartmentsDetails({'DepartmentID': department.DepartmentID, "DepartmentName": department.DepartmentName})
                        }}>Delete</Button>{' '}
                </td>
              </tr>

            )}
          </tbody>

      </Table>


      {/* Check if the value of the model is set to true then show the model */}
      <AddDepartment 
              show={showAddDepartment} 
              handleClose={addHandleClose}
              loadData = {loadData}/> 
      <DepartmentUpdate 
              show={showUpdateDepartment} 
              handleClose={updateHandleClose} 
              deatils= {departmentDetails} 
              loadData={loadData}/>


      <DeleteDepartment show={showDeleteDepartment} handleClose= {deleteHandleClose} details= {departmentDetails} />
    </Container>
  )
}

export default Departments


