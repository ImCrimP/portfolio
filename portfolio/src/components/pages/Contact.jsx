import linkedInLogo from "../../assets/linkedin.svg";
import phoneIcon from "../../assets/phoneIcon.svg";
import email from "../../assets/email.svg";
import "../../sass/Contact.scss";
import { useState } from "react";
export default function Contact() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzbbgqyqaV0hgiQG_1zbwa5Ci3hZQnNMjMRRn_GMQsVXey-4bUlZ-mvkhMM-h4nXvhZ/exec";

  const [submitting, setSubmitting] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [isHoveredLinkedin, setIsHoveredLinkedin] = useState(false);
  const [isHoveredEmail, setisHoveredEmail] = useState(false);
  const [isHoveredPhone, setisHoveredPhone] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    if (formDisabled) {
      return;
    }
    setSubmitting(true);
    setFormDisabled(true);
    const formData = new FormData(event.target);
    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully!");
          // Reset form fields if submission is successful
          event.target.reset();
          setSubmit(true);
        } else {
          console.error("Form submission failed:", response.statusText);
        }
      })
      .catch((error) => console.error("Error!", error.message))
      .finally(() => {
        setSubmitting(false);
        setFormDisabled(false);
      });
  }

  return (
    <div id="contact">
      <div className="contact-container">
        <div className="row">
          <div className="contact-left">
            <h1 className="contact-header">Contact Me</h1>
            <div id="linkedin-container">
              <a
                id="linkedin-link"
                className="contact-text-link"
                href="https://www.linkedin.com/in/peter-mountin-30a611232/"
                target="_blank"
                onMouseEnter={() => setIsHoveredLinkedin(true)} // Set hovered state to true on mouse enter
                onMouseLeave={() => setIsHoveredLinkedin(false)} // Set hovered state to false on mouse leave
              >
                <LinkedInIcon
                  className="linked-in"
                  fill={isHoveredLinkedin ? "white" : "#3864b6"}
                />
                <p className="contact-text linked-txt">LinkedIn</p>
              </a>
            </div>
            <div className="email-container">
              <a
                id="email-link"
                className="contact-text-link"
                href="mailto:peter@mountin.us"
                target="_blank"
                onMouseEnter={() => setisHoveredEmail(true)} // Set hovered state to true on mouse enter
                onMouseLeave={() => setisHoveredEmail(false)}
              >
                <EmailIcon
                  className="email"
                  fill={isHoveredEmail ? "white" : "#3864b6"}
                />
                <p className="contact-text email email-txt">peter@mountin.us</p>
              </a>
            </div>

            <div>
              <a
                id="phone-link"
                className="contact-text-link"
                href="tel:9203821625"
                target="_blank"
                onMouseEnter={() => setisHoveredPhone(true)} // Set hovered state to true on mouse enter
                onMouseLeave={() => setisHoveredPhone(false)}
              >
                <PhoneIcon
                  className="phone"
                  fill={isHoveredPhone ? "white" : "#3864b6"}
                />
                <p className="contact-text phone phone-txt">(920)382-1625</p>
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form
              name="submit-to-google-sheet"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <div id="submit-container">
                <button id="submit" type="submit">
                  {submitting ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>

                {submit && (
                  <p className="submit-success">Thank you for reaching out!</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkedInIcon({ fill }) {
  return (
    <svg
      className="linked-in"
      width="40px"
      height="40px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      style={{ transition: "fill 0.3s ease-in-out" }}
    >
      <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
    </svg>
  );
}

function EmailIcon({ fill }) {
  return (
    <svg
      className="email-icon"
      width="30px"
      height="30px"
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      style={{ transition: "fill 0.3s ease-in-out" }}
    >
      <path
        d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

function PhoneIcon({ fill }) {
  return (
    <svg
      className="phone-icon"
      fill={fill}
      width="35px"
      height="35px"
      viewBox="-32 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transition: "fill 0.3s ease-in-out" }}
    >
      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z" />
    </svg>
  );
}
