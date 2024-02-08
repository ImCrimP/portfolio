export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="projects">
        <a
          href="https://petermountin-weatherapp.netlify.app/"
          target="_blank"
          className="project-link"
        >
          <h2>Weather App</h2>
          <p>This is a weather app uses the WeatherAPI and vanilla JS</p>
        </a>

        <a
          href="https://petermountin-cvapp.netlify.app/"
          target="_blank"
          className="project-link"
        >
          <h2>CV App</h2>
          <p>React JS</p>
        </a>

        <a
          href="https://petermountin-memorygame.netlify.app/"
          target="_blank"
          className="project-link"
        >
          <h2>Memory Game</h2>
          <p>React JS</p>
        </a>

        <a
          href="https://petermountin-retailjunction.netlify.app/"
          target="_blank"
          className="project-link"
        >
          <h2>Shopping Cart Project</h2>
          <p>React JS</p>
        </a>
      </div>
    </>
  );
}
