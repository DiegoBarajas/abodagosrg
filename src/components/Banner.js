import React, { useEffect, useState } from 'react';
import Banner1 from '../assets/Banner1.jpg';
import Banner2 from '../assets/Banner2.jpg';
import Banner3 from '../assets/advice.jpg';
import Banner4 from '../assets/licencia_federal.jpg';
import Compromiso from '../assets/compromiso.jpg';

import '../styles/Banner.css';

const preloadImages = (images) => {
    images.forEach(image => {
      new Image().src = image.img;
    });
};

const data = [ 
    {
        subtitle: 'Abogados',
        title: 'RG Y Asociados',
        body: '',
        img: Banner1,
        subtitleSize: 'long',
        titleSize: 'long',
        
    },{
        subtitle: 'En',
        title: 'RG Y Asociados',
        body: 'Nos guían valores fundamentales como la ética, la transparencia y el compromiso con nuestros clientes. Nos esforzamos por comprender las necesidades individuales y ofrecer un servicio legal de calidad que genere confianza y tranquilidad en cada paso del proceso.',
        img: Banner2,
        subtitleSize: 'small',
        titleSize: 'small',
    },{
        subtitle: 'Primer asesoría',
        title: 'Gratis',
        body: 'Creemos en brindar un primer acercamiento accesible y sin compromiso a nuestros clientes. Por eso, ofrecemos la primera asesoría gratuita con una duración máxima de 30 minutos. Esto nos permite comprender mejor sus necesidades y ofrecer soluciones personalizadas desde el principio.',
        img: Banner3,
    },{
        subtitle: 'Contamos con',
        title: 'Licencia Federal',
        body: 'Con la licencia federal podemos atender asuntos legales en cualquier estado de la republica.',
        img: Banner4,
        imgPosition: 'top'
    },{
        title: 'Nuestro Compromiso',
        body: 'Cada logro y éxito que hemos alcanzado proviene de nuestra dedicación a la excelencia y al servicio al cliente. Estamos comprometidos a ser su aliado legal confiable, trabajando incansablemente para proteger sus intereses y alcanzar los mejores resultados.',
        img: Compromiso, 
        imgPosition: 'center'
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

    function setIndex(newIndex){
        index = newIndex;
    }

const Banner = () => {
    
    const [ banner, setBanner ] = useState(0);

    useEffect(() => {
        interval = setInterval(() => {
            setBanner(addIndex());
            resetAnimation()
        }, 15000);

        preloadImages(data);
    
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
                setIndex(data.length-1);
            }else{
                changeBanner(banner-1);
                setIndex(banner-1);
            }

        } else if (difference < 0) {
            
            if(banner >= (data.length-1)){
                changeBanner(0);
                setIndex(0);
            }else{
                changeBanner(banner+1);
                setIndex(banner+1);
            }

        }
    };
    
    const handleNext = () => {
              
        if(banner >= (data.length-1)){
            changeBanner(0);
            setIndex(0);
        }else{
            changeBanner(banner+1);
            setIndex(banner+1);
        }
        
    };

    const handlePrev = () => {
              
        if(banner === 0){
            changeBanner(data.length-1);
            setIndex(data.length-1);
        }else{
            changeBanner(banner-1);
            setIndex(banner-1);
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
                        <img className='img-banner' src={d.img} alt={d.img} style={{ objectPosition: d.imgPosition}}/>
                        <div className='img-banner-brightness'>
                            <section className='title-banner'>
                                <h3 className={'h3-banner-'+d.subtitleSize}>{d.subtitle}</h3>
                                <h1 className={'h1-banner-'+d.titleSize}>{d.title}</h1>
                            </section>

                            <section className='banner-btns'>
                                <button className='banner-btn-prev'
                                    onClick={handlePrev}
                                ></button>
                                <button className='banner-btn-next'
                                    onClick={handleNext}
                                ></button>
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