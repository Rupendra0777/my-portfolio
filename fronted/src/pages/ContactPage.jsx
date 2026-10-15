import { useState } from "react";
// 1. Keep your toast imports intact
import toast, { Toaster } from 'react-hot-toast';

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // REMOVED: const [feedback, setFeedback] = useState(null); -> No longer needed!

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Could not send your message.");
      }

      // 2. Trigger success toast
      toast.success(result.message || "Message sent successfully! ", {
        position: 'top-center',
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      // 3. Trigger error toast
      const errorMessage =
        error instanceof TypeError
          ? "Could not reach the server. Check that the backend is running and try again."
          : error.message;

      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  return (
    <section className="page-section contact-section" id="contact">
      {/* 4. Render the Toaster component at the top of your JSX structure */}
      <Toaster position="top-right" reverseOrder={false} />
      <div className="contact-heading-group">
        <h3 className="contact-social-heading">Let’s get connected</h3>
        <h2>Let’s work together.</h2>
      </div>
      <p className="section-intro">
        Have a question or want to work together? Send me an email.
      </p>
      <a className="contact-email" href="mailto:dhunganarupendra69@gmail.com">
        dhunganarupendra69@gmail.com <span aria-hidden="true">↗</span>
      </a>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Name</label>
        <input
          autoComplete="name"
          id="contact-name"
          maxLength={80}
          name="name"
          onChange={handleChange}
          required
          value={form.name}
        />

        <label htmlFor="contact-email">Email</label>
        <input
          autoComplete="email"
          id="contact-email"
          maxLength={254}
          name="email"
          onChange={handleChange}
          required
          type="email"
          value={form.email}
        />

        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          maxLength={2000}
          name="message"
          onChange={handleChange}
          required
          rows={5}
          value={form.message}
        />

        <button className="button button-primary" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sending…" : "Send message"}
        </button>

        {/* REMOVED: Old feedback text paragraph block */}
      </form>

      {/* <div className="contact-socials" aria-label="Social profiles">
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
      </div> */}
    </section>
  );
}

export default ContactPage;
