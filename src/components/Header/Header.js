import React from 'react';
import './Header.css';

const Header = () => {
    
    return (
        
        <div className="header">

            <img src={require("../../assets/logo.png")} alt="Mobeye Logo" className="mobeye" />
            
            <img src={require("../../assets/micromania.png")} alt="Micromania Logo" />
            
        </div>
          
    )
}

export default Header;