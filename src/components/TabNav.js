import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';
import styled from 'styled-components';
import "../index.css";
// TODO: Add missing menu/tabs/nav below



export default function TabNav() {
    return (
        <div>
          <Nav card="true" justified="true" fill="true">
            <NavItem>
              <NavLink exact to="/characters" activeClassName="activeNavButton transform transform-active" className="navButton">Characters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/locations" activeClassName="activeNavButton" className="navButton">Locations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/episodes" activeClassName="activeNavButton" className="navButton">Episodes</NavLink>
            </NavItem>
          </Nav>
          <hr />
        </div>
      );
};


