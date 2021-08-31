import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import './Login.css';
import LoginButton from './loginbutton'
import LoginTempJs from './LoginTempJs'

class Login extends React.Component {
  render() {
    return(
      <div >
          <LoginTempJs/>  
          {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}

      </div>
    )
  }
}

export default Login;
