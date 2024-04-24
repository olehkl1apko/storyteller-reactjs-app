import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { Layout } from "./components";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Analytics from "./pages/Analytics";
import Stories from "./pages/Stories";
import Story from "./pages/Story";
import EngagementUnits from "./pages/EngagementUnits";
import Ads from "./pages/Ads";
import CMSUsers from "./pages/CMSUsers";
import Roles from "./pages/Roles";
import Apps from "./pages/Apps";
import UserGuide from "./pages/UserGuide";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/stories",
          element: <Stories />,
        },
        {
          path: "/stories/:id",
          element: <Story />,
        },
        {
          path: "/schedule",
          element: <Schedule />,
        },
        {
          path: "/analytics",
          element: <Analytics />,
        },
        {
          path: "/units",
          element: <EngagementUnits />,
        },
        {
          path: "/ads",
          element: <Ads />,
        },
        {
          path: "/users",
          element: <CMSUsers />,
        },
        {
          path: "/roles",
          element: <Roles />,
        },
        {
          path: "/apps",
          element: <Apps />,
        },
        {
          path: "/guide",
          element: <UserGuide />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
