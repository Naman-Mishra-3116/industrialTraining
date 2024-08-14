import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import RootElementForApp from "./RootElementForApp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Doctors from "./pages/Doctors/Doctors";
import DoctorDetails from "./pages/Doctors/DoctorDetails";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Admin from "./components/Admin-Dashboard/Admin";
import RootElementForAdmin from "./RootElementForAdmin";
import AdminHome from "./components/Admin-Dashboard/AdminHome";
import Users from "./components/Admin-Dashboard/Users";
import Appointments from "./components/Admin-Dashboard/Appointments";
import DoctorsTable from "./components/Admin-Dashboard/DoctorsTable";
import CreateAdmin from "./components/Admin-Dashboard/CreateAdmin";
import Reset from "./components/Admin-Dashboard/Reset";
import { Navigate } from "react-router-dom";
import CheckoutSuccess from "./pages/Doctors/CheckoutSuccess";
import Protected from "./routes/ProtectedRoute";
import MyAccount from "./Dashboard/UserAccount/MyAccount";
import Dashboard from "./Dashboard/DoctorAccount/Dashboard";

const ProtectedRoute = ({
  element,
  isAuthenticated,
  redirectPath = "/admin/",
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return element;
};

function App() {
  const adminData = JSON.parse(localStorage.getItem("adminData"));
  const isAuthenticated = !!adminData?.id;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElementForApp />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/doctors",
          element: <Doctors />,
        },
        {
          path: "/doctors/:id",
          element: <DoctorDetails />,
        },
        {
          path: "/register",
          element: <Signup />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/checkout-success",
          element: <CheckoutSuccess />,
        },
        {
          path: "/users/profile/me",
          element: (
            <Protected allowedRoles={["patient"]}>
              <MyAccount />
            </Protected>
          ),
        },
        {
          path: "/doctors/profile/me",
          element: (
            <Protected allowedRoles={["doctor"]}>
              <Dashboard />
            </Protected>
          ),
        },
      ],
    },
    {
      path: "/admin/",
      element: <Admin />,
    },
    {
      path: "/forgot-password",
      element: <Reset />,
    },
    {
      path: "/",
      element: <RootElementForAdmin />,
      children: [
        {
          path: "/admin-home",
          element: (
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={<AdminHome />}
            />
          ),
        },
        {
          path: "/users",
          element: (
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={<Users />}
            />
          ),
        },
        {
          path: "/appointments",
          element: (
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={<Appointments />}
            />
          ),
        },
        {
          path: "/doctors-list",
          element: (
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={<DoctorsTable />}
            />
          ),
        },
        {
          path: "/createAdmin",
          element: (
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={<CreateAdmin />}
            />
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
