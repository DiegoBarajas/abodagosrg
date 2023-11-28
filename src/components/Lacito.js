import React from 'react';
import '../styles/Lacito.css';

const Lacito = ({img, alt, title, content, link}) => {
    return (
        <div className='lacito' onClick={()=>window.open(link)}>
            <div className='lacito-img'>
                <img src={img} alt={alt} />
            </div>

            <div className='lacito-content'>
                <h4>{title}</h4>
                <a href={link} >{content}</a>
            </div>
        </div>
    )
}

export default Lacito