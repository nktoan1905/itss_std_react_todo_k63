import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

/* ライブラリ */
import { firebase, auth, uiConfig } from "../lib/firebase";

function Login() {
  return (
    <div className="column panel-block">
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}

export default Login;
