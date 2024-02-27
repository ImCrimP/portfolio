import htmlLogo from "../../assets/html.svg";
import jsLogo from "../../assets/js.svg";
import cssLogo from "../../assets/css.svg";
import reactLogo from "../../assets/react.svg";
import sassLogo from "../../assets/sass.svg";
import profilePic from "../../assets/profilePic.jpeg";
import "../../sass/Home.scss";
export default function Home() {
  return (
    <div id="home" className="home">
      {" "}
      <div className="profile-pic-container">
        <img className="profile-pic" src={profilePic} alt="Peter Mountin" />
      </div>
      <p className="home-label">Front-End Developer</p>
      <p className="home-text">
        Hello! My name is Peter Mountin from Juneau, WI.
      </p>
      <p className="skills">
        <p id="skills-text">Skills</p>
        <img src={htmlLogo} alt="HTML" />
        <img src={cssLogo} alt="CSS" />
        <img src={jsLogo} alt="Javascript" />
        <img src={reactLogo} alt="React" />
        <img src={sassLogo} alt="Sass" />
      </p>
    </div>
  );
}
