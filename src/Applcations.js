import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';


class Applcations extends React.Component {

    handleWithdrawn = (item) => {
        item.active = false;
        this.props.activeFunc(item);
    }

    render() {
        // console.log('inside Application', this.props.sentApplication);

        if (this.props.sentApplication.length === 0) {
            return (
                <>
                    <h2 className="pageTitle">Applications</h2>

                    <Alert style={{marginBottom:'10%'}} className="emptyAlert" variant='primary'>
                        You have no sent applications yet.
                    </Alert>
                </>
            )
        } else {

            return (
                <>
                    <h2 className="pageTitle">Applications</h2>

                    <Card style={{ width: '82rem', marginBottom:'10%' }}>

                        <Table className="applicationsTable" striped bordered hover size="sm" >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Job Title</th>
                                    <th>Applicant Name</th>
                                    <th>Major</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>E-mail</th>
                                    <th>Status</th>
                                    <th>Action</th>


                                </tr>
                            </thead>
                            <tbody>

                                {this.props.sentApplication.map((application, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>

                                            <td>{application.jobTitle}</td>
                                            <td>{application.userName}</td>
                                            <td>{application.major}</td>
                                            <td>{application.address}</td>
                                            <td>{application.userPhone}</td>
                                            <td>{application.email}</td>
                                            {application.active ? <td>🟢</td> : <td>🔴</td>}
                                            {application.active ? <td><Button onClick={() => { this.handleWithdrawn(application) }} variant="success" style={{ fontWeight: 'bolder', width: "6.6rem" }} >Withdraw</Button></td> : <td><Button fontWeight='bolder' variant="danger" disabled >Withdrawn</Button></td>}


                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>

                    </Card >

                </>
            )
        }
    }
}

export default Applcations;