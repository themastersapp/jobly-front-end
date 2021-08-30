import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class UpdateForm extends Component {

    render() {
        return (
      <div>
        <Form onSubmit={this.props.submittProfileData}>
            <Form.Group className="mb-3" controlId="formBasicPhone Number">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone Number" name='phoneNumber'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" name='address'/>
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
                <Form.Control type="text" placeholder="Experience" name='experience'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBio">
                <Form.Label>Bio</Form.Label>
                <Form.Control type="text" placeholder="Bio" name='bio'/>
            </Form.Group>
           
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </div>
    );
  }
}

export default UpdateForm;
