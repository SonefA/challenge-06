import React from "react";

import "./NavbarDefault.scss";

import profilePicture from "../../Img/Dashboard/navbar_top/Group_15.png";
import { Button, Form, FormControl, NavDropdown } from "react-bootstrap";

export const NavbarDefault = () => {
  return (
    <>
      <nav>
        <div className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <ul>
          <li>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </li>
          <li className="profile-picture">
            <a href="http://localhost:3000/"><img src={profilePicture} alt="#"></img></a>
          </li>
          <li className="profile-name">
            <NavDropdown title="Unis Badri" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="http://localhost:3000/">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </nav>
    </>
  );
};
