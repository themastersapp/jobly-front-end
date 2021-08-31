import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './loginbutton'
import Carousel from 'react-bootstrap/Carousel'

class Login extends React.Component {
  render() {
    return(
      <div >
{ <Carousel fade className="corousalCont">
  <Carousel.Item interval={1500}>
    <img 
      className="d-block w-100"
      height='910px'
      width='1000px'
      src="https://images-ext-2.discordapp.net/external/fSukZweKce7UiqTEc5yrjVJmzTf4G0fcGa2tITNz4Dg/https/as1.ftcdn.net/v2/jpg/02/42/82/98/1000_F_242829844_TMmbiUSjDKvqbbLx2CI8dMEpyKihlb34.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      height='910px'
      width='1000px'
      className="d-block w-100"
      src="https://images-ext-2.discordapp.net/external/BA_JlpU-lMu2v3ycXCZmSLbSHerJvarnRx2-nCbkkME/https/as2.ftcdn.net/v2/jpg/03/82/72/29/1000_F_382722975_VgqVFhZvhUcOExL802Hfnc9AUOBp41nP.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      height='910px'
      width='1000px'
      className="d-block w-100"
      src="https://images-ext-2.discordapp.net/external/oVdcPs2Us2oHgA70V3jEirEGXuwpinjNBS4tPP1fnp4/https/as2.ftcdn.net/v2/jpg/01/74/58/51/1000_F_174585157_xnVNilsOACSyWOxaJV8FlyKTS5nEpf6d.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       }





      <Card className="MyCard" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text style={{fontSize:'30px',fontWeight:'bolder'}}>
            Click Below to Log In
          </Card.Text>
          {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
          <LoginButton/>
        </Card.Body>
      </Card>
      </div>
    )
  }
}

export default Login;
