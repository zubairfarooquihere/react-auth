import { useDispatch } from 'react-redux';

import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { userLoginActions } from "../redux/user";

const AuthDetails = () => {
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user ? user : null);
      if (user) {
        dispatch(userLoginActions.login({uid: user.uid, email: user.email}));
      }
    });
  
    return unsubscribe;
  }, [dispatch]);

  const userSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(userLoginActions.logout());
    }catch (error) {
      console.log(error)
    }
    // signOut(auth)
    //   .then(() => {
    //     dispatch(userLoginActions.logout());
    //     console.log("sign out successful");
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;