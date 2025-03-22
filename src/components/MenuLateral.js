import React from 'react';
import { Link } from 'react-router-dom';

const MenuLateral = () => {
    return (
        <nav className="menu-lateral">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/agenda">Agenda</Link></li>
                <li><Link to="/pacientes">Pacientes</Link></li>
                <li><Link to="/pagamentos">Pagamentos</Link></li>
            </ul>
        </nav>
    );
};

export default MenuLateral;
