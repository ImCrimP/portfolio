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
              >
                <img src={linkedInLogo} className="linked-in" alt="linkedIn" />
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
