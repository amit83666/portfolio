import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-section">
      <Image
        src="/assets/port1.png"
        alt="nav-icon"
        width={70}
        height={50}
        priority
      />

      <div className="nav-link">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/techstack">Tech Stack</Link>
        <Link href="/project">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div>
        <Link href="https://github.com/amit83666?tab=repositories" target="_blank">
          <Image
            src="/assets/github-icon.png"
            alt="GitHub"
            width={30}
            height={30}
          />
        </Link>
        <Link href="#">
          <Image
            src="/assets/twitter-icon.png"
            alt="Twitter"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/amit-kumar-2122131a4/" target="_blank">
          <Image
            src="/assets/linkedin-icon.png"
            alt="LinkedIn"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
