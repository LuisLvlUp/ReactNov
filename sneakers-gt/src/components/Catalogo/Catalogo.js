import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditIcon from '@mui/icons-material/Edit';
import { ThemeContext } from '../../context/themeContext';

export const Catalogo = ({ productos, setProductos }) => {

  const editarProducto = (id) => {
    let nuevoPrecio = prompt('Introduzca nuevo precio')

    let productosEditados = productos.map((item) => {
        if(id === item.id){
            return { ...item, precio: nuevoPrecio }
        }
        return item 
    })

    setProductos( productosEditados )
  }

  //Context
  const [mode, setMode] = useContext(ThemeContext)

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
                  <Button onClick={() => editarProducto(producto.id)} variant={ mode ? 'dark' : 'primary' }> <EditIcon /></Button>
                </Card.Body>
              </Card>
            </div>
          ))
        }
      </div>
  )
}
