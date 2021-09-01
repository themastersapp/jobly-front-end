import React, { Component } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import './style.css';
import { Redirect } from "react-router-dom";

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFeedback: false,
      showSpinner: false,
      redirect: false,
    }
  }


  formUpdateFeedback = async (event) => {
    event.preventDefault()


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
        redirect: true,
      });
      this.props.submittProfileData(event);

    }, 5000);


  }



  render() {
    const { user } = this.props.auth0;
    // console.log(this.props.retrieveProfile);
    if (this.props.retrieveProfile.length > 0) {
      return (
        <div>
          <Form onSubmit={this.formUpdateFeedback} className="profileForm">

            <Form.Group className="mb-3" controlId="formBasicPhone Number">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={user.name} name='userName' readOnly disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone Number">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="text" value={user.email} name='email' readOnly disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone Number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter Phone Number" name='phoneNumber' defaultValue={this.props.retrieveProfile[0].phoneNumber} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" name='address' defaultValue={this.props.retrieveProfile[0].address} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMajor">
              <Form.Label>Major</Form.Label>
              <Form.Control type="text" placeholder="Major" name='major' defaultValue={this.props.retrieveProfile[0].major} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSkills">
              <Form.Label>Skills</Form.Label>
              <Form.Control type="text" placeholder="Skills" name='skills' defaultValue={this.props.retrieveProfile[0].skills} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control className="formTextArea" as="textarea" placeholder="Experience" name='experience' defaultValue={this.props.retrieveProfile[0].experience} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBio">
              <Form.Label>Bio</Form.Label>
              <Form.Control className="formTextArea" as="textarea" placeholder="Bio" name='bio' defaultValue={this.props.retrieveProfile[0].bio} required />
            </Form.Group>

            <Button className="profileFormButton" variant="primary" type="submit" >
              Update
            </Button>
            {this.state.showSpinner &&
              <Spinner className="profileAlert" animation="border" variant="primary" />
            }
            {this.state.showFeedback &&
              <Alert className="profileAlert" variant='success'>
                Profile information updated successfully! You will be redirected shortly.
              </Alert>
            }
            {this.state.redirect && (
              <Redirect push to = "/"></Redirect>
            )

            }
          </Form>
        </div>

      )

    } else {
      return (
        <div>
          <Alert variant='primary'>
            Please fill-in your information to finish your sign-up process!
          </Alert>
          <Form onSubmit={this.formUpdateFeedback} className="profileForm">

            <Form.Group className="mb-3" controlId="formBasicPhone Number">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={user.name} name='userName' readOnly disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone Number">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="text" value={user.email} name='email' readOnly disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone Number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter Phone Number" name='phoneNumber' required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" name='address' required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMajor">
              <Form.Label>Major</Form.Label>
              <Form.Control type="text" placeholder="Major" name='major' required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSkills">
              <Form.Label>Skills</Form.Label>
              <Form.Control type="text" placeholder="Skills" name='skills' required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control className="formTextArea" as="textarea" placeholder="Experience" name='experience' required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBio">
              <Form.Label>Bio</Form.Label>
              <Form.Control className="formTextArea" as="textarea" placeholder="Bio" name='bio' required />
            </Form.Group>

            <Button className="profileFormButton" variant="primary" type="submit">
              Submit
            </Button>
            {this.state.showSpinner &&
              <Spinner className="profileAlert" animation="border" variant="primary" />
            }
            {this.state.showFeedback &&
              <Alert className="profileAlert" variant='success'>
                Profile was successfully created! You will be redirected shortly.
              </Alert>
            }
          </Form>
        </div>

      )

    }



  }
}

export default withAuth0(UpdateForm);