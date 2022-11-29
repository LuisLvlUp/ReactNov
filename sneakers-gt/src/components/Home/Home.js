import React from 'react'
import { Catalogo } from '../Catalogo/Catalogo'
import { NewProduct } from '../NewProduct/NewProduct'
import { Split } from '../Split/Split'

export const Home = ({ productos, setProductos }) => {
  return (
    <Split 
    left={<NewProduct productos={productos} setProductos={setProductos} />} 
    right={ <Catalogo productos={productos} setProductos={setProductos} /> } />
  )
}
