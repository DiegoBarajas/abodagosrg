import React from 'react';
import Title from './Title';
import image from '../assets/aboutUs3.jpeg';
import '../styles/QuienesSomos.css';

const QuienesSomos = () => {
    return (
        <div id='QuienesSomos'>
            <Title>Quiénes somos</Title>

            <section className='box-quienes-somos'>
                <img src={image} alt='About Us'/>
                <p>En RG Y Asociados, con sede en Guadalajara, Jalisco, entendemos que cada situación legal es única y merece una atención personalizada. Desde nuestra fundación, nos hemos comprometido a ofrecer asesoría legal integral y servicios jurídicos adaptados a las necesidades individuales de cada cliente, tanto en Guadalajara como en todo México permitiéndonos brindar soluciones legales sólidas y confiables en una amplia gama de áreas legales.. </p>
            </section>
        </div>
    )
}

export default QuienesSomos