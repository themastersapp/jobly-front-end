import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import './style.css';

class UpdateForm extends Component {

  render() {
    console.log(this.props.retrieveProfile);
    if (this.props.retrieveProfile.length > 0) {
      return (
        <div>
          <Form onSubmit={this.props.submittProfileData} className="profileForm">
            <Form.Group className="mb-3" controlId="formBasicPhone Number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter Phone Number" name='phoneNumber' defaultValue={this.props.retrieveProfile[0].phoneNumber} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" name='address' defaultValue={this.props.retrieveProfile[0].address} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMajor">
              <Form.Label>Major</Form.Label>
              <Form.Control type="text" placeholder="Major" name='major' defaultValue={this.props.retrieveProfile[0].major} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSkills">
              <Form.Label>Skills</Form.Label>
              <Form.Control type="text" placeholder="Skills" name='skills' defaultValue={this.props.retrieveProfile[0].skills} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control type="text" placeholder="Experience" name='experience' defaultValue={this.props.retrieveProfile[0].experience} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBio">
              <Form.Label>Bio</Form.Label>
              <Form.Control type="text" placeholder="Bio" name='bio' defaultValue={this.props.retrieveProfile[0].bio} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </div>

      )

    } else {
      return (
        <div>
          <Alert variant='primary'>
            Please fill-in your preferences to get started!
          </Alert>
          <Form onSubmit={this.props.submittProfileData} className="profileForm">
            <Form.Group className="mb-3" controlId="formBasicPhone Number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter Phone Number" name='phoneNumber' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" name='address' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMajor">
              <Form.Label>Major</Form.Label>
              <Form.Control type="text" placeholder="Major" name='major' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSkills">
              <Form.Label>Skills</Form.Label>
              <Form.Control type="text" placeholder="Skills" name='skills' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control type="text" placeholder="Experience" name='experience' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBio">
              <Form.Label>Bio</Form.Label>
              <Form.Control type="text" placeholder="Bio" name='bio' />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

      )

    }



  }
}

export default UpdateForm;
