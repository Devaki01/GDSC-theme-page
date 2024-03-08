import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from './images/about.png';

function About() {
  return (

    
    <div className= 'about'>
      <br /><br />
      <Container fluid>
      <Row>
        <Col sm={6}>
        <h2> About </h2>
        <p> Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
        </Col>
        <Col sm={6}> <img src={about} height={250} alt="about" /></Col>
      </Row>
    </Container>

    <br /><br /><br /><br />


    </div>
  );
}

export default About;   