import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.4rem",
    backgroundColor: "#333",
    color: "white",
  },
  logo: {
    fontSize: "1.5rem",
  },
  menuBtn: {
    cursor: "pointer",
    display: "none",
  },
  btnLine: {
    height: "3px",
    width: "25px",
    backgroundColor: "white",
    margin: "5px 0",
    transition: "0.4s",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    margin: "auto", // Center align the links
  },
  navLinkItem: {
    margin: "0 1rem",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    fontSize: "1.2rem",
  },
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <NavLink to="/" style={styles.navLink}>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/contact-list-3690517-3074044.png?f=webp&w=50"
              alt=""
            />
          </NavLink>
        </div>
        <div onClick={toggleMenu} style={styles.menuBtn}>
          <div style={styles.btnLine}></div>
          <div style={styles.btnLine}></div>
          <div style={styles.btnLine}></div>
        </div>
        <ul style={styles.navLinks}>
          <li style={styles.navLinkItem}>
            <NavLink to="/" onClick={toggleMenu} style={styles.navLink}>
              Home
            </NavLink>
          </li>

          <li style={styles.navLinkItem}>
            <NavLink to="/add" onClick={toggleMenu} style={styles.navLink}>
              Add Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
