import uww from "../../assets/uww.png";
import family from "../../assets/family.png";
import "../../sass/About.scss";
export default function About() {
  return (
    <div id="about">
      <h1 className="about-header">About Me</h1>
      <div className="about-image-text">
        <img id="family" src={family} alt="Peter Mountin" />
        <p className="about-text">
          I am a front-end developer with a passion for creating beautiful and
          functional websites. I have experience with HTML, CSS, JavaScript,
          React, and SCSS.
        </p>
      </div>

      <h2 className="education-header">Education</h2>

      <div className="education-container">
        <img id="uww" src={uww} alt="UW-Whitewater" />
        <div className="education-txt-container">
          <p className="education-text">University of Wisconsin - Whitewater</p>
          <span className="education-text">BBA - General Business</span>
          <span className="education-text">GPA - 3.872</span>
        </div>
      </div>
    </div>
  );
}
