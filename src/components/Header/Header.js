import React from 'react';
import './header.css';
import DateTime from '../DataTime/DateTime';
import Logo from './Logo/Logo';
import logo from '../../assets/logo.png'


const Header = (props) => {
  const { title } = props;
  return (
    <header className="header">
      <Logo src = {logo}/>
      <p>{title}</p>
      <DateTime/>
    </header>
  );
};

export default Header;