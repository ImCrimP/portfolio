import uww from "../../assets/uww.png";
import "../../sass/About.scss";
export default function About() {
  return (
    <div id="about">
      <h1>About Me</h1>
      <p className="about-text">
        I am a front-end developer with a passion for creating beautiful and
        functional websites. I have experience with HTML, CSS, JavaScript,
        React, and SASS.
      </p>
      <h2>Education</h2>
      <img id="uww" src={uww} alt="UW-Whitewater" />
    </div>
  );
}
