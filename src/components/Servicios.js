import React from 'react';
import Title from './Title'
import ServicioItem from './ServicioItem';

import Familiar from '../assets/familia.png';
import Marcantil from '../assets/billetes-de-banco.png';
import Penal from '../assets/preso.png';
import Laboral from '../assets/chamba.png';
import Administrativa from '../assets/Administrativa.png';
import Agraria from '../assets/planta.png';
import Amparo from '../assets/Amparo.png';
import Civil from '../assets/Civil.png';

import '../styles/Servicios.css';

const Servicios = () => {
    return (
        <div id='Servicios'>
            <Title>Servicios</Title>
            <p className='subtitle-serv'>Primera asesoria sin costo*</p>

            <div className='container-services'>
                <ServicioItem
                    img={Familiar}
                    alt='Materia Familiar'
                    title='Materia Familiar'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt esse voluptatem sit placeat aliquid distinctio. Illum dolorum non delectus saepe atque eaque ipsum odit vitae quasi obcaecati.'
                />
                <ServicioItem
                    img={Marcantil}
                    alt='Materia Mercantil'
                    title='Materia Mercantil'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt esse voluptatem sit placeat aliquid distinctio. Illum dolorum non delectus saepe atque eaque ipsum odit vitae quasi obcaecati.'
                />
                <ServicioItem
                    img={Penal}
                    alt='Materia Penal'
                    title='Materia Penal'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt esse voluptatem sit placeat aliquid distinctio. Illum dolorum non delectus saepe atque eaque ipsum odit vitae quasi obcaecati.'
                />

                
                <ServicioItem
                    img={Laboral}
                    alt='Materia Laboral'
                    title='Materia Laboral'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt esse voluptatem sit placeat aliquid distinctio. Illum dolorum non delectus saepe atque eaque ipsum odit vitae quasi obcaecati.'
                />
                <ServicioItem
                    img={Administrativa}
                    alt='Materia Administrativa'
                    title='Materia Administrativa'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt esse voluptatem sit placeat aliquid distinctio. Illum dolorum non delectus saepe atque eaque ipsum odit vitae quasi obcaecati.'
                />
                <ServicioItem
                    img={Agraria}
                    alt='Materia Agraria'
                    title='Materia Agraria'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt esse voluptatem sit placeat aliquid distinctio. Illum dolorum non delectus saepe atque eaque ipsum odit vitae quasi obcaecati.'
                />


                <ServicioItem
                    img={Amparo}
                    alt='Materia de Amparo'
                    title='Materia de Amparo'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt esse voluptatem sit placeat aliquid distinctio. Illum dolorum non delectus saepe atque eaque ipsum odit vitae quasi obcaecati.'
                />
                <ServicioItem
                    img={Civil}
                    alt='Materia Civil'
                    title='Materia Civil'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt esse voluptatem sit placeat aliquid distinctio. Illum dolorum non delectus saepe atque eaque ipsum odit vitae quasi obcaecati.'
                />
            </div>
        </div>
    )
}

export default Servicios