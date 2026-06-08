import { useState } from "react";
import supabase from "../lib/supabase";
import useInView from "../hooks/useInView";

function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase.from("contacts").insert([form]);

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`fade-up ${inView ? "is-visible" : ""} py-[120px]`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm text-[#2563EB] font-medium uppercase tracking-widest mb-4">
            Contact
          </p>
          <h2 className="text-[36px] font-semibold text-[#18181B] dark:text-[#FAFAFA] leading-[1.1] mb-6">
            Let&apos;s work together.
          </h2>
          <p className="text-lg text-[#71717A] dark:text-[#A1A1AA] leading-[1.7] mb-12">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind, a question, or just want to say hi, my inbox is
            always open.
          </p>

          {/* Social Links */}
          <div className="flex flex-col gap-4 mb-12">
            <a
              href="mailto:myabdi4@gmail.com"
              className="flex items-center gap-3 text-[#18181B] dark:text-[#FAFAFA] hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors group"
            >
              <span className="w-10 h-10 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-sm group-hover:border-[#2563EB] transition-colors">
                ✉
              </span>
              <span className="text-sm">myabdi4@gmail.com</span>
            </a>
            <a
              href="https://github.com/myabdi4"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[#18181B] dark:text-[#FAFAFA] hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors group"
            >
              <span className="w-10 h-10 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-sm group-hover:border-[#2563EB] transition-colors">
                GH
              </span>
              <span className="text-sm">github.com/myabdi4</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abdirahman-abdirizak-nur-009706116/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[#18181B] dark:text-[#FAFAFA] hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors group"
            >
              <span className="w-10 h-10 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-sm group-hover:border-[#2563EB] transition-colors">
                in
              </span>
              <span className="text-sm">Abdirahman Abdirizak Nur</span>
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#18181B] dark:text-[#FAFAFA]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="px-4 py-3 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] text-sm text-[#18181B] dark:text-[#FAFAFA] placeholder-[#A1A1AA] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#18181B] dark:text-[#FAFAFA]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="px-4 py-3 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] text-sm text-[#18181B] dark:text-[#FAFAFA] placeholder-[#A1A1AA] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#18181B] dark:text-[#FAFAFA]">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="px-4 py-3 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] text-sm text-[#18181B] dark:text-[#FAFAFA] placeholder-[#A1A1AA] focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-fit px-6 py-3 bg-[#2563EB] text-white text-sm font-medium rounded-xl hover:bg-[#1D4ED8] transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-[#16A34A]">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-[#DC2626]">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
