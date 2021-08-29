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
{/* <Carousel fade className="corousalCont">
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/africanamerican-man-browsing-work-online-using-job-search-computer-picture-id918365088?k=20&m=918365088&s=612x612&w=0&h=KUojGu6HCCFUi7HiYRkaaQ0iIOFd724sLwwmGyYam_E="
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://cdn.aarp.net/content/dam/aarp/work/job_hunting/2015_06/1140-job-seach-online-tools-reseach-employment.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://static.jobscan.co/blog/uploads/Job-Search-Image-600x318.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       */}
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
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
