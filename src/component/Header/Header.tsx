import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import './Header.scss';
export default function Header() {
    return (

        <Navbar className="navBar" collapseOnSelect expand="lg" variant="dark">
            {/* <nav className="navbar navbar-dark bg-dark"> */}

            {/* </nav> */}
            <Navbar.Brand href=""><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/65/Black-logo-ghd.jpg" alt="logo"></img></Navbar.Brand>
          
           
                <Nav className="mr-auto">
                    <Nav.Link href="" className="heading">Advanced Analytics</Nav.Link>
                </Nav>
              
                <a className="header-elements" href="/">Home</a>
                <a className="header-elements" rel="noreferrer" href="https://nimbusdocs.azurewebsites.net" target="_blank">Nimbus Docs</a>
                <a className="header-elements" rel="noreferrer" href="https://ghdnet.sharepoint.com/teams/DT-NA-Digital-Intelligence/knowledge-center/SitePages/Home.aspx" target="_blank">Blogs</a>
                <a  className="header-elements" rel="noreferrer" href="/about">About</a>
                <a className="header-elements" href="/othertools">Other Tools</a>
                <a className="header-elements" href="/contactus">Contact Us</a>

           
        </Navbar>

    )
}
