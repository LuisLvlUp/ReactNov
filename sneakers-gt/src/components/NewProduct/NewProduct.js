import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API_URL } from '../../shared/API_URL';
import { Loading } from '../Loading/Loading';

export const NewProduct = ({ productos, setProductos, loading, setLoading }) => {

  const formRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    let tmpProducto = {
      marca: event.target.inputMarca.value,
      silueta: event.target.inputSilueta.value,
      precio: event.target.inputPrecio.value,
      imagen: event.target.inputImagen.value,
      // id: productos[productos.length - 1].id + 1
    }

    newProductAPI(tmpProducto)

    // setProductos([...productos, tmpProducto])
    formRef.current.reset()
  }

  const newProductAPI = (producto) => {

    setLoading(true)

    fetch(`${API_URL}/sneakers`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(producto)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      {
        loading ?
          <Loading />
          :
          <Form onSubmit={handleSubmit} ref={formRef}>
            <div className='row'>
              <Form.Group className="mb-3 col-6" controlId="inputMarca">
                <Form.Label>Marca</Form.Label>
                <Form.Control type="text" placeholder="Marca..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputSilueta">
                <Form.Label>Silueta</Form.Label>
                <Form.Control type="text" placeholder="Silueta..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" placeholder="$" />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputImagen">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="text" placeholder="http:// ..." />
              </Form.Group>
            </div>
            <div className='row justify-content-center mt-3'>
              <Button variant="primary" className='col-3' type="submit">
                Submit
              </Button>
            </div>
          </Form>
      }
    </>

  )
}
