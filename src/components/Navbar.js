import React, { useState } from 'react';
import NavbarHidden from './NavbarHidden';

import '../styles/Navbar.css';

const Navbar = () => {

    const [ checked, setChecked ] = useState(false);

    return (
        <nav id='navbar' className='container'>
            <NavbarHidden/>
            <div className="nav">
                <input type="checkbox" id="nav-check" checked={checked} onChange={()=>setChecked(!checked)}/>
                <div className="nav-header">
                <div className="nav-title">
                    <a href='#navbar' className='a-nav' onClick={()=>setChecked(false)}>RG Y ASOCIADOS</a>
                </div>
                </div>
                <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                </div>
                <div className="nav-links">
                    <a href='#' onClick={() => setChecked(false)}>Inicio</a>
                    <a href='#' onClick={() => setChecked(false)}>Quienes somos</a>
                    <a href='#' onClick={() => setChecked(false)}>Servicios</a>
                    <a href='#' onClick={() => setChecked(false)}>Contacto</a>
                    <a href='#' onClick={() => setChecked(false)}>Ubicación</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar