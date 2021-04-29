import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

function Login() {
  const [user, setUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  const handleFacebookLogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        setUser(result.user);
        console.log(from);
        history.replace(from);
      });
  };

  const handleGoogleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        setUser(result.user);
      });
  };

  return (
    <div className='App'>
      <div className='container py-5'>
        <div className='mx-auto w-75 bg-light border-rounded text-center p-5 border border-success'>
          {
            <div>
              <h1 className='display-4 mb-4'>Log In</h1>
              <div className='mb-3'>
                <input type='text' id='email' className='form-control' placeholder='Email/Username' />
              </div>
              <div className='mb-3'>
                <input type='password' id='password' className='form-control' placeholder='Password' />
              </div>
              <button className='btn btn-primary'>Log In</button>
              <div className='py-3'>
                <button className='btn btn-info me-3' onClick={handleFacebookLogin}>
                  <FacebookIcon color='primary' /> &nbsp; Login with Facebook
                </button>
                <button className='btn btn-info me-3' onClick={handleGoogleLogin}>
                  <MailIcon color='primary' />
                  &nbsp; Login with Gmail
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Login;
