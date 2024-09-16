import React from "react";
import Image from "next/image"; // Importing the Next.js Image component
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <p>
        As a Full Stack developer with over 2 years of hands-on experience in
        software development and database design, I specialize in crafting
        robust solutions. I have a proven track record of building successful
        products from the ground up, harnessing strong research skills to ensure
        efficiency and effectiveness.
      </p>

      <div className="work-experience">
        <h2>Work Experience</h2>
        <div className="job-title">
          <h3>Software Development Engineer (SDE) - Full Stack</h3>
          <button>Full Time</button>
        </div>
        <div className="project-title">
          <p>
            <span>
              <Image
                src="/assets/mdi_office-building.png"
                alt="Office Building Icon"
                width={20} // Adjust the width and height as per your design
                height={20}
              />
            </span>{" "}
            <span style={{ marginRight: "100px" }}>Easywebinar</span>
          </p>
          <p>
            <span>
              <Image
                src="/assets/carbon_location.png"
                alt="Location Icon"
                width={20}
                height={20}
              />
            </span>
            Mohali
          </p>
          <p>
            <span>
              <Image
                src="/assets/gg_calendar-dates.png"
                alt="Calendar Icon"
                width={20}
                height={20}
              />
            </span>{" "}
            Jan 2024 - Present
          </p>
        </div>
        <div className="line-separate">
          <hr />
        </div>

        <div className="job-title">
          <h3>Software Development Engineer (SDE) - Full Stack</h3>
          <button>Full Time</button>
        </div>
        <div className="project-title">
          <p>
            <span>
              <Image
                src="/assets/mdi_office-building.png"
                alt="Office Building Icon"
                width={20}
                height={20}
              />
            </span>{" "}
            Softobiz Technologies Pvt Ltd    
          </p>
          <p>
            <span>
              <Image
                src="/assets/carbon_location.png"
                alt="Location Icon"
                width={20}
                height={20}
              />
            </span>
            Mohali
          </p>
          <p>
            <span>
              <Image
                src="/assets/gg_calendar-dates.png"
                alt="Calendar Icon"
                width={20}
                height={20}
              />
            </span>{" "}
            Sep 2022 - Dec 2023
          </p>
        </div>
        <div className="line-separate">
          <hr />
        </div>

        <div className="job-title">
          <h3>Software Developer Intern (nodejs)</h3>
          <button>Internship</button>
        </div>
        <div className="project-title">
          <p>
            <span>
              <Image
                src="/assets/mdi_office-building.png"
                alt="Office Building Icon"
                width={20}
                height={20}
              />
            </span>{" "}
            Kratikal Technologies Pvt Ltd
          </p>
          <p>
            <span>
              <Image
                src="/assets/carbon_location.png"
                alt="Location Icon"
                width={20}
                height={20}
              />
            </span>
            Noida
          </p>
          <p>
            <span>
              <Image
                src="/assets/gg_calendar-dates.png"
                alt="Calendar Icon"
                width={20}
                height={20}
              />
            </span>{" "}
            Apr 2022 - Aug 2022
          </p>
        </div>
        <div className="line-separate">
          <hr />
        </div>
      </div>

      <div className="work-experience">
        <h2>Education</h2>
        <div className="job-title">
          <h3>Asia Pacific Institute of Information Technology</h3>
          <button>Full Time</button>
        </div>
        <div className="project-title">
          <p>
            <span>
              <Image
                src="/assets/mdi_office-building.png"
                alt="Office Building Icon"
                width={20}
                height={20}
              />
            </span>
            Bachelor of Technology
          </p>
          <p>
            <span>
              <Image
                src="/assets/gg_calendar-dates.png"
                alt="Calendar Icon"
                width={20}
                height={20}
              />
            </span>
            {"   "}
            Sep 2021 - Dec 2021
          </p>
        </div>
        <div className="line-separate">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default About;
