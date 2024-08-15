import React from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../config";
import { useState } from "react";
import Loading from "../Loader/Loading";
import Error from "../Error/Error";
import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";

function Users() {
  const adminData = JSON.parse(localStorage.getItem("adminData"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        if (adminData.id) {
          const resp = await fetch(
            `${BASE_URL}/admin/${adminData.id}/allUsers`,
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

  const handleDelete = async (id) => {
    try {
      const userId = id;
      const adminId = adminData.id;
      const response = await fetch(`${BASE_URL}/admin/${adminId}/deleteUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      const { message, error, success } = await response.json();
      if (success && !error && message === "Deleted Successfully!") {
        console.log(message);
        toast.success(message);
        setTimeout(() => {
          window.location.href = "http://localhost:5173/users";
        }, 1000);
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
                  Email
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-200">
                  Role
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-200">
                  Action
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
                  <td className="py-3 px-6 text-left">{item.email}</td>
                  <td className="py-3 px-6 text-left">{item.role}</td>
                  <td className="py-3 px-6 text-left">
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

export default Users;
