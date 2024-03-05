import uww from "../../assets/uww.png";
import family from "../../assets/family.png";
import "../../sass/About.scss";
import harvarx from "../../assets/harvardx.png";
export default function About() {
  return (
    <div id="about">
      <h1 className="about-header">About Me</h1>
      <div className="about-image-text">
        <img id="family" src={family} alt="Peter Mountin" />
        <p className="about-text">
          Motivated, recent college graduate with a long history of customer
          service. Seeking employment in a software development position. Great
          work ethic, communication skills, and very outgoing. Extensive
          knowledge of Javascript, HTML, CSS, React, and SCSS. Quick study and
          excited to learn new things.
        </p>
      </div>

      <h2 className="education-header">Education & Certifications</h2>

      <div className="education-container">
        <img id="uww" src={uww} alt="UW-Whitewater" />
        <div className="education-txt-container">
          <h1 className="education-subheader">Education</h1>
          <span className="education-text">
            University of Wisconsin - Whitewater
          </span>
          <span className="education-text">BBA - General Business</span>
          <span className="education-text">GPA - 3.872</span>

          <h1 className="education-subheader">Certifaction</h1>
          <span className="education-text">
            HarvardX - Introduction to Data Science with Python - Certified
          </span>
        </div>
        <img className="harvardx" src={harvarx} alt="HarvardX" />
      </div>
    </div>
  );
}
