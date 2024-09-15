import React from "react";
import Link from "next/link";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contact-detatils">
        <div>
          <img src="./assets/footer-icon.png" alt="" />
        </div>
        <div className="contact-links">
          <p className="num">+91 90348 39322</p>
          <p>amit83666@gmail.com</p>
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
      </div>
      <div className="line-separate">
        <hr />
      </div>
      <div className="pages-limks">
        <div className="nav-link">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/techstack">Tech Stack</Link>
          <Link href="/project">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <p>
            Designed and built by{" "}
            <span className="amit-kumar"> Amit Kumar </span> with{" "}
            <span className="amit-kumar">Love</span> &{" "}
            <span className="amit-kumar">Coffee</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
