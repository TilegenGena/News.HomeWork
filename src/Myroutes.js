import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import News from './page/News';

const Myroutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<News />} />  
            </Routes>
        </BrowserRouter>
    );
};

export default Myroutes;