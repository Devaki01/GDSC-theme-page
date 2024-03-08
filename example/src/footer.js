import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './images/logo.png';

function Footer() {
  return (
    <Container>
      <Row>
        <Col sm={4}> <img height='100px' width='100px' src={logo} alt="Logo" /> </Col>

        <Col sm={4}>
          <h5> Quick Links </h5>
          <ul>
            <li> Chapters</li> 
            <li> Upcoming events </li> 
            <li> About GDSC </li> 
            <li> Lead Terms </li> 
            <li> Participation Teams  </li> 
            <li> Privacy </li> 
            <li> Terms </li> 
          </ul> 
          
        </Col>
        <Col sm={4}> <h4> Social </h4> </Col>
      </Row>

      <Row>
        <Col sm={12}> 
        &copy; 
        Google Developers Students Club 
        </Col>
      </Row>
    </Container>

  );
}

export default Footer;
