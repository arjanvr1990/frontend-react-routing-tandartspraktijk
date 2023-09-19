import React from 'react';
import './Navigation.css';
import {Link, NavLink} from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/"><h4>De Tandenborstel</h4></Link>

        <ul>

          <li>
            <NavLink
                className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                to="/">
                 Home
            </NavLink>
          </li>

          <li>
            <NavLink
                className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                to="/cavities">
                Gaatjes
            </NavLink>
          </li>

          <li>
            <NavLink
                className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                to="/appointments">
                Afspraak maken
            </NavLink>
          </li>

          <li>
            <NavLink
                className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                to="whitening">
                bleken
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navigation;