import React, { useEffect } from "react";
import "./login.css";
import { GoogleLoginButton } from "react-social-login-buttons";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useStatevalue } from "../Redux/context";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStatevalue();

  useEffect(() => {
    const AuthChange = async () => {
      await onAuthStateChanged(auth, (userAuth) =>
        dispatch({
          type: "SET_USER",
          payload: userAuth,
        })
      );
    };
    AuthChange();
  }, []);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) =>(result.user))
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return (
    <article id="login">
      <fieldset>
        <legend>Login</legend>
        <div className="mt-4">
          <GoogleLoginButton onClick={signIn} />
        </div>
      </fieldset>
    </article>
  );
};

export default Login;
