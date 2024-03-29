import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminLayout from "../componants/layout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <h1>this is add Admin page</h1>,
      },
      {
        path: "as-admin",
        element: <h1>This is add Admin Page</h1>,
      },
    ],
  },
]);

export default router;
