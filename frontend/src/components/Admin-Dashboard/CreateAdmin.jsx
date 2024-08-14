import React, { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import PasswordInput from "../Services/PasswordInput";

function CreateAdmin() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const adminData = JSON.parse(localStorage.getItem("adminData"));

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      if (formData.password.length < 6) {
        toast.error("Password should contain atleast 6 characters");
        return;
      }
      const req = await fetch(`${BASE_URL}/admin/${adminData.id}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { message, error, success } = await req.json();
      if (success && !error && message === "Admin Added Successfully!") {
        toast.success(message);
        setLoading(false);
        setTimeout(() => {
          navigate("/admin-home");
        }, 600);
      } else if (
        success &&
        !error &&
        message === "You are not authorized as an admin to perfrom this task"
      ) {
        throw new Error(message);
      } else if (
        success &&
        !error &&
        message === "Admin with a speicfied email already exist try logging in"
      ) {
        throw new Error(message);
      } else {
        throw new Error(message);
      }
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0 ">
      <div className="max-w-[660px] mx-auto">
        <div className="rounded-l-lg lg:pl-16 py-10 ">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 text-center">
            Create a New Admin
          </h3>

          <form onSubmit={submitHandler}>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                name="username"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                required
              />
            </div>

            <div className="mb-5">
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                required
              />
            </div>

            <PasswordInput
              isRequired={true}
              placeholder={"Password"}
              value={formData.password ?? ""}
              onChangePassed={handleInputChange}
              name={"password"}
            />

            <div className="mt-7 ml-60">
              <button
                type="submit"
                className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 max-w-40 items-center"
                disabled={loading}
              >
                {loading ? <HashLoader color="white" size={25} /> : "Add Admin"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateAdmin;
