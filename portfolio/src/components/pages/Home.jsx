import htmlLogo from "../../assets/html.svg";
import jsLogo from "../../assets/js.svg";
import cssLogo from "../../assets/css.svg";
import reactLogo from "../../assets/react.svg";
import sassLogo from "../../assets/sass.svg";
export default function Home() {
  return (
    <>
      {" "}
      <h2>Home</h2>
      <img src="" alt="Peter Mountin" />
      <p>
        Hello! My name is Peter Mountin. I am a front end developer based in
        Juneau, WI.
      </p>
      <p>
        Skills:
        <img src={htmlLogo} alt="HTML" />
        <img src={cssLogo} alt="CSS" />
        <img src={jsLogo} alt="Javascript" />
        <img src={reactLogo} alt="React" />
        <img src={sassLogo} alt="Sass" />
      </p>
    </>
  );
}
