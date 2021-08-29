import React from 'react';
import Table from 'react-bootstrap/Table';


class Applcations extends React.Component {


    render() {
        console.log('inside Application', this.props.sentApplication);
        return (

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Job Title</th>
                        <th>Applicant Name</th>
                        <th>Major</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>E-mail</th>
                        <th>Bio</th>

                    </tr>
                </thead>
                <tbody>

                    {this.props.sentApplication.map((application, index) => {
                        return (
                            <tr key={index}>
                                <td>{index +1}</td>
                               
                                <td>{application.jobTitle}</td>
                                <td>{application.userName}</td>
                                <td>{application.major}</td>
                                <td>{application.address}</td>
                                <td>{application.userPhone}</td>
                                <td>{application.email}</td>
                                <td>{application.bio}</td>

                            </tr>
                        )
                    })}

                </tbody>
            </Table>



        )
    }
}

export default Applcations;