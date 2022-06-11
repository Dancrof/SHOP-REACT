import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';

import LOGO from '../../assets/header/logo.png'

function Page({setActiveMenu, setHandleActiveMenu}) {
  return (
    <header>
        <nav className="wrapper">
            <div className="logo" title="Ir a Pagina Principal">
                <img src={LOGO} alt=""/>
                <a href="index.html">AbarrotMom</a>
            </div>
            <ul className="menu" ref={setActiveMenu}>
                <li><a href="#esmeSocial" className="opmenu">Compoentes Plasticos</a></li>
                <li><a href="#emePolitico" className="opmenu">Frutas</a></li>
                <li><a href="#esmeCultural" className="opmenu">Tegnologia</a></li>                
            </ul>
            <i className="fas fa-bars iconMenu" onClick={setHandleActiveMenu} />
        </nav>
    </header>
  )
}

export default Page