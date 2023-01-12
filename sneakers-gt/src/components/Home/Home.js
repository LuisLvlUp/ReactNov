import React from 'react'
import { Administrador } from '../Administrador/Administrador'
import { Catalogo } from '../Catalogo/Catalogo'
import { Cliente } from '../Cliente/Cliente'
import { NewProduct } from '../NewProduct/NewProduct'
import { Split } from '../Split/Split'

export const Home = ({ productos, setProductos }) => {

  let user = {
    nombre: 'Luis',
    correo: 'luis@gmail.com',
    rol: 'cliente'
  }

  return (
    <>
      {
        user.rol == 'admin' ?
          <Administrador />
          :
          <Cliente />
      }
      <hr></hr>
      <Split 
        left={<NewProduct productos={productos} setProductos={setProductos} />}
        right={<Catalogo productos={productos} setProductos={setProductos} />} />
    </>


  )
}
