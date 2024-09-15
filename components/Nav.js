import React from "react";
import Link from "next/link";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav-section">
      <img src="./assets/port1.png" alt="nav-icon" />
      <div className="nav-link">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/techstack">Tech Stack</Link>
        <Link href="/project">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <Link href="#">
          <img src="./assets/github-icon.png" alt="" />
        </Link>
        <Link href="#">
          <img src="./assets/twitter-icon.png" alt="" />
        </Link>
        <Link href="#">
          <img src="./assets/linkedin-icon.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
