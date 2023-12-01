import React, { useEffect, useState } from 'react';
import '../styles/InternetConnection.css';

const InternetConnection = () => {

    const [isConnected, setIsCOnnected] = useState(navigator.onLine);

    useEffect(() => {
        const interval = setInterval(() => {
          setIsCOnnected(navigator.onLine);
        }, 5000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    return !isConnected
    ?   <div id='InternetConnection'>
            <p>En este momento no tienes conexión a internet</p>
        </div>
    :   <></>
}

export default InternetConnection