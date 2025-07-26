import { useState } from "react";

const ContactUsCard = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="w-full max-w-xl mx-auto my-6 sm:my-12 p-4 sm:p-8 bg-white rounded-2xl shadow-2xl flex flex-col items-center animate-fadeInUp">
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-4 animate-fadeIn text-center">Contact Us</h2>
      <p className="text-gray-700 text-base sm:text-lg mb-6 text-center animate-fadeInUp">
        We'd love to hear from you! Fill out the form below and we'll get back to you soon.
      </p>
      <form className="w-full flex flex-col gap-4 sm:gap-6 animate-fadeInUp" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="border border-indigo-300 rounded-lg px-3 py-2 text-base sm:text-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-300"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="border border-indigo-300 rounded-lg px-3 py-2 text-base sm:text-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-300"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={4}
          className="border border-indigo-300 rounded-lg px-3 py-2 text-base sm:text-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-300"
        />
        <button
          type="submit"
          className="btn bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-bold px-4 sm:px-6 py-2 rounded-lg shadow-lg hover:from-blue-400 hover:to-indigo-500 transition duration-300 animate-bounce"
        >
          Send Message
        </button>
      </form>
      {submitted && (
        <div className="mt-6 text-green-500 font-semibold animate-fadeInUp animate-pulse">
          Thank you for contacting us!
        </div>
      )}
    </section>
  );
};

export default ContactUsCard;
