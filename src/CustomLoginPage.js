// LoginPage.js
import React from "react";
import { Login, LoginForm } from "react-admin";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '#/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
  };
  
  const SignInScreen = () => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>;
  
  const CustomLoginForm = props => (
    <div>
      <LoginForm {...props} />
      <SignInScreen />
    </div>
  );
  
  const CustomLoginPage = props => (
    <Login {...props}>
      <CustomLoginForm {...props}/>
    </Login>
  );

export default CustomLoginPage;