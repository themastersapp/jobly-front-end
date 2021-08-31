import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class PopoutCard extends React.Component {



    render() {

        return (
            <>
                <Modal style={{}} show={this.props.showModal}>
                    <Modal.Header>
                        <Modal.Title>{this.props.popItem.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <ListGroup>

                            <ListGroup.Item>{this.props.popItem.description}</ListGroup.Item>
                            <ListGroup.Item>{this.props.popItem.company_name}</ListGroup.Item>
                            <ListGroup.Item>{this.props.popItem.via}</ListGroup.Item>
                            <ListGroup.Item>{this.props.popItem.post_date}</ListGroup.Item>

                        </ListGroup>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>



        )
    }



}

export default PopoutCard;

