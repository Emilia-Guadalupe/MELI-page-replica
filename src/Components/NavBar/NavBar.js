import React from 'react';
import './navBarStyles.css';

//Images
import LogoMELI from './Logos/logo.png';
import LogoDisney from './Logos/640px-Disney+_logo.svg.png';
import LogoSearch from './Logos/pngwing.com.png';
import MapMarkerIcon from './Logos/map-marker-icon.png';
import UserIcon from './Logos/user_icon.png';
import BellIcon from './Logos/bell_icon.png';
import CartIcon from './Logos/cart_icon.png';

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
                <div className="second_nav_row">
                    <div className="address_container">
                        <img className="map_marker_icon" src={MapMarkerIcon} alt="Map Marker Icon" />
                        <div className="address-data">
                            <p className="address_text" id="first_address">Enviar a Fake Name</p>
                            <p className="address_text" id="second_address">Raúl Scalabrini Or...</p>
                        </div>
                    </div>
                    <div className="options_row">
                        <p className="option_category">Categorías</p>
                        <p className="option_category">Ofertas</p>
                        <p className="option_category">Historial</p>
                        <p className="option_category">Supermercado</p>
                        <p className="option_category">Moda</p>
                        <p className="option_category">Vender</p>
                        <p className="option_category">Ayuda</p>
                    </div>
                    <div className="profile-options">
                        <div className="profile_section">
                            <img className="icon_element" src={UserIcon} alt="user icon"/>
                            <p>Fake Name</p>
                        </div>
                        <p className="profile_text">Mis Compras</p>
                        <p className="profile_text">Favoritos</p>
                        <img className="icon_element"  src={BellIcon} alt="bell icon" />
                        <img className="icon_element" src={CartIcon} alt="cart icon" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
