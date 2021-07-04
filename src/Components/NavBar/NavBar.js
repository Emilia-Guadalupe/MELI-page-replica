import React from 'react';
import './navBarStyles.css';

//Images
import LogoMELI from './logo.png';
import LogoDisney from './640px-Disney+_logo.svg.png';
import LogoSearch from './pngwing.com.png';

function NavBar(){
    return(
        <>
            <nav className="nav-container">
                <div className="first_nav_row">
                    <img className="logoMELI" src={LogoMELI} alt="Mercado Libre logo" />
                    <div className="search_container">
                        <input className="searchBar" type="text" placeholder="Buscar productos, marcas y más..." />
                        <button className="searchButton"><img className="search_icon" src={LogoSearch} alt="ícono de búsqueda" /></button>
                    </div>
                    <div className="promo_container">
                        <img className="logoDisney" src={LogoDisney} alt="Logo Disney" />
                        <p className="promo_text">Hasta 4 meses de regalo en Disney+</p>
                    </div>
                </div>
                <div>

                </div>
            </nav>
        </>
    )
}

export default NavBar;
