import './App.css'
import Layout from './layout/Layout'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import RootElementForApp from './RootElementForApp'
import Home from './pages/Home'
import Login from './pages/Login'
import Doctors from './pages/Doctors/Doctors'
import DoctorDetails from './pages/Doctors/DoctorDetails'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Admin from './components/Admin-Dashboard/Admin'
import RootElementForAdmin from './RootElementForAdmin'
import AdminHome from './components/Admin-Dashboard/AdminHome'
import Users from './components/Admin-Dashboard/Users'
import Appointments from './components/Admin-Dashboard/Appointments'
import DoctorsTable from './components/Admin-Dashboard/DoctorsTable'
import CreateAdmin from './components/Admin-Dashboard/CreateAdmin'
import Reset from './components/Admin-Dashboard/Reset'

function App() {
   
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootElementForApp/>,
      children:[
        {
          index:true, element:<Home/>
        },
        {
          path:"/home",element:<Home/>
        },
        {
          path:"/login",element:<Login/>
        },
        {
          path:"/doctors", element:<Doctors/>
        },
        {
          path:"/doctors/:id", element:<DoctorDetails />
        },
        {
          path:"/register", element:<Signup />
        },
        {
          path:"/contact", element:<Contact />
        },
        {
          path:"/services", element:<Services />
        },

        {/*       
      <Route path="/admin-login" element={<Admin />} />
      <Route path="/forgot-password" element={<Reset />} />
      <Route path="/admin-home" element={<AdminHome />} />
      <Route path="/users" element={<Users />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/doctors-list" element={<DoctorsTable />} />
      <Route path="/create-admin" element={<CreateAdmin />} /> 
      */
    }
    ]
    },
    {
      path:"/admin/",
      element:<Admin />,
    },
    {
      path:"/",
      element:<RootElementForAdmin />,
      children:[
        {
          path:"/admin-home",
          element:<AdminHome />
        },
        {
          path:"/users",
          element:<Users />
        },
        {
          path:"/appointments",
          element:<Appointments />
        },
        {
          path:"/doctors-list",
          element:<DoctorsTable />
        },
        {
          path:"/admin-home",
          element:<AdminHome />
        },
        {
          path:"/create-admin",
          element:<CreateAdmin />
        },
        {
          path:"/forgot-password",
          element:<Reset />
        }
      ]
    }
  ])

  return (
    // <Layout />
    <>
    <RouterProvider router={router}/>
    </>

    
  )
}

export default App
