import React, { useState } from 'react'
import "./Butacas.css"

export const Butacas = () => {

    let filas = Array(5).fill()
    let columnas = Array(10).fill()

    const [seleccionados, setSeleccionados] = useState(['10', '32', '49'])
    const [bloqueados, setBloqueados] = useState(['00', '38', '41'])

    const toggleSeleccionado = (id, activo) => {
        if (activo) {
            setSeleccionados(seleccionados.filter((item) => item !== id))
        } else {
            setSeleccionados([...seleccionados, id])
        }
    }

    const getEstadoButaca = (index1, index2) => {
        let id = `${index1}${index2}`

        let esSeleccionado = seleccionados.some((item) => id === item)

        if (esSeleccionado) {
            return (
                <div className='butaca mt-2 text-center seleccionado' onClick={() => toggleSeleccionado(id, true)}>
                    {index1} {index2}
                </div>
            )
        } else {
            let esBloqueado = bloqueados.some((item) => id === item)
            if (esBloqueado) {
                return (
                    <div className='butaca mt-2 text-center bloqueado'>
                        {index1} {index2}
                    </div>
                )
            } else {
                return (
                    <div className='butaca mt-2 text-center disponible' onClick={() => toggleSeleccionado(id, false)}>
                        {index1} {index2}
                    </div>
                )
            }
        }
    }

    const reservar = () => {
        // Quitar seleccioados y añadirlos a bloqueados.
    }

    return (
        <>
            {
                filas.map((item, index1) => (
                    <div className='d-flex justify-content-center gap-2'>
                        {
                            columnas.map((item2, index2) => (
                                getEstadoButaca(index1, index2)
                            ))
                        }
                    </div>
                ))
            }
            <button className='btn btn-primary mt-5' onClick={reservar}>
                Reservar
            </button>
        </>
    )
}
