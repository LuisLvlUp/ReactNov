import React, { useState } from 'react'
import { Contador } from '../Contador/Contador'
import { Titulo } from '../Titulo/Titulo'
import './Main.css'

export const Main = () => {

  const [contador, setContador] = useState(0)

  return (
    <div className='contenedor'>
        <Titulo contador={contador} />
        <Contador contador={contador} setContador={setContador}/>
    </div>
  )
}
