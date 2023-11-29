import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import QuienesSomos from '../components/QuienesSomos';
import Servicios from '../components/Servicios';
import LicenciaFederal from '../components/LicenciaFederal';
import Contacto from '../components/Contacto';
import UDG from '../components/UDG';
import Ubicacion from '../components/Ubicacion';

const Index = () => {
    return (
        <div id='index'>
            <Navbar/>
            <Banner/>
            <QuienesSomos/>
            <Servicios/>
            <LicenciaFederal/>
            <Contacto/>
            <UDG/>
            <Ubicacion/>

            <br/><br/><br/>
        </div>
    )
}

export default Index