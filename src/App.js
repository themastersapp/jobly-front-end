import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { withAuth0 } from "@auth0/auth0-react";
import Profile from './profile';
import Login from './Login';
import Carousels from './coursel';
import JobForm from './form';
import JobCards from './jobcards';
import Applcations from './Applcations';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';
import Bookmark from './Bookmark';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      JobData: [],
      showcard: false,
      bookmarkedJobs: [],
      sentApplication: [],
      appliedApplication: {},
      profileData:[],
      user:{},
      retrieveProfile:[]
    }
  }


  Jobresults = async (e) => {
    e.preventDefault();

    let Names = {
      jobtitle: e.target.jobtitle.value,
      location: e.target.location.value,
    }
    // console.log(Names);
    let JobResults = await axios.get('http://localhost:3001/jobresults', { params: Names })
    console.log(JobResults.data);
    await this.setState({
      JobData: JobResults.data,
      showcard: true
    })
  }

  bookmarkHandler = async (bookmarked) => {
    // console.log('bookmarked', bookmarked);
    const { user } = this.props.auth0;
    let bookMarkData = {
      bookmarked: bookmarked,
      user: user.email
    }
    if (bookmarked.bookmark === true) {
      let jobBookmark = await axios.post('http://localhost:3001/jobbookmarks', bookMarkData);

      await this.setState({
        bookmarkedJobs: jobBookmark.data,
      })

    } else {
      let jobBookmark = await axios.delete(`http://localhost:3001/jobbookmarks/${bookMarkData.bookmarked._id}`);
      await this.setState({
        bookmarkedJobs: jobBookmark.data,
      })
      this.state.JobData.map(item=>{
        
        if(item.title==bookmarked.title){
          return item.bookmark=false;
        }
        console.log('helooooooooooooooooooo',this.state.JobData);
      })
    }

  }

  extractApplication = async (application) => {
    // console.log('WORKING', application);
    await this.setState({
      appliedApplication :application,
    })
  }
  
  applicationHandler = async (event) => {
    event.preventDefault();

    const { user } = this.props.auth0;

    let applicationData = {
      jobTitle: this.state.appliedApplication.title,
      userName: user.name,
      email: user.email,
      userPhone: event.target.userPhone.value,
      address: event.target.address.value,
      major: event.target.major.value,
      bio: event.target.bio.value,
    }
    // console.log('applicationData', applicationData);

    let sendApplication = await axios.post('http://localhost:3001/applications', applicationData);

    await this.setState({
      sentApplication: sendApplication.data,
    })
    // console.log('applicationData', this.state);

  }

  activeFunc=async(item)=>{
    // console.log({item})

    let putActive= await axios.put('http://localhost:3001/applications', item);
    this.setState({
      sendApplication: putActive.data,
    })

  }

  submittProfileData=async (event)=>{

    event.preventDefault();
    const {user}=this.props.auth0
    let dataProfile={
      phoneNumber:event.target.phoneNumber.value,
      address:event.target.address.value,
      major:event.target.major.value,
      skills:event.target.skills.value,
      experience:event.target.experience.value,
      bio:event.target.bio.value,
      user:user.email,
    }
    console.log(this.state.retrieveProfile.length, this.state.retrieveProfile);
    if(this.state.retrieveProfile.length===0){
      let dataProfileput=await axios.post('http://localhost:3001/profileForm',dataProfile)
      await this.setState({
        retrieveProfile:dataProfileput.data
      })

    }else{
      let dataProfileput=await axios.put('http://localhost:3001/retrieveProfile',dataProfile)
      await this.setState({
        retrieveProfile:dataProfileput.data
      })
    }


  }

   componentDidUpdate=async(prevProps, prevState) =>{
    const {isAuthenticated}=this.props.auth0;

    if( (Object.keys(this.state.user).length) === 0 ){
      if(isAuthenticated){
        // console.log('componentDidUpdate');
        const {user} = this.props.auth0
        
        await this.setState({
          user:user
        })
        let retrieveApplications=await axios.get(`http://localhost:3001/retrieveApplications?email=${this.state.user.email}`)
        // console.log(retrieveApplications);
        let retrieveBookmarks=await axios.get(`http://localhost:3001/retrieveBookmarks?email=${this.state.user.email}`)
        // console.log(retrieveBookmarks.data);
        let retrieveProfile=await axios.get(`http://localhost:3001/retrieveProfile?email=${this.state.user.email}`)
        console.log(retrieveProfile.data);
        await this.setState({
          bookmarkedJobs:retrieveBookmarks.data,
          sentApplication:retrieveApplications.data,
          retrieveProfile:retrieveProfile.data,
          
        })

      }
    }
      // console.log('user lenght ',Object.keys(this.state.user).length);

  }

  render() {
    // console.log(this.state.user);
    let myData=(this.state.retrieveProfile.length);
    // console.log('mmmmmmmmmmmm',myData);
    
    // console.log('xxxxxxxxxxxxxx',this.state.showcard);

    const { isAuthenticated } = this.props.auth0;
    // console.log('app', this.props);
    return (
      <>
        <Router>

          <Switch>
            <Route exact path="/">

              {/* {isAuthenticated ? <Redirect to="/profile" /> : <Login />} */}
              {!(isAuthenticated) ? <Login /> :(myData === 0 )? <Profile retrieveProfile={this.state.retrieveProfile} submittProfileData={this.submittProfileData}/> :(myData !== 0 )?   
             <> <Header /> <Carousels/> <JobForm Jobresults={this.Jobresults}  />{(this.state.showcard===true)&& <JobCards bookmarkedJobs={this.state.bookmarkedJobs} retrieveProfile={this.state.retrieveProfile} JobResults={this.state.JobData} bookmarkHandler={this.bookmarkHandler} applicationHandler={this.applicationHandler} extractApplication={this.extractApplication}/>}   <Footer /></>:null}
              


            </Route>


            <Route exact path="/profile">
            {(isAuthenticated) ? ( <> <Header /> <Profile retrieveProfile={this.state.retrieveProfile} submittProfileData={this.submittProfileData}/>   <Footer /></>): <Login />}
            </Route>

            <Route exact path="/bookmarks">
              {(isAuthenticated)? <> <Header /><Bookmark bookmarkedJobs={this.state.bookmarkedJobs} bookmarkHandler={this.bookmarkHandler} extractApplication={this.extractApplication} retrieveProfile={this.state.retrieveProfile} applicationHandler={this.applicationHandler}/>   <Footer /></>: <Login />}
            </Route>

            <Route exact path="/applications">
              
              {isAuthenticated?<> <Header /><Applcations sentApplication={this.state.sentApplication} activeFunc={this.activeFunc}/>   <Footer /></>:<Login />}
            </Route>
          
          </Switch>

        </Router>

      </>
    );
  }
}

export default withAuth0(App);