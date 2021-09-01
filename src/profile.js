import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UpdateForm from "./UpdateForm";
import { Card } from "react-bootstrap";

const Profile = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // {console.log(props.retrieveProfile)}
  return (
    isAuthenticated && (
      <Card  style={{ width: '64rem', marginTop:'5%', marginBottom:'5%' }} className="card card-custom bg-white border-white border-0">
      <div className="profileCard">
        <img src={user.picture} alt={user.name} className="profileData" style={{width:'150px', border:'solid 5px rgba(0,0,0,.8)', borderRadius:'100%'}}/>
        <h2 className="profileData" >{user.name}</h2>
        <p className="profileData" style={{fontSize:'18px'}} > {user.email}</p>
        <UpdateForm retrieveProfile={props.retrieveProfile} submittProfileData={props.submittProfileData}/>
      </div>
      </Card>

    )
  );
};

export default Profile;