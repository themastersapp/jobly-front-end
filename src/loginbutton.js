import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button className = "loginButton" variant="primary" onClick={() => loginWithRedirect()}><span classname="loginText">Log In </span></button>;
  
};

export default LoginButton;