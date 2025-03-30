import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { useNavigate } from "react-router-dom";
import { BACK_GROUND } from "../utils/constants.js";

const Login = () => {
  const DEBUG = false;

  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonclick = () => {
    DEBUG && navigate("/browser");
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //sign up logic

      //apI FOR login form
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          var user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/a/ACg8ocLPSots4OUdv3nbzDkizc1ZoLbCL1wD37YkW6XFmoYp7f-n77oL=s519-c-no",
          })
            .then(() => {
              // Profile updated!
              navigate("/browser");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          console.log("User created", user);
        })
        .catch((error) => {
          var errorMessage = error.message;
          var errorCode = error.code;
          console.log("Error creating user:", errorMessage);
          if (errorCode === "auth/weak-password") {
            setErrorMessage("Weak password.");
          } else {
            setErrorMessage("Error creating user.");
          }
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in", user);

          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            })
          );

          navigate("/Browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorMessage);
          console.log("Error signing in:", errorMessage);
          if (errorCode === "auth/wrong-password") {
            setErrorMessage("Wrong password.");
          } else {
            setErrorMessage("Error signing in.");
          }
        });
    }
  };

  const toggleSignInForm = () => {
    if (!name.current && !email.current && !password.current) {
      dispatch(
        addUser({
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        })
      );
    }
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACK_GROUND} alt="back" />
      </div>
      <form className="absolute p-12 text-white bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 py-6 rounded-2xl ">
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <button
          type="button"
          className="p-4 my-6 w-full bg-red-700"
          onClick={handleButtonclick}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p
          className="text-sm text-center cursor-pointer text-red-300"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
