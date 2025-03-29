import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import appStore from "../utils/appStore";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
//   const navigate=useNavigate();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Browser",
      element: <Browse />,
    },
  ]);
  useEffect(() => {
    // const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName ,photoURL} = user;
        dispatch(addUser({uid: uid,email: email,displayName: displayName,photoURL: photoURL}));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
};

export default Body;
