import React from 'react';
import Title from './Title';
import Lacito from './Lacito';
import Phone from '../assets/phone.png';
import Email from '../assets/email.png';
import '../styles/Contacto.css';

const Contacto = () => {
    return (
        <div id='Contacto'>
            <Title
                style={{
                    marginTop: '-20px'
                }}
            >Contacto</Title>

            <Lacito
                img={Phone}
                alt='Número de teléfono'
                title='Número de teléfono'
                content='33 3658 4706'
                link='tel:3336584706'
            />

            <Lacito
                img={Email}
                alt='Correo Electrónico'
                title='Correo Electrónico'
                content='abogados@abogadorg.com'
                link='mailto:abogados@abogadorg.com'
            />
        </div>
    )
}

export default Contacto