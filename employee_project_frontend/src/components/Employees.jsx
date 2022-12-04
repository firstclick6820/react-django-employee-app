
// import Bootstrap Componentsimport Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


// Import React Components
import {useState, useEffect} from 'react'


// Import Custom Components
import AddEmployee from './AddEmployee';
import EmployeeUpdate from './EmployeeUpdate';


// Import Axios
import axios from 'axios'


// API_URL
const API_URL = 'http://localhost:8000/employees/'


const Employees = () => {
    const [employees, setEmployees] = useState([])
    const [employeeDetails, setEmployeeDetials] = useState([])

    const [showAddEmployee, setAddEmployee] = useState(false);
    const [showUpdateEmployee, setUpdateEmployee] = useState(false);



    // Add Employee Close Method for the Modal
    const addHandleClose = () => setAddEmployee(false);


    // Update Employee Close Method for the Modal
    const updateHandleClose = () => setUpdateEmployee(false)


  const loadData = async () => {
    const {data} = await axios.get(API_URL);
    setEmployees(data)
  }
    


    useEffect(()=> {

      loadData();
    
    }, []);



    if (!employees) return null;


    

  return (
    <Container>

      <h3 className='mt-5 mb-5 d-flex justify-content-left'>Employees</h3>
      <Button 
            variant="primary" 
            className="mb-3"
            onClick={()=> setAddEmployee(true)}>Add Employee</Button>{' '}
          
        <Table striped bordered hover>
          {/* Table Header */}
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Department</th>
            <th>Date of Joining</th>
            <th>Operations</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>

          {employees.map(employee => 

            <tr key={employee.EmployeeID}>
              <td>{employee.EmployeeID}</td>
              <td>{employee.EmployeeName}</td>
              <td>{employee.DepartementName}</td>
              <td>{employee.DateOfJoining}</td>
              <td>
                  <Button 
                        variant="outline-primary"
                        onClick = {() => {
                            setUpdateEmployee(true)
                            setEmployeeDetials(
                                {
                                  empId: employee.EmployeeID,
                                  empName: employee.EmployeeName,
                                  empDept: employee.DepartementName,
                                  doj:employee.DateOfJoining,
                                  image: employee.EmployeeImage,
                                })
                        }}>Update</Button>{' '}
                  <Button variant="outline-danger">Delete</Button>{' '}
              </td>
            </tr>

          )}

        </tbody>
      </Table>


      <AddEmployee 
            show={showAddEmployee}
            handleClose = {addHandleClose}
            loadData = {loadData} />


      <EmployeeUpdate
            show={showUpdateEmployee}
            handleClose = {updateHandleClose}
            loadData = {loadData} 
            details = {employeeDetails}/>
    </Container>
  )
}

export default Employees


