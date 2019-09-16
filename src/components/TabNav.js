import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
    return (
        <div>
          <Nav>
            <NavItem>
              <NavLink exact to="/characters" activeClassName="activeNavButton">Characters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/locations" activeClassName="activeNavButton">Locations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/episodes" activeClassName="activeNavButton">Episodes</NavLink>
            </NavItem>
          </Nav>
          <hr />
        </div>
      );
};


// <NavLink exact to="/" activeClassName="activeNavButton">Home</NavLink>
