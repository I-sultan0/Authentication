import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.navItems}>
        <ul>
          <li>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/google"
            >
              Google
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/email"
            >
              Email
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
