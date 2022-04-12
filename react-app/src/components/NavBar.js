
import React from 'react';
import { Button, Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  return (
    <Navbar expand="md" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="/">
        <img
          alt=""
          src="/./../logo-dark.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        <strong>step</strong>solution</Navbar.Brand>
        {/* <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li> */}
        <Nav className="justify-content-end">
          <NavLink to='/sign-up' exact={true}>
            <Button variant="light">
             Sign Up
            </Button>
          </NavLink>
          <NavLink to='/login' exact={true}>
            <Button variant="dark" type='submit'>
              login
            </Button>
          </NavLink>
          
          {/* <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink> */}
        </Nav>

      </Container>
    </Navbar>
  );
}

export default NavBar;

// import React, { Component } from "react";
// import {
//   MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
//   MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
// } from "mdbreact";
// import { BrowserRouter as Router } from 'react-router-dom';


// class NavBar extends Component {
// state = {
//   isOpen: false
// };

// toggleCollapse = () => {
//   this.setState({ isOpen: !this.state.isOpen });
// }

// render() {
//   return (
//     <Router>
//       <MDBNavbar color="indigo" dark expand="md">
//         <MDBNavbarBrand>
//           <strong className="white-text">stepsolution</strong>
//         </MDBNavbarBrand>
//         <MDBNavbarToggler onClick={this.toggleCollapse} />
//         <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
//           <MDBNavbarNav left>
//             <MDBNavItem active>
//               <MDBNavLink to="/">Home</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="/sign-up">Sign Up</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="/users">Users</MDBNavLink>
//             </MDBNavItem>
//           </MDBNavbarNav>
//           <MDBNavbarNav right>
//             <MDBNavItem>
//               <MDBFormInline waves>
//                 <MDBNavItem>
//                    <MDBNavLink to="/login">log in</MDBNavLink>
//                 </MDBNavItem>
//               </MDBFormInline>
//             </MDBNavItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBNavbar>
//     </Router>
//     );
//   }
// }

// export default NavBar;