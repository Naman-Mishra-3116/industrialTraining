import React from "react";
import { Link } from "react-router-dom";


export default function Appointments() {
  return (
    <div className="flex">
      <div className="w-1/4 bg-blue-800 p-6 text-white">
        <h2 className="text-3xl font-bold mb-6">Medicare Admin Dashboard</h2>
        <ul>
          <li className="mb-4">
            <Link to="/admin-home" className="text-lg">
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/users" className="text-lg">
              Users
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/doctors-list" className="text-lg">
              Doctors
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/appointments" className="text-lg">
              Appointments
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
