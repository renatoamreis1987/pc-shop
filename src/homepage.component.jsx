import React, { Component } from "react";

import './homepage.styles.scss'

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Componentes</h1>
          <span className="subtitle">COMPRAR</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Ordenadores</h1>
          <span className="subtitle">COMPRAR</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Smartphones</h1>
          <span className="subtitle">COMPRAR</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Periféricos</h1>
          <span className="subtitle">COMPRAR</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Televisores</h1>
          <span className="subtitle">COMPRAR</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
