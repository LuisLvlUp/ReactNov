import React from 'react'
import Button from '@mui/material/Button';
import Navigation from '../Navigation/Navigation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Catalogo } from '../Catalogo/Catalogo';
import { NewProduct } from '../NewProduct/NewProduct';
import { Container } from '@mui/material';

export const Main = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container sx={{marginTop: '4rem'}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/new-product" element={<NewProduct />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Container>

        </>

    )
}
