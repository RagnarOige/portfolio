import { useState, type ChangeEvent, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setStatus("sent");
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact me!</h2>
      <p className="contact-blurb">
        If you want to know more about me or my work, or if you would just
        like to say hello, send me a message. I&rsquo;d love to hear from
        you.
      </p>

      <div className="contact-form-wrap">
        <div className="contact-email">
          <span className="mail-icon" aria-hidden="true">
            ✉️
          </span>
          <a href="mailto:ragnaroige@gmail.com">ragnaroige@gmail.com</a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span className="form-label">FULL NAME</span>
            <input
              type="text"
              name="name"
              placeholder="Joe Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-field">
            <span className="form-label">EMAIL</span>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-field">
            <span className="form-label">MESSAGE</span>
            <textarea
              name="message"
              placeholder="Hi..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="btn-primary">
            SEND
          </button>

          {status === "sent" && (
            <p className="form-status">Thanks — I&rsquo;ll be in touch!</p>
          )}
        </form>
      </div>
    </section>
  );
}