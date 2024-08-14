import React from "react";
import { useState, useEffect } from "react";
import Loading from "../Loader/Loading";
import Error from "../Error/Error";
import { BASE_URL } from "../../config";
function Appointments() {
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
            `${BASE_URL}/admin/${adminData.id}/allBookings`,
            {
              method: "GET",
            }
          );
          const { message, error, success, data } = await resp.json();
          console.log(message, error, success, data);
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

 console.log(error);

  return (
    <div>
      {error && <Error errMessage={error} />}
      {loading && <Loading />}
      {!error && !loading && (
        <div>
          {data &&
            data.map((item, index) => {
              return <div key={index}>{item.name}</div>;
            })}
        </div>
      )}
    </div>
  );
}

export default Appointments;
