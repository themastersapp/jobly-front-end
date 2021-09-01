import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

class Carousels extends React.Component {
    render() {
        return (
            <div className="contanerCoursel">
                <Carousel className='myCarousel' style={{}}>
                    <Carousel.Item interval={1000}>
                        <img
                            height="630px"
                            // width="800"
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1561489422-45de3d015e3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 style={{backgroundColor:"rgba(255,255,255,0.5)",color:"black",fontWeight:"bold",fontSize:"32px"}}>The right place to find the right Job</h3>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            height="630px"
                            // width="800"
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 style={{backgroundColor:"rgba(255,255,255,0.5)",color:"black",fontWeight:"bold",fontSize:"32px"}}>Kickstart your professional career</h3>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="630px"
                            // width="800"
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1488998527040-85054a85150e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 style={{backgroundColor:"rgba(255,255,255,0.5)",color:"rgba(0,0,0,0.9)",fontWeight:"bold",fontSize:"32px"}}>Optimized job search made easier</h3>
                            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Carousels;