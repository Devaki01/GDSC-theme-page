import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import flutter from './images/flutter.png';
import Game from './images/Game.jpg';
import OpenSource from './images/OpenSource.jpg';
import download from './images/download.jpg';
import solution from './images/solution.png';
import tech from './images/tech.jpg';
import Button from 'react-bootstrap/Button';



function Events() {
  return (
    <div className='events'>
      <h2> Events </h2>
      <br /> <br />
      <Container>
      <Row>
        <Col sm={3}><img src={flutter} width='200' height='200px' alt="flutter" /></Col>
        <Col sm={9}>
        <h3> Flutter Development </h3>
        <p> The Flutter Workshop event proved to be a resounding success, offering participants an 
                enriching experience delving into the realm of Flutter – a widely-used open-source UI 
                software development toolkit developed by Google. The workshop covered a spectrum of 
                Flutter-related topics, spanning fundamental concepts to hands-on practice in altering 
                a sample Flutter app.</p>
                <> <Button variant="info"> Know More </Button>{' '}</>
        </Col>
      </Row>
      <br /> <br />
      <Row>
        <Col sm={9}>
        <h3> Intro to Game Development </h3>
        <p> The dynamic workshop, was unfolded with the goal of immersing participants in the
                 exhilarating realm of game creation. This session aimed to equip attendees with
                 hands-on experience using prominent game development tools like Pygame, Piskell, 
                 and SFXR. Despite a brief initial setback, the workshop encapsulated a journey into 
                 the fundamentals of game development, fostering creativity in sprite design and 8-bit 
                 audio generation.</p>
                 <> <Button variant="info"> Know More </Button>{' '}</>
        </Col>
        <Col sm={3}> <img src={Game} width='200' height='200px' alt="gameDevelopment" /> </Col>
      </Row>
      <br /> <br />
      <Row>
        <Col sm={3}> <img src={OpenSource} width='200' height='200px' alt="OpenSource" /> </Col>
        <Col sm={9}>
        <h3> Introduction to Open Source </h3>
        <p> The Open-Source Workshop, a collaborative effort by the Symbiosis Open-Source 
                    Society and Google Developer Student Clubs (GDSC), aimed to champion open-source 
                    software development and equip participants with essential knowledge and skills in 
                    this field. The workshop garnered an enthusiastic response from students and technology 
                    enthusiasts.</p><> <Button variant="info"> Know More </Button>{' '}</>
        </Col>
      </Row>
      <br /> <br />
      <Row>
        <Col sm={9}>
        <h3> AI in Healthcare </h3>
        <p> The Google Developer Student Clubs (GDSC) organized "The AI in Healthcare Workshop: 
                    from Python Basics to Neural Networks" with the goal of catering to a diverse audience.
                    The workshop welcomed beginners without prior knowledge of AI/ML or DL, as well as individuals 
                    seeking to reinforce their fundamentals and explore the fascinating realm of AI in the healthcare 
                    domain. The event garnered an overwhelming response from students and technology enthusiasts.</p> <> <Button variant="info"> Know More </Button>{' '}</>
        </Col>
        <Col sm={3}> <img src={download} width='200' height='200px' alt="ai" /> </Col>
      </Row>
      <br /> <br />
      <h2> Challenges </h2>
      <br /> 
      <Row>
        <Col sm={6}>
        <h3> Solution Challenge </h3>
        <p> The mission of the Solution Challenge is to solve for one or more of the United Nations' 17 Sustainable Development Goals using Google technology.Since 2020, Google Developer Student Clubs (GDSC) members from around the world come together to create innovative solutions to tackle some of the world's most pressing challenges.</p>
        <Button variant="warning">  Know More </Button>{' '}
        </Col>
        <Col sm={6}> <img src={solution} width='200' height='200px' alt="solution challenge" /> </Col>
      </Row>
      <br /> <br />
      <Row>
        <Col sm={6}>
        <h3> TechQuest </h3>
        <p> Introducing "TechQuest: The Digital Treasure Hunt" by GDSC SIT! Join us on September 20, 2023, for an exhilarating coding adventure. Teams of 2-3 participants will tackle programming challenges, following clues to discover systems within the event room. With each challenge solved, a new clue unveils the path to the next system, culminating in the ultimate coding problem at the "master computer." Be the first to conquer it and claim victory! This event aligns with SDGs, focusing on Quality Education and Clean Energy. </p> <Button variant="warning"> Know More </Button>{' '}
        </Col>
        <Col sm={6}> <img src={tech} width='200' height='200px' alt="techQuest" /> </Col>
      </Row>

    </Container>

    </div>
    
  );
}

export default Events;