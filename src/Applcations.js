import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


class Applcations extends React.Component {

    handleWithdrawn=(item)=>{
        item.active=false;
        this.props.activeFunc(item);
    }

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
                        <th>Status</th>
                        <th>Active/De-Active</th>


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
                                <td>{application.bio}</td>
                                {application.active ? <td>🟢</td> : <td>🔴</td>}
                                {application.active ? <td><Button onClick={()=>{this.handleWithdrawn(application)}} variant="success" style={{ fontWeight: 'bolder', width: "6.6rem" }} >WithDraw</Button></td> : <td><Button fontWeight='bolder' variant="danger" disabled >WithDrawn</Button></td>}


                            </tr>
                        )
                    })}

                </tbody>
            </Table>



        )
    }
}

export default Applcations;