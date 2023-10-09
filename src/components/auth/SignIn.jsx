//import { useDispatch } from 'react-redux';

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
//import { userLoginActions } from "../../redux/user";

const SignIn = () => {
  //const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      //console.log(userCredential);
      //dispatch(userLoginActions.login({uid: 'hello', email: 'lala'}));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={SignIn}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
