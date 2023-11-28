import React, { useEffect, useState } from 'react';
import Banner1 from '../assets/Banner1.jpg';
import Banner2 from '../assets/Banner2.jpg';
import Banner3 from '../assets/Banner3.jpg';
import Banner4 from '../assets/Banner4.jpeg';

import '../styles/Banner.css';

const data = [ 
    {
        subtitle: 'Abogados',
        title: 'RG Y Asociados',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: Banner1
    },{
        subtitle: 'Abogados',
        title: 'RG Y Asociados',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: Banner2
    },{
        subtitle: 'Ejemplo',
        title: 'Texto de ejemplo',
        body: 'Hay varios sitios web donde puedes encontrar imágenes de alta definición para banners sin licencia. Algunos de estos sitios ofrecen fotos gratuitas de alta calidad que puedes usar sin preocuparte por derechos de autor. ',
        img: Banner3
    },{
        subtitle: 'Abogados',
        title: 'RG Y Asociados',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: Banner4
    } ];

    let interval;
    let index = 0;

    function addIndex(){
        index+=1;
        if(index > (data.length-1)){ 
            index = 0;
        }

        return index;
    }

const Banner = () => {
    
    const [ banner, setBanner ] = useState(0);

    useEffect(() => {
        interval = setInterval(() => {
            setBanner(addIndex());
            resetAnimation()
        }, 15000);
    
        // Limpieza del intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, [data.length]);

    const changeBanner = (index) => {
        setBanner(index);

        clearInterval(interval);
        interval = setInterval(() => {
            setBanner(addIndex());
            resetAnimation();
        }, 15000);

        resetAnimation();
    }

    const resetAnimation = () => {
        const barra = document.getElementById('loadingbar');
        barra.classList.remove('banner-loadingbar');
        void barra.offsetWidth; // Truco para reiniciar la animación (re-flow)
        barra.classList.add('banner-loadingbar');
    }
    
    // Evento de arrastrar
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const handleTouchStart = (event) => {
        setTouchStartX(event.touches[0].clientX);
      };
    
      const handleTouchMove = (event) => {
        setTouchEndX(event.touches[0].clientX);
      };
    
      const handleTouchEnd = () => {
        const difference = touchEndX - touchStartX;

        if (difference > 0) {

            if(banner === 0){
                changeBanner(data.length-1);
            }else{
                changeBanner(banner-1);
            }

        } else if (difference < 0) {
            
            if(banner >= (data.length-1)){
                changeBanner(0);
            }else{
                changeBanner(banner+1);
            }

        }
      };
    

    
    return (
        <header id='banner'>
            {
                data.map((d, index) => {
                    return index === banner
                    ? <div 
                        className='banner-item' 
                        key={'banner-item-'+index} 
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <img className='img-banner' src={d.img} alt='Banner 1'/>
                        <div className='img-banner-brightness'>
                            <section className='title-banner'>
                                <h3>{d.subtitle}</h3>
                                <h2>{d.title}</h2>
                            </section>

                            <section className='body-banner'>
                                <p>{d.body}</p>
                            </section>
                        </div>
                    </div>
                    : <></>
                })
            }

            <section className='dots-navigator'>
                {
                    data.map((d, index) => {
                        return index === banner 
                            ? <button key={'dot-btn-'+index} className='dot-btn dot-btn-active' onClick={() => changeBanner(index)}></button>
                            : <button key={'dot-btn-'+index} className='dot-btn' onClick={() => changeBanner(index)}></button>
                    })
                }

            </section>
            <div id='loadingbar' className='banner-loadingbar'></div>
        </header>
    )
}

export default Banner