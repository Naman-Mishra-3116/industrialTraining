import React from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../config";
import { useState } from "react";
import Loading from "../Loader/Loading";
import Error from "../Error/Error";

function Users() {
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
                  <td className="py-3 px-6 text-left">{item.name}</td>
                  <td className="py-3 px-6 text-left">{item.email}</td>
                  <td className="py-3 px-6 text-left">{item.role}</td>
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
