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
      <section className="HomePage parallax" id="Home">
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
          <img src="/portfolio/avatar.png" alt="Anderson"></img>
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
            to design accesible, maintainable, and efficient code is what drives
            to continuously learn about new technologies.
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-mail h-full w-full text-neutral-500 dark:text-neutral-300"
            >
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
              <path d="M3 7l9 6l9 -6"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/andersonto26/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-brand-linkedin h-full w-full text-neutral-500 dark:text-neutral-300"
            >
              <path d="M8 11v5"></path>
              <path d="M8 8v.01"></path>
              <path d="M12 16v-5"></path>
              <path d="M16 16v-3a2 2 0 1 0 -4 0"></path>
              <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
            </svg>
          </a>
          <a href="https://github.com/Toes165" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-brand-github h-full w-full text-neutral-500 dark:text-neutral-300"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </a>
        </div>
      </section>
      <section className="ProjectsPage" id="Projects">
        <div className="card">
          <img src="/portfolio/ayo.jpg" alt="Project img"></img>
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
        <div className="card">
          <img src="/portfolio/ayo.jpg" alt="Project Image"></img>
          <div className="card-box">
            <h1>Climate Change Analysis</h1>
            <div className="proj-desc">
              <p>
                I collaborated with a teammate to build the Climate Change Data
                Analysis Tool, a C++ program designed to process and analyze
                NASA climate datasets. The tool extracts key insights from
                temperature and greenhouse gas concentration data, providing
                visual comparisons using Gnuplot.
              </p>
            </div>
            <button>
              <a
                href="https://github.com/Toes165/Climate-Change-Analysis-Project"
                target="_blank"
              >
                GitHub
              </a>
            </button>
            <button>Demo</button>
          </div>
        </div>
        <div className="card">
          <img src="/portfolio/ayo.jpg" alt="Project Image"></img>
          <div className="card-box">
            <h1>Coming Soon...</h1>
            <button>GitHub</button>
            <button>Demo</button>
          </div>
        </div>
      </section>
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
