import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate=useNavigate();
 const user=useSelector((store)=>store.user);

  const handleSignOut = () => {
    // Add Firebase sign-out logic here
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        className="w-44"
        alt="header"
      />
      {user && (<div className="flex p-2">
        <div className="w-12 h-12 bg-black flex items-center justify-center">
          <img
            className="w-12 h-12 "
            alt="icon"
            src={user?.photoURL}
          />
        </div>

        <button className="text-white font-bold" onClick={handleSignOut}>
          sign Out
        </button>
      </div>)}
    </div>
  );
};

export default Header;
