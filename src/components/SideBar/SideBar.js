import React from 'react';
import './sideBar.css';
import Menu from '../Menu/Menu';

const SideBar = (props) => {
  const menuItems = [
    {text: 'main', url: 'http://localhost:3000/'},
    {text: 'github', url: 'http://github.com/'},
    {text: 'chsbc', url: 'http://csbc.edu.ua/'},
  ]
  return (
    <aside className="sidebar">
      <h2 className="title">{props.title}</h2>
      <Menu list={menuItems} style_menuItem={"incolumn"} />
    </aside>
  );
};

export default SideBar;