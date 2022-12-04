import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Import React Route Components
import {Link} from 'react-router-dom'

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Link to='/'>Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            

            <Nav.Link href="#home"><Link to="departments/">Departments</Link></Nav.Link>

            
            <Nav.Link href="#link"><Link to="employees/">Employees</Link></Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;