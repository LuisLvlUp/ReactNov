import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import './Contador.css'

export const Contador = ({ contador, setContador }) => {

  const [estado, setEstado] = useState(true)

  // Ciclo de vida:
  // El componente se monta
  // El componente se actualiza

  useEffect(() => {
    document.title = `Contador: ${contador}`
  }, [contador])

  useEffect(() => {
    console.log('Estado: ' + estado)
  }, [estado])


  const incrementar = () => {
    setContador(contador + 1)
  }

  const decrementar = () => {
    setContador(contador - 1)
  }

  const toggle = () => {
    setEstado(!estado)
  }

  return (
    <>
      <div className='contenedor-contador'>
        <Button variant='primary' onClick={decrementar}>
          -
        </Button>
        <span style={{ fontSize: '30px' }}> {contador} </span>
        <Button variant='primary' onClick={incrementar}>
          +
        </Button>
      </div>
      <div>
        {/* <Button variant={estado ? 'primary' : 'warning'} onClick={toggle}>
          Estado: {`${estado}`}
        </Button> */}
        {
          estado ?
            <Button variant={'danger'} onClick={toggle}>
              Estado: {`${estado}`}
            </Button>
            :
            <Button variant={'info'} onClick={toggle}>
              Estado: {`${estado}`}
            </Button>
        }
      </div>
    </>
  )
}
