import React from 'react'
import Button from 'react-bootstrap/Button';
import './Contador.css'

export const Contador = () => {
  return (
    <div className='contenedor-contador'>
        <Button variant='primary'>
            -
        </Button>
        <span style={{fontSize: '30px'}}> 0 </span>
        <Button variant='primary'>
            +
        </Button>
    </div>
  )
}
