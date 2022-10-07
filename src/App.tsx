import React, {useEffect} from 'react';
import './App.css';
import {useTelegram} from "./hooks/userTelegram";
import Header from "./components/header/Header";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import ProductList from "./components/productList/ProductList";
import Form from "./components/form/Form";

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready()
    }, [])

    return (
        <div>
            <Header/>
            <Router>
                <Routes>
                    <Route index element={<ProductList/>}/>
                    <Route path={'/form'} element={<Form/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
