import React from "react";
import { useState } from "react";
import { HiMiniEyeSlash } from "react-icons/hi2";
import { HiMiniEye } from "react-icons/hi2";

const PasswordInput = ({
  value,
  onChangePassed,
  placeholder,
  name,
  isRequired,
}) => {
  const [type, setType] = useState("password");
  const onClickEyeButton = function () {
    setType((p) => (p === "password" ? "text" : "password"));
  };
  return (
    <div className="mb-5 relative">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChangePassed}
        className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
        required={isRequired}
      />
      <span className="absolute top-5 right-6 h-[10px] w-[10px]" onClick={onClickEyeButton}>
        {type === "text" ? <HiMiniEye /> : <HiMiniEyeSlash />}
      </span>
    </div>
  );
};

export default PasswordInput;
