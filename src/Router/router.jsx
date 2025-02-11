

import { createBrowserRouter } from "react-router-dom";

import OutLet from "../Components/MainLayout/OutLet/OutLet";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import NotFound from "../Pages/NotFound/NotFound";
import DepartmentPage from "../Pages/DepartmentPage/DepartmentPage";
import SuccessPage from "../Pages/SuccessPage/SuccessPage";
import NoticePage from "../Pages/NoticePage/NoticePage";
import ClassRoom from "../Pages/ClassRoom/ClassRoom";

const router = createBrowserRouter([
    {
      element: <OutLet />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      
        {
          path: "/departments",
          element: <DepartmentPage />,
        },
        {
          path: "/classroom",
          element: <ClassRoom />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/success",
          element: <SuccessPage />,
        },
        {
          path: "/notice",
          element: <NoticePage />,
        },
      
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  export default router;