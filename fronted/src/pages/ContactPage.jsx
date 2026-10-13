function ContactPage() {
  return (
    <section className="page-section contact-section" id="contact">
      <p className="eyebrow">GET IN TOUCH</p>
      <h2>Let’s work together.</h2>
      <p className="section-intro">
        Have a question or want to work together? Send me an email.
      </p>
      <a className="contact-email" href="mailto:dhunganarupendra69@gmail.com">
        dhunganarupendra69@gmail.com <span aria-hidden="true">↗</span>
      </a>
      <div className="contact-socials" aria-label="Social profiles">
        <a
          className="button button-secondary"
          href="https://github.com/Rupendra0777"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a
          className="button button-secondary"
          href="https://www.linkedin.com/in/rupendradhungana"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a
          className="button button-secondary"
          href="https://www.youtube.com/@rdchannel0777"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export default ContactPage;
