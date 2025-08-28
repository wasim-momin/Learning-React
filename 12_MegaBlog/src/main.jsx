import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CreatePost,
  Home,
  Login,
  PostDetails,
  PostList,
  Signup,
} from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/create",
        element: <CreatePost />,
      },
      {
        path: "/posts/:id",
        element: <PostDetails />,
      },
      {
        path: "/posts",
        element: <PostList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
