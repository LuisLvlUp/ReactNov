import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Navigation from '../Navigation/Navigation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Catalogo } from '../Catalogo/Catalogo';
import { NewProduct } from '../NewProduct/NewProduct';
import { Container } from '@mui/material';
import { zapatos } from '../../shared/data';

export const Main = () => {

    const [productos, setProductos] = useState(zapatos)

    return (
        <>
            <Navigation></Navigation>
            <Container sx={{marginTop: '4rem'}}>
                <Routes>
                    <Route path="/" element={<Home productos={productos} setProductos={setProductos} />} />
                    <Route path="/catalogo" element={<Catalogo productos={productos} />} />
                    <Route path="/new-product" element={<NewProduct productos={productos} setProductos={setProductos} />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Container>

        </>

    )
}
