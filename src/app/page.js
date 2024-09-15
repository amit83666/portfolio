import Image from "next/image";
import styles from "./page.css";
import Tech from "../../components/Tech";
import Projects from "../../components/Projects";

export default function Home() {
  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          Hi👋,
          <br />
          My name is <br />
          <span className="amit-kumar">Amit kumar</span>
          <br />
          I build things for web <br />
        </div>
        <div className="banner-pic">
          <Image
            src="/assets/amit-img1.png"
            alt="Amit Kumar"
            width={349}
            height={320}
            border-radius={230}
            priority
          />
        </div>
      </div>

      <div className="title">
        <h2>My Tech Stack</h2>
        <p>Technologies I’ve been working with recently</p>
      </div>

      <Tech />
      <div className="title">
        <h2>Projects</h2>
        <p>Things I’ve built so far</p>
      </div>
      <Projects />
    </div>
  );
}
