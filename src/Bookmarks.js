import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopoutCard from './PopoutCard';
import './style.css'

class Bookmarks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            popupCard: {},
            popItem: {},
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

    bookmarkHandler = async (item) => {
        await this.props.bookmarkHandler(item);

    }

    render() {

        return (
            <>
                <Row xs={1} md={2} className="g-4">
                    {this.props.bookmarkedJobs.map((item, index) => {
                        if (item.bookmark === true) {
                            return (
                                <Col key={index}>
                                    <Card className="bookmarkCards" style={{ width: '56rem' }}>
                                        <Button variant="Light" className={item.bookmark ? "bookMarkButtonActive" : "bookMarkButtonInactive"} onClick={() => {
                                            if (item.bookmark === false) {
                                                item.bookmark = true;
                                            } else {
                                                item.bookmark = false;
                                            }
                                            this.bookmarkHandler(item);
                                        }}> <FontAwesomeIcon className={item.bookmark ? "bookMarkIconActive" : "bookMarkIconInctive"} icon={faTrash} />
                                        </Button>

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
                                    </Card>
                                </Col>
                            )
                        }
                    })}

                </Row>

                <PopoutCard handleClose={this.handleClose} showModal={this.state.showModal} popItem={this.state.popItem}/>
            </>
        )
    }
}

export default Bookmarks;