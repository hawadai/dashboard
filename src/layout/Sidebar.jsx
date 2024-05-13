import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNav } from "../navigation/index";

const Sidebar = () => {
  const [allNav, setAllNav] = useState([]);
  useEffect(() => {
    const navs = getNav("admin");
    setAllNav(navs);
  }, []);
  console.log(allNav);

  return (
    <div>
      <div></div>

      <div
        className={`w-[260px] fixed bg-[#5c5d7f] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all `}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/">
            <img
              className="w-full h-full"
              src="http://localhost:3000/images/logo.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
