import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useAuthHook } from "../../context/AuthContext";

const navLinks = [
  {
    path: "/admin-home",
    display: "Home",
  },
  {
    path: "/users",
    display: "Users",
  },
  {
    path: "/doctors-list",
    display: "Doctors",
  },
  {
    path: "/appointments",
    display: "Appointments",
  },
];

function DoctorsTable() {
  const { token, user, role } = useAuthHook();
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("sticky__header");
      } else {
        headerRef.current?.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/*==========Logo========= */}
          <div>
            <h1 className="text-2xl text-headingColor font-bold">Medicare Admin Dashboard</h1>
          </div>

          {/*==========menu========= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/*===========nav right================*/}
          <div className="flex items-center gap-4">
            {user && token ? (
              <div className={``}>
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      className="w-full rounded-full"
                      src={user?.photo}
                      alt=""
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/create-admin">
                <button className="bg-primaryColor text-white py-2 px-6 font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Add admin
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DoctorsTable;
