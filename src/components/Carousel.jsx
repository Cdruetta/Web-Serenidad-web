import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../images/fondosImages/tibetanos.jpg';
import imagen2 from '../images/fondosImages/palo_santo.jpg';
import imagen3 from '../images/fondosImages/magicos.jpg';
import imagen4 from '../images/fondosImages/conitos.jpg';
import styles from '../styles/Carousel.module.css';

function MyCarousel() {
  return (
    <Carousel controls={true} indicators={true} interval={3000} fade>
      <Carousel.Item>
        <div className={styles.carouselContainer}>
          <img
            className={styles.carouselImage}
            src={imagen1}
            alt="Imagen 1"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.carouselContainer}>
          <img
            className={styles.carouselImage}
            src={imagen2}
            alt="Imagen 2"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.carouselContainer}>
          <img
            className={styles.carouselImage}
            src={imagen3}
            alt="Imagen 3"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.carouselContainer}>
          <img
            className={styles.carouselImage}
            src={imagen4}
            alt="Imagen 4"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
