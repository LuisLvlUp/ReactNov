import React, { useEffect, useRef, useState } from 'react'
import Navigation from '../Navigation/Navigation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Catalogo } from '../Catalogo/Catalogo';
import { NewProduct } from '../NewProduct/NewProduct';
import { Container } from '@mui/material';
import { zapatos } from '../../shared/data';
import { ThemeContext } from '../../context/themeContext';
import { Todos } from '../Todos/Todos';

export const Main = () => {

    const [productos, setProductos] = useState(JSON.parse(localStorage.getItem('productos')) || zapatos)
    const [mode, setMode] = useState(false)
    const count = useRef(0)

    useEffect(() => {
        localStorage.setItem('productos', JSON.stringify(productos))
    }, [productos])

    useEffect(() => {
        document.body.style.backgroundColor = mode ? 'black' : 'white';
    }, [mode])

    useEffect(() => {
        count.current = count.current + 1;
    });



    return (
        <ThemeContext.Provider value={[mode, setMode]}>
            <Navigation></Navigation>
            <Container sx={{ marginTop: '4rem' }}>
                <Routes>
                    <Route path="/" element={<Home productos={productos} setProductos={setProductos} />} />
                    <Route path="/catalogo" element={<Catalogo productos={productos} setProductos={setProductos} />} />
                    <Route path="/new-product" element={<NewProduct productos={productos} setProductos={setProductos} />} />
                    <Route path="/todo-list" element={<Todos />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Container>
        </ThemeContext.Provider>
    )
}
