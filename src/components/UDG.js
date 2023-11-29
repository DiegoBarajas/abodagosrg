import React from 'react';
import '../styles/UDG.css';
import UDGImg from '../assets/udg.png';

const UDG = () => {
    return (
        <div id='UDG'>
            <div class="UDG-element UDG-element1"></div>
            <div class="UDG-element UDG-element2">
                <div className='UDG-img'>
                    <img src={UDGImg} alt='UDG Logo'/>
                </div>
                <div className='UDG-text'>
                    <h3>Somos egresados de la UDG</h3>
                </div>
            </div>
        </div>
    );
}

export default UDG;