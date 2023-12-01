import React, { useState } from 'react';
import ExpandIcon from '../assets/expand.svg';
import '../styles/ServicioItem.css';

const ServicioItem = ({img, alt, title, description, examples}) => {

    const [active, setActive] = useState(false);

    return (
        <div className='ServicioItem' onClick={() => setActive(!active)}>
            <img src={img} alt={alt}/>
            <h4>{title}</h4>
            <p>{description}</p>
            {
                active
                ? <div className='div-examples-servicio'>
                    <div className='line'></div>
                    <p>{examples}</p>
                </div>
                : <div className='expand-icon'>
                    <p>Haz click para expandir</p>
                    <img src={ExpandIcon} alt='Expandir'/>
                </div>
            }
        </div>
    )
}

export default ServicioItem