import React from "react";
import { useState, useEffect } from "react";
import Error from "../Error/Error";
import Loading from "../Loader/Loading";
import { BASE_URL } from "../../config";

function DoctorsTable() {
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
            `${BASE_URL}/admin/${adminData.id}/allDoctors`,
            {
              method: "GET",
            }
          );
          const { message, error, success, data } = await resp.json();
          if (message === "Data delivered" && !error && success) {
            setData(data);
            setLoading(false);
          } else if (
            message === "You are not authorized" &&
            !error &&
            success
          ) {
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

  const isApproved = (doctorId) => {
    const doctor = data.find((doc) => doc.id === doctorId);
  
    return doctor ? doctor.isApproved : false;
  };

  const handleApprove = (index) => {
    const updatedData = data.map((doctor, i) => {
      if (i === index) {
        return { ...doctor, isApproved: isApproved(doctor.id) };
      }
      return doctor;
    });
    setData(updatedData);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      {error && <Error errMessage={error} />}
      {loading && <Loading />}
      {!error && !loading && data.length > 0 && (
        <div className="overflow-x-auto w-[1180px]">
          <table className="min-w-max w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-sky-200 text-gray-800 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left border-b border-gray-200">Name</th>
                <th className="py-3 px-6 text-left border-b border-gray-200">Specialization</th>
                <th className="py-3 px-6 text-left border-b border-gray-200">Experience</th>
                <th className="py-3 px-6 text-left border-b border-gray-200">Contact</th>
                <th className="py-3 px-6 text-left border-b border-gray-200">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-6 text-left">{item.name}</td>
                  <td className="py-3 px-6 text-left">{item.specialization}</td>
                  <td className="py-3 px-6 text-left">{item.experience} years</td>
                  <td className="py-3 px-6 text-left">{item.contact}</td>
                  <td className="py-3 px-6 text-left">
                    {item.isApproved ? (
                      <span className="text-green-500 font-bold">✔️</span>
                    ) : (
                      <div>
                        <button
                          onClick={() => handleApprove(index)}
                          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                        >
                          Approve
                        </button>
                        <span className="ml-2 text-yellow-500">Pending</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DoctorsTable;
