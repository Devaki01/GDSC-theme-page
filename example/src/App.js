import './App.css';
import Heading from './Heading';
import Navigation from './nav';
import About from './about';
import Events from './Events';
import Members from './CoreTeam';
import Gallery from './gallery';
import Footer from './footer';


function App() {
  return (
    <div> 
      <Heading />;
      <Navigation />;
      <About />;
      <Events />;
      <Members />;
      <Gallery />;  
      <Footer />


    </div>

    
  );
}


export default App;