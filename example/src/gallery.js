import abc from './Gallery/abc.png';
import def from './Gallery/def.png';
import ghi from './Gallery/ghi.png';
import jkl from './Gallery/jkl.png';
import mno from './Gallery/mno.png';

import Carousel from 'react-bootstrap/Carousel';

function Gallery() {
  return (
    <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <img src= {abc} alt ="image1" />

        <Carousel.Caption>
          <h3>WE program </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src= {def} alt ="image1" />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src= {ghi} alt ="image1" />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src= {jkl} alt ="image1" />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src= {mno} alt ="image1" />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>




    </Carousel>
    
  );
}

export default Gallery;