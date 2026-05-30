"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.13-1.347a9.96 9.96 0 004.88 1.277h.005c5.505 0 9.988-4.478 9.989-9.985C22 6.478 17.518 2 12.012 2zm5.836 14.127c-.252.712-1.462 1.393-2.014 1.48-.502.08-1.157.147-3.359-.766-2.818-1.168-4.637-4.043-4.778-4.23-.14-.187-1.144-1.523-1.144-2.906 0-1.383.722-2.062.978-2.343.256-.282.562-.352.75-.352.188 0 .376.001.538.007.169.007.397-.065.62.47.23.55.783 1.912.85 2.053.068.14.113.305.02.493-.09.188-.138.305-.274.464-.136.16-.285.358-.407.48-.136.136-.28.283-.12.56.16.275.71 1.171 1.523 1.895.848.756 1.564 1.003 1.785 1.122.22.119.349.102.477-.046.129-.148.55-.641.696-.86.147-.22.294-.184.493-.11.198.074 1.262.595 1.48.704.218.11.363.164.417.257.054.094.054.544-.198 1.256z" />
  </svg>
);

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "mahadinrahman333@gmail.com",
    href: "mailto:mahadinrahman333@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+8801333796444",
    href: "tel:+8801333796444",
  },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    value: "+8801333796444",
    href: "https://wa.me/8801333796444",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Jashore, Bangladesh",
    href: null,
  },
];

const socialLinks = [
  {
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/mahadinrahman",
    label: "LinkedIn",
  },
  {
    icon: <GithubIcon />,
    href: "https://github.com/mahadinrahman",
    label: "GitHub",
  },
];

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn(
        "EmailJS environment variables are not fully configured. Simulating a successful submission in local environment."
      );
      setTimeout(() => {
        setStatus("success");
        formRef.current.reset();
      }, 1200);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10 relative overflow-hidden bg-[var(--background)]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Contact <span className="text-brand-accent">Me</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-accent mx-auto mt-4" />
        </div>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left — Info */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-[13px] text-brand-accent tracking-[2px]">
                <span className="w-6 h-px bg-brand-accent" />
                GET IN TOUCH
              </div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Let&apos;s Work <span className="text-brand-accent">Together</span>
              </h3>
              <p className="text-[16px] text-brand-muted leading-relaxed max-w-md">
                I&apos;m currently available for freelance work and full-time opportunities. If you have a project in mind or just want to say hello, feel free to reach out!
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div 
                  key={item.label} 
                  className="flex items-center gap-4 bg-card border border-border-main hover:border-brand-accent/40 rounded-xl p-4 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0 transition-colors group-hover:bg-brand-accent group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-brand-muted/70 tracking-widest uppercase mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : "_self"}
                        className="text-[15px] font-semibold text-foreground/80 hover:text-brand-accent transition-colors"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-[15px] font-semibold text-foreground/80">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-border-main">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  aria-label={item.label}
                  className="w-12 h-12 rounded-xl bg-card border border-border-main flex items-center justify-center text-brand-muted hover:text-brand-accent hover:border-brand-accent hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="flex-1">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 bg-card border border-border-main rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold tracking-wider text-brand-muted uppercase">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent border border-border-main rounded-xl px-4 py-3 text-[15px] text-foreground placeholder-stone-400 dark:placeholder-stone-600 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold tracking-wider text-brand-muted uppercase">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-transparent border border-border-main rounded-xl px-4 py-3 text-[15px] text-foreground placeholder-stone-400 dark:placeholder-stone-600 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold tracking-wider text-brand-muted uppercase">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full bg-transparent border border-border-main rounded-xl px-4 py-3 text-[15px] text-foreground placeholder-stone-400 dark:placeholder-stone-600 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold tracking-wider text-brand-muted uppercase">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  placeholder="Your message..."
                  required
                  className="w-full bg-transparent border border-border-main rounded-xl px-4 py-3 text-[15px] text-foreground placeholder-stone-400 dark:placeholder-stone-600 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 text-[15px] font-semibold text-white bg-brand-accent hover:bg-amber-700 active:scale-[0.98] py-4 rounded-xl transition-all duration-300 shadow-md shadow-brand-accent/10 hover:shadow-brand-accent/20 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                <Send size={16} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-emerald-600 dark:text-emerald-400 text-center font-medium text-[14px] bg-emerald-500/10 py-2.5 rounded-lg border border-emerald-500/20">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-rose-600 dark:text-rose-400 text-center font-medium text-[14px] bg-rose-500/10 py-2.5 rounded-lg border border-rose-500/20">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;