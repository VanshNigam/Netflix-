import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((store) => store.user);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign-out error:", error);
      navigate("/error");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }));
        
        if (location.pathname === "/") {
          navigate("/Browser"); // Redirect logged-in user from login page
        }
      } else {
        dispatch(removeUser());
        
        if (location.pathname === "/Browser") {
          navigate("/"); // Redirect logged-out user from protected page
        }
      }
      return ()=>unsubscribe();
    },[]);

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [dispatch, navigate, location.pathname]);

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
      <img
        src={LOGO}
        className="w-44"
        alt="header"
      />
      {user && (
        <div className="flex p-2">
          <div className="w-12 h-12  flex items-center justify-center">
            <img className="w-12 h-12 rounded-3xl" alt="icon" src={user?.photoURL} />
          </div>
          <button className="text-white font-bold ml-4" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
