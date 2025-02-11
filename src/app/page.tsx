"use client";

import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <Link href={"#Home"} className="links">
          Home
        </Link>
        <Link href={"#About"} className="links">
          About
        </Link>
        <Link href={"#Projects"} className="links">
          Projects
        </Link>
        <Link href={"#Contact"} className="links">
          Contact
        </Link>
      </nav>

      {/* Use images directly from the public directory */}
      <section
        className="HomePage parallax"
        id="Home"
        style={{ backgroundImage: `url('/HomeImage.JPG')` }} // Just use the relative path
      >
        <div className="Intro">
          <h1>Hello!</h1>
          <h1>Welcome</h1>
          <h1>to</h1>
          <h1>my</h1>
          <h1>Portfolio!</h1>
        </div>
      </section>

      <section className="AboutPage" id="About">
        <div className="about-img">
          <img src="/avatar.png" alt="Anderson" />
        </div>

        <div className="AboutMe">
          <h3>Hello,</h3>
          <p>My name is Anderson!</p>
          <p>
            I am an undergraduate Computer Science student at Bellevue College.
            As a first-generation student, I aspire to break into the tech
            industry, leveraging my diverse background to develop innovative and
            impactful solutions.
          </p>
          <p>
            My interests span a variety of fields such as full-stack
            development, artificial intelligence, and data science. My passion
            to design accessible, maintainable, and efficient code is what
            drives me to continuously learn about new technologies.
          </p>
          <p>
            With experience in front-end development and data analysis, I am
            proficient in Java, Python, C/C++, JavaScript, TypeScript, and
            frameworks like React and Next.js.
          </p>
          <p>
            Beyond academics, I enjoy listening to music, gaming, photography,
            exercising, and exploring new restaurants.
          </p>
          <p>
            I&apos;m always open to questions and conversations—feel free to
            reach out!
          </p>
        </div>

        <div className="about-buttons">
          <a href="mailto:anderson165968@gmail.com" target="_blank">
            {/* Icon */}
          </a>
          <a href="https://www.linkedin.com/in/andersonto26/" target="_blank">
            {/* Icon */}
          </a>
          <a href="https://github.com/Toes165" target="_blank">
            {/* Icon */}
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="ProjectsPage" id="Projects">
        <div className="card">
          <img src="/ayo.jpg" alt="Project img" />
          <div className="card-box">
            <h1>Beezy</h1>
            <div className="proj-desc">
              <p>
                As a front-end developer on a team of six, I played a key role
                in building Local Freelance Connect, a platform designed to
                connect freelancers with clients in their local communities. I
                developed responsive and user-friendly interfaces using Next.js
                and TypeScript, ensuring a smooth and engaging user experience.
              </p>
            </div>
            <button>
              <a
                href="https://github.com/jkum1/reabbit/tree/Anderson's-Branch"
                target="_blank"
              >
                GitHub
              </a>
            </button>
            <button>
              <a
                href="https://www.figma.com/proto/ruIdCdrtBbRgCeoaW1Pmaf/BEEZY-Wireframe?node-id=5-4&p=f&t=yBKlN90HRaJs7NpX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2"
                target="_blank"
              >
                Demo
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="ContactPage" id="Contact">
        <div className="Contact">
          <h2>Contact Me</h2>
          <form action="">
            <input type="text" placeholder="Name" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <textarea placeholder="Message" className="Message"></textarea>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>

      <footer>
        <p>Copyright &#169; 2025 Anderson To. All Rights Reserved.</p>
      </footer>
    </>
  );
}
