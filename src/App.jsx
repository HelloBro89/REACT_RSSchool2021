import React from "react";
import { /* BrowserRouter as Router, */ HashRouter } from "react-router-dom";
import { Header } from './components/Header.jsx';

export const App = () => (
    <HashRouter>
        <div style={{backgroundColor: 'rgba(128, 128, 128, 0.250)', minHeight: '100vh', borderRadius: '10px' }}>
            <Header />
        </div>
    </HashRouter>
)


