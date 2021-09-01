import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopoutCard from './PopoutCard';
import ApplicationModal from './ApplicationModal';

import './style.css'

class Bookmarks extends React.Component {
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

    bookmarkHandler = async (item) => {
        await this.props.bookmarkHandler(item);

    }

    handleApplicationhow = (item) => {
        this.props.extractApplication(item);
        this.setState({
            showApplication: true,
            applicationItem: item,
        })
    }

    render() {
        if (this.props.bookmarkedJobs.length === 0) {
            return (
                <>
                    <h2 className="pageTitle">Bookmarks</h2>
                    <Alert style={{marginBottom:'10%'}} className="emptyAlert" variant='primary'>
                        Your bookmarks page is empty.
                    </Alert>
                </>
            )
        } else
            return (

                <>
                    <h2 className="pageTitle">Bookmarks</h2>

                    <Row xs={1} md={3} className="g-4">
                        {this.props.bookmarkedJobs.map((item, index) => {
                            if (item.bookmark === true) {
                                return (
                                    <Col key={index} className="jobCardsCol">
                                        <Card className="bookmarkCards" id="jobCardsShadow" style={{ width: '28rem' }}>

                                            <div className="card-custom-img">
                                                <Card.Img className="card-custom-img" variant="top" src="https://thumbs.gfycat.com/AdorableLonelyKilldeer-size_restricted.gif" />
                                            </div>

                                            <div className="card-custom-avatar">
                                                <button className={item.bookmark ? "bookMarkButtonActive" : "bookMarkButtonInactive"} onClick={() => {
                                                    if (item.bookmark === false) {
                                                        item.bookmark = true;
                                                    } else {
                                                        item.bookmark = false;
                                                    }
                                                    this.bookmarkHandler(item);
                                                }}> <FontAwesomeIcon className={item.bookmark ? "bookMarkIconActive" : "bookMarkIconInctive"} icon={faTrash} />
                                                </button>
                                            </div>


                                            <Card.Body>

                                                <Card.Title>{item.title}</Card.Title>

                                                <Card.Text>
                                                    <ListGroup>

                                                        <ListGroup.Item>{item.description.split(' ').splice(0, 20).join(' ')}
                                                            <Button variant="Light" size="sm" onClick={() => { this.handleShow(item) }} className="popupCard">
                                                                ..Read More
                                                            </Button>{' '}
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
                            }
                        })}

                    </Row>

                    <PopoutCard handleClose={this.handleClose} showModal={this.state.showModal} popItem={this.state.popItem} />
                    <ApplicationModal retrieveProfile={this.props.retrieveProfile} handleApplicationClose={this.handleApplicationClose} showApplication={this.state.showApplication} applicationItem={this.state.applicationItem} applicationHandler={this.props.applicationHandler} />

                </>
            )
    }
}

export default Bookmarks;