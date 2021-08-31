import React from 'react';
import './loginTempC.scss'
import LoginButton from './loginbutton'
import './puppels.css'
class LoginTempJs extends React.Component {
    render() {
        return (
            <>
                <div className="loginBody">
                    <div className='tempCont' >
                        <div class="login-box">
                            <div class="login-box-formbox">
                                <div class="login-box-login">
                                    <h1 className="loginH1" >Welcome to Jobly</h1>
                                    <p>
                                        Start Your Journey With Us By Clicking Below To Login!
                                    </p>
                                    <form className="loginForm" action="#">
                                        <div>
                                            <LoginButton />
                                        </div>
                                    </form>
                                    <div class="alternate-boxes">
                                        <div class="alternate-box">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-brand-google"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                                            </svg>
                                        </div>
                                        <div class="alternate-box">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-brand-facebook"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div class="alternate-box">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-brand-apple"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z"
                                                ></path>
                                                <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="login-box-quotebox">
                                <div class="quote-container">
                                    <div class="quote">Make a Dream.</div>
                                    <div class="quote-small">
                                        Jobly is a middle ware website used mainly to connect your clients professionally with companies around the world to get the job which our clients dream about, this platform is characterized by a fast application process with easy-used features,  Jobly is firmly committed to the region and has an excellent understanding of the Middle East and business landscape. Our Mission is connecting job seekers with employers looking to hire. Everyday hundreds of new job vacancies posted to empower people with the tools and knowledge to build their lifestyles of choice.
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="area" >
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >

            </>
        )
    }
}
export default LoginTempJs;