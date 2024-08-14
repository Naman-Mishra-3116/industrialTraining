import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import MyAccount from "../Dashboard/UserAccount/MyAccount";
import Dashboard from "../Dashboard/DoctorAccount/Dashboard";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Admin from '../components/Admin-Dashboard/Admin'
import Reset from '../components/Admin-Dashboard/Reset'
import AdminHome from '../components/Admin-Dashboard/AdminHome'
import Users from '../components/Admin-Dashboard/Users'
import Appointments from '../components/Admin-Dashboard/Appointments'
import DoctorsTable from '../components/Admin-Dashboard/DoctorsTable'
import CreateAdmin from '../components/Admin-Dashboard/CreateAdmin'

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/admin-login" element={<Admin />} />
      <Route path="/forgot-password" element={<Reset />} />
      <Route path="/admin-home" element={<AdminHome />} />
      <Route path="/users" element={<Users />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/doctors-list" element={<DoctorsTable />} />
      <Route path="/create-admin" element={<CreateAdmin />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default Routers;
