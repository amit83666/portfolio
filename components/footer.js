import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contact-detatils">
        <div>
          <Image
            src="/assets/footer-icon.png"
            alt="Footer Icon"
            width={50}  
            height={50}
          />
        </div>
        <div className="contact-links">
          <p className="num">+91 90348 39322</p>
          <p>amit83666@gmail.com</p>
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
