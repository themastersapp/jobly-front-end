import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

class Carousels extends React.Component {
    render() {
        return (
            <>
                <Carousel className='myCarousel'>
                    <Carousel.Item interval={1000}>
                        <img
                            height="600"
                            width="800"
                            className="d-block w-100"
                            src="https://iaa-network.com/wp-content/uploads/2021/02/Job-openings.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                             height="600"
                            width="800"
                            className="d-block w-100"
                            src="https://iaa-network.com/wp-content/uploads/2021/02/Job-openings.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="600"
                            width="800"
                            className="d-block w-100"
                            src="https://iaa-network.com/wp-content/uploads/2021/02/Job-openings.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}

export default Carousels;