import React from "react";
import { useState, useEffect } from "react";
import Error from "../Error/Error";
import Loading from "../Loader/Loading";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";

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

  const handleApprove = async (id, status) => {
    try {
      const doctorId = id;
      const adminId = adminData.id;
      const response = await fetch(
        `${BASE_URL}/admin/${adminId}/approveDoctor`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ doctorId, status }),
        }
      );
      const { message, error, success } = await response.json();
      if (success && !error && message === "Updated Successfully!") {
        toast.success(message);
        window.location.href = "http://localhost:5173/doctors-list";
      } else if (error && !success) {
        throw new Error(message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const doctorId = id;
      const adminId = adminData.id;
      const response = await fetch(
        `${BASE_URL}/admin/${adminId}/deleteDoctor`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ doctorId }),
        }
      );
      const { message, error, success } = await response.json();
      if (success && !error && message === "Deleted Successfully!") {
        toast.success(message);
        window.location.href = "http://localhost:5173/doctors-list";
      } else if (error && !success) {
        throw new Error(message);
      }
    } catch (err) {
      toast.error(err.message);
    } 
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
                <th className="py-3 px-6 text-left border-b border-gray-200">
                  Name
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-200">
                  Specialization
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-200">
                  Experience
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-200">
                  Contact
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-200">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-6 text-left">{item.name}</td>
                  <td className="py-3 px-6 text-left">
                    {item.specialization
                      ? item.specialization
                      : "Not Available"}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {item.experiences[0].position} at{" "}
                    {item.experiences[0].hospital}
                  </td>
                  <td className="py-3 px-6 text-left">{item.phone}</td>
                  <td className="py-3 px-6 text-left flex justify-between">
                    {item.isApproved === "approved" ? (
                      <div className="text-green-500 font-bold flex gap-5">
                        <span>✔️</span>
                        <span className="w-[150px]">
                          <button
                            onClick={() => handleApprove(item._id, "pending")}
                            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                          >
                            Mark Pending
                          </button>
                        </span>
                      </div>
                    ) : (
                      <div className="text-green-500 font-bold flex gap-5">
                        <span>❌</span>
                        <span>
                          <button
                            onClick={() => handleApprove(item._id, "approved")}
                            className="bg-green-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                          >
                            Approve
                          </button>
                        </span>
                      </div>
                    )}
                    <button
                      className="bg-red-600 p-2 rounded-full text-white text-[18px] cursor-pointer"
                      onClick={() => handleDelete(item._id)}
                    >
                      <AiOutlineDelete />
                    </button>
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
