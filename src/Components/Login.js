import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValide } from "../utils/validate.js";

const Login = () => {
  const [isSign, setisSign] = useState(true);
  const [error, setError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    console.log("click");
    setisSign(!isSign);
  };
  const handleButtonclick = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const res= checkValide(email.current.value, password.current.value);
    setError(res);
    console.log(res);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
          alt="back"
        />
      </div>
      <form className="absolute p-12 text-white bg-black  bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 py-6">
        <h1 className="font-bold text-3xl">{isSign ? "Sign in" : "Sign up"}</h1>
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {!isSign && (
          <input
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
        <p className="text-red-700 font-bold text-xl ">{error}</p>
        <button
          type="button"
          className="p-4 my-6 w-full bg-red-700 "
          onClick={handleButtonclick}
        >
          {isSign ? "Sign in" : "Sign up"}
        </button>
        <p className="text-sm text-center" onClick={toggleSignInForm}>
          {isSign
            ? "New to NetFlix ? Sign Up Now"
            : "Already registered ? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
