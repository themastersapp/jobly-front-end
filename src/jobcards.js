import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PopoutCard from './PopoutCard';
import ApplicationModal from './ApplicationModal';
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'

class JobCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            popupCard: {},
            popItem: {},
            applicationItem: {},
            showApplication: false,
        }
    }

    handleClose = () => {
        this.setState({
            showModal: false,
        })
    }
    handleShow = (item) => {
        this.setState({
            showModal: true,
            popItem: item,
        })
    }

    handleApplicationClose = () => {
        this.setState({
            showApplication: false,
        })
    }

    handleApplicationClose = () => {
        this.setState({
            showApplication: false,
        })
    }

    handleApplicationhow = (item) => {
        this.props.extractApplication(item);
        this.setState({
            showApplication: true,
            applicationItem: item,
        })
    }

    render() {
        console.log(this.state);
        return (
            <>
                <Row xs={1} md={3} className="g-4">
                    {this.props.JobResults.map((item, index) => {
                        this.props.bookmarkedJobs.map(element => {
                            if (item.title === element.title) {
                                item.bookmark = element.bookmark
                            }
                        })
                        return (
                            <Col className="jobCardsCol" key={index}>
                                <Card style={{ width: '28rem' }} id="jobCardsShadow" className="card card-custom bg-white border-white border-0">


                                    <div className="card-custom-img">
                                        <Card.Img className="card-custom-img"  variant="top" src="https://thumbs.gfycat.com/AdorableLonelyKilldeer-size_restricted.gif" />
                                    </div>

                                    <div className="card-custom-avatar">
                                        {!item.bookmark &&
                                            <button className={item.bookmark ? "bookMarkButtonActive img-fluid" : "bookMarkButtonInactive img-fluid"} onClick={() => {
                                                if (item.bookmark === false) {
                                                    item.bookmark = true;
                                                } else {
                                                    item.bookmark = false;
                                                }
                                                this.props.bookmarkHandler(item);
                                            }}>
                                                <FontAwesomeIcon className={item.bookmark ? "bookMarkIconActive" : "bookMarkIconInctive"} icon={faBookmark} /> </button>}
                                    </div>

                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>

                                        <Card.Text>
                                            <ListGroup>

                                                <ListGroup.Item>{item.description.split(' ').splice(0, 20).join(' ')}

                                                    ..
                                                    <button variant="Light" size="sm" onClick={() => { this.handleShow(item) }} className="popupCard">
                                                        Read More
                                                    </button>{' '}

                                                </ListGroup.Item>
                                                <ListGroup.Item>{item.company_name}</ListGroup.Item>
                                                <ListGroup.Item>{item.via}</ListGroup.Item>
                                                <ListGroup.Item>{item.post_date}</ListGroup.Item>

                                            </ListGroup>
                                        </Card.Text>
                                    </Card.Body>
                                    <Button id="applyButton" variant="primary" onClick={() => {
                                        this.handleApplicationhow(item);
                                    }}>Apply</Button>
                                </Card>
                            </Col>
                        )

                    })}

                </Row>

                <PopoutCard handleClose={this.handleClose} showModal={this.state.showModal} popItem={this.state.popItem} />
                <ApplicationModal retrieveProfile={this.props.retrieveProfile} handleApplicationClose={this.handleApplicationClose} showApplication={this.state.showApplication} applicationItem={this.state.applicationItem} applicationHandler={this.props.applicationHandler} />

            </>
        )
    }
}

export default JobCards;