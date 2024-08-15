import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    display: "Back To Application",
  },
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
    path: "/createAdmin",
    display: "Add Admin",
  },
];

function AdminHeader() {
  const headerRef = useRef();
  const menuRef = useRef();
  const navigate = useNavigate();

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

  const onClickLogoutButton = function () {
    localStorage.removeItem("adminData");
    navigate("/admin/");
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
          <div>
            <h1 className="text-2xl text-headingColor font-bold">
              Admin Dashboard
            </h1>
          </div>

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
              <button
                className="bg-primaryColor text-white py-2 px-6 font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
                onClick={onClickLogoutButton}
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
