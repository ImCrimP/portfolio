import linkedInLogo from "../../assets/linkedin.svg";
import phoneIcon from "../../assets/phoneIcon.svg";
import email from "../../assets/email.svg";
export default function Contact() {
  return (
    <div id="contact">
      <div className="contact-container">
        <div className="row">
          <div className="contact-left">
            <h1 className="contact-header">Contact Me</h1>
            <p className="contact-text email">
              <img src={email} alt="email" />
              pjmountin@me.com
            </p>
            <p className="contact-text phone">
              <img src={phoneIcon} alt="phone" />
              (920)382-1625
            </p>
            <a
              href="https://www.linkedin.com/in/peter-mountin-30a611232/"
              target="_blank"
            >
              <img src={linkedInLogo} className="linked-in" alt="linkedIn" />
            </a>
          </div>
          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
