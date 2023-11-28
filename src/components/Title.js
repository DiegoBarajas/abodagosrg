import React from 'react';
import '../styles/Title.css';

const Title = ({children, style = {}}) => {
  return (
    <section style={style} className='title-container'>
        <h2>{children}</h2>
    </section>
  )
}

export default Title