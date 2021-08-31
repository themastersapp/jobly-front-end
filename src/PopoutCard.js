import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

class PopoutCard extends React.Component {



    render() {

        return (
            <>
                <Modal className = "readmoreModal" show={this.props.showModal}>
                    <Modal.Header>
                        <Modal.Title className = "readmoreModalTitle">{this.props.popItem.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <ListGroup>

                            <ListGroup.Item className="readmoreModalSubTitle">Job Description</ListGroup.Item>
                            <ListGroup.Item className="readmoreModalText">{this.props.popItem.description}</ListGroup.Item>
                            <ListGroup.Item className="readmoreModalSubTitle">Company Name</ListGroup.Item>
                            <ListGroup.Item className="readmoreModalText">{this.props.popItem.company_name}</ListGroup.Item>
                            <ListGroup.Item className="readmoreModalSubTitle">VIA</ListGroup.Item>
                            <ListGroup.Item className="readmoreModalText">{this.props.popItem.via}</ListGroup.Item>
                            <ListGroup.Item className="readmoreModalSubTitle">Post Date</ListGroup.Item>
                            <ListGroup.Item className="readmoreModalText">{this.props.popItem.post_date}</ListGroup.Item>

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

