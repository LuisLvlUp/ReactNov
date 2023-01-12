import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditIcon from '@mui/icons-material/Edit';
import { ThemeContext } from '../../context/themeContext';
import { API_URL } from '../../shared/API_URL';
import { Loading } from '../Loading/Loading';

export const Catalogo = ({ productos, setProductos, loading, setLoading }) => {

  const editarProducto = (id) => {
    let nuevoPrecio = prompt('Introduzca nuevo precio')

    let productosEditados = productos.map((item) => {
      if (id === item.id) {
        return { ...item, precio: nuevoPrecio }
      }
      return item
    })

    setProductos(productosEditados)
  }

  const editarProductoAPI = (producto) => {
    let nuevoPrecio = prompt('Introduzca nuevo precio')
    let productoEditado = { ...producto, precio: nuevoPrecio }

    console.log(productoEditado)

    setLoading(true)

    fetch(`${API_URL}/sneakers/${producto.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(productoEditado)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }

  //Context
  const [mode, setMode] = useContext(ThemeContext)

  return (
    <div className='row justify-content-center'>
      {
        loading ?
          <Loading />
          :
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
                  <Button onClick={() => editarProductoAPI(producto)} variant={mode ? 'dark' : 'primary'}> <EditIcon /></Button>
                </Card.Body>
              </Card>
            </div>
          ))
      }
    </div>
  )
}
