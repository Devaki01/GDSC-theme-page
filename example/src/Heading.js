import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './images/logo.png';
//import heading from './images/heading.jpg';

function Heading() {
  return (
    <Container>
      <Row>
        <Col sm={2}> <img src={logo} width={100} height={80} alt="logo"/> </Col>
        <Col sm={10}> <h1> Google Developer Student Club </h1> </Col>
      </Row>
    </Container>
  );
}

export default Heading;