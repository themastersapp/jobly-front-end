import React from 'react';
import axios from 'axios';
import { Modal, Form, Button } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";

class ApplicationModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,

        }
    }

    onFileChange = event => {

        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
        console.log(this.state);
    };

    // On file upload (click the upload button)
    onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(this.state.selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>

                    <p>File Name: {this.state.selectedFile.name}</p>


                    <p>File Type: {this.state.selectedFile.type}</p>


                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };



    // onClick={this.props.handleApplicationClose}
    applicationHandler =  (event) => {

         this.props.applicationHandler(event);
         this.props.handleApplicationClose();

    }

    render() {

        const { user, isAuthenticated } = this.props.auth0;

        return (

            // <div>
            //     <h1>
            //         GeeksforGeeks
            //     </h1>
            //     <h3>
            //         File Upload using React!
            //     </h3>
            //     <div>
            //         <input type="file" onChange={this.onFileChange} />
            //         <button onClick={this.onFileUpload}>
            //             Upload!
            //         </button>
            //     </div>
            //     {this.fileData()}
            // </div>

            isAuthenticated && (
                < Modal show={this.props.showApplication} >
                    <Modal.Header>
                        <Modal.Title>Apply for {this.props.applicationItem.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit = {this.applicationHandler}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" defaultValue={user.name} name="userName" required disabled />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="text" defaultValue={user.email} name="userEmail" required disabled />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="number" name="userPhone" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Major</Form.Label>
                                <Form.Control type="text" name="major" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Bio</Form.Label>
                                <Form.Control as="textarea" rows={3} name="bio" required />
                            </Form.Group>

                            <Button variant="primary" type="submit" >
                                Send Application
                            </Button>
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