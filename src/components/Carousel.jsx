import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../images/fondosImages/tibetanos.jpg';
import imagen2 from '../images/fondosImages/palo_santo.jpg';
import imagen3 from '../images/fondosImages/magicos.jpg';
import imagen4 from '../images/fondosImages/conitos.jpg';

function MyCarousel() {
  return (
    <Carousel controls={false} indicators={false} interval={null}>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between', overflow: 'hidden' }}>
          <img
            className="d-block"
            src={imagen1}
            alt="Imagen 1"
            style={{
              width: '25%',  // Ajusta el tamaño de las imágenes
              marginRight: '10px', // Espacio entre las imágenes
            }} 
          />
          <img
            className="d-block"
            src={imagen2}
            alt="Imagen 2"
            style={{
              width: '25%',
              marginRight: '10px',
            }} 
          />
          <img
            className="d-block"
            src={imagen3}
            alt="Imagen 3"
            style={{
              width: '25%',
              marginRight: '10px',
            }} 
          />
          <img
            className="d-block"
            src={imagen4}
            alt="Imagen 4"
            style={{
              width: '25%',
            }} 
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
