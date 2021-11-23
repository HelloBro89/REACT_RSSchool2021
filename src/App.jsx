import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from './components/Header.jsx';

export const App = () => (
    <Router>
        <div style={{backgroundColor: 'rgba(128, 128, 128, 0.250)', minHeight: '100vh', /*  height: '1000vh', */ borderRadius: '10px' }}>
            <Header />
        </div>
    </Router>
)


