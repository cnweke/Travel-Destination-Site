import React from "react";
import './signup.css';

function Login() {
  return (
  <form action="/login" method="POST">
  <div class="container">
    <h1>Login</h1>
    <p>Please fill in this form to login to an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Username" name="username" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required />

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Login</button>
    </div>
  </div>
</form>
  );
}

export default Login;