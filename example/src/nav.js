import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
      <br />
      <Navbar bg="primary" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#about"> About </Nav.Link>
            <Nav.Link href="#events"> Events and Challenges </Nav.Link>
            <Nav.Link href="#Team"> Gallery </Nav.Link>
            
            
          </Nav>
        </Container>
      </Navbar>

      <br />
    </>
  );
}

export default Navigation;