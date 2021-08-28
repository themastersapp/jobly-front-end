import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'

class JobCards extends React.Component {

    render() {

        return (
            <>
                <Row xs={1} md={4} className="g-4">
                    {this.props.JobResults.map(item => {
                        return (
                            <Col>
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

                                                <ListGroup.Item>{item.description.split(' ').splice(0, 20).join(' ')}  ..Read More</ListGroup.Item>
                                                <ListGroup.Item>{item.company_name}</ListGroup.Item>
                                                <ListGroup.Item>{item.via}</ListGroup.Item>
                                                <ListGroup.Item>{item.post_date}</ListGroup.Item>

                                            </ListGroup>
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => {
                                            if (item.bookmark === false) {
                                                item.bookmark = true;
                                            } else {
                                                item.bookmark = false;
                                            }
                                            this.props.bookmarkHandler(item);
                                        }}>Bookmark</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )

                    })}

                </Row>


            </>
        )
    }
}

export default JobCards;