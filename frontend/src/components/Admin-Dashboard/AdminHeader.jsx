import { useEffect, useRef } from "react";

import { NavLink } from "react-router-dom";


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

function AdminHeader() {
  const headerRef = useRef();
  const menuRef = useRef();

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
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
