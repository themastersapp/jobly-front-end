import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UpdateForm from "./UpdateForm";

const Profile = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  {console.log(props.retrieveProfile)}
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <UpdateForm retrieveProfile={props.retrieveProfile} submittProfileData={props.submittProfileData}/>
      </div>
    )
  );
};

export default Profile;