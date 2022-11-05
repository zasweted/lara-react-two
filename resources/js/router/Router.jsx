import React from 'react';
import { Routes, Route } from "react-router-dom";

import IndexProduct from '../components/product/Index';
import NewProduct from '../components/product/New';
import NotFound from '../components/product/NotFound';

const Router = () => {
    return(
        <>
            <div>
                <Routes>
                    <Route path="/" element={ <IndexProduct />} />
                    <Route path="/product/new" element={ <NewProduct /> } />
                    <Route path="/*" element={ <NotFound />} />
                </Routes>
            </div>
        </>
    )
}

export default Router;