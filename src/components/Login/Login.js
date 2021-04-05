import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useContext, useState } from "react";
import "./Login.css";

import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
firebase.initializeApp(firebaseConfig);
function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });
  const history=useHistory();
  const location=useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
       
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });
  };
  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;
        setLoggedInUser(user);
        history.replace(from);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
       
    
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
      });
  };
  const handleOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUser = {
          isSignedIn: false,

          name: "",
          email: "",
          photo: "",
          error: "",
          success: false,
        };
        setUser(signOutUser);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });
  };
  const handleChange = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)

        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          updateUserName(user.name);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };
  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        // Update successful.
        console.log("user Name Updated");
      })
      .catch(function (error) {
        // An error happened.
        console.log("error");
      });
  };
  return (
    <div className="container body ">
      <div className="box">
          
      <h1 className="icon">Authentication</h1>
          <div className="content">


        <input
          type="checkbox"
          onChange={() => setNewUser(!newUser)}
          name="newUser"
          id=""
        />
        <label style={{ color: "brown" }} htmlFor="newUser">
          New User Sign Up??
        </label>
        <form onSubmit={handleSubmit}>
          {newUser && (
            <input
              name="name"
              type="text"
              onBlur={handleChange}
              placeholder="Your name"
            />
          )}
          <br />
          <input
            type="text"
            name="email"
            onBlur={handleChange}
            placeholder="Email"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            onBlur={handleChange}
            placeholder="Password"
            required
          />
          <br />
          <input
            className="btn btn3"
            type="submit"
            value={newUser ? "Sing Up" : "sign In"}
          />
        </form>
        <p style={{ color: "red" }}>{user.error}</p>
        {user.success && (
          <p style={{ color: "white",fontWeight: "600" }}>
            {" "}
            User {newUser ? "created" : "Logged In"} successfully
          </p>
        )}

        {user.isSignedIn ? (
          <button className="btn btn1" onClick={handleOut}>Sign out From Google</button>
        ) : (
          <button className="btn btn1" onClick={handleIn}>
            {" "}
            <FontAwesomeIcon icon={faGoogle} /> Sign in With Google Account
          </button>
        )}
        <br />
        <button className="btn btn2" onClick={handleFbSignIn}>
          {" "}
          <FontAwesomeIcon icon={faFacebookF} /> Sign in With Facebook Login
        </button>
        {user.isSignedIn && (
          <div>
            <h1>Welcome: {user.name}</h1>
            <p> Your Email: {user.email}</p>
            <img src={user.photo} alt="Error" />
          </div>
        )}


          </div>
       
      </div>
    </div>
  );
}

export default Login;
