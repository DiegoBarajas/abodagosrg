import React from 'react';
import Mexico from '../assets/mexico.png';
import '../styles/LicenciaFederal.css';

const LicenciaFederal = () => {
    return (
        <section id='LicenciaFederal'>
            <img className='img-licencia' alt='Licencia federal' src={Mexico}/>
            <h2>Contamos con licencia Federal</h2>
            <p>Podemos atender asuntos en otros estados</p>
        </section>
    )
}

export default LicenciaFederal