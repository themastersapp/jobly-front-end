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
                <Row xs={1} md={4} className="g-4">
                    {this.props.JobResults.map((item, index) => {
                        return (
                            <Col key={index}>
                                <Card style={{ width: '18rem' }}>
                                    {!item.bookmark &&
                                        <Button variant="Light" className={item.bookmark ? "bookMarkButtonActive" : "bookMarkButtonInactive"} onClick={() => {
                                            if (item.bookmark === false) {
                                                item.bookmark = true;
                                            } else {
                                                item.bookmark = false;
                                            }
                                            this.props.bookmarkHandler(item);
                                        }}>
                                            <FontAwesomeIcon className={item.bookmark ? "bookMarkIconActive" : "bookMarkIconInctive"} icon={faBookmark} /> </Button>}

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
                                        <Button variant="primary" onClick={() => {
                                            this.handleApplicationhow(item);
                                        }}>Apply</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )

                    })}

                </Row>

                <PopoutCard handleClose={this.handleClose} showModal={this.state.showModal} popItem={this.state.popItem} />
                <ApplicationModal handleApplicationClose={this.handleApplicationClose} showApplication={this.state.showApplication} applicationItem={this.state.applicationItem} applicationHandler={this.props.applicationHandler} />

            </>
        )
    }
}

export default JobCards;