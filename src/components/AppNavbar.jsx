import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='AppNavbar'>
        <Navbar.Brand as= { Link } to="/">NOOTROPIC STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as= { Link } to="/Login">LOGIN</Nav.Link>
            <Nav.Link as= { Link } to="/Purchases">PURCHASES</Nav.Link>
            <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
              <NavDropdown.Item as= { Link } to="/Dynamind">DYNAMIND</NavDropdown.Item>
              <NavDropdown.Item as= { Link } to="/DynamindSport">DYNAMIND SPORT </NavDropdown.Item>
              <NavDropdown.Item as= { Link } to="/Noopept">NOOPEPT</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>CART</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;