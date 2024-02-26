import weatherSS from "../../assets/weatherappScreenshot.png";
import cvSS from "../../assets/CVScreenshot.png";
import memorySS from "../../assets/MemoryScreenshot.png";
import retailSS from "../../assets/retailjunctionScreenshot.png";
import "../../sass/Projects.scss";
import githubLogo from "../../assets/github.svg";
import demoLogo from "../../assets/demo.svg";
export default function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="projects">
        <div className="project-single">
          <img className="project-screenshot" src={weatherSS} alt="" />
          <div className="project-desc">
            <h2>Weather App</h2>
            <p>This is a weather app uses the WeatherAPI and vanilla JS</p>
            <div className="links">
              <a
                className="project-code"
                href="https://github.com/PeterMountin/weather-app"
                target="_blank"
              >
                <p>GitHub</p>
                <img src={githubLogo} alt="github" />
              </a>
              <a
                className="project-demo"
                href="https://petermountin-weatherapp.netlify.app/"
                target="_blank"
              >
                <p>Demo</p>
                <img src={demoLogo} alt="demo" />
              </a>
            </div>
          </div>
        </div>

        <div className="project-single">
          <img className="project-screenshot" src={cvSS} alt="" />
          <div className="project-desc">
            <h2>CV App</h2>
            <p>React JS</p>
            <div className="links">
              <a
                className="project-code"
                href="https://github.com/PeterMountin/cv-app"
                target="_blank"
              >
                <p>GitHub</p>
                <img src={githubLogo} alt="github" />
              </a>
              <a
                className="project-demo"
                href="https://petermountin-cvapp.netlify.app/"
                target="_blank"
              >
                <p>Demo</p>
                <img src={demoLogo} alt="demo" />
              </a>
            </div>
          </div>
        </div>

        <div className="project-single">
          <img className="project-screenshot" src={memorySS} alt="" />
          <div className="project-desc">
            <h2>Memory Game</h2>
            <p>React JS</p>
            <div className="links">
              <a
                className="project-code"
                href="https://github.com/PeterMountin/memory-game"
                target="_blank"
              >
                <p>GitHub</p>
                <img src={githubLogo} alt="github" />
              </a>
              <a
                className="project-demo"
                href="https://petermountin-memorygame.netlify.app/"
                target="_blank"
              >
                <p>Demo</p>
                <img src={demoLogo} alt="demo" />
              </a>
            </div>
          </div>
        </div>

        <div className="project-single">
          <img className="project-screenshot" src={retailSS} alt="" />
          <div className="project-desc">
            <h2>Shopping Cart Project</h2>
            <p>React JS</p>
            <div className="links">
              <a
                className="project-code"
                href="https://github.com/PeterMountin/retail-junction"
                target="_blank"
              >
                <p>GitHub</p>
                <img src={githubLogo} alt="github" />
              </a>
              <a
                className="project-demo"
                href="https://petermountin-retailjunction.netlify.app/"
                target="_blank"
              >
                <p>Demo</p>
                <img src={demoLogo} alt="demo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}