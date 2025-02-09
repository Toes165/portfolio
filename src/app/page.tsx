import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <Link href={"#Home"} className="links">
          Home
        </Link>
        <Link href={"#Projects"} className="links">
          Projects
        </Link>
        <Link href={"#About"} className="links">
          About
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
      <section className="ProjectsPage" id="Projects">
        <div className="card">
          <img src="ayo.jpg" alt="Project Image" />
          <h1>Project 1</h1>
          <div className="project-btn">
            <button>GitHub</button>
            <button>Demo</button>
          </div>
        </div>
        <div className="card">
          <img src="ayo.jpg" alt="Project Image" />
          <h1>Project 2</h1>
          <div className="project-btn">
            <button>GitHub</button>
            <button>Demo</button>
          </div>
        </div>
        <div className="card">
          <img src="ayo.jpg" alt="Project Image" />
          <h1>Project 3</h1>
          <div className="project-btn">
            <button>GitHub</button>
            <button>Demo</button>
          </div>
        </div>
        <div className="card">
          <img src="ayo.jpg" alt="Project Image" />
          <h1>Project 4</h1>
          <div className="project-btn">
            <button>GitHub</button>
            <button>Demo</button>
          </div>
        </div>
      </section>
      <section className="AboutPage" id="About">
        <div className="about-img">
          <img src="/goofy.png" alt="Anderson" />
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
            My interests span full-stack development, artificial intelligence,
            and software engineering. My passion for software engineering drives
            me to design accesible, maintainable, and efficient code while
            continuously learning about new technologies.
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
            I'm always open to questions and conversations—feel free to reach
            out!
          </p>
        </div>
        <div className="about-buttons">
          <button>Email</button>
          <button>LinkedIn</button>
          <button>GitHub</button>
        </div>
      </section>
      <section className="ContactPage" id="Contact">
        <div className="Contact">
          <form action="">
            <input type="text" placeholder="Name" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <input type="text" placeholder="Message" />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </>
  );
}
