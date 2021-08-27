import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { withAuth0 } from "@auth0/auth0-react";
import Profile from './profile';
import MyFavoriteBooks from './BestBooks';
import Login from './Login';
import Carousels from './coursel';
import JobForm from './form';
import JobCards from './jobcards';
import './style.css'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      JobData:[],
      showcard:false
    }
  }


  Jobresults= async(e)=>{
    e.preventDefault();
    let Names={
      jobtitle:e.target.jobtitle.value,
      location:e.target.location.value,
    }
    // console.log(Names);
    let JobResults=await axios.get('http://localhost:3001/jobresults',{params:Names})
    console.log(JobResults.data);
    await this.setState({
      JobData:JobResults.data,
      showcard:true
    })
  }


  render() {

    const { user, isAuthenticated, isLoading } = this.props.auth0;
    console.log('app', this.props);
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {(isAuthenticated) ? (<Carousels/> ): <Login/> }
                {(isAuthenticated) && (<JobForm Jobresults={this.Jobresults}/> )}
                {(isAuthenticated) && this.state.showcard && (<JobCards JobResults={this.state.JobData}/> )}

                

                

              </Route>

              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile">
              <Profile/>
              </Route>
   


            </Switch>
            
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
