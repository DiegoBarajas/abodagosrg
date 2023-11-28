import React from 'react';
import '../styles/ServicioItem.css'

const ServicioItem = ({img, alt, title, description}) => {
    return (
        <div className='ServicioItem'>
            <img src={img} alt={alt}/>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default ServicioItem