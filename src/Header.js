import React, { Component } from 'react';

const Header = props => {
     return(
          <header className="header">
               <h1>
                   {props.titulo}
               </h1>
          </header>
     )
}
export default Header;