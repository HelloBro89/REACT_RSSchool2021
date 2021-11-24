import React from "react";
import { /* BrowserRouter as Router , */ /* HashRouter, */ MemoryRouter  } from "react-router-dom";
import { Header } from './components/Header.jsx';

export const App = () => (
     <MemoryRouter>
        <div style={{backgroundColor: 'rgba(128, 128, 128, 0.250)', minHeight: '100vh', borderRadius: '10px' }}>
            <Header />
        </div>
    </MemoryRouter>
    
)


