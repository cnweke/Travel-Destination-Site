import React from "react";
import './signup.css';

function Signup() {
  return (
  <form action="/signup" method="POST">
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required />

    <label for="psw-repeat"><b>Repeat Password (optional)</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required /><br/><br></br>

    <label for="psw-repeat"><b>Enter Age</b></label><br/>
    <input type="number" placeholder="Enter Age" name="age" required /><br/><br></br>

    <label> Gender </label><br/>
    <input type="radio" name="gender" value="Male" required />
    <label for="gender"><b>Male</b></label><br/>

    <input type="radio" name="gender" value="Female" required />
    <label for="gender"><b>Female</b></label>

    <p>By creating an account you agree to our <a href="#" class='link-a'>Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
  );
}

export default Signup;