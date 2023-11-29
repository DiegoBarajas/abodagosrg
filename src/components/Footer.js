import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer id='Footer'>
            <div className='footer-cont'>
                <div className='footer-cont-item'>
                    <a href='#' className='marginleft25'><span>Teléfono:</span> 33 3658 4706</a>
                    <a href='#' className='marginleft25'><span>Teléfono:</span> 33 3658 4706</a>
                    <a href='#' className='marginleft25'><span>Teléfono:</span> 33 3658 4706</a>

                </div>
                <div className='footer-cont-item'>
                    <a href='#'><span>Teléfono:</span> 33 3658 4706</a>
                    <a href='#'><span>Teléfono:</span> 33 3658 4706</a>
                    <a href='#'><span>Teléfono:</span> 33 3658 4706</a>
                </div>
            </div>
            <div className='footer-cont footer-bottom'>
                <p>abogadorg © 2023 - Todos los derechos reservados</p>
            </div>

        </footer>
    )
}

export default Footer