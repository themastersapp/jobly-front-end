import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import './style.css'

class JobForm extends React.Component {
    render() {
        return (
            <>
                <Form className='myform' onSubmit={this.props.Jobresults}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='formlabels'>Job Title</Form.Label>
                        <Form.Control className="forminputs" name="jobtitle" type="text" placeholder="Find a job ..." required />
                        <Form.Text className="text-muted">
                            We can find your Dream job.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='formlabels'>Location</Form.Label>
                        <Form.Control className="forminputs" name="location" type="text" placeholder="Enter your city" required />
                    </Form.Group>
                    <Button className='FormButton' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }
}

export default JobForm;