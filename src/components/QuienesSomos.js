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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt esse voluptatem sit placeat aliquid distinctio. Illum dolorum non delectus saepe atque eaque ipsum odit vitae quasi obcaecati, inventore tenetur animi sed accusantium nobis quod culpa sint similique modi aliquam iusto architecto est.</p>
            </section>
        </div>
    )
}

export default QuienesSomos