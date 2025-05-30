import WhyCard from "../../components/why_card/WhyCard";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.text_form_wrapper}>
        <div className={styles.text_information}>
          <h1 className={styles.header}>Contact Us</h1>
          <p className={styles.header_paragraph}>
            Whether you’re looking to learn more about our services, need
            guidance on your child’s journey, or have suggestions to share, we’d
            love to hear from you!
          </p>
          <p className={styles.email}>info@bridgebrightcenter.com</p>
          <p className={styles.number}>+31 000 000 000</p>

          <div className={styles.support_feedback_container}>
            <div className={styles.container}>
              <h2 className={styles.support_feedback_header}>
                Customer Support
              </h2>
              <p className={styles.support_feedback_text}>
                Our dedicated customer support team is available to assist you
                with any inquiries or concerns. Whether you need help scheduling
                an appointment, learning more about our programs, or addressing
                a specific issue, we’re just a call or message away
              </p>
            </div>
            <div className={styles.container}>
              <h2 className={styles.support_feedback_header}>
                Feedback and Suggestions
              </h2>
              <p className={styles.support_feedback_text}>
                We value your input and believe that your feedback helps us
                improve our services. Whether you have a suggestion for a new
                program, feedback on our current offerings, or simply want to
                share your experience, we welcome your thoughts. Your voice
                matters to us!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.form_container}>
          <form className={styles.form}>
            <h2 className={styles.form_header}>Get in Touch</h2>
            <p className={styles.form_paragraph}>You can reach us anytime</p>
            <div className={styles.names_container}>
              <input type="text" name="" id="" placeholder="First Fame" />
              <input type="text" name="" id="" placeholder="Last Name" />
            </div>
            <input type="text" name="" id="" placeholder="Email Address" />
            <div className={styles.code_number_container}>
              <select name="" id="">
                <option value="">+31</option>
                <option value="">+31</option>
                <option value="">+31</option>
                <option value="">+31</option>
              </select>
              <input type="text" name="" id="" placeholder="Phone Number" />
            </div>
            <textarea
              name=""
              id=""
              placeholder="How can we help you"
            ></textarea>
            <button className={styles.submit_button}>submit</button>
            <p className={styles.subtext}>
              {" "}
              By contacting us you agree with{" "}
              <span className={styles.terms_privacy}>
                Terms of use
              </span> and{" "}
              <span className={styles.terms_privacy}>Privacy Policy</span>
            </p>
          </form>
        </div>
      </div>

      <section className={styles.location_faq_container}>
        <div className={styles.location_faq_wrapper}>
          <div className={styles.location}>
            <p className={styles.location_header}>Our Location</p>
            <h2 className={styles.location_header2}>Connect Near and Far</h2>
            <div className={styles.map_container}>
              <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.09923832903!2d4.763386815992099!3d52.3545827915705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c61c8fd75cbefb%3A0xbf07a9e582e6a2df!2sStationstraat%2071%2C%201506%20DE%2C%20Zaandam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1717042257647"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className={styles.faq}>
            <p className={styles.faq_header}>Faqs</p>
            <h2 className={styles.faq_header2}>
              We Are Happy to anwer all your questions.
            </h2>
            <div className={styles.faq_container}>
              <WhyCard />
              <WhyCard />
              <WhyCard />
              <WhyCard />
              <WhyCard />
              <WhyCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
