import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

export default function Admin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (formData.password.length < 6) {
        setLoading(false);
        return toast.error("Password must contain at least 6 characters");
      }
      const res = await fetch(`${BASE_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { message, error, success, token, user, email, id } =
        await res.json();

      console.log(message, error, success, token, user, email, id);
      if (!error && success && message === "Logged in Successfully") {
        setLoading(false);
        console.log("Data in admin login recieved: ", {
          token,
          user,
          email,
          id,
        });
        toast.success(message);
        localStorage.setItem(
          "adminData",
          JSON.stringify({
            adminToken: token,
            user,
            email,
            id,
          })
        );
        setTimeout(() => {
          navigate("/admin-home");
        }, 2000);
      } else if (
        success &&
        !error &&
        message === "Please check email once user not found"
      ) {
        toast.error(message);
        setLoading(false);
        return;
      } else if (success===true && !error && message === "Invalid credentials") {
        toast.error(message);
        setLoading(false);
        return;
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 text-center">
          Admin Login
        </h3>
        <form className="py-4 md:py-0 ">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
              onClick={handleLogin}
            >
              {loading ? <HashLoader size={26} color="white" /> : "Login"}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            <Link
              to="/forgot-password"
              className="text-primaryColor font-medium ml-1 "
            >
              Forgot Password
            </Link>{" "}
          </p>
        </form>
      </div>
    </section>
  );
}
