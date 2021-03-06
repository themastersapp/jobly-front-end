import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from "@auth0/auth0-react";
import LogoutButton from './logoutbutton';
import LoginButton from './loginbutton'
import { Card } from 'react-bootstrap';


class Header extends React.Component {
  render() {
    return (


      <>

        <div className="header">

          {/* <!--Content before waves--> */}
          <div className="inner-header flex">
            {/* <!--Just the logo.. Don't mind this--> */}
            <div className="logContaner">

            </div >


            <Card.Img variant="top" style={{ width: '100px', height: '100px' }} src="https://cdn.discordapp.com/attachments/880434007140085811/881454520499077120/LogoTie.png" />
            <Link className="linkContaner" to="/"> <p className='headerLinks'> Home</p> </Link>
            <Link className="linkContaner" to="/profile"> <p className='headerLinks'>Profile</p></Link>
            <Link className="linkContaner" to="/bookmarks"> <p className='headerLinks'>Bookmarks</p></Link>
            <Link className="linkContaner" to="/applications"> <p className='headerLinks'>Applications</p></Link>
            <Link className="linkContaner" to="/AboutUs"> <p className='headerLinks'>About Us</p></Link>


            <div className="fill">
              {(this.props.auth0.isAuthenticated) ? <LogoutButton /> : <LoginButton />}
            </div>
          </div>

          {/* <!--Waves Container--> */}
          <div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentleWave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentleWave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentleWave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentleWave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentleWave" x="48" y="7" fill="#fff" />

              </g>
            </svg>
          </div>
          {/* <!--Waves end--> */}

        </div>
        {/* <!--Header ends--> */}

        {/* <!--Content starts--> */}
        {/* <div className="content flex"> </div> */}
        {/* <p>Daniel ??sterman | 2019 | Free to use
  | CREDIT TO GOODKATZ</p> */}

        {/* <!--Content ends--> */}
      </>
    );
  }
}

export default withAuth0(Header);