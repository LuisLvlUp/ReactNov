import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Catalogo = ({ productos }) => {
  return (
      <div className='row'>
        {
          productos.map((producto) => (
            <div className='col-4 d-flex align-items-stretch mb-3' key={producto.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.imagen} />
                <hr></hr>
                <Card.Body>
                  <Card.Title>{producto.silueta}</Card.Title>
                  <Card.Text>
                    {producto.marca}
                  </Card.Text>
                  <Card.Text>
                    ${producto.precio}
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </div>
          ))
        }
      </div>
  )
}
