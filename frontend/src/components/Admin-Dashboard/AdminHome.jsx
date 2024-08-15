import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../config";
import Loading from "../Loader/Loading";
import Error from "../Error/Error";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

function AdminHome() {
  const adminData = JSON.parse(localStorage.getItem("adminData"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        if (adminData.id) {
          const resp = await fetch(
            `${BASE_URL}/admin/${adminData.id}/allAdmins`,
            {
              method: "GET",
            }
          );
          const { message, error, success, data } = await resp.json();
          if (message === "Data delivered" && !error && success) {
            setData(data);
            setLoading(false);
          } else {
            setLoading(false);
            setError(message);
          }
        }
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  const adminCount = data.length;

  const barData = {
    labels: ['Admins', 'Users', 'Doctors', 'Appointments'],
    datasets: [
      {
        label: 'Count',
        data: [adminCount, 3, 4, 3], // Replace with dynamic data
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const doughnutData = {
    labels: ['Admins', 'Users', 'Doctors'],
    datasets: [
      {
        data: [adminCount, 3, 4], // Replace with dynamic data
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="p-6">
      {/* Summary Cards and Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Total Admins</h2>
          <p className="text-3xl font-bold">{adminCount}</p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Total Users</h2>
          <p className="text-3xl font-bold">3</p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Total Doctors</h2>
          <p className="text-3xl font-bold">4</p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Total Appointments</h2>
          <p className="text-3xl font-bold">3</p>
        </div>

        <div className="col-span-2 bg-white shadow rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Admin Dashboard Overview</h2>
          <Bar data={barData} />
        </div>

        
      </div>

      {/* Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <div className="col-span-1 bg-white shadow rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Distribution</h2>
          <Doughnut data={doughnutData} />
      </div>
      <div className="flex justify-center items-center">
        {error && <Error errMessage={error} />}
        {loading && <Loading />}
        {!error && !loading && data.length > 0 && (
          <div className="overflow-x-auto w-full">
            <table className="min-w-max w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr className="bg-sky-200 text-gray-800 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left border-b border-gray-200">Username</th>
                  <th className="py-3 px-6 text-left border-b border-gray-200">Email</th>
                  <th className="py-3 px-6 text-left border-b border-gray-200">Role</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm font-light">
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-6 text-left">{item.username}</td>
                    <td className="py-3 px-6 text-left">{item.email}</td>
                    <td className="py-3 px-6 text-left">{item.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default AdminHome;
