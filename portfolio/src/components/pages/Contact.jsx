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
  const [isHovered, setIsHovered] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
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
      .finally(() => setSubmitting(false)); // Set submitting state to false when the submission process is completed
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
                className="contact-text"
                href="https://www.linkedin.com/in/peter-mountin-30a611232/"
                target="_blank"
                onMouseEnter={() => setIsHovered(true)} // Set hovered state to true on mouse enter
                onMouseLeave={() => setIsHovered(false)} // Set hovered state to false on mouse leave
              >
                <LinkedInIcon
                  className="linked-in"
                  fill={isHovered ? "white" : "#3864b6"}
                />
                <p className="contact-text linked-txt">LinkedIn</p>
              </a>
            </div>
            <p className="contact-text email">
              <img src={email} alt="email" />
              peter@mountin.us
            </p>
            <p className="contact-text phone">
              <img className="phone" src={phoneIcon} alt="phone" />
              (920)382-1625
            </p>
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
      style={{ transition: "fill 0.3s ease" }}
    >
      <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
    </svg>
  );
}
