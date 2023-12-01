import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer id='Footer'>
            <div className='footer-cont'>
                <div className='footer-cont-item'>
                    <a href='tel:3336584706' target='_BLANK' className='marginleft25' rel="noreferrer"><span>Teléfono:</span> 33 3658 4706</a>
                    <a href='mailto:contacto@abogadorg.com' target='_BLANK' className='marginleft25' rel="noreferrer"><span>Correo Electrónico:</span> contacto@abogadorg.com</a>
                    <a href='https://maps.app.goo.gl/AExbqYKm2TdFPj49A' target='_BLANK' className='marginleft25' rel="noreferrer"><span>Dirección:</span> Guillermo Prieto No. 215</a>

                </div>
                <div className='footer-cont-item'>
                    <a href='https://www.facebook.com/profile.php?id=61552864001186' target='_BLANK' rel="noreferrer"><span>Facebook:</span> Abogados RG Y Asociados</a>
                    <a href='https://instagram.com/abogadorg215?igshid=NzZlODBkYWE4Ng==' target='_BLANK' rel="noreferrer"><span>Instagram:</span> @abogadorg215</a>
                </div>
            </div>
            <div className='footer-cont footer-bottom'>
                <p>abogadorg © 2023 - Todos los derechos reservados</p>
            </div>

        </footer>
    )
}

export default Footer