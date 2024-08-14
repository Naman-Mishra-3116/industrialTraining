import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Users from './Users';
import Appointments from './Appointments';
import DoctorsTable from './DoctorsTable';

export default function AdminHome() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-blue-800 p-6 text-white">
          <h2 className="text-3xl font-bold mb-6">Medicare Admin Dashboard</h2>
          <ul>
            <li className="mb-4">
              <Link to="/admin-home" className="text-lg">Home</Link>
            </li>
            <li className="mb-4">
              <Link to="/users" className="text-lg">Users</Link>
            </li>
            <li className="mb-4">
              <Link to="/doctors-list" className="text-lg">Doctors</Link>
            </li>
            <li className="mb-4">
              <Link to="/appointments" className="text-lg">Appointments</Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users" element={<DoctorsTable />} />
            <Route path="/appointments" element={<Appointments />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
