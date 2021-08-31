import React from 'react';
import './logintemplate.scss'
class LoginTempJs extends React.Component {
    render() {
        return (
                <div class="login-box">
      <div class="login-box-formbox">
        <div class="login-box-signup">
          Don't have an account? <a href="#">Sign Up</a>
        </div>
        <div class="login-box-login">
          <h1>Welcome to AOT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            laudantium dolorem?
          </p>
          <form action="#">
            <div>
              <label for="email"> E-Mail</label>
              <input type="email" name="email" class="input-email" />
            </div>
            <div>
              <label for="password"> Password</label>
              <input type="password" name="password" class="input-password" />
            </div>
            <div>
              <input type="button" value="Login to account" class="btn" />
            </div>
          </form>
          <div class="alternate-text">Or sign in with</div>
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            repellendus cumque voluptatum animi, illum veniam?"
          </div>
        </div>
      </div>
    </div>
        )
    }
}
export default LoginTempJs