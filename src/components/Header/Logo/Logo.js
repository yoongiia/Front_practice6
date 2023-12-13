import React from 'react';
import './Logo.css'

const Logo = (props) => {
    return (
        <div>
            <a  href="http:localhost:3000"><img className='logo' src={props.src} alt="logo" /></a>
        </div>
    );
}

export default Logo;
