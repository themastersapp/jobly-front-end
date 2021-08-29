import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from "@auth0/auth0-react";
import LogoutButton from './logoutbutton';
import LoginButton from './loginbutton'
import { Card } from 'react-bootstrap';


class Header extends React.Component {
  render() {
    return (
      // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      //   <Navbar.Brand>My Favorite Books</Navbar.Brand>
      //   <Link to="/">Home</Link>
      //   <Link to="/profile">Profile</Link>
      //   <Link to="/bookmarks">Bookmarks</Link>

      //   {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
      //   {(this.props.auth0.isAuthenticated) ? <LogoutButton/>:<LoginButton/>}
      // </Navbar>
      <>

        <div className="header">

          {/* <!--Content before waves--> */}
          <div className="inner-header flex">
            {/* <!--Just the logo.. Don't mind this--> */}
            <div className="logContaner">
              <Card.Img variant="top" style={{ width: '130px', height: '100px' }} src="https://cdn.discordapp.com/attachments/880434007140085811/881454520499077120/LogoTie.png" />

            </div>
            {/* <img src={}/> */}
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/bookmarks">Bookmarks</Link>
            <Link to="/applications">Applications</Link>

            <div className="fill">
              {(this.props.auth0.isAuthenticated) ? <LogoutButton /> : <LoginButton />}
            </div>
          </div>

          {/* <!--Waves Container--> */}
          <div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />

              </g>
            </svg>
          </div>
          {/* <!--Waves end--> */}

        </div>
        {/* <!--Header ends--> */}

        {/* <!--Content starts--> */}
        <div className="content flex">
          {/* <p>Daniel Österman | 2019 | Free to use
  | CREDIT TO GOODKATZ</p> */}
        </div>
        {/* <!--Content ends--> */}
      </>
    );
  }
}

export default withAuth0(Header);
