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
      <h1 className="projects-header">Projects</h1>
      <div className="projects">
        <div className="project-single">
          <img className="project-screenshot" src={weatherSS} alt="" />
          <div className="project-text">
            <h2 className="project-title">Weather App</h2>
            <p className="project-desc">
              This weather application allows the user to get real-time weather
              data from any location, including hourly and a 2-day forecasts.
            </p>
            <div className="links-skills">
              <div className="project-left">
                <p className="project-skills">Vanilla JavaScript</p>

                <a
                  className="project-code"
                  href="https://github.com/PeterMountin/weather-app"
                  target="_blank"
                >
                  <p>GitHub</p>
                  <img src={githubLogo} alt="github" />
                </a>
              </div>
              <div className="project-right">
                <p className="project-skills">Vanilla CSS</p>
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
        </div>

        <div className="project-single">
          <img className="project-screenshot" src={cvSS} alt="" />

          <div className="project-text">
            <h2 className="project-title">CV App</h2>
            <p className="project-desc">
              This app allows the user to create and edit their CV. This
              includes personal details, education, and experience. Upon saving,
              the CV can be viewed with the updated information.
            </p>
            <div className="links-skills">
              <div className="project-left">
                <p className="project-skills">ReactJS</p>

                <a
                  className="project-code"
                  href="https://github.com/PeterMountin/cv-app"
                  target="_blank"
                >
                  <p>GitHub</p>
                  <img src={githubLogo} alt="github" />
                </a>
              </div>
              <div className="project-right">
                <p className="project-skills">Vanilla CSS</p>
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
        </div>

        <div className="project-single">
          <img className="project-screenshot" src={memorySS} alt="" />

          <div className="project-text">
            <h2 className="project-title">Memory Game</h2>
            <p className="project-desc">
              This game gives the user a chance to test their memory. With a fun
              interactive challenge, the user will select a card then they will
              shuffle, using a card flipping animation. The goal is for the user
              to select all of the cards without repeating a selection. With
              this game, the player can strive for new high scores.
            </p>
            <div className="links-skills">
              <div className="project-left">
                <p className="project-skills">ReactJS</p>

                <a
                  className="project-code"
                  href="https://github.com/PeterMountin/memory-game"
                  target="_blank"
                >
                  <p>GitHub</p>
                  <img src={githubLogo} alt="github" />
                </a>
              </div>
              <div className="project-right">
                <p className="project-skills">Vanilla CSS</p>
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
        </div>

        <div className="project-single">
          <img className="project-screenshot" src={retailSS} alt="" />

          <div className="project-text">
            <h2 className="project-title">Retail Junction</h2>
            <p className="project-desc">
              This online store gives users a wide variety of products ranging
              from clothing, jewelery, and even electronics. The user can add
              items to their cart with the quantity they want. This online store
              gives a great user experience with an easy to use interface that
              works well on desktop and mobile.
            </p>
            <div className="links-skills">
              <div className="project-left">
                <p className="project-skills">ReactJS</p>

                <a
                  className="project-code"
                  href="https://github.com/PeterMountin/retail-junction"
                  target="_blank"
                >
                  <p>GitHub</p>
                  <img src={githubLogo} alt="github" />
                </a>
              </div>
              <div className="project-right">
                <p className="project-skills">SCSS</p>
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
    </div>
  );
}
