import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter,  } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Provider,  } from "react-redux";
import appStore from "../utils/appStore";


const Body = () => {
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

  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
};

export default Body;
