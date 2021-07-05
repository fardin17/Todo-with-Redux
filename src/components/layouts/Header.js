import {Navbar,Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";

const Header =()=>{
    return(
      <Navbar bg="dark" variant="dark" >
   
    <Navbar.Brand as={Link} to="/" className="mx-4">TODOList with Redux</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/add_task">Add Task</Nav.Link>
      <Nav.Link as={Link} to="/edit_task">Edit Task</Nav.Link>
    </Nav>
  </Navbar>
    )
}
export default  Header