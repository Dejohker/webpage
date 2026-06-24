import React from "react";
import Welcome from "./Welcome";
import How from "./How";
import X from "./X";
import Y from "./Y";
import A from "./A";
import B from "./B";
import C from "./C";
const Joker = () => {
  return (
    <div>
  <div className="login-container">
      <h1>Welcome Back</h1>
      <p>Sign in to continue</p>

      <form>
        <input type="email" placeholder="Email Address" required />

        <input type="password" placeholder="Password" required />

        <button type="submit">Login</button>
      </form>

      <a href="#">Forgot Password?</a>
    </div>
    </div>
  );
};

export default Joker;
