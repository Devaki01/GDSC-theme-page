import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import one from './CoreTeam/one.png';
import two from './CoreTeam/two.png';
import three from './CoreTeam/three.png';
import four from './CoreTeam/four.png';
import five from './CoreTeam/five.png';
import six from './CoreTeam/six.png';
import seven from './CoreTeam/seven.png';
import eight from './CoreTeam/eight.png';

function Members() {
  return (
    <div classname='Team'>
      
    <h2> Core Team Members </h2>
    <br /> 
    <Container>
        <Row>
        <Col sm={12}> <CardGroup>
      <Card>
        <Card.Img variant="top" src={one} />
        <Card.Body>
          <Card.Title>Uday Badola</Card.Title>
          <Card.Text>
            Competitive Programming Lead
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={two} />
        <Card.Body>
          <Card.Title> Ruhani Rai Dhamija </Card.Title>
          <Card.Text>
            Design and Media Co-lead
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={three} />
        <Card.Body>
          <Card.Title> Yajushrestha Shukla </Card.Title>
          <Card.Text>
            Podcast Lead
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={four} />
        <Card.Body>
          <Card.Title> Tavishi Gupta  </Card.Title>
          <Card.Text>
            Design and Media Lead
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup></Col>
      </Row>

      <Row>
        <Col sm={12}> <CardGroup>
      <Card>
        <Card.Img variant="top" src={five} />
        <Card.Body>
          <Card.Title>  Dev Bhanushali </Card.Title>
          <Card.Text>
            Flutter lead
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={six} />
        <Card.Body>
          <Card.Title> Dhvani Parekh </Card.Title>
          <Card.Text>
            Artificial Intelligence lead
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={seven} />
        <Card.Body>
          <Card.Title> Yash Parkhi  </Card.Title>
          <Card.Text>
            Game Development
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={eight} />
        <Card.Body>
          <Card.Title> Prachi Lal </Card.Title>
          <Card.Text>
            GDSC lead
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup></Col>
      </Row>
    </Container>

    </div>
    
    
  );
}

export default Members;

