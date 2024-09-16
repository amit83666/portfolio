import React from "react";
import Image from "next/image";
import "./Project.css";

const Projects = () => {
  return (
    <div>
      <div className="model-row">
        <div className="model">
          <Image
            src="/assets/Rectangle 4.png"
            alt="Project 1"
            width={400}
            height={300}
            objectFit="cover"
            priority
          />
          <h2>Project Tile goes here</h2>
          <p>
            This is sample project description random things are here in
            description. This is a sample project lorem ipsum generator for
            dummy content.
          </p>
          <p>Tech stack: HTML, JavaScript, SASS, React</p>
          <div className="project-link">
            <div className="project-link-row">
              <Image
                src="/assets/akar-icons_link-chain.png"
                alt="Link icon"
                width={20}
                height={20}
              />
              <a href="#">Live preview</a>
            </div>
            <div className="project-link-row">
              <Image
                src="/assets/akar-icons_link-chain.png"
                alt="Link icon"
                width={20}
                height={20}
              />
              <a href="#">View Code</a>
            </div>
          </div>
        </div>
        <div className="model">
          <Image
            src="/assets/Rectangle 6.png"
            alt="Project 2"
            width={400}
            height={300}
            objectFit="cover"
            priority
          />
          <h2>Project Tile goes here</h2>
          <p>
            This is sample project description random things are here in
            description. This is a sample project lorem ipsum generator for
            dummy content.
          </p>
          <p>Tech stack: HTML, JavaScript, SASS, React</p>
          <div className="project-link">
            <div className="project-link-row">
              <Image
                src="/assets/akar-icons_link-chain.png"
                alt="Link icon"
                width={20}
                height={20}
              />
              <a href="#">Live preview</a>
            </div>
            <div className="project-link-row">
              <Image
                src="/assets/akar-icons_link-chain.png"
                alt="Link icon"
                width={20}
                height={20}
              />
              <a href="#">View Code</a>
            </div>
          </div>
        </div>

        <div className="model">
          <Image
            src="/assets/Rectangle 8.png"
            alt="Project 3"
            width={400}
            height={300}
            objectFit="cover"
            priority
          />
          <h2>Project Tile goes here</h2>
          <p>
            This is sample project description random things are here in
            description. This is a sample project lorem ipsum generator for
            dummy content.
          </p>
          <p>Tech stack: HTML, JavaScript, SASS, React</p>
          <div className="project-link">
            <div className="project-link-row">
              <Image
                src="/assets/akar-icons_link-chain.png"
                alt="Link icon"
                width={20}
                height={20}
              />
              <a href="#">Live preview</a>
            </div>
            <div className="project-link-row">
              <Image
                src="/assets/akar-icons_link-chain.png"
                alt="Link icon"
                width={20}
                height={20}
              />
              <a href="#">View Code</a>
            </div>
          </div>
        </div>
      </div>

      <div className="model-row">
        <div className="model">
          <Image
            src="/assets/Rectangle 12.png"
            alt="Project 4" 
            width={400}
            height={300}
            objectFit="cover"
            priority
          />
          <h2>Project Tile goes here</h2>
          <p>
            This is sample project description random things are here in
            description. This is a sample project lorem ipsum generator for
            dummy content.
          </p>
          <p>Tech stack: HTML, JavaScript, SASS, React</p>
          <div className="project-link">
            <div className="project-link-row">
              <Image
                src="/assets/akar-icons_link-chain.png"
                alt="Link icon"
                width={20}
                height={20}
              />
              <a href="#">Live preview</a>
            </div>
            <div className="project-link-row">
              <Image
                src="/assets/akar-icons_link-chain.png"
                alt="Link icon"
                width={20}
                height={20}
              />
              <a href="#">View Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
