import icon from "./Images/icon.png";

import React, { useState, useEffect, useMemo } from "react";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useMemo(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 65);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <nav className={`${sticky ? "sticky" : ""}`}>
      <div className="menubars">
        <img className="imgicon1" src={icon}></img>
        
        
      </div>
    </nav>
  );
};
export default Header;