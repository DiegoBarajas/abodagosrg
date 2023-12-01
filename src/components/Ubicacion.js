import React from 'react';
import '../styles/Ubicacion.css';
import Title from './Title';

    var setting = {"query":"Guillermo Prieto 215, Centro, Guadalajara, Jal., México","width":'100%',"height":500,"satellite":false,"zoom":17,"placeId":"ChIJB4RBs-exKIQR-vPhiXk-88A","cid":"0xc0f33e7989e1f3fa","coords":[20.6860903,-103.3490502],"lang":"es","queryString":"Guillermo Prieto 215, Centro, Guadalajara, Jal., México","centerCoord":[20.6860903,-103.3490502],"id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"1035785"};
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=1035785';
    s.async = true;
    s.onload = function (e) {
    window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);


const Ubicacion = () => {
    return (
        <div id='Ubicacion'>
            <Title>Ubicación</Title>

            <div className='ubicacion-container'>
                <div className='div-mapa'>

                <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
                    <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
                        <p>Ha ocurrido un error al cargar el mapa <a href="https://maps.app.goo.gl/AExbqYKm2TdFPj49A">Ver mapa</a></p>
                    </div>
                </div>

                <div className='div-data-contacto'>
                    <h4>Dirección</h4>
                    <p>Guillermo Prieto No. 215, Colonia El Santuario, Guadalajara Jalisco.</p>
                    <br/>
                    <h4>Horario de atención</h4>
                    <p class="schedule">
                        <span class="day">Lunes</span>
                        <span class="time">9:30 - 15:00</span>
                    </p>
                    <p class="schedule">
                        <span class="day">Martes</span>
                        <span class="time">9:30 - 15:00</span>
                    </p>
                    <p class="schedule">
                        <span class="day">Miércoles</span>
                        <span class="time">9:30 - 15:00</span>
                    </p>
                    <p class="schedule">
                        <span class="day">Jueves</span>
                        <span class="time">9:30 - 15:00</span>
                    </p>
                    <p class="schedule">
                        <span class="day">Viernes</span>
                        <span class="time">9:30 - 15:00</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Ubicacion