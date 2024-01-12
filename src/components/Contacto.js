import React from 'react';
import Title from './Title';
import Lacito from './Lacito';
import Phone from '../assets/phone.png';
import Email from '../assets/email.png';
import whatsapp from '../assets/whatsapp.png';

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
                img={whatsapp}
                alt='WhatsApp'
                title='WhatsApp'
                content='+52 33 1009 4930'
                link='https://api.whatsapp.com/send?phone=5213310094930'
            />

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
                content='contacto@abogadorg.com'
                link='mailto:contacto+web@abogadorg.com'
            />
        </div>
    )
}

export default Contacto