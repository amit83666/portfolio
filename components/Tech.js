import React from "react";
import Image from "next/image";
import './Tech.css';

const Tech = () => {
  return (
    <div className="tech-box">
      <div className="row">
        <Image
          src="/assets/vscode-icons_file-type-html.png"
          alt="HTML Icon"
          width={100}  
          height={100} 
        />
        <Image
          src="/assets/vscode-icons_file-type-css.png"
          alt="CSS Icon"
          width={100}
          height={100} 
        />
        <Image
          src="/assets/vscode-icons_file-type-js-official.png"
          alt="JavaScript Icon"
          width={100}
          height={100}
        />
        <Image
          src="/assets/logos_react.png"
          alt="React Icon"
          width={100}
          height={100}
        />
        <Image
          src="/assets/Vector.png"
          alt="Vector Icon"
          width={100}
          height={100}
        />
        <Image
          src="/assets/logos_bootstrap.png"
          alt="Bootstrap Icon"
          width={100}
          height={100}
        />
      </div>

      <div className="row">
        <Image
          src="/assets/vscode-icons_file-type-tailwind.png"
          alt="Tailwind Icon"
          width={100}
          height={100}
        />
        <Image
          src="/assets/logos_sass.png"
          alt="Sass Icon"
          width={100}
          height={100}
        />
        <Image
          src="/assets/logos_git-icon.png"
          alt="Git Icon"
          width={100}
          height={100}
        />
        <Image
          src="/assets/cib_greensock.png"
          alt="Greensock Icon"
          width={100}
          height={100}
        />
        <Image
          src="/assets/vscode-icon.png"
          alt="VSCode Icon"
          width={100}
          height={100}
        />
        <Image
          src="/assets/git-hub-icon.png"
          alt="GitHub Icon"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Tech;
