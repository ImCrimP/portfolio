import htmlLogo from "../../assets/html.svg";
import jsLogo from "../../assets/js.svg";
import cssLogo from "../../assets/css.svg";
import reactLogo from "../../assets/react.svg";
import sassLogo from "../../assets/sass.svg";
import profilePic from "../../assets/profilePic.jpeg";
import headShot from "../../assets/headShot.png";

import "../../sass/Home.scss";
export default function Home() {
  return (
    <div id="home" className="home">
      {" "}
      <div className="pic-with-text">
        <p className="home-text">
          Hello! My name is Peter Mountin based in Wisconsin.
        </p>
        <div className="profile-right">
          <div className="profile-pic-container">
            <img className="profile-pic" src={headShot} alt="Peter Mountin" />
          </div>
        </div>
      </div>
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
