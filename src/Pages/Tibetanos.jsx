import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Imágenes de los productos tibetanos
import producto1 from '../images/tibetanos/slim.jpg';
import producto2 from '../images/tibetanos/organico.webp';
import producto3 from '../images/tibetanos/buena-onda.webp';

export const Tibetanos = () => {
  // Lista de productos tibetanos
  const productos = [
    {
      id: 1,
      nombre: 'Sahumerio Tibetano 1',
      descripcion: 'Sahumerio de alta calidad para meditación.',
      imagen: producto1,
      precio: '$15',
    },
    {
      id: 2,
      nombre: 'Sahumerio Tibetano 2',
      descripcion: 'Aromas naturales para limpiar tu espacio.',
      imagen: producto2,
      precio: '$20',
    },
    {
      id: 3,
      nombre: 'Sahumerio Tibetano 3',
      descripcion: 'Ideal para momentos de relajación.',
      imagen: producto3,
      precio: '$18',
    },
  ];

  return (
    <Container>
      <h2 className="text-center my-4">Productos Tibetanos</h2>
      <Row>
        {productos.map((producto) => (
          <Col xs={12} sm={6} md={4} key={producto.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Card.Text><strong>{producto.precio}</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
