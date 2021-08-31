import React from 'react';
import { Modal, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";
import './style.css';

class ApplicationModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            showFeedback: false,
            showSpinner: false,
        }
    }


    applicationHandler = async (event) => {
        event.preventDefault();

        this.props.applicationHandler(event);

        await this.setState({
            showSpinner: true,
          });
       
      
      
          setTimeout(async () => {
          await this.setState({
            showSpinner: false,
            showFeedback: true,
          });
        }, 1500);
      
      
          setTimeout(async () => {
      
            await this.setState({
              showFeedback: false,
            });
            this.props.handleApplicationClose();

          }, 3000);

          

    }

    render() {

        const { user, isAuthenticated } = this.props.auth0;

        return (

            isAuthenticated && (
                < Modal className = "applicationModal" show={this.props.showApplication} >
                    <Modal.Header>
                        <Modal.Title>Apply for {this.props.applicationItem.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form className="applicationForm" onSubmit={this.applicationHandler}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className = "applicationFormLabels">Name</Form.Label>
                                <Form.Control type="text" defaultValue={user.name} name="userName" required disabled />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className = "applicationFormLabels">E-mail</Form.Label>
                                <Form.Control type="text" defaultValue={user.email} name="userEmail" required disabled />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className = "applicationFormLabels">Phone Number</Form.Label>
                                <Form.Control type="number" name="userPhone" required defaultValue={this.props.retrieveProfile[0].phoneNumber} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className = "applicationFormLabels">Address</Form.Label>
                                <Form.Control type="text" name="address" required defaultValue={this.props.retrieveProfile[0].address} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className = "applicationFormLabels">Major</Form.Label>
                                <Form.Control type="text" name="major" required defaultValue={this.props.retrieveProfile[0].major} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className = "applicationFormLabels">Bio</Form.Label>
                                <Form.Control as="textarea" rows={3} name="bio" required defaultValue={this.props.retrieveProfile[0].bio} />
                            </Form.Group>

                            <Button variant="primary" type="submit" >
                                Send Application
                            </Button>
                            {this.state.showSpinner &&
                                <Spinner className="applicationAlert" animation="border" variant="primary" />
                            }
                            {this.state.showFeedback &&
                                <Alert className="applicationAlert" variant='success'>
                                    Application sent successfully!
                                </Alert>
                            }
                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleApplicationClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal >
            )
        )


    }


}

export default withAuth0(ApplicationModal);