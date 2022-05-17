import React from "react";
import "./DashboardAdmin.scss";

import { Button, Form, FormControl, NavDropdown } from "react-bootstrap";
import { Pagination } from "react-bootstrap";

import homeLogo from "../../Asset/Img/Dashboard/navbar-left/fi_home.png";
import carsLogo from "../../Asset/Img/Dashboard/navbar-left/fi_truck.png";
import navbarMenu from "../../Asset/Img/Dashboard/navbar_top/fi_menu.png";
import profileLogo from "../../Asset/Img/Dashboard/navbar_top/Group_15.png";
import arrowRight from "../../Asset/Img/Dashboard/content/Vector.png";
import rectangle9 from "../../Asset/Img/Dashboard/content/Rectangle_9.png";
import tableContent from "../../Asset/Img/Dashboard/content/Table.svg";
import rectangle62 from "../../Asset/Img/Dashboard/navbar_top/Rectangle_62.png";

export const DashboardAdmin = () => {
  return (
    <>
      <div className="container-dashboard">
      
        <div className="navbar-left">
          <div className="navbar-left-logo">
            <div className="navbar-left-logo1"></div>
          </div>

          <div className="navbar-left-home">
            {/* <div className="navbar-left-home1"></div> */}
            <div className="navbar-left-home1">
              <a href="http://localhost:3000/Dashboard">
                {" "}
                <img src={homeLogo} alt="#"></img>
              </a>
            </div>
            <p className="dashboard-text">Dashboard</p>
          </div>

          <div className="navbar-left-cars">
            {/* <div className="navbar-left-cars1"></div> */}
            <div className="navbar-left-cars1">
              <a href="http://localhost:3000/Cars">
                {" "}
                <img src={carsLogo} alt="#"></img>
              </a>
            </div>
            <p className="cars-text">Cars</p>
          </div>
        </div>

        <div className="navbar-top">
          <div className="navbar-top-logo">
            <div className="navbar-top-menu">
              <a href="http://www.google.com">
                {" "}
                <img src={navbarMenu} alt="#"></img>
              </a>
            </div>
            {/* <div className="navbar-top-logo1"></div> */}
            <div className="navbar-top-logo1">
              <a href="http://www.google.com">
                {" "}
                <img src={rectangle62} alt="#"></img>
              </a>
            </div>
          </div>

          <div className="navbar-top-right">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
              <img className="profileLogo" src={profileLogo} alt="#" />
              <NavDropdown title="Unis Badri" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="http://localhost:3000/">Logout</NavDropdown.Item>
              </NavDropdown>
            </Form>
          </div>
        </div>

        <div className="dashboard-main">
          <div className="dashboard-bar">
            <div className="dashboard-bar1">
              <h2 className="dashboard-title">DASHBOARD</h2>
              <div className="dashboard-menu">
                <a className="dashboard-menu1" href="http://www.google.com">
                  Dashboard
                </a>
              </div>
            </div>
          </div>

          <div className="dashboard-content">
            <ul>
              <li className="dashboard-link1">Dashboard</li>
              <img className="arrow-right" src={arrowRight} alt="#"></img>
              <li className="dashboard-link2">Dashboard</li>
            </ul>

            <h3 className="dashboard-content-title">Dashboard</h3>
            <div className="list-order">
              <img className="list-order1" src={rectangle9} alt="#"></img>
              <p className="list-order2">List Order</p>
            </div>

            <div className="table-content">
              <img className="table-content1" src={tableContent} alt="#"></img>
            </div>

            <div className="pagination-content">
              <Pagination className="pagination-content1">
                <Pagination.First />
                {/* <Pagination.Prev /> */}
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />

                {/* <Pagination.Item>{3}</Pagination.Item> */}
                {/* <Pagination.Item>{6}</Pagination.Item> */}
                {/* <Pagination.Item disabled>{14}</Pagination.Item> */}

                {/* <Pagination.Ellipsis /> */}
                <Pagination.Item>{9}</Pagination.Item>
                {/* <Pagination.Next /> */}
                <Pagination.Last />
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
















// import React from 'react'
// import { Pagination } from 'react-bootstrap'
// import "./DashboardAdmin.scss"

// import carsLogo from "../../Asset/Img/Dashboard/navbar-left/fi_truck.png";
// import arrowRight from "../../Asset/Img/Dashboard/content/Vector.png";
// import rectangle9 from "../../Asset/Img/Dashboard/content/Rectangle_9.png";
// import tableContent from "../../Asset/Img/Dashboard/content/Table.svg";
// import homeLogo from "../../Asset/Img/Dashboard/navbar-left/fi_home.png";
// import { NavbarDefault } from '../../Asset/Components/NavbarAdmin/NavbarDefault';

// export const DashboardAdmin = () => {
//   return (
//     <>
//         <NavbarDefault/>
//         <div className="dashboard-content">
//         <div className="navbar-left">
//           <div className="navbar-left-logo">
//             <div className="navbar-left-logo1"></div>
//           </div>

//           <div className="navbar-left-home">
//             {/* <div className="navbar-left-home1"></div> */}
//             <div className="navbar-left-home1">
//               <a href="http://localhost:3000/Dashboard">
//                 {" "}
//                 <img src={homeLogo} alt="#"></img>
//               </a>
//             </div>
//             <p className="dashboard-text">Dashboard</p>
//           </div>

//           <div className="navbar-left-cars">
//             {/* <div className="navbar-left-cars1"></div> */}
//             <div className="navbar-left-cars1">
//               <a href="http://localhost:3000/Cars">
//                 {" "}
//                 <img src={carsLogo} alt="#"></img>
//               </a>
//             </div>
//             <p className="cars-text">Cars</p>
//           </div>
//         </div>

//             <ul>
//               <li className="dashboard-link1">Dashboard</li>
//               <img className="arrow-right" src={arrowRight} alt="#"></img>
//               <li className="dashboard-link2">Dashboard</li>
//             </ul>

//             <h3 className="dashboard-content-title">Dashboard</h3>
//             <div className="list-order">
//               <img className="list-order1" src={rectangle9} alt="#"></img>
//               <p className="list-order2">List Order</p>
//             </div>

//             <div className="table-content">
//               <img className="table-content1" src={tableContent} alt="#"></img>
//             </div>

//             <div className="pagination-content">
//               <Pagination className="pagination-content1">
//                 <Pagination.First />
//                 {/* <Pagination.Prev /> */}
//                 <Pagination.Item active>{1}</Pagination.Item>
//                 <Pagination.Item>{2}</Pagination.Item>
//                 <Pagination.Item>{3}</Pagination.Item>
//                 <Pagination.Ellipsis />

//                 {/* <Pagination.Item>{3}</Pagination.Item> */}
//                 {/* <Pagination.Item>{6}</Pagination.Item> */}
//                 {/* <Pagination.Item disabled>{14}</Pagination.Item> */}

//                 {/* <Pagination.Ellipsis /> */}
//                 <Pagination.Item>{9}</Pagination.Item>
//                 {/* <Pagination.Next /> */}
//                 <Pagination.Last />
//               </Pagination>
//             </div>
//           </div>
//     </>
//   )
// }
